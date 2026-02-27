"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAME_COUNT = 145; // Based on available frames, adjustable later
const INITIAL_PRELOAD = 12;

export default function HeroSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    const imagesRef = useRef<HTMLImageElement[]>([]);
    const renderState = useRef({ frame: 0 });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        // Use current frames which are .jpg from 001 to 145.
        // Replace with WebP configuration when new extract-frames script is run.
        const currentFrame = (index: number) =>
            `/assets/hero-sequence/frame_${(index + 1).toString().padStart(3, "0")}.jpg`;

        const render = () => {
            const img = imagesRef.current[renderState.current.frame];
            if (img && img.complete) {
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                    img,
                    0,
                    0,
                    img.width,
                    img.height,
                    centerShift_x,
                    centerShift_y,
                    img.width * ratio,
                    img.height * ratio
                );
            }
        };

        const loadImages = async () => {
            // 1. Load initial set immediately
            for (let i = 0; i < INITIAL_PRELOAD; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                imagesRef.current.push(img);
                if (i === 0) {
                    img.onload = () => {
                        render();
                    };
                }
            }

            // 2. Background load the rest
            setTimeout(() => {
                for (let i = INITIAL_PRELOAD; i < FRAME_COUNT; i++) {
                    const img = new Image();
                    img.src = currentFrame(i);
                    imagesRef.current.push(img);
                }
            }, 500);
        };

        loadImages();

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1px)", () => {
            const st = ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=2000",
                pin: true,
                scrub: 0.5,
            });

            gsap.to(renderState.current, {
                frame: FRAME_COUNT - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000",
                    scrub: 0.5,
                },
                onUpdate: render,
            });

            gsap.to(textRef.current, {
                opacity: 0,
                y: -50,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=800",
                    scrub: 0.5,
                },
            });

            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                render();
            };

            handleResize();
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
                st.kill();
            };
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden relative">
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
                <h1
                    ref={textRef}
                    className="text-white text-5xl md:text-7xl lg:text-[5rem] font-bold text-center leading-tight tracking-tight drop-shadow-xl"
                >
                    Powering the Future,<br />Made in Pakistan.
                </h1>
            </div>
        </section>
    );
}

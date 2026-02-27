"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useGSAP(() => {
        const video = videoRef.current;
        if (!video) return;

        // We need to wait for video metadata to be loaded so we know the duration
        video.onloadedmetadata = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000",
                    scrub: 1, // Soft scrub
                    pin: true,
                },
            });

            // Scrub the video by updating currentTime
            tl.to(video, {
                currentTime: video.duration || 1, // Fallback to 1s if duration is NaN initially
                ease: "none",
            });

            // Also fade out the text overlay
            gsap.to(textRef.current, {
                opacity: 0,
                y: -100,
                scale: 0.9,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=800",
                    scrub: true,
                }
            });
        };

        // Fallback if metadata is already loaded (e.g. cached)
        if (video.readyState >= 1 && video.duration) {
            video.onloadedmetadata(new Event("loadedmetadata"));
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-slate-900 border-b border-slate-800 overflow-hidden">
            <video
                ref={videoRef}
                src="/assets/videos/hero.mp4"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                muted
                playsInline
                preload="auto"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none bg-slate-900/40">
                <h1 ref={textRef} className="text-5xl md:text-8xl font-bold text-center text-white drop-shadow-2xl max-w-5xl px-4 leading-tight">
                    Powering the Future,<br /> Made in <span className="text-sun-yellow">Pakistan.</span>
                </h1>
            </div>
        </section>
    );
}

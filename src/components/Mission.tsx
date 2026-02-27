"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
    const containerRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);
    const text3Ref = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=3000", // 3000px of scroll space for the pinning
                scrub: true,
                pin: true,
            }
        });

        // Animate texts to visible and then invisible sequentially
        tl.to(text1Ref.current, { opacity: 1, y: 0, duration: 1 })
            .to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")

            .to(text2Ref.current, { opacity: 1, y: 0, duration: 1 })
            .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")

            .to(text3Ref.current, { opacity: 1, y: 0, duration: 1 })
            .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-off-white text-foreground flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-5xl px-6 h-full flex items-center justify-center">
                <h2 ref={text1Ref} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 absolute w-full px-4 text-center opacity-0 translate-y-12">
                    We believe in <span className="text-sun-yellow">Energy Sovereignty.</span>
                </h2>
                <h2 ref={text2Ref} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 absolute w-full px-4 text-center opacity-0 translate-y-12">
                    Bridging the gap between <br />
                    global <span className="text-slate-500">innovation</span> and local <span className="text-slate-500">accessibility</span>.
                </h2>
                <h2 ref={text3Ref} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 absolute w-full px-4 text-center opacity-0 translate-y-12">
                    Reducing soft costs.<br />
                    <span className="text-sun-yellow">Eliminating shipping delays.</span>
                </h2>
            </div>
        </section>
    );
}

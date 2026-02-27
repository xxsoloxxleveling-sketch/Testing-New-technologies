"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AdvantageGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Fade in and scale up the bento cards
        gsap.fromTo(
            [card1Ref.current, card2Ref.current, card3Ref.current],
            { opacity: 0, scale: 0.9, y: 50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 lg:px-20 bg-off-white text-foreground">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight">
                    The <span className="text-sun-yellow">2026 Advantage.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Card 1: Spans 2 columns on desktop */}
                    <div ref={card1Ref} className="md:col-span-2 bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex items-center relative overflow-hidden group">
                        <div className="relative z-10 w-full md:w-2/3">
                            <h3 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">Climate-Optimized</h3>
                            <p className="text-slate-500 text-lg leading-relaxed">Engineered to withstand extreme temperature variations, sandstorms, and high UV indexes typical of local environments.</p>
                        </div>
                        {/* Subtle purely decorative shape */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sun-yellow/10 rounded-full blur-3xl group-hover:bg-sun-yellow/20 transition-all duration-700"></div>
                    </div>

                    {/* Card 2 */}
                    <div ref={card2Ref} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col justify-between overflow-hidden relative group">
                        <h3 className="text-3xl font-bold text-slate-800 tracking-tight relative z-10">Local Warranty & Support</h3>
                        <p className="text-slate-500 text-lg font-medium relative z-10">Same-day service guarantees.</p>
                        <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-700"></div>
                    </div>

                    {/* Card 3: Spans full width on desktop if desired, or 3 cols, let's keep it asymmetrical, span 3 cols on second row */}
                    <div ref={card3Ref} className="md:col-span-3 bg-slate-900 rounded-[2rem] p-10 shadow-2xl flex items-center justify-between text-white relative overflow-hidden border border-slate-800">
                        <div className="relative z-10 w-full md:w-1/2">
                            <h3 className="text-4xl font-bold mb-4 tracking-tight">Supply Chain <span className="text-sun-yellow">Stability</span></h3>
                            <p className="text-slate-300 text-lg leading-relaxed">By manufacturing locally, we eliminate international shipping delays, ensuring your EPC projects stay exactly on schedule.</p>
                        </div>
                        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-slate-800 to-transparent opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

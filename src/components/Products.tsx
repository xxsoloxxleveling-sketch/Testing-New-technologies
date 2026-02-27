"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Use a matchMedia if we only want this on desktop, but let's assume all screens for now
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Calculate how far to scroll to show everything
            const scrollAmount = slider.scrollWidth - window.innerWidth;

            gsap.to(slider, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${scrollAmount}`,
                    pin: true,
                    scrub: 1,
                }
            });
        });

        // Mobile fallback: Just a normal vertical scroll or simple snap
        mm.add("(max-width: 767px)", () => {
            // Disable horizontal scrolltrigger on small screens
            // It flows naturally vertically in the CSS
        });

        return () => mm.revert();
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="products" className="relative w-full h-screen bg-off-white overflow-hidden text-foreground flex items-center">
            <div className="absolute top-10 left-10 z-20">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800">
                    Core <span className="text-sun-yellow">Products.</span>
                </h2>
            </div>

            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="flex flex-col md:flex-row h-[70vh] items-center px-10 gap-x-12 w-max"
            >
                {/* Panel Card */}
                <div className="w-[85vw] md:w-[60vw] h-full flex-shrink-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] flex flex-col group relative">
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity">
                        <source src="/assets/videos/panel.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="relative z-10 mt-auto p-10 pb-12">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Tier-1 Solar Panels</h3>
                        <p className="text-lg md:text-xl text-slate-200 drop-shadow-md max-w-lg">High efficiency, mono-perc and top-con panels designed for harsh climates.</p>
                    </div>
                </div>

                {/* Inverter Card */}
                <div className="w-[85vw] md:w-[60vw] h-full flex-shrink-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] flex flex-col group relative">
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity">
                        <source src="/assets/videos/inverter.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="relative z-10 mt-auto p-10 pb-12">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Smart Hybrid Inverters</h3>
                        <p className="text-lg md:text-xl text-slate-200 drop-shadow-md max-w-lg">Seamless integration with battery storage, featuring millisecond UPS switching.</p>
                    </div>
                </div>

                {/* Battery Card */}
                <div className="w-[85vw] md:w-[60vw] h-full flex-shrink-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] flex flex-col group relative">
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity">
                        <source src="/assets/videos/battery.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="relative z-10 mt-auto p-10 pb-12">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Lithium-ion Storage</h3>
                        <p className="text-lg md:text-xl text-slate-200 drop-shadow-md max-w-lg">Scalable battery arrays ensuring 100% true energy sovereignty and safety.</p>
                    </div>
                </div>

                {/* Spacer at the end so the last card isn't flush against the right edge */}
                <div className="w-10 h-full flex-shrink-0" />
            </div>
        </section>
    );
}

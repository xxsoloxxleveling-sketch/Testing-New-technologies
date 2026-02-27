"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Mission() {
    const containerRef = useRef<HTMLElement>(null);
    const text1Ref = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);
    const text3Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        // Only apply animations on devices where scroll triggering makes sense
        mm.add("(min-width: 1px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                }
            });

            // Statement 1
            tl.fromTo(text1Ref.current,
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 1 }
            )
                .to(text1Ref.current, { autoAlpha: 0, y: -50, duration: 1 }, "+=0.5")

                // Statement 2
                .fromTo(text2Ref.current,
                    { autoAlpha: 0, y: 50 },
                    { autoAlpha: 1, y: 0, duration: 1 }
                )
                .to(text2Ref.current, { autoAlpha: 0, y: -50, duration: 1 }, "+=0.5")

                // Statement 3
                .fromTo(text3Ref.current,
                    { autoAlpha: 0, y: 50 },
                    { autoAlpha: 1, y: 0, duration: 1 }
                )
                .to(text3Ref.current, { autoAlpha: 0, y: -50, duration: 1 }, "+=0.5");

            return () => {
                tl.kill();
            };
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-5xl px-6 mx-auto text-center h-full flex items-center justify-center">
                <h2 ref={text1Ref} className="absolute text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight opacity-0 text-slate-900">
                    We believe in Energy Sovereignty.
                </h2>
                <h2 ref={text2Ref} className="absolute text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight opacity-0 text-slate-900">
                    Bridging global innovation with local manufacturing.
                </h2>
                <h2 ref={text3Ref} className="absolute text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight opacity-0 text-slate-900">
                    Reducing soft costs. Eliminating delays.
                </h2>
            </div>
        </section>
    );
}

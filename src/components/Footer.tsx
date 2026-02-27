"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-[60vh] md:h-[50vh] bg-slate-900 text-white z-[-1] flex flex-col items-center justify-center border-t border-slate-800 px-6">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Aryan's <span className="text-sun-yellow">Energy.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
                        The standard for B2B industrial solar power generation in Pakistan. Powering the future of industry with zero compromises.
                    </p>
                    <div className="flex gap-4 font-medium text-slate-300">
                        <Link href="#products" className="hover:text-sun-yellow transition-colors">Products</Link>
                        <Link href="#about" className="hover:text-sun-yellow transition-colors">About</Link>
                        <Link href="#contact" className="hover:text-sun-yellow transition-colors">Contact</Link>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-start md:justify-end w-full">
                    <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-start w-full md:w-auto hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">
                        <h3 className="text-xl font-bold mb-2">Ready to Upgrade?</h3>
                        <p className="text-slate-400 mb-8 max-w-sm">Secure your supply chain with our local manufacturing capacity for 2026 onwards.</p>
                        <button className="bg-sun-yellow hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-full transition-transform hover:scale-[1.03] shadow-xl w-full md:w-auto">
                            Request 2026 Wholesale Pricing
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright row */}
            <div className="absolute bottom-8 w-full max-w-5xl px-6 flex justify-between text-sm text-slate-600 font-medium">
                <p>© 2026 Aryan's Energy. All rights reserved.</p>
                <p>Made in Pakistan.</p>
            </div>
        </footer>
    );
}

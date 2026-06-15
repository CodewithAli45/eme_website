"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "/bg-image-1.jpeg",
    title: "Engineering with Precision",
    description: "Pioneering engineering solutions tailored to complex industrial requirements.",
  },
  {
    image: "/bg-image-2.jpeg",
    title: "Global Sourcing & Procurement",
    description: "Securing the highest grade materials with optimal supply chain efficiency.",
  },
  {
    image: "/bg-image-3.jpeg",
    title: "Quality Construction",
    description: "Erecting durable infrastructure that meets international safety standards.",
  },
  {
    image: "/bg-image-4.jpeg",
    title: "Heavy Industries Support",
    description: "Providing robust structural support for Steel, Power, and Coal sectors.",
  },
  {
    image: "/bg-image-5.jpeg",
    title: "Turnkey EPC Solutions",
    description: "End-to-end design, construction, and management from groundbreaking to commissioning.",
  },
  {
    image: "/bg-image-6.jpeg",
    title: "Eastern India Focus",
    description: "Actively contributing to the growth and progress of Jharkhand and neighboring regions.",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-slate-950">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Black overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />

          {/* Slide Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center z-20 space-y-6 animate-fadeIn">
              <span className="inline-block rounded-full bg-amber-500/15 border border-amber-500/35 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
                Electro-Mech Engineers
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 drop-shadow max-w-2xl mx-auto font-light leading-relaxed">
                {slide.description}
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <a
                  href="/about"
                  className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                >
                  Learn More
                </a>
                <a
                  href="/ongoing-project"
                  className="rounded-full bg-slate-800/80 border border-slate-700 px-6 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-all hover:scale-105"
                >
                  Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Control Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-25 p-3 rounded-full bg-slate-950/50 border border-slate-800 text-white hover:bg-slate-800 hover:border-slate-700 transition-all focus:outline-none hidden sm:block"
        aria-label="Previous Slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-25 p-3 rounded-full bg-slate-950/50 border border-slate-800 text-white hover:bg-slate-800 hover:border-slate-700 transition-all focus:outline-none hidden sm:block"
        aria-label="Next Slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators/Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-25 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-350 focus:outline-none ${
              index === current ? "w-8 bg-amber-500" : "w-2.5 bg-slate-500/50 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

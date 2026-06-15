import ImageCarousel from "../components/ImageCarousel";
import ClientSlider from "../components/ClientSlider";
import { FaDraftingCompass, FaCogs, FaHardHat } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Intro & Core Competency Section */}
      <section className="py-24 bg-slate-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
              Welcome to EME
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              Electro-Mech Engineers
            </h1>
            <h3 className="text-xl font-semibold text-slate-400 italic">
              Turnkey Concepts
            </h3>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full my-6" />
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              An Engineering, Procurement, and Construction (EPC) company dedicated to delivering innovative and turnkey solutions across diverse industries. With a steadfast commitment to excellence, we take pride in being the preferred partner for clients seeking a reliable and comprehensive approach to project development.
            </p>
          </div>

          {/* 3-Column Premium Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Core Competencies Card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20">
                <FaCogs className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Core Competencies
              </h3>
              <ul className="space-y-3 text-slate-400 w-full">
                <li className="py-2 border-b border-slate-800/50 font-semibold text-slate-300">Engineering</li>
                <li className="py-2 border-b border-slate-800/50 font-semibold text-slate-300">Procurement</li>
                <li className="py-2 font-semibold text-slate-300">Construction</li>
              </ul>
            </div>

            {/* Project Outlines Card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20">
                <FaDraftingCompass className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Project Outlines
              </h3>
              <ul className="space-y-3 text-slate-400 w-full">
                <li className="py-2 border-b border-slate-800/50 font-semibold text-slate-300">EPC Projects</li>
                <li className="py-2 border-b border-slate-800/50 font-semibold text-slate-300">Civil Projects</li>
                <li className="py-2 font-semibold text-slate-300">Structural Projects</li>
              </ul>
            </div>

            {/* Key Industries Card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20">
                <FaHardHat className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Key Industries
              </h3>
              <ul className="space-y-3 text-slate-400 w-full">
                <li className="py-2 border-b border-slate-800/50 font-semibold text-slate-300">Infrastructure & Steel</li>
                <li className="py-2 border-b border-slate-800/50 font-semibold text-slate-300">Power & Energy</li>
                <li className="py-2 font-semibold text-slate-300">Oil & Gas Sectors</li>
              </ul>
            </div>
          </div>

          {/* Quality & Safety Statement Banner */}
          <div className="relative rounded-2xl overflow-hidden glass-panel p-8 md:p-12 mb-20 border border-amber-500/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-cyan-500/5" />
            <div className="relative z-10 text-center space-y-4">
              <h4 className="text-amber-500 font-bold uppercase tracking-wider text-sm">
                Commitment to Quality & Safety
              </h4>
              <p className="text-xl sm:text-2xl text-white font-display font-medium max-w-4xl mx-auto">
                &ldquo;We maintain the highest standards of safety, cost-effective project execution, and quality assurance, ensuring we deliver value and durability.&rdquo;
              </p>
            </div>
          </div>

          {/* EME Turnover Image Display */}
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 shadow-xl">
              <div className="text-center pb-4 border-b border-slate-800 mb-4">
                <h3 className="font-display text-lg font-bold text-white">Project Turnover Growth</h3>
                <p className="text-xs text-slate-500">Overview of Electro-Mech Engineers Growth Metrics</p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg bg-slate-950 flex items-center justify-center p-2">
                <img
                  src="/turnover-eme.jpg"
                  alt="EME Turnover Performance"
                  className="rounded-md max-w-full h-auto object-cover border border-slate-800/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logo Scrolling Banner */}
      <ClientSlider />
    </div>
  );
}

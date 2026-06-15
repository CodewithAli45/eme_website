"use client";

import { useState } from "react";
import { 
  FaInfoCircle, 
  FaEye, 
  FaAward, 
  FaBriefcase, 
  FaIndustry, 
  FaCheckCircle 
} from "react-icons/fa";

const sections = [
  {
    id: "about",
    title: "About Us",
    icon: FaInfoCircle,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
          <span className="text-amber-500">Electro-Mech Engineers</span>
        </h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          A leading Engineering, Procurement, and Construction (EPC) company dedicated to delivering innovative and turnkey solutions across diverse industries. With a steadfast commitment to excellence, we take pride in being the preferred partner for clients seeking a reliable and comprehensive approach to project development.
        </p>
        <p className="text-slate-300 leading-relaxed text-lg">
          Established on July 31st, 2004, our company has been a cornerstone of excellence in the field of infrastructure development. Headquartered in Bokaro, Jharkhand, we have been actively involved in a diverse range of EPC, Civil and Structural projects, contributing significantly to the growth and progress of Eastern India.
        </p>
      </div>
    ),
  },
  {
    id: "vision",
    title: "Vision & Mission",
    icon: FaEye,
    content: (
      <div className="space-y-8 animate-fadeIn">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">Our Vision</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            Our vision is to provide world class engineering services with a particular focus on Steel, Energy, Infrastructure and Government Services. Our objective is to expand and enhance our presence throughout India & abroad by competitiveness, experience and business relationship. We intend to target Steel, Energy, Infrastructure and Government Services, where we believe high potential of growth is there.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">Our Mission</h3>
          <p className="text-amber-500 font-display text-xl font-semibold leading-relaxed">
            &ldquo;Cost effective & time bound project execution assuring quality with latest technology.&rdquo;
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "competency",
    title: "Core Competency",
    icon: FaAward,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="font-bold text-amber-400 mb-2">Engineering</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our company boasts a team of skilled and experienced engineers proficient in delivering cutting-edge solutions across various engineering disciplines.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="font-bold text-amber-400 mb-2">Construction</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              From groundbreaking to completion, our commitment to quality and efficiency is evident in our civil and structural construction projects.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="font-bold text-amber-400 mb-2">Procurement</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              With a strong network of suppliers and a strategic approach to procurement, we ensure timely and cost-effective acquisition of materials and resources for our projects.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="font-bold text-amber-400 mb-2">Geographical Presence</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Primarily focusing on Jharkhand, West Bengal, Orissa, Chhattisgarh, Madhya Pradesh & Andhra Pradesh. Our regional footprint propels vital economic progress.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "portfolio",
    title: "Project Portfolio",
    icon: FaBriefcase,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">Project Portfolio</h3>
        <p className="text-slate-300 text-base mb-4 leading-relaxed">
          Our company has successfully executed a wide array of projects, ranging from intricate engineering solutions to large-scale civil and structural constructions. Our diverse portfolio includes:
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-amber-500 pl-4">
            <h4 className="font-bold text-white text-lg">EPC Projects</h4>
            <p className="text-sm text-slate-400">
              Comprehensive solutions encompassing engineering, procurement, and construction, ensuring seamless project delivery.
            </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h4 className="font-bold text-white text-lg">Civil Projects</h4>
            <p className="text-sm text-slate-400">
              Expertise in the construction of roads, bridges, dams, and other essential civil infrastructure.
            </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h4 className="font-bold text-white text-lg">Structural Projects</h4>
            <p className="text-sm text-slate-400">
              From industrial complexes to residential towers, our structural projects stand as a testament to robust engineering.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "industry",
    title: "Key Industry",
    icon: FaIndustry,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">Key Industries We Serve</h3>
        <div className="space-y-5">
          <div>
            <span className="font-bold text-amber-400 block text-lg mb-1">Steel Industry</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              As an EPC contractor, we deliver innovative and efficient solutions that propel steel-related projects to new heights of success. From conceptualization to completion, we shape the future of steel.
            </p>
          </div>
          <div>
            <span className="font-bold text-amber-400 block text-lg mb-1">Infrastructure</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our expertise extends to vital infrastructure development, including transportation, water resources, and urban & rural development projects.
            </p>
          </div>
          <div>
            <span className="font-bold text-amber-400 block text-lg mb-1">Energy & Power</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              From power plants to cooling towers and renewable energy structures, we contribute to the growth of the energy sector with cutting-edge solutions.
            </p>
          </div>
          <div>
            <span className="font-bold text-amber-400 block text-lg mb-1">Oil & Gas</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              We offer end-to-end services in exploration, extraction support, processing, and transportation facilities.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "why",
    title: "Why Choose Us",
    icon: FaCheckCircle,
    content: (
      <div className="space-y-6 animate-fadeIn">
        <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">Why Choose Electro-Mech Engineers</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="mt-1 h-6 w-6 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">✓</div>
            <div>
              <h4 className="font-bold text-white text-lg">Proven Track Record</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                With a history of successful project completions, we have earned the trust of industry giants and government organizations alike.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 h-6 w-6 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">✓</div>
            <div>
              <h4 className="font-bold text-white text-lg">Innovation & Technology</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                We embrace the latest engineering technologies and methodologies to bring efficiency, safety, and sustainability to every project.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 h-6 w-6 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">✓</div>
            <div>
              <h4 className="font-bold text-white text-lg">Client-Centric Approach</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our commitment to client satisfaction is unwavering. We customize and scale our services to meet the specific requirements of each project on a turnkey basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  const activeSection = sections.find((s) => s.id === activeTab) || sections[0];
  const IconComponent = activeSection.icon;

  return (
    <div className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            Corporate Profile
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            About Our Company
          </h1>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Interface container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Sidebar (3 columns on desktop) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-3 p-2 rounded-2xl glass-panel scrollbar-none">
            {sections.map((section) => {
              const TabIcon = section.icon;
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`flex items-center gap-3 px-5 py-4 text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/15"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  <TabIcon className="h-5 w-5 shrink-0" />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Content Panel (8 columns on desktop) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-8 sm:p-10 min-h-[400px] flex flex-col justify-between border border-slate-800/80 relative overflow-hidden">
            {/* Background design glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-500/5 blur-3xl" />
            
            <div className="relative z-10 flex-grow">
              {/* Decorative Section Icon Indicator */}
              <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
                <IconComponent className="h-4 w-4 text-amber-500/80" />
                <span>Section Information</span>
              </div>
              {activeSection.content}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import ongoingProjects from "@/data/ongoingProject.json";
import { FaSearch, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

export default function OngoingProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = ongoingProjects.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.project.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.client.toLowerCase().includes(term) ||
      project.location.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            Active Works
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ongoing Projects
          </h1>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto pt-2">
            A comprehensive tracker of our active engineering, civil, and structural undertakings currently being executed across Eastern India.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
            <FaSearch className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search projects, clients, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full rounded-full border border-slate-800 bg-slate-900/60 py-3.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
          />
        </div>

        {/* Projects Display */}
        {filteredProjects.length > 0 ? (
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-slate-300">
                <thead className="bg-slate-900 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-5 sm:px-8 w-7/12">Name of Work</th>
                    <th scope="col" className="px-6 py-5">Client</th>
                    <th scope="col" className="px-6 py-5">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredProjects.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-6 sm:px-8">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-semibold text-white text-base leading-snug">{item.project}</span>
                          <span className="text-xs text-slate-400 font-light leading-relaxed">{item.description}</span>
                          <div className="mt-2.5">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              In Progress
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 vertical-top">
                        <div className="flex items-center gap-2 text-slate-200 font-medium">
                          <FaUserTie className="text-amber-500/80 shrink-0" />
                          <span>{item.client}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 vertical-top">
                        <div className="flex items-center gap-2 text-slate-400">
                          <FaMapMarkerAlt className="text-rose-500 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 max-w-lg mx-auto">
            <p className="text-slate-500">No ongoing projects found matching &ldquo;{searchTerm}&rdquo;.</p>
          </div>
        )}

      </div>
    </div>
  );
}

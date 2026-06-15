"use client";

import { useState } from "react";
import { FaUsers, FaLightbulb, FaHeart, FaPaperPlane } from "react-icons/fa";

export default function CareerPage() {
  const [formData, setFormData] = useState({ name: "", email: "", resumeUrl: "" });
  const [status, setStatus] = useState(null); // 'idle', 'submitting', 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", resumeUrl: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            Join Our Team
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Careers at EME
          </h1>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base font-light pt-2">
            Welcome to Electro Mech Engineers (EME). Grow your career in an environment dedicated to engineering excellence, collaboration, and turnkey innovation.
          </p>
        </div>

        {/* Culture & Life at EME Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Life at EME</h2>
            <p className="text-slate-300 leading-relaxed font-light">
              At EME, we believe in fostering a collaborative and inclusive work environment. Our team is comprised of talented professionals who share a passion for delivering high-quality projects and pushing the boundaries of what is possible. We encourage a culture of continuous learning and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Collaboration */}
            <div className="glass-card rounded-2xl p-6 text-center space-y-4">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mx-auto border border-amber-500/20">
                <FaUsers className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Team Collaboration</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                We emphasize teamwork and value the unique contributions of each member. Together, we create an environment that encourages joint creativity.
              </p>
            </div>

            {/* Innovation */}
            <div className="glass-card rounded-2xl p-6 text-center space-y-4">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mx-auto border border-amber-500/20">
                <FaLightbulb className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Innovation</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                EME is at the forefront of technological advancements in the EPC industry. We provide opportunities to work on cutting-edge projects.
              </p>
            </div>

            {/* Employee Well-being */}
            <div className="glass-card rounded-2xl p-6 text-center space-y-4">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mx-auto border border-amber-500/20">
                <FaHeart className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Employee Well-being</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                We prioritize employee wellness, offering competitive packages, a healthy work-life balance, and continuous growth programs.
              </p>
            </div>
          </div>
        </div>

        {/* Vacancies and Application Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Open Positions */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Current Openings</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-900 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-4 w-2/12">Sl No</th>
                    <th scope="col" className="px-6 py-4">Job Description</th>
                    <th scope="col" className="px-6 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">1</td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-200">Accountant</span>
                        <span className="text-xs text-slate-400 mt-1">Full-time • Corporate Office (Bokaro)</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-500 border border-amber-500/20">
                        Open
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Send Resume Form */}
          <div className="glass-panel rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
            <h2 className="font-display text-2xl font-bold text-white mb-2">Send Your Resume</h2>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Submit your information and resume links below to get in touch with our recruiting team.
            </p>

            {status === "success" ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center space-y-3 animate-fadeIn">
                <h3 className="font-bold text-emerald-400 text-lg">Application Submitted!</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Thank you for applying to EME. Our HR department will review your application and contact you shortly.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-4 rounded-full bg-emerald-500 text-slate-950 px-5 py-2 text-xs font-bold hover:bg-emerald-400 transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="block w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="block w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="resumeUrl" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                    Resume Drive / File Link
                  </label>
                  <input
                    type="text"
                    id="resumeUrl"
                    name="resumeUrl"
                    value={formData.resumeUrl}
                    onChange={handleChange}
                    placeholder="Link to your Google Drive/Dropbox PDF resume"
                    className="block w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 text-slate-950 font-bold py-3.5 mt-6 hover:bg-amber-400 active:scale-98 transition-all disabled:opacity-55"
                >
                  <FaPaperPlane className="h-4 w-4" />
                  <span>{status === "submitting" ? "Sending..." : "Submit Application"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

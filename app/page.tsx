"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Clock, Zap, Target } from 'lucide-react';

export default function KillBusyness() {
  return (
    <div className="bg-[#03070a] text-slate-300 selection:bg-[#d61f1f] selection:text-white font-sans">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#03070a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white font-black text-2xl tracking-tighter uppercase italic">KillBusyness<span className="text-[#d61f1f]">.com</span></span>
          </div>
          <div className="hidden lg:flex gap-10 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#audit" className="hover:text-white transition-colors">Start Audit</a>
            <a href="#pillars" className="hover:text-white transition-colors">The 4 Pillars</a>
            <a href="#roadmap" className="hover:text-white transition-colors">30-Day Roadmap</a>
            <a href="https://www.nfrcompany.com" className="text-[#d61f1f]">Consulting Portal</a>
          </div>
          <button className="bg-[#d61f1f] px-6 py-3 rounded-xl text-white font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(214,31,31,0.3)]">
            BOOK DIAGNOSTIC
          </button>
        </div>
      </nav>

      {/* 2. HERO: THE VISCERAL PAIN */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d61f1f]/10 border border-[#d61f1f]/20 text-[#d61f1f] text-xs font-bold uppercase tracking-widest mb-6">
              <AlertCircle size={14} /> Breaking the Follow-up Cycle
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              Management is <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d61f1f] to-[#f2b534]">NOT Chasing.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg mb-10">
              Senior leaders lose 8-12 hours weekly on status checks. This is the "hidden tax" that kills strategy. We move your team from <span className="text-white underline decoration-[#d61f1f]">Busy-ness</span> to <span className="text-white underline decoration-[#63d4e6]">High-Performance.</span>
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-[#d61f1f] hover:text-white transition-all flex items-center gap-2">
                KILL THE DRAG <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
              <img src="/stress-9pm.jpg" alt="Leadership Stress" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#03070a] border border-white/10 p-6 rounded-3xl shadow-2xl">
              <p className="text-[#f2b534] font-black text-4xl">12hrs</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Lost Every Week</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SATIRE GALLERY: THE ABSURDITY */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The "Busy" Trap</h2>
            <p className="text-slate-500 mt-2 italic text-lg">If you recognize these scenarios, you are paying the Follow-up Tax.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-[32px] hover:-rotate-2 transition-all group">
              <img src="/cartoon-dennis.jpg" className="rounded-2xl mb-4 w-full" />
              <h4 className="text-black font-black text-lg">The Chasing Loop</h4>
              <p className="text-slate-600 text-sm">Following up on the following up. Wasted energy.</p>
            </div>
            <div className="bg-white p-4 rounded-[32px] hover:rotate-2 transition-all group">
              <img src="/cartoon-garfield.jpg" className="rounded-2xl mb-4 w-full" />
              <h4 className="text-black font-black text-lg">The Annoying Metric</h4>
              <p className="text-slate-600 text-sm">Winning trophies for being a bottleneck.</p>
            </div>
            <div className="bg-white p-4 rounded-[32px] hover:-rotate-1 transition-all group">
              <img src="/cartoon-goal.jpg" className="rounded-2xl mb-4 w-full" />
              <h4 className="text-black font-black text-lg">Buried Strategy</h4>
              <p className="text-slate-600 text-sm">The goal exists, but no one can see it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE INFOGRAPHIC: 4 PILLARS */}
      <section id="pillars" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img src="/nfr-pillars.png" alt="4 Pillars of NFR" className="w-full rounded-[40px] shadow-[0_0_50px_rgba(99,212,230,0.1)]" />
          <div>
            <h2 className="text-5xl font-black text-white leading-tight mb-8">The Architecture <br/>of Reliability.</h2>
            <div className="space-y-6">
              {[
                { title: "Systemic Elimination", desc: "Audit process drag and remove bottlenecks through automation.", color: "text-[#d61f1f]" },
                { title: "Formalized SLAs", desc: "Explicit service commitments with scope and timelines.", color: "text-[#63d4e6]" },
                { title: "Calendar Discipline", desc: "Execution as protected, visible, and non-negotiable time.", color: "text-[#f2b534]" },
                { title: "Thoughtful Commitments", desc: "Pause before agreeing. Assure capacity before promising.", color: "text-blue-500" }
              ].map((p, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                  <CheckCircle2 className={p.color} size={24} />
                  <div>
                    <h4 className="font-bold text-white text-lg">{p.title}</h4>
                    <p className="text-slate-400 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE WORKBOOK PREVIEW */}
      <section id="audit" className="py-32 bg-[#d61f1f]/5 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-white">Live Follow-Up Audit</h2>
             <p className="text-slate-500 mt-2">Convert your Workbook Page 1 & 5 into actionable data.</p>
          </div>
          <div className="bg-[#03070a] border border-white/10 rounded-[40px] p-8 lg:p-12 shadow-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-slate-500">
                  <th className="pb-6 px-4 font-bold">People I Follow Up With</th>
                  <th className="pb-6 px-4 font-bold">Chases/Week</th>
                  <th className="pb-6 px-4 font-bold">NFR Transformation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[1, 2, 3].map((r) => (
                  <tr key={r} className="group hover:bg-white/[0.02]">
                    <td className="py-8 px-4">
                      <input className="bg-transparent border-none focus:ring-0 text-white w-full text-lg placeholder:text-slate-800" placeholder="e.g. Project Manager" />
                    </td>
                    <td className="py-8 px-4">
                      <input type="number" className="bg-white/5 border-none focus:ring-[#d61f1f] rounded-lg w-20 text-center font-bold" placeholder="0" />
                    </td>
                    <td className="py-8 px-4">
                      <select className="bg-transparent border-none text-[#63d4e6] font-bold cursor-pointer focus:ring-0">
                        <option>Choose Pillar...</option>
                        <option>Formalize SLA</option>
                        <option>Calendar Block</option>
                        <option>Systemic Redesign</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-dashed border-white/10 text-center text-slate-500 hover:text-white hover:border-[#d61f1f]/50 cursor-pointer transition-all">
              + Add Row to Organizational Audit
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STATE: THE END GOAL */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <div className="mb-12 inline-block rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
              <img src="/inbox-zero.jpg" alt="Inbox Zero at 6PM" className="max-w-full" />
           </div>
           <h2 className="text-5xl font-black text-white mb-6 underline decoration-[#63d4e6] underline-offset-8 italic">Inbox Zero. Head Space. 6:00 PM.</h2>
           <p className="text-xl text-slate-400 mb-10 leading-relaxed">NFR is not a software tool. It is a leadership discipline that creates earned trust. Your team stops being "Busy" and starts Being High-Performance.</p>
           <button className="px-12 py-6 bg-[#d61f1f] text-white font-black text-lg rounded-3xl hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(214,31,31,0.4)] uppercase tracking-tighter">
             Kill the Busyness Now
           </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-600">© 2024 Management Innovations | No Follow Up Required | KillBusyness.com</p>
      </footer>
    </div>
  );
}

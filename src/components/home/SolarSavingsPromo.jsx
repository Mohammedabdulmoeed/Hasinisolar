

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, ShieldCheck, BarChart3, Calculator, Sparkles } from "lucide-react";

export default function SolarCalculatorCTA() {
  return (
    <section className="relative bg-neutral-950 py-24 lg:py-36 overflow-hidden select-none w-full">
      
      {/* Hyper-Modern Ambient Light Fields */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[160px]" />
        {/* Fine tech mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />
      </div>

      {/* Expanded Outer Container with wide horizontal padding to stop clamping */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Spaced Typography Panel (Takes 6 Columns instead of 7 for balancing) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-black uppercase tracking-widest shadow-inner mb-6">
              <Sparkles className="h-3 w-3 animate-pulse" /> Predictive Efficiency Engine
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.02] mb-6">
              Future-Proof <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-400">
                Your Energy.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-xl font-medium">
              Stop projecting arbitrary returns. Hasini Solar Enterprises & Solutions's automated assessment engine maps live localized tariff metrics, regional rooftop asset geometry, and active government subsidies instantly.
            </p>

            <div>
              <Link
                to="/solar-calculator"
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 px-8 py-4 rounded-2xl font-black text-base transition-all shadow-xl shadow-white/5 active:scale-95"
              >
                Launch Predictive Engine
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Perfectly Scaled Bento Grid (Takes 6 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-2 gap-5 h-full w-full"
          >
            {/* Box 1: Large Feature Block */}
            <div className="col-span-2 bg-neutral-900/40 border border-white/5 backdrop-blur-xl p-8 rounded-[32px] flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Net Annual Savings</span>
                <Zap className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">₹85,000+</div>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">Average localized return mapping parameters evaluated across operating systems.</p>
              </div>
            </div>

            {/* Box 2: Subsidy Metric */}
            <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-xl p-6 lg:p-8 rounded-[32px] hover:border-sky-500/30 transition-colors flex flex-col justify-between">
              <ShieldCheck className="h-5 w-5 text-sky-400 mb-6" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">₹78,000</div>
                <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-1">DBT Support</div>
              </div>
            </div>

            {/* Box 3: ROI Percentage */}
            <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-xl p-6 lg:p-8 rounded-[32px] hover:border-indigo-500/30 transition-colors flex flex-col justify-between">
              <BarChart3 className="h-5 w-5 text-indigo-400 mb-6" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">28.4%</div>
                <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-1">Calculated ROI</div>
              </div>
            </div>

            {/* Box 4: Horizontal Payback Frame */}
            <div className="col-span-2 bg-gradient-to-r from-neutral-900/60 to-neutral-900/20 border border-white/5 backdrop-blur-xl p-6 px-8 rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 shadow-inner">
                  <Calculator className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">Amortization Payback Timeline</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5 font-medium">Complete infrastructure cost recovery benchmark.</p>
                </div>
              </div>
              <div className="text-xl font-black text-amber-400 tracking-tight shrink-0">3.5 Yrs</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
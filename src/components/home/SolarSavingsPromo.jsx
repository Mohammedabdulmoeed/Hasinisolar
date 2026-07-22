
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Calculator,
//   IndianRupee,
//   Sun,
//   TrendingUp,
//   BadgePercent,
//   CheckCircle2,
// } from "lucide-react";

// export default function SolarCalculatorCTA() {
//   return (
//     <section className="relative overflow-hidden bg-slate-950 py-28 lg:py-36">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[140px]" />
//       <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="container-custom relative z-10">

//         {/* Changed lg:grid-cols-2 to md:grid-cols-2 for desktop mode on phones */}
//         <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

//           {/* LEFT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
//               <Calculator className="h-4 w-4" />
//               AI Powered Solar Calculator
//             </span>

//             <h2 className="mt-8 text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black leading-tight text-white">
//               Discover Your{" "}
//               <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
//                 Solar Savings
//               </span>
//             </h2>

//             <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300">
//               Calculate your ideal solar system size, government subsidy,
//               installation cost, annual savings, and return on investment
//               within seconds.
//             </p>

//             <div className="mt-8 space-y-4">
//               <div className="flex items-center gap-4 text-slate-200 text-sm sm:text-base">
//                 <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
//                 Electricity Bill Analysis
//               </div>

//               <div className="flex items-center gap-4 text-slate-200 text-sm sm:text-base">
//                 <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
//                 PM Surya Ghar Subsidy Estimate
//               </div>

//               <div className="flex items-center gap-4 text-slate-200 text-sm sm:text-base">
//                 <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
//                 Solar ROI & Payback Period
//               </div>

//               <div className="flex items-center gap-4 text-slate-200 text-sm sm:text-base">
//                 <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
//                 Personalized Solar Recommendation
//               </div>
//             </div>

//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="mt-10 inline-block"
//             >
//               <Link
//                 to="/solar-calculator"
//                 className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4 lg:px-8 lg:py-5 text-base lg:text-lg font-bold text-white shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:shadow-emerald-500/50"
//               >
//                 Calculate My Savings
//                 <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative w-full"
//           >
//             {/* Floating Card Decorative Background Glows */}
//             <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
//             <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

//             <motion.div
//               animate={{
//                 y: [0, -12, 0],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative w-full rounded-[36px] border border-white/10 bg-white/10 p-6 lg:p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-wider text-slate-300">
//                   Estimated Annual Savings
//                 </span>
//                 <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
//               </div>

//               <div className="mt-5 flex items-center gap-2">
//                 <IndianRupee className="h-8 w-8 lg:h-10 lg:w-10 text-emerald-400" />
//                 <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
//                   85K+
//                 </h3>
//               </div>

//               <p className="mt-3 text-sm lg:text-base text-slate-300">
//                 Average yearly savings with rooftop solar.
//               </p>

//               <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-4 lg:gap-5">
//                 <div className="rounded-2xl bg-white/5 p-4 lg:p-5 border border-white/5 hover:bg-white/10 transition">
//                   <Sun className="h-6 w-6 lg:h-8 lg:w-8 text-amber-400" />
//                   <p className="mt-3 text-xs text-slate-400">System Size</p>
//                   <h4 className="text-xl lg:text-3xl font-bold text-white">5 KW</h4>
//                 </div>

//                 <div className="rounded-2xl bg-white/5 p-4 lg:p-5 border border-white/5 hover:bg-white/10 transition">
//                   <BadgePercent className="h-6 w-6 lg:h-8 lg:w-8 text-emerald-400" />
//                   <p className="mt-3 text-xs text-slate-400">Subsidy</p>
//                   <h4 className="text-xl lg:text-3xl font-bold text-emerald-400">₹78K</h4>
//                 </div>

//                 <div className="rounded-2xl bg-white/5 p-4 lg:p-5 border border-white/5 hover:bg-white/10 transition">
//                   <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-400" />
//                   <p className="mt-3 text-xs text-slate-400">ROI</p>
//                   <h4 className="text-xl lg:text-3xl font-bold text-cyan-400">28%</h4>
//                 </div>

//                 <div className="rounded-2xl bg-white/5 p-4 lg:p-5 border border-white/5 hover:bg-white/10 transition">
//                   <Calculator className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400" />
//                   <p className="mt-3 text-xs text-slate-400">Payback</p>
//                   <h4 className="text-xl lg:text-3xl font-bold text-white">3.5 Yrs</h4>
//                 </div>
//               </div>

//               <div className="mt-6 lg:mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
//                 <p className="text-xs lg:text-sm text-emerald-300">
//                   ⚡ Get instant solar recommendations based on your monthly electricity bill and roof area.
//                 </p>
//               </div>

//             </motion.div>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// }

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
              Stop projecting arbitrary returns. SunVolt's automated assessment engine maps live localized tariff metrics, regional rooftop asset geometry, and active government subsidies instantly.
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
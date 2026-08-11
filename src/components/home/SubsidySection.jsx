
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sun,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Coins,
  Sparkles,
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../../animations/variants";

export default function SubsidySection() {
  return (
    <section className="relative py-28 md:py-36 bg-slate-50 overflow-hidden">
      {/* Structural layout backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40" />
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-sky-200/40 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-emerald-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER AREA: Bigger typography hierarchy */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-sky-200 bg-sky-100/60 text-sky-800 font-extrabold text-sm uppercase tracking-widest shadow-sm mb-4">
            <Sparkles className="h-4 w-4 text-sky-600 animate-pulse" /> National Rooftop Solar Program
          </span>

          <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none">
            Scale Down Bills. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600 drop-shadow-sm">
              Claim Your Subsidy.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Secure up to <span className="font-black text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-xl border border-emerald-200 shadow-inner">78,000 Cash Support</span> directly into your bank account and start saving on electricity from day one.
          </p>
        </div>

        {/* 3-COLUMN METRIC CARDS: Enlarged font configurations */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28"
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp}
            className="group relative bg-white rounded-[36px] border-2 border-slate-200/80 p-8 lg:p-10 shadow-md hover:shadow-2xl hover:border-sky-400/80 transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="h-14 w-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mt-8 tracking-tight">1 KW Capacity</h3>
              <p className="text-sm lg:text-base text-slate-500 mt-2 font-medium leading-relaxed">Engineered for smaller compact houses and light essential appliances.</p>
            </div>
            <div className="mt-12 pt-8 border-t-2 border-slate-100">
              <div className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">₹30,000</div>
              <p className="text-xs lg:text-sm text-emerald-600 font-extrabold uppercase tracking-wider mt-2">Direct DBT Subsidy</p>
            </div>
          </motion.div>

          {/* Card 2 - 2 KW Capacity */}
          <motion.div 
            variants={fadeInUp}
            className="group relative bg-white rounded-[36px] border-2 border-slate-200/80 p-8 lg:p-10 shadow-md hover:shadow-2xl hover:border-sky-400/80 transition-all duration-400 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="h-14 w-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mt-8 tracking-tight">2 KW Capacity</h3>
              <p className="text-sm lg:text-base text-slate-500 mt-2 font-medium leading-relaxed">The optimal balanced installation setup for active modern families.</p>
            </div>
            <div className="mt-12 pt-8 border-t-2 border-slate-100">
              <div className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">₹60,000</div>
              <p className="text-xs lg:text-sm text-emerald-600 font-extrabold uppercase tracking-wider mt-2">Direct DBT Subsidy</p>
            </div>
          </motion.div>

          {/* Card 3 - Most Popular High Spec */}
          <motion.div 
            variants={fadeInUp}
            className="group relative bg-slate-900 rounded-[36px] p-8 lg:p-10 shadow-2xl hover:shadow-sky-950/40 transition-all duration-400 flex flex-col justify-between overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 blur-3xl pointer-events-none" />
            <div className="absolute top-8 right-8 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
              Most Popular
            </div>
            
            <div>
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mt-8 tracking-tight">3 KW & Above</h3>
              <p className="text-sm lg:text-base text-slate-300 mt-2 font-medium leading-relaxed">Unlocks maximum legal government reimbursement metrics.</p>
            </div>
            <div className="mt-12 pt-8 border-t-2 border-white/10">
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tight">₹78,000</div>
              <p className="text-xs lg:text-sm text-sky-400 font-extrabold uppercase tracking-wider mt-2">Direct DBT Subsidy</p>
            </div>
          </motion.div>
        </motion.div>

        {/* INTERCONNECTED BENEFITS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Core Financial Metrics */}
          <div className="lg:col-span-7 bg-white rounded-[36px] p-10 md:p-12 border-2 border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Why Choose Sunrise Solar Hub?
              </h3>
              <p className="text-sm sm:text-base text-slate-500 mb-12 font-medium">
                We handle the complete corporate processing and official government mapping procedures for you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 shrink-0 flex items-center justify-center text-sky-600 mt-1 shadow-inner">
                    <TrendingDown className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-black text-slate-900 tracking-tight">Save Up To 90%</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">Permanently neutralize recurring monthly utility network expenses.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 shrink-0 flex items-center justify-center text-sky-600 mt-1 shadow-inner">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-black text-slate-900 tracking-tight">Verified Returns</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">Approved financial aid safely maps into your active bank records.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 shrink-0 flex items-center justify-center text-sky-600 mt-1 shadow-inner">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-black text-slate-900 tracking-tight">30-Year Lifecycle</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">Heavy engineering built to securely produce clean energy across generations.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 shrink-0 flex items-center justify-center text-sky-600 mt-1 shadow-inner">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-black text-slate-900 tracking-tight">Instant Valuation</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">Increases equity infrastructure appraisal assets for homes immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
              <p className="text-xs font-medium text-slate-400 max-w-md">
                * Sunrise Solar Hub operates full technical integration logistics on behalf of corporate customers.
              </p>
              <Link to="/solar-calculator" className="inline-flex items-center gap-2 text-sm font-extrabold text-sky-600 hover:text-sky-700 transition-colors group">
                Calculate Exact ROI <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Block: Scheme Highlight Frame */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[36px] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-sky-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
                  PM Surya Ghar Muft Bijli Yojana
                </span>

                <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                  National Solar Infrastructure Action Plan
                </h3>

                <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  The Ministry of New and Renewable Energy introduces systematic financial grants to scale national domestic energy switches cleanly.
                </p>

                <div className="mt-10 space-y-4">
                  {["End-to-end institutional coordination", "Optimized capital deployment strategies", "Rapid capital expenditure amortization", "100% Certified Tier-1 manufacturing lines"].map((text) => (
                    <div key={text} className="flex items-center gap-4 text-sm sm:text-base text-slate-200 font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <p className="text-xs text-slate-400 leading-normal font-medium">
                  Reimbursements align to standard operations as outlined per native governmental frameworks.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
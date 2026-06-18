import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sun,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function SubsidySection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-100 rounded-full blur-[140px] opacity-50" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-sm">
            Government Approved Solar Subsidy
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 leading-tight">
            Save More With{" "}
            <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Rooftop Solar Subsidy
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Get up to{" "}
            <span className="font-bold text-emerald-600">
              ₹78,000 Government Subsidy
            </span>{" "}
            and start reducing electricity bills from day one.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="group bg-white rounded-[32px] border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white mb-6">
              <Sun className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">1 KW System</h3>
            <p className="text-slate-500 mt-2">Ideal for small homes.</p>
            <div className="mt-8 text-5xl font-black text-slate-900">₹30,000</div>
            <p className="mt-2 text-emerald-600 font-semibold">Direct Subsidy</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-gradient-to-br from-emerald-500 to-green-600 rounded-[32px] p-8 shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-5 right-5 bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>
            <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">2 KW System</h3>
            <p className="text-emerald-100 mt-2">Best choice for families.</p>
            <div className="mt-8 text-5xl font-black text-white">₹60,000</div>
            <p className="mt-2 text-white font-semibold">Direct Subsidy</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-[32px] border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">3 KW & Above</h3>
            <p className="text-slate-500 mt-2">Maximum subsidy benefits.</p>
            <div className="mt-8 text-5xl font-black text-slate-900">₹78,000</div>
            <p className="mt-2 text-emerald-600 font-semibold">Direct Subsidy</p>
          </div>
        </div>

        {/* Benefits Area: Changed from lg:grid-cols-2 to md:grid-cols-2 for consistent side-by-side alignment */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Why Install Solar */}
          <div className="bg-slate-50 rounded-[32px] p-10 border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Why Install Solar?
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Reduce Electricity Bills</h4>
                    <p className="text-slate-600">
                      Save up to 90% on monthly electricity expenses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">25+ Years Performance</h4>
                    <p className="text-slate-600">
                      Reliable energy generation for decades.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Government Subsidy</h4>
                    <p className="text-slate-600">
                      Receive direct subsidy support into your bank account.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Increase Property Value</h4>
                    <p className="text-slate-600">
                      Solar-equipped homes and commercial properties often have higher market value.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Low Maintenance</h4>
                    <p className="text-slate-600">
                      Modern solar systems require minimal maintenance and offer long-term reliability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Eco-Friendly Energy</h4>
                    <p className="text-slate-600">
                      Reduce your carbon footprint and contribute to a cleaner, greener future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Subsidy Info Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-500/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold">
                  PM Surya Ghar Yojana
                </span>

                <h3 className="mt-6 text-3xl font-bold leading-tight text-emerald-500">
  Government Support For{" "}
  <span className="block">
    Every Homeowner
  </span>
</h3>

                <p className="mt-5 text-slate-300 leading-relaxed">
                  The Government of India promotes rooftop solar adoption through
                  attractive financial assistance, helping homeowners reduce the
                  initial installation cost and transition to clean energy.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span>Subsidy up to ₹78,000*</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span>Direct benefit transfer to bank account</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span>Reduced upfront solar installation cost</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span>Faster return on investment</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-sm text-slate-300">
                  *Subsidy amount depends on system capacity and prevailing government guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import { images } from "../data/images";

export default function ResidentialCalculator() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Residential",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
      path: "/solar-calculator", // Points directly to the processing calculator path
      description: "Power your home with clean solar energy and save up to 90% on electricity bills.",
    },
    {
      title: "Commercial",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200",
      path: "/solar-calculator",
      description: "Reduce operational costs and maximize returns for your business.",
    },
    {
      title: "Industrial",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
      path: "/solar-calculator",
      description: "Large-scale solar solutions designed for factories and industries.",
    },
  ];

  return (
    <>
      <PageHero
        title="Solar Savings Calculator"
        subtitle="Calculate your solar system size, subsidy, savings and ROI."
        image={images.solarCalculator}
        breadcrumb="Home / Solar Calculator"
      />

      {/* WHY CHOOSE US BRIEF BRAND ROW */}
      <section className="relative py-12 sm:py-20 overflow-hidden bg-white border-b border-slate-100 text-left">
        <div className="container-custom px-4 relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <span className="inline-flex max-w-fit px-4 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                Why Choose Hasini Solar Enterprises & Solutions
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Empowering Energy <br />
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Independence</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Hasini Solar Enterprises & Solutions   integrates structural tier-1 hardware frameworks with intelligent telemetry arrays. We transition local corporate architectures into highly independent, clean power infrastructures optimized for sustained financial return.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">Tier-1 Bloomberg Rated Photovoltaic Modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">Real-Time Cloud-Linked Generation Monitoring</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative h-[200px] sm:h-[340px] rounded-2xl overflow-hidden border border-slate-100 shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
                alt="Hasini Solar Enterprises & Solutions Station Profile" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TARGET SELECTION CATEGORIES GRID SECTION */}
      <section className="relative py-12 sm:py-24 overflow-hidden bg-slate-950 text-left">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/5 blur-[150px] pointer-events-none" />

        <div className="container-custom px-4 relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase">
              Solar Savings Calculator
            </span>
            <h1 className="mt-4 text-2xl sm:text-5xl font-black text-white tracking-tight">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Solar Category
              </span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-xs sm:text-base">
              Instantly calculate savings, subsidy eligibility, recommended system size and ROI for your solar project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {categories.map((item, index) => (
              <div
                key={item.title}
                onClick={() => navigate(item.path)}
                className="group relative min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-3xl cursor-pointer shadow-2xl border border-white/5 transition-all bg-slate-900 flex flex-col justify-end p-6 sm:p-8 hover:-translate-y-2 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-3">
                    Solar Solutions
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                  
                  <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm group-hover:gap-3 transition-all">
                    <span>Calculate Savings</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
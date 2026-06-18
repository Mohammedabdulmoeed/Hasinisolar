// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import PageHero from "../components/ui/PageHero";
// import { images } from "../data/images";

// export default function SolarCalculatorPage() {
//   const navigate = useNavigate();

//   const categories = [
//     {
//       title: "Residential",
//       image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
//       path: "/residential",
//       description: "Power your home with clean solar energy and save up to 90% on electricity bills.",
//     },
//     {
//       title: "Commercial",
//       image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200",
//       path: "/commercial",
//       description: "Reduce operational costs and maximize returns for your business.",
//     },
//     {
//       title: "Industrial",
//       image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
//       path: "/industrial",
//       description: "Large-scale solar solutions designed for factories and industries.",
//     },
//   ];

//   return (
//     <>
//       <PageHero
//         title="Solar Savings Calculator"
//         subtitle="Calculate your solar system size, subsidy, savings and ROI."
//         image={images.solarCalculator}
//         breadcrumb="Home / Solar Calculator"
//       />

//       {/* The main wrapper - min-h-screen has been removed to collapse the layout right under the cards */}
//       <section className="relative py-12 sm:py-24 overflow-hidden bg-slate-950 text-left">
        
//         {/* Background Glow Effects */}
//         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[150px] pointer-events-none" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] pointer-events-none" />

//         <div className="container-custom px-2 sm:px-4 relative z-10">

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-10 sm:mb-20"
//           >
//             <span className="px-3 sm:px-6 py-1.5 sm:py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-base font-semibold">
//               Solar Savings Calculator
//             </span>

//             <h1 className="mt-4 sm:mt-8 text-2xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight">
//               Choose Your{" "}
//               <span className="block sm:inline bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
//                 Solar Category
//               </span>
//             </h1>

//             <p className="text-slate-400 max-w-3xl mx-auto mt-2 sm:mt-6 text-xs sm:text-xl font-medium leading-relaxed">
//               Instantly calculate savings, subsidy eligibility, recommended system size and ROI for your solar project.
//             </p>
//           </motion.div>

//           {/* Locked Triple Column Card Alignment Grid Layout */}
//           <div className="grid grid-cols-3 gap-2 sm:gap-8 items-stretch">

//             {categories.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.15,
//                 }}
//                 whileHover={{
//                   y: -10,
//                 }}
//                 onClick={() => navigate(item.path)}
//                 className="group relative h-[240px] sm:h-[560px] overflow-hidden rounded-xl sm:rounded-[32px] cursor-pointer shadow-xl border border-white/5"
//               >
//                 {/* Image background assets */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 {/* Dark Masking Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//                 {/* Micro Energy badge */}
//                 <div className="absolute top-3 sm:top-6 right-3 sm:right-6 hidden xs:block">
//                   <div className="h-7 sm:h-14 w-7 sm:w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xs sm:text-xl shadow-lg">
//                     ⚡
//                   </div>
//                 </div>

//                 {/* Card Content Core Container */}
//                 <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-8 flex flex-col items-start text-left">

//                   <span className="inline-block px-1.5 sm:px-4 py-0.5 sm:py-2 rounded-full bg-green-500/20 backdrop-blur-xl border border-green-300/30 text-green-200 text-[7px] sm:text-sm font-semibold tracking-wide">
//                     Solar Solutions
//                   </span>

//                   <h3 className="text-sm sm:text-4xl font-extrabold font-display text-white mt-1.5 sm:mt-4 mb-1 sm:mb-3 tracking-tight">
//                     {item.title}
//                   </h3>

//                   <p className="text-white/80 text-[9px] sm:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none font-medium">
//                     {item.description}
//                   </p>

//                   <div className="inline-flex items-center gap-1 sm:gap-3 text-green-300 font-bold text-[9px] sm:text-lg group-hover:gap-4 sm:group-hover:gap-5 transition-all">
//                     <span>Calculate Savings</span>
//                     <ArrowRight className="h-2.5 w-2.5 sm:h-5 sm:w-5" />
//                   </div>

//                 </div>

//                 {/* Hover Glow Light-Leak Overlays */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
//                   <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-green-400/20 blur-3xl" />
//                   <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />
//                 </div>

//                 {/* Border Effect Overlay line frames */}
//                 <div className="absolute inset-0 rounded-xl sm:rounded-[32px] border border-white/10 group-hover:border-green-400/40 transition-all duration-500 pointer-events-none" />
//               </motion.div>
//             ))}

//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageHero from "../components/ui/PageHero";
import { images } from "../data/images";

export default function SolarCalculatorPage() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Residential",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
      path: "/residential",
      description: "Power your home with clean solar energy and save up to 90% on electricity bills.",
    },
    {
      title: "Commercial",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200",
      path: "/commercial",
      description: "Reduce operational costs and maximize returns for your business.",
    },
    {
      title: "Industrial",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
      path: "/industrial",
      description: "Large-scale solar solutions designed for factories and industries.",
    },
  ];

  const highlights = [
    {
      icon: <Lightbulb className="h-4 sm:h-6 w-4 sm:w-6 text-amber-500" />,
      value: "500+",
      label: "Plants Built",
    },
    {
      icon: <TrendingUp className="h-4 sm:h-6 w-4 sm:w-6 text-emerald-600" />,
      value: "95%",
      label: "Max Savings",
    },
    {
      icon: <ShieldCheck className="h-4 sm:h-6 w-4 sm:w-6 text-cyan-600" />,
      value: "25Y",
      label: "Warranty",
    }
  ];

  return (
    <>
      <PageHero
        title="Solar Savings Calculator"
        subtitle="Calculate your solar system size, subsidy, savings and ROI."
        image={images.solarCalculator}
        breadcrumb="Home / Solar Calculator"
      />

      {/* =========================================
          SECTION 1: FIXED SINGLE-LINE SPLIT FEATURE (WHITE BACKGROUND)
          ========================================= */}
      <section className="relative py-12 sm:py-20 overflow-hidden bg-white border-b border-slate-100 text-left">
        <div className="container-custom px-2 sm:px-4 relative z-10">
          
          {/* Locked grid-cols-12 ensures Left Text and Right Image stay forced on a single line */}
          <div className="grid grid-cols-12 gap-4 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: HEADINGS & PARAGRAPHS (7/12 Share) */}
            <div className="col-span-7 flex flex-col justify-center">
              <span className="inline-flex max-w-fit px-2 sm:px-4 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[8px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-4">
                Why Choose Zenco
              </span>

              <h2 className="text-sm sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Empowering Energy <br />
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Independence</span>
              </h2>

              <p className="mt-1.5 sm:mt-6 text-[9px] sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                Zenco Solar integrates structural tier-1 hardware frameworks with intelligent telemetry arrays. We transition local corporate architectures into highly independent, clean power infrastructures optimized for sustained financial return.
              </p>

              {/* Fast Inline Bullet List */}
              <div className="mt-2 sm:mt-6 space-y-1 sm:space-y-3">
                <div className="flex items-center gap-1 sm:gap-3">
                  <CheckCircle2 className="h-2.5 w-2.5 sm:h-5 sm:w-5 text-emerald-600 shrink-0" />
                  <span className="text-[8px] sm:text-sm text-slate-700 font-semibold">Tier-1 Bloomberg Rated Photovoltaic Modules</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-3">
                  <CheckCircle2 className="h-2.5 w-2.5 sm:h-5 sm:w-5 text-emerald-600 shrink-0" />
                  <span className="text-[8px] sm:text-sm text-slate-700 font-semibold">Real-Time Cloud-Linked Generation Monitoring</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: REINFORCED COMPLEMENTARY IMAGE (5/12 Share) */}
            <div className="col-span-5 relative h-[140px] sm:h-[380px] rounded-xl sm:rounded-[32px] overflow-hidden border border-slate-100 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
                alt="Zenco Industrial Solar Station Blueprint" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </section>

      

     {/* =========================================
          SECTION 3: SOLAR SAVINGS CALCULATOR GRID (DARK BLUE BACKGROUND)
          ========================================= */}
      <section className="relative py-12 sm:py-24 overflow-hidden bg-slate-950 text-left">
        
        {/* Subtle Light Background Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none" />

        <div className="container-custom px-2 sm:px-4 relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-20"
          >
            <span className="px-3 sm:px-6 py-1.5 sm:py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-base font-semibold">
              Solar Savings Calculator
            </span>

            <h1 className="mt-4 sm:mt-8 text-2xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight">
              Choose Your{" "}
              <span className="block sm:inline bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Solar Category
              </span>
            </h1>

            <p className="text-slate-400 max-w-3xl mx-auto mt-2 sm:mt-6 text-xs sm:text-xl font-medium leading-relaxed">
              Instantly calculate savings, subsidy eligibility, recommended system size and ROI for your solar project.
            </p>
          </motion.div>

          {/* Locked Triple Column Card Alignment Grid Layout */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 items-stretch">

            {categories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                onClick={() => navigate(item.path)}
                className="group relative h-[240px] sm:h-[560px] overflow-hidden rounded-xl sm:rounded-[32px] cursor-pointer shadow-2xl border border-white/5 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Rich Overlay Mask for text contrast against light backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 hidden xs:block">
                  <div className="h-7 sm:h-14 w-7 sm:w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xs sm:text-xl shadow-lg">
                    ⚡
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-8 flex flex-col items-start text-left">

                  <span className="inline-block px-1.5 sm:px-4 py-0.5 sm:py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-200 text-[7px] sm:text-sm font-semibold tracking-wide">
                    Solar Solutions
                  </span>

                  <h3 className="text-sm sm:text-4xl font-extrabold font-display text-white mt-1.5 sm:mt-4 mb-1 sm:mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-[9px] sm:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none font-medium">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-1 sm:gap-3 text-emerald-300 font-bold text-[9px] sm:text-lg group-hover:gap-4 sm:group-hover:gap-5 transition-all">
                    <span>Calculate Savings</span>
                    <ArrowRight className="h-2.5 w-2.5 sm:h-5 sm:w-5" />
                  </div>

                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-green-500/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
                </div>
              </motion.div>
            ))}

          </div>

         </div>
      </section>
    </>
  );
}
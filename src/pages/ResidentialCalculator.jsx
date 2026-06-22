// import { useState } from "react";
// import { ArrowLeft, Zap, Info } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import PageHero from "../components/ui/PageHero";
// import { images } from "../data/images";

// export default function SolarCalculatorPage() {
//   const navigate = useNavigate();
//   const [units, setUnits] = useState("350");
//   const [activeTab, setActiveTab] = useState("Residential");

//   const numericUnits = Number(units) || 0;

//   // The complete data matrix array from the reference layout
//   const pricingMatrix = [
//     { capacity: "2 kW", popular: true, totalCost: "₹1,45,000", subsidy: "- ₹60,000", effectiveCost: "₹88,770", maxUnits: 240, displayUnits: "240 units", savings: "₹1,680/mo" },
//     { capacity: "3 kW", popular: true, totalCost: "₹2,06,400", subsidy: "- ₹78,000", effectiveCost: "₹1,33,120", maxUnits: 350, displayUnits: "350 units", savings: "₹2,520/mo" },
//     { capacity: "4 kW", popular: false, totalCost: "₹2,58,500", subsidy: "- ₹78,000", effectiveCost: "₹1,88,320", maxUnits: 480, displayUnits: "480 units", savings: "₹3,360/mo" },
//     { capacity: "5 kW", popular: false, totalCost: "₹3,24,500", subsidy: "- ₹78,000", effectiveCost: "₹2,51,120", maxUnits: 600, displayUnits: "600 units", savings: "₹4,200/mo" },
//     { capacity: "6 kW", popular: false, totalCost: "₹3,54,300", subsidy: "- ₹78,000", effectiveCost: "₹2,82,100", maxUnits: 720, displayUnits: "720 units", savings: "₹5,040/mo" },
//     { capacity: "7 kW", popular: false, totalCost: "₹3,79,200", subsidy: "- ₹78,000", effectiveCost: "₹3,05,120", maxUnits: 840, displayUnits: "840 units", savings: "₹5,880/mo" },
//     { capacity: "8 kW", popular: false, totalCost: "₹4,54,400", subsidy: "- ₹78,000", effectiveCost: "₹3,82,770", maxUnits: 960, displayUnits: "960 units", savings: "₹6,720/mo" },
//     { capacity: "9 kW", popular: false, totalCost: "₹5,84,100", subsidy: "- ₹78,000", effectiveCost: "₹5,10,820", maxUnits: 1080, displayUnits: "1080 units", savings: "₹7,560/mo" },
//     { capacity: "10 kW", popular: false, totalCost: "₹6,49,000", subsidy: "- ₹78,000", effectiveCost: "₹5,75,720", maxUnits: 1200, displayUnits: "1200 units", savings: "₹8,400/mo" },
//   ];

//   // REAL-TIME EVALUATION ENGINE: Finds the optimal row matching the unit bracket
//   let selectedRow = pricingMatrix[0]; // fallback default

//   if (activeTab === "Residential") {
//     // Finds the first row where the input units fit within the capacity cap
//     const matched = pricingMatrix.find((row) => numericUnits <= row.maxUnits);
//     if (matched) {
//       selectedRow = matched;
//     } else {
//       // If units exceed 1200, cap it at the 10 kW row metrics safely
//       selectedRow = pricingMatrix[pricingMatrix.length - 1];
//     }
//   } else {
//     // Commercial / Industrial continuous calculation scaling block
//     const dynamicKw = Math.max(10, Math.ceil(numericUnits / 120));
//     const calculatedCost = dynamicKw * 62000;
//     selectedRow = {
//       capacity: `${dynamicKw} kW`,
//       popular: false,
//       totalCost: `₹${calculatedCost.toLocaleString("en-IN")}`,
//       subsidy: "₹0 (No Commercial Subsidy)",
//       effectiveCost: `₹${calculatedCost.toLocaleString("en-IN")}`,
//       savings: `₹${Math.round(numericUnits * 7.8).toLocaleString("en-IN")}/mo`,
//     };
//   }

//   return (
//     <div className="bg-slate-50 min-h-screen text-slate-800 antialiased text-left">
//       <PageHero
//         title="Solar Savings Calculator"
//         subtitle="Calculate your solar system size, subsidy, savings and ROI."
//         image={images.solarCalculator}
//         breadcrumb="Home / Solar Calculator"
//       />

//       <section className="py-12 sm:py-16 container-custom px-4">
        
//         {/* Navigation & Operational Category Tabs */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
//           <button 
//             onClick={() => navigate("/")} 
//             className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition self-start"
//           >
//             <ArrowLeft className="h-4 w-4" /> Back to Home
//           </button>

//           <div className="bg-slate-200/80 p-1.5 rounded-2xl flex gap-1 w-full md:w-auto shadow-inner">
//             {["Residential", "Commercial", "Industrial"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 ${
//                   activeTab === tab
//                     ? "bg-white text-slate-900 shadow-md"
//                     : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Workspace Panels Row */}
//         <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
//           {/* LEFT CONTAINER: MONITORED UNITS CONTROLLER */}
//           <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-center">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl">
//                 <Zap className="h-5 w-5 fill-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-slate-900">Usage Profiles</h3>
//                 <p className="text-xs text-slate-400 font-medium">Calculations sync automatically</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <div className="flex justify-between items-baseline mb-2">
//                   <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Monthly Consumption</label>
//                   <span className="text-[11px] text-slate-400 font-semibold">From your electricity bill</span>
//                 </div>
//                 <div className="relative rounded-xl shadow-sm">
//                   <input
//                     type="number"
//                     value={units}
//                     onChange={(e) => setUnits(e.target.value)}
//                     className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-4 text-lg font-black text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
//                   />
//                   <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 bg-white border border-slate-100 px-2 py-1 rounded-md">
//                     Units / Month
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTAINER: DYNAMIC LEDGER DISPLAY MODULE */}
//           <div className="lg:col-span-7">
//             <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-8 text-white shadow-xl h-full relative overflow-hidden flex flex-col justify-between">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
              
//               <div>
//                 <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase mb-6">Calculated Setup Configuration</h3>
                
//                 <div className="grid sm:grid-cols-2 gap-4 mb-6">
//                   <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
//                     <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Recommended System</span>
//                     <div className="text-3xl font-black text-white mt-1 flex items-baseline gap-1">
//                       {selectedRow.capacity}
//                       {selectedRow.popular && activeTab === "Residential" && (
//                         <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider self-center">
//                           Popular
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
//                     <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Estimated Savings</span>
//                     <div className="text-3xl font-black text-emerald-400 mt-1">
//                       {selectedRow.savings}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Verified Output Cost Metrics */}
//               <div className="space-y-3 text-sm font-medium border-t border-white/10 pt-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-400">Total Structural Cost</span>
//                   <span className="font-bold text-white">{selectedRow.totalCost}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-slate-400">Government Subsidy Allotment</span>
//                   <span className="font-bold text-emerald-400">{selectedRow.subsidy}</span>
//                 </div>
//                 <div className="flex justify-between items-center pt-2 border-t border-white/5">
//                   <span className="text-slate-300 font-bold">Effective Net Cost</span>
//                   <span className="font-black text-blue-400 text-lg">{selectedRow.effectiveCost}</span>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* PRISTINE STATIC PRICING MATRIX CHART */}
//         <div className="mt-12">
//           <div className="text-left mb-6">
//             <h3 className="text-xl font-bold text-slate-900 tracking-tight">Estimated Residential Savings Sheet</h3>
//             <p className="text-sm text-slate-500 mt-1">
//               Cross-reference system capacities directly against verified central government subsidy benchmarks.
//             </p>
//           </div>

//           <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
//             <table className="w-full min-w-[800px] border-collapse text-left text-sm">
//               <thead>
//                 <tr className="bg-[#1e40af] text-white font-bold tracking-wide">
//                   <th className="p-4 sm:p-5">Capacity</th>
//                   <th className="p-4 sm:p-5">Total Cost</th>
//                   <th className="p-4 sm:p-5 text-amber-300">Govt. Subsidy</th>
//                   <th className="p-4 sm:p-5">Effective Cost</th>
//                   <th className="p-4 sm:p-5">Units / Month</th>
//                   <th className="p-4 sm:p-5 text-emerald-300">Monthly Savings</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
//                 {pricingMatrix.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-slate-50/80 transition-colors odd:bg-slate-50/30">
//                     <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-2">
//                       {row.capacity}
//                       {row.popular && (
//                         <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-wider">
//                           Popular
//                         </span>
//                       )}
//                     </td>
//                     <td className="p-4 sm:p-5 text-slate-900">{row.totalCost}</td>
//                     <td className="p-4 sm:p-5 text-emerald-600 font-bold">{row.subsidy}</td>
//                     <td className="p-4 sm:p-5 text-[#1e40af] font-bold">{row.effectiveCost}</td>
//                     <td className="p-4 sm:p-5 text-slate-500">{row.displayUnits}</td>
//                     <td className="p-4 sm:p-5 text-emerald-600 font-extrabold">{row.savings}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="mt-4 flex items-start gap-2 text-xs text-slate-400 bg-white p-4 rounded-xl border border-slate-200 max-w-4xl">
//             <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
//             <p>
//               Subsidy applicable only for Residential Houses, Group Housing Societies and Community Centers. DISCOM charges apply where net-metering structures intersect local utility grids. Prices subject to change.
//             </p>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// }

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
                Why Choose Zenco
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Empowering Energy <br />
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Independence</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Zenco Solar integrates structural tier-1 hardware frameworks with intelligent telemetry arrays. We transition local corporate architectures into highly independent, clean power infrastructures optimized for sustained financial return.
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
                alt="Zenco Station Profile" 
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
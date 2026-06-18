
// import { motion } from 'framer-motion';
// import { Link, useOutletContext } from 'react-router-dom';
// import { 
//   ArrowLeft, 
//   Zap, 
//   HelpCircle, 
//   Trees, 
//   Sparkles
// } from 'lucide-react';
// import SEO from '../common/SEO';
// import { pageSeo } from '../../data/seo';
// import PageHero from '../ui/PageHero';
// import { useSolarCalculator, INDIAN_STATES } from '../../hooks/useSolarCalculator';

// const formatRupees = (amount) => {
//   if (amount === 0) return '₹0';
//   return new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//     maximumFractionDigits: 0
//   }).format(amount);
// };

// export default function SolarCalculatorLayout({ category, title, subtitle }) {
//   const {
//     bill,
//     setBill,
//     roofArea,
//     setRoofArea,
//     state,
//     setState,
//     systemSize,
//     cost,
//     subsidy,
//     annualSavings,
//     savings25,
//     payback,
//     co2,
//     taxBenefit
//   } = useSolarCalculator(category);

//   const outletContext = useOutletContext();
//   const openQuote = outletContext?.openQuote;

//   const categoryConfig = {
//     residential: {
//       accentColor: 'from-emerald-500 to-green-500',
//       shadowColor: 'shadow-emerald-500/20',
//       badgeText: 'Home Solar',
//       avgBillHint: 'Typical: ₹1,500 - ₹8,000',
//       avgAreaHint: 'Typical: 300 - 1,500 sq ft',
//       subsidyText: 'Government Subsidy Estimate',
//       subsidyDetail: 'Eligible for PM Surya Ghar Muft Bijli Yojana up to ₹78,000.',
//       factTitle: 'Net Metering Ready',
//       factDesc: 'Export excess power back to the grid and get credited on your monthly utility bill.',
//       image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
//       breadcrumb: 'Home / Solar Calculator / Residential'
//     },
//     commercial: {
//       accentColor: 'from-blue-500 to-cyan-500',
//       shadowColor: 'shadow-blue-500/20',
//       badgeText: 'Business Solar',
//       avgBillHint: 'Typical: ₹15,000 - ₹1,50,000',
//       avgAreaHint: 'Typical: 1,000 - 10,000 sq ft',
//       subsidyText: 'Government Subsidy Estimate',
//       subsidyDetail: 'No direct consumer subsidy. 40% Accelerated Depreciation tax benefits apply.',
//       factTitle: '40% Tax Depreciation',
//       factDesc: 'Businesses can claim 40% accelerated depreciation on solar assets in the first year.',
//       image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200',
//       breadcrumb: 'Home / Solar Calculator / Commercial'
//     },
//     industrial: {
//       accentColor: 'from-amber-500 to-orange-500',
//       shadowColor: 'shadow-amber-500/20',
//       badgeText: 'Industrial Solar',
//       avgBillHint: 'Typical: ₹1,00,000+',
//       avgAreaHint: 'Typical: 5,000 - 50,000+ sq ft',
//       subsidyText: 'Government Subsidy Estimate',
//       subsidyDetail: 'Commercial/Industrial scale is ineligible for subsidy but receives tax credits.',
//       factTitle: 'Accelerated ROI',
//       factDesc: 'Large scale installations lower cost-per-kW and yield payback in under 4 years.',
//       image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200',
//       breadcrumb: 'Home / Solar Calculator / Industrial'
//     }
//   };

//   const config = categoryConfig[category];

//   return (
//     <>
//       <SEO {...pageSeo[category]} />
      
//       <PageHero
//         title={title}
//         subtitle={subtitle}
//         image={config.image}
//         breadcrumb={config.breadcrumb}
//       />

//       {/* REFINED WRAPPER SECTION: Controlled height & tight padding to remove dead space */}
//       <section className="relative py-12 md:py-16 bg-slate-950 text-white overflow-hidden">
//         {/* Ambient Glow Elements */}
//         <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-emerald-500/5 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] pointer-events-none" />
//         <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />

//         <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          
//           {/* Action Header Nav */}
//           <div className="mb-6 flex items-center justify-between">
//             <Link 
//               to="/" 
//               className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-semibold group"
//             >
//               <ArrowLeft className="h-3.5 w-3.5 group-hover:text-emerald-400 transition-colors" />
//               Back to Home
//             </Link>
//           </div>

//           {/* Navigation Category Switcher Tabs - Tight and Compact */}
//           <div className="flex p-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/5 max-w-md mx-auto mb-10 shadow-xl">
//             {['residential', 'commercial', 'industrial'].map((type) => (
//               <Link
//                 key={type}
//                 to={`/${type}`}
//                 className={`flex-1 text-center py-2 px-4 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
//                   category === type
//                     ? `bg-gradient-to-r ${config.accentColor} text-white shadow-md ${config.shadowColor}`
//                     : 'text-slate-400 hover:text-white hover:bg-white/5'
//                 }`}
//               >
//                 {type.charAt(0).toUpperCase() + type.slice(1)}
//               </Link>
//             ))}
//           </div>

//           {/* CALCULATOR LAYOUT GRID: Seamless side-by-side transition */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
//             {/* LEFT SIDE: CONFIG PARAMETERS PANEL */}
//             <div className="lg:col-span-5">
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="bg-slate-900/30 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl"
//               >
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
//                     <Sparkles className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <h2 className="text-base font-bold text-white">Enter Parameters</h2>
//                     <p className="text-[11px] text-slate-400">Calculations adjust in real-time</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex justify-between">
//                       <span>Monthly Electricity Bill</span>
//                       <span className="text-[11px] text-slate-500 font-normal">{config.avgBillHint}</span>
//                     </label>
//                     <div className="relative rounded-xl shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
//                         <span className="text-slate-400 text-sm font-medium">₹</span>
//                       </div>
//                       <input
//                         type="number"
//                         min="0"
//                         value={bill}
//                         onChange={(e) => setBill(e.target.value)}
//                         className="block w-full pl-8 pr-4 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all font-semibold text-sm"
//                         placeholder="e.g. 5000"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex justify-between">
//                       <span>Available Roof Area</span>
//                       <span className="text-[11px] text-slate-500 font-normal">{config.avgAreaHint}</span>
//                     </label>
//                     <div className="relative rounded-xl shadow-sm">
//                       <input
//                         type="number"
//                         min="0"
//                         value={roofArea}
//                         onChange={(e) => setRoofArea(e.target.value)}
//                         className="block w-full px-3.5 pr-12 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all font-semibold text-sm"
//                         placeholder="e.g. 1000"
//                       />
//                       <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
//                         <span className="text-slate-500 text-xs font-medium">sq ft</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex justify-between">
//                       <span>Installation State</span>
//                     </label>
//                     <select
//                       value={state}
//                       onChange={(e) => setState(e.target.value)}
//                       className="block w-full px-3.5 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500/50 transition-all font-medium text-xs cursor-pointer"
//                     >
//                       <option value="">Select State (Default)</option>
//                       {INDIAN_STATES.map((st) => (
//                         <option key={st} value={st} className="bg-slate-950 text-white">
//                           {st}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 {/* Micro Tip Box */}
//                 <div className="mt-5 p-3 rounded-xl bg-white/[0.01] border border-white/5 flex gap-2.5">
//                   <div className="h-7 w-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
//                     <HelpCircle className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <h4 className="text-[11px] font-bold text-slate-200">{config.factTitle}</h4>
//                     <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">{config.factDesc}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* RIGHT SIDE: METRICS & SAVINGS REVEAL PANEL */}
//             <div className="lg:col-span-7">
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.05 }}
//                 className="bg-gradient-to-br from-slate-900/60 to-slate-950/80 border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden"
//               >
//                 <h2 className="text-lg font-bold text-white tracking-tight mb-5">Estimated Potential</h2>

//                 {/* Primary Badges Split */}
//                 <div className="grid grid-cols-2 gap-4 mb-5">
//                   <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
//                     <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Recommended System</span>
//                     <div className="flex items-baseline gap-1 mt-1">
//                       <span className="text-xl sm:text-2xl font-black text-white">{systemSize}</span>
//                       <span className="text-xs font-bold text-emerald-400">kW</span>
//                     </div>
//                   </div>

//                   <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
//                     <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Cost</span>
//                     <div className="flex items-baseline mt-1">
//                       <span className="text-xl sm:text-2xl font-black text-emerald-400">
//                         {cost > 0 ? formatRupees(cost) : '₹0'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Detailed Table Rows */}
//                 <div className="space-y-3 border-t border-b border-white/5 py-4 mb-5 text-xs">
//                   <div className="flex justify-between items-start gap-4">
//                     <span className="text-slate-400 font-medium">{config.subsidyText}</span>
//                     <div className="text-right">
//                       <span className="font-bold text-white">
//                         {category === 'residential' ? formatRupees(subsidy) : '₹0'}
//                       </span>
//                     </div>
//                   </div>

//                   {(category === 'commercial' || category === 'industrial') && taxBenefit > 0 && (
//                     <div className="flex justify-between items-center pt-2 border-t border-white/5">
//                       <span className="text-slate-400 font-medium">Est. Yr 1 Tax Savings (AD 40%)</span>
//                       <span className="font-bold text-cyan-400">{formatRupees(taxBenefit)}</span>
//                     </div>
//                   )}

//                   <div className="flex justify-between items-center pt-2 border-t border-white/5">
//                     <span className="text-slate-400 font-medium">Estimated Annual Savings</span>
//                     <span className="font-bold text-emerald-400 text-sm">{formatRupees(annualSavings)}</span>
//                   </div>

//                   <div className="flex justify-between items-center pt-2 border-t border-white/5">
//                     <span className="text-slate-400 font-medium">25-Year Savings</span>
//                     <span className="font-bold text-white text-sm">{formatRupees(savings25)}</span>
//                   </div>

//                   <div className="flex justify-between items-center pt-2 border-t border-white/5">
//                     <span className="text-slate-400 font-medium">Payback Period</span>
//                     <span className="font-bold text-orange-400">
//                       {payback > 0 ? `${payback} Years` : '0 Years'}
//                     </span>
//                   </div>

//                   <div className="flex justify-between items-center pt-2 border-t border-white/5">
//                     <span className="text-slate-400 font-medium">Annual CO₂ Reduction</span>
//                     <span className="font-bold text-green-400 flex items-center gap-1">
//                       <Trees className="h-3.5 w-3.5 text-emerald-400" />
//                       {co2} Tons
//                     </span>
//                   </div>
//                 </div>

//                 {/* Mini Eco Bar */}
//                 {systemSize > 0 && (
//                   <div className="mb-5 p-3 bg-slate-950/40 border border-white/5 rounded-xl">
//                     <div className="flex justify-between text-[10px] text-slate-400 mb-1.5">
//                       <span>Carbon Footprint Offset</span>
//                       <span className="text-emerald-400 font-semibold">
//                         + {Math.round(co2 * 15)} Trees / yr
//                       </span>
//                     </div>
//                     <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
//                       <div
//                         className={`h-full bg-gradient-to-r ${config.accentColor}`}
//                         style={{ width: `${Math.min(100, (systemSize / (category === 'residential' ? 15 : category === 'commercial' ? 100 : 1000)) * 100)}%` }}
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* Streamlined Bottom Layout Action */}
//                 <div>
//                   <button
//                     onClick={() => {
//                       if (openQuote) {
//                         openQuote();
//                       } else {
//                         window.scrollTo({
//                           top: document.body.scrollHeight,
//                           behavior: 'smooth'
//                         });
//                       }
//                     }}
//                     className={`w-full py-3 rounded-xl bg-gradient-to-r ${config.accentColor} hover:brightness-110 font-bold text-xs tracking-wide shadow-lg text-white transition-all flex items-center justify-center gap-1.5`}
//                   >
//                     <Zap className="h-4 w-4" />
//                     Get Detailed Proposal
//                   </button>
//                   <p className="text-center text-[9px] text-slate-500 mt-2.5">
//                     *Representation only. Real configurations vary based on official site validation.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>

//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
import { motion } from 'framer-motion';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowLeft, 
  HelpCircle, 
  Trees, 
  Sparkles
} from 'lucide-react';
import SEO from '../common/SEO';
import { pageSeo } from '../../data/seo';
import PageHero from '../ui/PageHero';
import { useSolarCalculator, INDIAN_STATES } from '../../hooks/useSolarCalculator';

const formatRupees = (amount) => {
  if (amount === 0) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export default function SolarCalculatorLayout({ category, title, subtitle }) {
  const {
    bill,
    setBill,
    roofArea,
    setRoofArea,
    state,
    setState,
    systemSize,
    cost,
    subsidy,
    annualSavings,
    savings25,
    payback,
    co2,
    taxBenefit
  } = useSolarCalculator(category);

  const categoryConfig = {
    residential: {
      accentColor: 'from-emerald-500 to-green-500',
      shadowColor: 'shadow-emerald-500/20',
      badgeText: 'Home Solar',
      avgBillHint: 'Typical: ₹1,500 - ₹8,000',
      avgAreaHint: 'Typical: 300 - 1,500 sq ft',
      subsidyText: 'Government Subsidy Estimate',
      subsidyDetail: 'Eligible for PM Surya Ghar Muft Bijli Yojana up to ₹78,000.',
      factTitle: 'Net Metering Ready',
      factDesc: 'Export excess power back to the grid and get credited on your monthly utility bill.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
      breadcrumb: 'Home / Solar Calculator / Residential'
    },
    commercial: {
      accentColor: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/20',
      badgeText: 'Business Solar',
      avgBillHint: 'Typical: ₹15,000 - ₹1,50,000',
      avgAreaHint: 'Typical: 1,000 - 10,000 sq ft',
      subsidyText: 'Government Subsidy Estimate',
      subsidyDetail: 'No direct consumer subsidy. 40% Accelerated Depreciation tax benefits apply.',
      factTitle: '40% Tax Depreciation',
      factDesc: 'Businesses can claim 40% accelerated depreciation on solar assets in the first year.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200',
      breadcrumb: 'Home / Solar Calculator / Commercial'
    },
    industrial: {
      accentColor: 'from-amber-500 to-orange-500',
      shadowColor: 'shadow-amber-500/20',
      badgeText: 'Industrial Solar',
      avgBillHint: 'Typical: ₹1,00,000+',
      avgAreaHint: 'Typical: 5,000 - 50,000+ sq ft',
      subsidyText: 'Government Subsidy Estimate',
      subsidyDetail: 'Commercial/Industrial scale is ineligible for subsidy but receives tax credits.',
      factTitle: 'Accelerated ROI',
      factDesc: 'Large scale installations lower cost-per-kW and yield payback in under 4 years.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200',
      breadcrumb: 'Home / Solar Calculator / Industrial'
    }
  };

  const config = categoryConfig[category];

  return (
    <>
      <SEO {...pageSeo[category]} />
      
      <PageHero
        title={title}
        subtitle={subtitle}
        image={config.image}
        breadcrumb={config.breadcrumb}
      />

      {/* REFINED WRAPPER SECTION: Controlled height & tight padding to remove dead space */}
      <section className="relative py-12 md:py-16 bg-slate-950 text-white overflow-hidden">
        {/* Ambient Glow Elements */}
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Action Header Nav */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-semibold group"
            >
              <ArrowLeft className="h-3.5 w-3.5 group-hover:text-emerald-400 transition-colors" />
              Back to Home
            </Link>
          </div>

          {/* Navigation Category Switcher Tabs - Tight and Compact */}
          <div className="flex p-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/5 max-w-md mx-auto mb-10 shadow-xl">
            {['residential', 'commercial', 'industrial'].map((type) => (
              <Link
                key={type}
                to={`/${type}`}
                className={`flex-1 text-center py-2 px-4 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  category === type
                    ? `bg-gradient-to-r ${config.accentColor} text-white shadow-md ${config.shadowColor}`
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Link>
            ))}
          </div>

          {/* CALCULATOR LAYOUT GRID: Seamless side-by-side transition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT SIDE: CONFIG PARAMETERS PANEL */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/30 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Enter Parameters</h2>
                    <p className="text-[11px] text-slate-400">Calculations adjust in real-time</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex justify-between">
                      <span>Monthly Electricity Bill</span>
                      <span className="text-[11px] text-slate-500 font-normal">{config.avgBillHint}</span>
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <span className="text-slate-400 text-sm font-medium">₹</span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                        className="block w-full pl-8 pr-4 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all font-semibold text-sm"
                        placeholder="e.g. 5000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex justify-between">
                      <span>Available Roof Area</span>
                      <span className="text-[11px] text-slate-500 font-normal">{config.avgAreaHint}</span>
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <input
                        type="number"
                        min="0"
                        value={roofArea}
                        onChange={(e) => setRoofArea(e.target.value)}
                        className="block w-full px-3.5 pr-12 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all font-semibold text-sm"
                        placeholder="e.g. 1000"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                        <span className="text-slate-500 text-xs font-medium">sq ft</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex justify-between">
                      <span>Installation State</span>
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="block w-full px-3.5 py-2.5 bg-slate-950/80 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500/50 transition-all font-medium text-xs cursor-pointer"
                    >
                      <option value="">Select State (Default)</option>
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st} className="bg-slate-950 text-white">
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Micro Tip Box */}
                <div className="mt-5 p-3 rounded-xl bg-white/[0.01] border border-white/5 flex gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-200">{config.factTitle}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">{config.factDesc}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: METRICS & SAVINGS REVEAL PANEL */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="bg-gradient-to-br from-slate-900/60 to-slate-950/80 border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden"
              >
                <h2 className="text-lg font-bold text-white tracking-tight mb-5">Estimated Potential</h2>

                {/* Primary Badges Split */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Recommended System</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-xl sm:text-2xl font-black text-white">{systemSize}</span>
                      <span className="text-xs font-bold text-emerald-400">kW</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Cost</span>
                    <div className="flex items-baseline mt-1">
                      <span className="text-xl sm:text-2xl font-black text-emerald-400">
                        {cost > 0 ? formatRupees(cost) : '₹0'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detailed Table Rows */}
                <div className="space-y-3 border-t border-b border-white/5 py-4 mb-5 text-xs">
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-slate-400 font-medium">{config.subsidyText}</span>
                    <div className="text-right">
                      <span className="font-bold text-white">
                        {category === 'residential' ? formatRupees(subsidy) : '₹0'}
                      </span>
                    </div>
                  </div>

                  {(category === 'commercial' || category === 'industrial') && taxBenefit > 0 && (
                    <div className="flex justify-between items-center pt-2 border-t border-white/5">
                      <span className="text-slate-400 font-medium">Est. Yr 1 Tax Savings (AD 40%)</span>
                      <span className="font-bold text-cyan-400">{formatRupees(taxBenefit)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">Estimated Annual Savings</span>
                    <span className="font-bold text-emerald-400 text-sm">{formatRupees(annualSavings)}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">25-Year Savings</span>
                    <span className="font-bold text-white text-sm">{formatRupees(savings25)}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">Payback Period</span>
                    <span className="font-bold text-orange-400">
                      {payback > 0 ? `${payback} Years` : '0 Years'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">Annual CO₂ Reduction</span>
                    <span className="font-bold text-green-400 flex items-center gap-1">
                      <Trees className="h-3.5 w-3.5 text-emerald-400" />
                      {co2} Tons
                    </span>
                  </div>
                </div>

                {/* Mini Eco Bar */}
                {systemSize > 0 && (
                  <div className="mb-5 p-3 bg-slate-950/40 border border-white/5 rounded-xl">
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1.5">
                      <span>Carbon Footprint Offset</span>
                      <span className="text-emerald-400 font-semibold">
                        + {Math.round(co2 * 15)} Trees / yr
                      </span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${config.accentColor}`}
                        style={{ width: `${Math.min(100, (systemSize / (category === 'residential' ? 15 : category === 'commercial' ? 100 : 1000)) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Streamlined Bottom Disclaimer */}
                <div>
                  <p className="text-center text-[9px] text-slate-500 mt-1">
                    *Representation only. Real configurations vary based on official site validation.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
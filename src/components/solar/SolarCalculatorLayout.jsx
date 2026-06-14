import { motion } from 'framer-motion';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowLeft, 
  Zap, 
  HelpCircle, 
  TrendingUp, 
  Trees, 
  CheckCircle2, 
  Sparkles,
  Percent,
  Building,
  DollarSign
} from 'lucide-react';
import SEO from '../common/SEO';
import { pageSeo } from '../../data/seo';
import PageHero from '../ui/PageHero';
import { useSolarCalculator, INDIAN_STATES } from '../../hooks/useSolarCalculator';
import Button from '../ui/Button';

// Utility to format number as Indian Rupees currency
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

  const outletContext = useOutletContext();
  const openQuote = outletContext?.openQuote;

  // Configuration settings for copy and illustrations based on Category
  const categoryConfig = {
    residential: {
      accentColor: 'from-emerald-500 to-green-500',
      shadowColor: 'shadow-emerald-500/20',
      badgeText: 'Home Solar',
      avgBillHint: 'Typical bill: ₹1,500 - ₹8,000 / month',
      avgAreaHint: 'Typical roof: 300 - 1,500 sq ft',
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
      avgBillHint: 'Typical bill: ₹15,000 - ₹1,50,000 / month',
      avgAreaHint: 'Typical roof: 1,000 - 10,000 sq ft',
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
      avgBillHint: 'Typical bill: ₹1,00,000+ / month',
      avgAreaHint: 'Typical roof: 5,000 - 50,000+ sq ft',
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
      
      {/* 1. HERO SECTION */}
      <PageHero
        title={title}
        subtitle={subtitle}
        image={config.image}
        breadcrumb={config.breadcrumb}
      />

      {/* 2. NAVIGATION & HEADER SECTION */}
      <section className="relative py-24 overflow-hidden bg-slate-950 text-white min-h-screen">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        <div className="container-custom relative z-10">
          
          {/* Breadcrumb Back Button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-semibold hover:-translate-x-1 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:text-emerald-400 transition-colors" />
              Back to Home
            </Link>
          </div>

          {/* Navigation Category Switcher Tabs */}
          <div className="flex p-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/5 max-w-lg mx-auto mb-16 shadow-2xl">
            {['residential', 'commercial', 'industrial'].map((type) => (
              <Link
                key={type}
                to={`/${type}`}
                className={`flex-1 text-center py-2.5 px-6 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  category === type
                    ? `bg-gradient-to-r ${config.accentColor} text-white shadow-lg ${config.shadowColor}`
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Link>
            ))}
          </div>

          {/* 3. CALCULATOR SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* LEFT COLUMN: FORM */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-6 sm:p-8 rounded-[32px] shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Enter Your Parameters</h2>
                    <p className="text-xs text-slate-400">Calculations adjust in real-time</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Monthly Bill Input */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2 flex justify-between">
                      <span>Monthly Electricity Bill</span>
                      <span className="text-xs text-slate-500 font-normal">{config.avgBillHint}</span>
                    </label>
                    <div className="relative rounded-2xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 text-lg font-medium">₹</span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                        className="block w-full pl-9 pr-4 py-4 bg-slate-950/60 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium text-lg"
                        placeholder="e.g. 5000"
                      />
                    </div>
                  </div>

                  {/* Roof Area Input */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2 flex justify-between">
                      <span>Available Roof Area</span>
                      <span className="text-xs text-slate-500 font-normal">{config.avgAreaHint}</span>
                    </label>
                    <div className="relative rounded-2xl shadow-sm">
                      <input
                        type="number"
                        min="0"
                        value={roofArea}
                        onChange={(e) => setRoofArea(e.target.value)}
                        className="block w-full px-4 pr-16 py-4 bg-slate-950/60 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium text-lg"
                        placeholder="e.g. 1000"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 text-sm font-medium">sq ft</span>
                      </div>
                    </div>
                  </div>

                  {/* State Select Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2 flex justify-between">
                      <span>Installation State</span>
                      <span className="text-xs text-slate-500 font-normal">Optional (Irradiance adjusted)</span>
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="block w-full px-4 py-4 bg-slate-950/60 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium"
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

                {/* Did You Know Fact Card */}
                <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-3">
                  <div className="h-8 w-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <HelpCircle className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{config.factTitle}</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{config.factDesc}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: RESULTS PANEL */}
            <div className="lg:col-span-7 lg:sticky lg:top-28 self-start">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Glowing edge highlight */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-3xl pointer-events-none" />
                
                <h2 className="text-2xl font-black text-white tracking-tight mb-8">Estimated Potential</h2>

                {/* Top Two Metrics: Size & Cost */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {/* Recommended System Size */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Recommended System</span>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl sm:text-4xl font-black text-white">{systemSize}</span>
                      <span className="text-lg font-bold text-emerald-400">kW</span>
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-1">
                      {roofArea ? `${Math.round(systemSize * 100)} sq ft roof utilized` : 'Estimated from inputs'}
                    </span>
                  </div>

                  {/* Estimated Installation Cost */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Estimated Cost</span>
                    <div className="flex items-baseline mt-2">
                      <span className="text-3xl sm:text-4xl font-black text-emerald-400">
                        {cost > 0 ? formatRupees(cost) : '₹0'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-1">Inclusive of typical panel & inverter costs</span>
                  </div>
                </div>

                {/* List of Other Metrics */}
                <div className="space-y-4 border-t border-b border-white/5 py-6 mb-8 text-sm">
                  {/* Government Subsidy */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium">{config.subsidyText}</span>
                      {category === 'residential' ? (
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">Surya Ghar</span>
                      ) : (
                        <span className="bg-white/5 text-slate-400 border border-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold">Tax Incentives</span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-white">
                        {category === 'residential' ? formatRupees(subsidy) : '₹0'}
                      </span>
                      <span className="block text-[10px] text-slate-500 max-w-[220px] leading-relaxed mt-1">
                        {config.subsidyDetail}
                      </span>
                    </div>
                  </div>

                  {/* Corporate Tax Benefits if C&I */}
                  {(category === 'commercial' || category === 'industrial') && taxBenefit > 0 && (
                    <div className="flex justify-between items-center py-2 border-t border-white/5">
                      <span className="text-slate-400 font-medium">Est. Yr 1 Tax Savings (AD 40%)</span>
                      <span className="font-extrabold text-cyan-400">
                        {formatRupees(taxBenefit)}
                      </span>
                    </div>
                  )}

                  {/* Annual Savings */}
                  <div className="flex justify-between items-center py-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">Estimated Annual Savings</span>
                    <span className="font-extrabold text-emerald-400 text-base">
                      {formatRupees(annualSavings)}
                    </span>
                  </div>

                  {/* 25-Year Savings */}
                  <div className="flex justify-between items-center py-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">25-Year Savings (Compounded)</span>
                    <span className="font-extrabold text-white text-base">
                      {formatRupees(savings25)}
                    </span>
                  </div>

                  {/* Payback Period */}
                  <div className="flex justify-between items-center py-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">Payback Period</span>
                    <span className="font-extrabold text-orange-400">
                      {payback > 0 ? `${payback} Years` : '0 Years'}
                    </span>
                  </div>

                  {/* CO2 Reduction */}
                  <div className="flex justify-between items-center py-2 border-t border-white/5">
                    <span className="text-slate-400 font-medium">Annual CO₂ Reduction</span>
                    <span className="font-extrabold text-green-400 flex items-center gap-1">
                      <Trees className="h-4 w-4 shrink-0 text-emerald-400" />
                      {co2} Tons
                    </span>
                  </div>
                </div>

                {/* Progress Visualizer */}
                {systemSize > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 p-4 bg-slate-950/60 border border-white/5 rounded-2xl"
                  >
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Environment Footprint Offset</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        + {Math.round(co2 * 15)} Trees Planted / yr
                      </span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${config.accentColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (systemSize / (category === 'residential' ? 15 : category === 'commercial' ? 100 : 1000)) * 100)}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* CTA Action Button */}
                <div className="mt-8">
                  <button
                    onClick={() => {
                      if (openQuote) {
                        openQuote();
                      } else {
                        // Fallback scrolling to contact
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`w-full py-4 rounded-2xl bg-gradient-to-r ${config.accentColor} hover:brightness-110 font-bold tracking-wide shadow-xl text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2`}
                  >
                    <Zap className="h-5 w-5 animate-pulse" />
                    Get Detailed Proposal
                  </button>
                  <p className="text-center text-[10px] text-slate-500 mt-3">
                    *Estimates are for representation. Real configurations may vary based on site surveys.
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

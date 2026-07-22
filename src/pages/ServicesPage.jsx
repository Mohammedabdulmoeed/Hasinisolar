import { useRef, useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion, useSpring, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Sparkles,
  Shield,
  Activity,
  Award,
  Cpu,
  Clock,
  TrendingUp,
  Battery,
  Layers,
  Radio,
  FileCheck,
  Wrench,
  MonitorPlay,
  HeartHandshake
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { pageSeo } from '../data/seo';
import { images } from '../data/images';
import PageHero from '../components/ui/PageHero';

// ----------------------------------------------------
// Sub-components
// ----------------------------------------------------

function FloatingCard({ text, subtext, positionClass, floatClass, icon: Icon, iconColor = "text-cyan-400" }) {
  return (
    
    <div className={`absolute z-10 glass-card-2026 rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-white/10 ${positionClass} ${floatClass} pointer-events-none hover:scale-105 transition-transform duration-300`}>
      <div className="flex items-center gap-2.5">
        {Icon && (
          <div className={`p-2 bg-white/5 rounded-xl shrink-0 ${iconColor}`}>
            <Icon className="h-4 w-4" />
          </div>
        )}
        <div>
          <p className="text-xs sm:text-sm font-bold text-white font-display tracking-tight leading-none mb-1">{text}</p>
          {subtext && <p className="text-[9px] sm:text-[10px] font-medium text-slate-400 leading-none">{subtext}</p>}
        </div>
      </div>
    </div>
  );
}

function SolarButton({ children, to, onClick, variant = "primary" }) {
  const prefersReducedMotion = useReducedMotion();
  const isPrimary = variant === "primary";

  const content = (
    <span className="flex items-center justify-center gap-2">
      {children}
      <motion.span
        className="inline-block"
        animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowRight className="h-4 w-4" />
      </motion.span>
    </span>
  );

  const baseClass = "px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 inline-flex items-center justify-center text-center";
 const styling = isPrimary
  ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-bold shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 border border-yellow-300"
  : "bg-white text-slate-900 border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 shadow-lg hover:shadow-amber-500/30";
  if (to) {
    return (
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
        className="inline-block"
      >
        <Link to={to} className={`${baseClass} ${styling}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      className={`${baseClass} ${styling}`}
    >
      {content}
    </motion.button>
  );
}

// ----------------------------------------------------
// Page Component
// ----------------------------------------------------

export default function ServicesPage() {
  
  const openQuote = useOutletContext()?.openQuote;
  const prefersReducedMotion = useReducedMotion();
  const timelineRef = useRef(null);

  // Timeline Scroll Tracking
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });
  const lineScaleX = useSpring(timelineScroll, { stiffness: 100, damping: 30 });

  // Animation Variants
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <>
      <SEO {...pageSeo.services} />
      return (

    <PageHero
      title="Our Solar Services"
      subtitle="Comprehensive solar energy solutions for residential, commercial, and industrial customers."
      image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
      breadcrumb="Home / Services"
    />

      {/* =========================================
         SECTION 1: SERVICES HERO
         ========================================= */}
      <section className="relative min-h-[15vh] flex items-center justify-center overflow-hidden py-24 bg-white">
        {/* Soft background light mesh glow & particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute inset-0 futuristic-grid opacity-30" />
          <div className="absolute inset-0 particles-container opacity-25" />
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-600 uppercase tracking-widest"
          >
            <Zap className="h-3.5 w-3.5 fill-emerald-100" />
            Our Solar Solutions
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] font-display"
          >
            Complete Solar Energy Solutions <br />
            <span className="text-liquid-gradient font-extrabold">For Every Need</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed"
          >
            From residential rooftops to large industrial installations, we provide end-to-end solar solutions designed to reduce energy costs and maximize long-term savings.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <SolarButton to="/contact" >
              Get Free Consultation
            </SolarButton>
            <SolarButton to="/solar-calculator" variant="outline">
              Calculate Savings
            </SolarButton>
          </motion.div>
        </div>
      </section>
{/* =========================================
    SECTION 2: RESIDENTIAL SOLAR SYSTEMS
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-slate-50/50 overflow-hidden w-full select-none text-left">
  
  {/* Modern Architectural Subtle Mesh Layer */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
  </div>

  {/* Expanded Widescreen Canvas Constraint (max-w-7xl & lg:px-20) */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full service-split-grid">
      
      {/* Left Image Column (Remains Left Side) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInLeft}
        className="lg:col-span-6 relative w-full pb-6 lg:pb-0"
      >
        {/* Soft Background Blur Flare */}
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[40px] opacity-10 blur-xl pointer-events-none" />
        
        {/* Main Image Wrapper */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 shadow-2xl group cursor-pointer aspect-[4/3] bg-slate-100 w-full">
          <img
            src={images.Residential_Solar_Systems}
            alt="SunVolt Residential Solar System"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
        </div>
        
        {/* Floating Metrics Cards */}
        <FloatingCard
          text="90% Bill Reduction"
          subtext="Average Monthly Savings"
          positionClass="absolute top-[8%] left-[-2%] z-20"
          floatClass="card-float-y-1"
          icon={TrendingUp}
          iconColor="text-emerald-500"
        />
        <FloatingCard
          text="30+ Years Performance"
          subtext="Manufacturer Warranty"
          positionClass="absolute bottom-[8%] right-[-2%] z-20"
          floatClass="card-float-y-2"
          icon={Shield}
          iconColor="text-sky-500"
        />
      </motion.div>

      {/* Right Content Column (Remains Right Side) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInRight}
        className="lg:col-span-6 flex flex-col items-start"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-6">
          <Sparkles className="h-3 w-3 text-sky-500" /> Home Energy
        </span>
        
        {/* UPGRADED HEADING: Heavyweight, high-contrast title architecture */}
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Residential <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
            Solar Infrastructure.
          </span>
        </h2>
        
        <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          High-efficiency rooftop solar architectural designs built custom to zero-out residential electricity bills and secure permanent energy autonomy for your home.
        </p>

        {/* Features Checklist Array */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            "Lower Electricity Bills",
            "Government Subsidy Support",
            "Net Metering Benefits",
            "30-Year Performance Warranty"
          ].map((feat) => (
            <motion.li
              key={feat}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-slate-700 text-sm font-bold"
            >
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </motion.li>
          ))}
        </ul>

        {/* UPGRADED BUTTON: Solar golden button format with glow metrics */}
        <div className="mt-10 w-full sm:w-auto">
          <Link
            to="/solar-calculator"
            className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_16px_32px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
          </Link>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* =========================================
    SECTION 3: COMMERCIAL SOLAR SYSTEMS
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-white overflow-hidden w-full select-none text-left">
  
  {/* Modern Architectural Subtle Mesh Layer */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
  </div>

  {/* Expanded Widescreen Outer Shell Wrapper */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full service-split-grid">
      
      {/* LEFT COLUMN: Deep Narrative Content Block (6 Columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInLeft}
        className="lg:col-span-6 flex flex-col items-start"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-6">
          <Sparkles className="h-3 w-3 text-sky-500" /> Corporate Grid
        </span>
        
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Commercial <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
            Solar Frameworks.
          </span>
        </h2>
        
        <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          Drastically drop raw operational overhead metrics and secure permanent sustainability parameters across offices, schools, distribution parks, and large commercial facilities.
        </p>

        {/* Checked Feature Items Grid */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            "Lower Operating Costs",
            "Fast Return On Investment",
            "Sustainable Business Growth",
            "Scalable Installations"
          ].map((feat) => (
            <motion.li
              key={feat}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-slate-700 text-sm font-bold"
            >
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 w-full sm:w-auto">
  <Link
    to="/solar-calculator"
    className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_16px_32px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
  >
    <span>Learn More</span>
    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
  </Link>
</div>
      </motion.div>

      {/* RIGHT COLUMN: Asymmetrical Floating Media Box (6 Columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInRight}
        className="lg:col-span-6 relative w-full pt-6 lg:pt-0"
      >
        {/* Soft Background Layer Behind Frame */}
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[40px] opacity-10 blur-xl pointer-events-none" />
        
        {/* Primary Image Node Canvas */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 shadow-2xl group cursor-pointer aspect-[4/3] bg-slate-100 w-full">
          <img
            src={images.commercial}
            alt="SunVolt Commercial Solar Infrastructure"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Data Display Cards */}
        <FloatingCard
          text="₹45,000 / mo Savings"
          subtext="Average Corporate Efficiency"
          positionClass="absolute top-[8%] right-[-2%] z-20"
          floatClass="card-float-y-3"
          icon={Layers}
          iconColor="text-sky-500"
        />
        <FloatingCard
          text="Tax Benefits & 5-Yr ROI"
          subtext="Accelerated Depreciation"
          positionClass="absolute bottom-[8%] left-[-2%] z-20"
          floatClass="card-float-y-1"
          icon={Award}
          iconColor="text-emerald-500"
        />
      </motion.div>

    </div>
  </div>
</section>

      {/* =========================================
    SECTION 4: INDUSTRIAL SOLAR SYSTEMS
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-slate-50/50 overflow-hidden w-full select-none text-left">
  
  {/* Modern High-Tech Ambient Backdrop Fields */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
  </div>

  {/* Expanded Widescreen Canvas Constraint (max-w-7xl & lg:px-20) */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full service-split-grid">
      
      {/* Left Image Column (Remains Left Side) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInLeft}
        className="lg:col-span-6 relative w-full pb-6 lg:pt-0"
      >
        {/* Soft Background Blur Flare */}
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[40px] opacity-10 blur-xl pointer-events-none" />
        
        {/* Main Image Wrapper */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 shadow-2xl group cursor-pointer aspect-[4/3] bg-slate-100 w-full">
          <img
            src={images.industrial_solar}
            alt="SunVolt Industrial Solar System"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Data Display Cards */}
        <FloatingCard
          text="320 kW Peak Output"
          subtext="High-Output Live Generation"
          positionClass="absolute top-[8%] left-[-2%] z-20"
          floatClass="card-float-y-2"
          icon={Cpu}
          iconColor="text-emerald-500"
        />
        <FloatingCard
          text="850 MWh Generated"
          subtext="Annual Clean Energy Yield"
          positionClass="absolute bottom-[8%] right-[-2%] z-20"
          floatClass="card-float-y-3"
          icon={Activity}
          iconColor="text-sky-500"
        />
      </motion.div>

      {/* Right Content Column (Remains Right Side) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInRight}
        className="lg:col-span-6 flex flex-col items-start"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-6">
          <Sparkles className="h-3 w-3 text-sky-500" /> Enterprise Scale
        </span>
        
        {/* UPGRADED HEADING: Heavyweight, split brand-gradient architecture */}
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Industrial <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
            Solar Infrastructure.
          </span>
        </h2>
        
        <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          High-capacity energy generation arrays custom engineered to process complex megawatt demands for factories, manufacturing campuses, and distribution centers.
        </p>

        {/* Features Checklist Array */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            "High Energy Output",
            "Reduced Production Costs",
            "Large-Scale Installations",
            "Reliable Performance"
          ].map((feat) => (
            <motion.li
              key={feat}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-slate-700 text-sm font-bold"
            >
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </motion.li>
          ))}
        </ul>

        {/* UPGRADED BUTTON: Solar golden button format with glow metrics */}
        <div className="mt-10 w-full sm:w-auto">
          <Link
            to="/solar-calculator"
            className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_16px_32px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
          </Link>
        </div>
      </motion.div>

    </div>
  </div>
</section>
    {/* =========================================
    SECTION 5: ON-GRID SOLAR SYSTEMS
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-white overflow-hidden w-full select-none text-left">
  
  {/* Modern Architectural Subtle Mesh Layer */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
  </div>

  {/* Expanded Widescreen Canvas Constraint (max-w-7xl & lg:px-20) */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full service-split-grid">
      
      {/* LEFT COLUMN: Narrative Content Block (6 Columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInLeft}
        className="lg:col-span-6 flex flex-col items-start"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-6">
          <Sparkles className="h-3 w-3 text-sky-500" /> Utility Connected
        </span>
        
        {/* UPGRADED HEADING: Heavyweight, high-contrast title architecture */}
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          On-Grid <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
            Solar Frameworks.
          </span>
        </h2>
        
        <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          Connect your custom solar cell architecture directly into the electricity grid, feeding clean excess yield backwards to maximize localized net-metering credits.
        </p>

        {/* Features Checklist Array */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            "Net Metering Support",
            "Lower Electricity Bills",
            "High ROI Metrics",
            "Smart Power Monitoring"
          ].map((feat) => (
            <motion.li
              key={feat}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-slate-700 text-sm font-bold"
            >
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </motion.li>
          ))}
        </ul>

        {/* UPGRADED BUTTON: Solar golden button format with glow metrics */}
        <div className="mt-10 w-full sm:w-auto">
          <Link
            to="/solar-calculator"
            className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_16px_32px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
          </Link>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: Asymmetrical Floating Media Box (6 Columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInRight}
        className="lg:col-span-6 relative w-full pt-6 lg:pt-0"
      >
        {/* Soft Background Layer Behind Frame */}
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[40px] opacity-10 blur-xl pointer-events-none" />
        
        {/* Primary Image Node Canvas */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 shadow-2xl group cursor-pointer aspect-[4/3] bg-slate-100 w-full">
          <img
            src={images.On1}
            alt="SunVolt On-Grid Utility Solar System"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Data Display Card */}
        <FloatingCard
          text="Net Metering Active"
          subtext="Grid Upload Stream Enabled"
          positionClass="absolute top-[12%] right-[-2%] z-20"
          floatClass="card-float-y-1"
          icon={Radio}
          iconColor="text-sky-500"
        />
      </motion.div>

    </div>
  </div>
</section>
      {/* =========================================
    SECTION 6: OFF-GRID SOLAR SYSTEMS
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-slate-50/50 overflow-hidden w-full select-none text-left">
  
  {/* Modern High-Tech Ambient Backdrop Fields */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
  </div>

  {/* Expanded Widescreen Canvas Constraint (max-w-7xl & lg:px-20) */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full service-split-grid">
      
      {/* Left Image Column (Remains Left Side) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInLeft}
        className="lg:col-span-6 relative w-full pb-6 lg:pt-0"
      >
        {/* Soft Background Layer Behind Frame */}
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[40px] opacity-10 blur-xl pointer-events-none" />
        
        {/* Primary Image Node Canvas */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 shadow-2xl group cursor-pointer aspect-[4/3] bg-slate-100 w-full">
          <img
            src={images.offgrid_solar}
            alt="SunVolt Off-Grid Battery Solar Infrastructure"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Data Display Card */}
        <FloatingCard
          text="100% Autonomous"
          subtext="Off-grid Independent Power"
          positionClass="absolute top-[8%] left-[-2%] z-20"
          floatClass="card-float-y-3"
          icon={Battery}
          iconColor="text-emerald-500"
        />
      </motion.div>

      {/* Right Content Column (Remains Right Side) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInRight}
        className="lg:col-span-6 flex flex-col items-start"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-6">
          <Sparkles className="h-3 w-3 text-sky-500" /> Grid Free
        </span>
        
        {/* UPGRADED HEADING: Heavyweight, split brand-gradient architecture */}
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Off-Grid <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
            Solar Frameworks.
          </span>
        </h2>
        
        <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          Achieve complete energy independence with battery-backed solar arrays engineered to supply consistent baseline electricity parameters completely independent of the utility grid.
        </p>

        {/* Features Checklist Array */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            "Energy Independence",
            "Battery Storage Support",
            "Reliable Backup Power",
            "Remote Area Solutions"
          ].map((feat) => (
            <motion.li
              key={feat}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-slate-700 text-sm font-bold"
            >
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </motion.li>
          ))}
        </ul>

        {/* UPGRADED BUTTON: Solar golden button format with glow metrics */}
        <div className="mt-10 w-full sm:w-auto">
          <Link
            to="/solar-calculator"
            className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_16px_32px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
          </Link>
        </div>
      </motion.div>

    </div>
  </div>
</section>

     {/* =========================================
    SECTION 7: HYBRID SOLAR SYSTEMS
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-white overflow-hidden w-full select-none text-left">
  
  {/* Modern Architectural Subtle Mesh Layer */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
  </div>

  {/* Expanded Widescreen Canvas Constraint (max-w-7xl & lg:px-20) */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full service-split-grid">
      
      {/* LEFT COLUMN: Narrative Content Block (6 Columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInLeft}
        className="lg:col-span-6 flex flex-col items-start"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-6">
          <Sparkles className="h-3 w-3 text-sky-500" /> Smart Storage
        </span>
        
        {/* UPGRADED HEADING: Heavyweight, high-contrast title architecture */}
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Hybrid <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
            Solar Frameworks.
          </span>
        </h2>
        
        <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          Combine the absolute best performance parameters of grid-tied functionality with independent battery backups, regulated by real-time automated energy allocation management.
        </p>

        {/* Features Checklist Array */}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {[
            "Battery Backup Support",
            "Grid Integration Benefits",
            "Smart Energy Control",
            "Maximum Efficiency Index"
          ].map((feat) => (
            <motion.li
              key={feat}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-slate-700 text-sm font-bold"
            >
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </motion.li>
          ))}
        </ul>

        {/* UPGRADED BUTTON: Solar golden button format with glow metrics */}
        <div className="mt-10 w-full sm:w-auto">
          <Link
            to="/solar-calculator"
            className="flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_16px_32px_rgba(245,158,11,0.45)] hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
          </Link>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: Asymmetrical Floating Media Box (6 Columns) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideInRight}
        className="lg:col-span-6 relative w-full pt-6 lg:pt-0"
      >
        {/* Soft Background Layer Behind Frame */}
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[40px] opacity-10 blur-xl pointer-events-none" />
        
        {/* Primary Image Node Canvas */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 shadow-2xl group cursor-pointer aspect-[4/3] bg-slate-100 w-full">
          <img
            src={images.Hybrid}
            alt="SunVolt Hybrid Smart Solar Installation"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Data Display Card */}
        <FloatingCard
          text="Smart Switch Active"
          subtext="AI Optimized Storage Mode"
          positionClass="absolute top-[12%] right-[-2%] z-20"
          floatClass="card-float-y-2"
          icon={Cpu}
          iconColor="text-sky-500"
        />
      </motion.div>

    </div>
  </div>
</section>

      {/* =========================================
    SECTION 8: WHY CHOOSE SUNVOLT SOLAR
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-slate-50 overflow-hidden w-full select-none text-left">
  
  {/* Engineering Vector Mesh Backdrop */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-sky-200/20 to-emerald-200/20 rounded-full blur-[160px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
  </div>

  {/* Expanded Wide Container Canvas */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    
    {/* Upper Section Header Layout */}
    <div className="max-w-3xl mb-16 sm:mb-20">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-4">
        <Sparkles className="h-3 w-3 text-sky-500 animate-pulse" /> The SunVolt Solar Edge
      </span>
      <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
        Why Choose <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
          SunVolt Solar.
        </span>
      </h2>
      <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
        We combine high-performance equipment, certified engineering architecture, and premium warranties to guarantee maximum solar yield generation.
      </p>
    </div>

    {/* Unified Architectural Card Array Container */}
    <motion.div
      variants={cardContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
    >
      {[
        { 
          title: "Expert Engineering", 
          desc: "Custom structured designs mapped specifically to your roof alignment and shadows to ensure maximum sun absorption parameters.", 
          icon: Cpu,
          colors: "text-sky-600 bg-sky-50 border-sky-100"
        },
        { 
          title: "Premium Components", 
          desc: "We deploy exclusively Tier-1 grade monocrystalline modules, high-efficiency smart inverters, and high-tensile structural fasteners.", 
          icon: Layers,
          colors: "text-emerald-600 bg-emerald-50 border-emerald-100"
        },
        { 
          title: "Subsidy Support", 
          desc: "End-to-end documentation processing support for government incentives, ensuring state solar subsidies route directly to you.", 
          icon: FileCheck,
          colors: "text-cyan-600 bg-cyan-50 border-cyan-100"
        },
        { 
          title: "Professional Installation", 
          desc: "Highly experienced execution teams ensuring tight structural protection safety grids, wind resistance, and zero load risks.", 
          icon: Wrench,
          colors: "text-indigo-600 bg-indigo-50 border-indigo-100"
        },
        { 
          title: "Smart Monitoring", 
          desc: "Track real-time power generation metrics, multi-generational carbon offsets, array health variables, and net metering statuses directly.", 
          icon: MonitorPlay,
          colors: "text-amber-600 bg-amber-50 border-amber-100"
        },
        { 
          title: "Dedicated Support", 
          desc: "Prompt lifetime operational warranty assistance, scheduled structural checkups, and responsive clean alerts option streams.", 
          icon: HeartHandshake,
          colors: "text-rose-600 bg-rose-50 border-rose-100"
        }
      ].map((card, idx) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={idx}
            variants={fadeInUpVariants}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="group relative overflow-hidden rounded-[32px] bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer flex flex-col justify-between"
          >
            {/* Discrete Left Glowing Accent Border Line */}
            <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-slate-200 group-hover:bg-gradient-to-b group-hover:from-sky-500 group-hover:to-emerald-500 transition-colors duration-400" />
            
            <div>
              {/* Card Meta Row */}
              <div className="flex items-center justify-between mb-8">
                <div className={`p-4 rounded-2xl shadow-inner shrink-0 ${card.colors}`}>
                  <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-slate-100 font-mono font-black text-3xl select-none group-hover:text-slate-200 transition-colors">
                  /0{idx + 1}
                </span>
              </div>

              {/* Text Information Stack */}
              <h4 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                {card.title}
              </h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {card.desc}
              </p>
            </div>

            {/* Premium Clean Action Link Decoration */}
            <div className="mt-8 pt-4 border-t border-slate-50 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
              <span>Explore Parameters</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

     {/* =========================================
    SECTION 9: PROJECT PROCESS (Timeline)
    ========================================= */}
<section ref={timelineRef} className="section-padding bg-white overflow-hidden">
  <div className="container-custom">
    <div className="text-center mb-16">
      <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">The Journey</span>
      <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900">
        Our Project Process
      </h2>
      <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base">
        From initial contact to final net-meter connection, we ensure a seamless and transparent solar installation experience.
      </p>
    </div>


    <div className="relative w-full max-w-6xl mx-auto px-4">
   
      <div className="hidden md:block absolute top-[44px] left-10 right-10 h-[3px] bg-slate-100 rounded-full overflow-hidden z-0">
        <motion.div
          style={{ scaleX: lineScaleX, originX: 0 }}
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
        />
      </div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

        className="grid grid-cols-1 md:grid-cols-6 gap-4 relative z-10"
      >
        {[
          { step: "01", title: "Consultation", desc: "Evaluate your roof and electricity load.", color: "border-emerald-400 text-emerald-500 bg-emerald-50" },
          { step: "02", title: "Site Survey", desc: "Detailed structural and shadow analysis.", color: "border-teal-400 text-teal-500 bg-teal-50" },
          { step: "03", title: "Design & Proposal", desc: "blueprints, shadow plots, and cost-benefit reports.", color: "border-cyan-400 text-cyan-500 bg-cyan-50" },
          { step: "04", title: "Installation", desc: "Mount panels and install string inverters.", color: "border-blue-400 text-blue-500 bg-blue-50" },
          { step: "05", title: "Testing", desc: "Rigorous quality, electrical audit and net metering.", color: "border-indigo-400 text-indigo-500 bg-indigo-50" },
          { step: "06", title: "Support", desc: "Commissioning system on mobile app tracking.", color: "border-purple-400 text-purple-500 bg-purple-50" },
        ].map((proc, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            whileHover={{ y: -6 }}
         
            className="flex flex-col items-center md:items-start text-center md:text-left relative group"
          >
            
            <div className={`h-[56px] w-[56px] rounded-full border-2 ${proc.color} flex items-center justify-center font-bold text-lg mb-4 sm:mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 z-10`}>
              {proc.step}
            </div>

            <h3 className="text-sm font-bold font-display text-slate-900 leading-tight mb-2 min-[1150px]:text-lg">
              {proc.title}
            </h3>
            
            <p className="text-slate-500 text-xs leading-relaxed px-4 md:px-0">
              {proc.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
      {/* =========================================
         SECTION 10: FINAL CTA (Dark emerald banner)
         ========================================= */}
      <section className="py-20 bg-white px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-2xl relative overflow-hidden py-16 px-6 sm:px-12 md:py-24 text-center border border-white/5"
        >
          {/* Animated glow meshes */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-20%] left-[-20%] h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-[-20%] right-[-20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 particles-container opacity-20" />
            <div className="absolute inset-0 futuristic-grid opacity-10" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Join the future
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              Ready To Switch To Solar?
            </h2>

            <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover how much you can save with a customized solar solution from Sun Volt Solar Energies. Let's build your clean energy independence blueprint today.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <SolarButton to = "/contact">
                Get Free Consultation
              </SolarButton>
              
              <Link
                to="/solar-calculator"
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 text-white hover:text-emerald-400 hover:border-emerald-400 bg-white/5 backdrop-blur-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                Calculate My Savings
                <motion.span
                  animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

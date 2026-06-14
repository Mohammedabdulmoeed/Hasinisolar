import { useRef, useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion, useSpring, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Zap,
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
      image={images.office}
      breadcrumb="Home / Services"
    />

      {/* =========================================
         SECTION 1: SERVICES HERO
         ========================================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 bg-white">
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
      <section className="section-padding overflow-hidden bg-slate-50/50">
        <div className="container-custom">
          <div className="row-split items-center lg:gap-16">
            {/* Left Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="row-split-media relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
                <img
                  src={images.futuristic_energy_home}
                  alt="ZENCO Residential Solar System"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>
              
              {/* Floating Cards */}
              <FloatingCard
                text="90% Bill Reduction"
                subtext="Average Monthly Savings"
                positionClass="top-[10%] left-[-4%]"
                floatClass="card-float-y-1"
                icon={TrendingUp}
                iconColor="text-emerald-400"
              />
              <FloatingCard
                text="25+ Years Performance"
                subtext="Manufacturer Warranty"
                positionClass="bottom-[12%] right-[-4%]"
                floatClass="card-float-y-2"
                icon={Shield}
                iconColor="text-cyan-400"
              />
            </motion.div>

            {/* Right Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="row-split-content"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Home Energy</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Residential Solar Systems</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                High-efficiency rooftop solar systems designed to reduce electricity bills and increase energy independence for homeowners.
              </p>

              {/* Features List */}
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Lower Electricity Bills",
                  "Government Subsidy Support",
                  "Net Metering Benefits",
                  "25-Year Performance Warranty"
                ].map((feat) => (
                  <motion.li
                    key={feat}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700 text-sm font-semibold"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <SolarButton to="/residential">
                  Learn More
                </SolarButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 3: COMMERCIAL SOLAR SYSTEMS
         ========================================= */}
      <section className="section-padding overflow-hidden bg-white">
        <div className="container-custom">
          <div className="row-split items-center lg:gap-16">
            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="row-split-content order-split-second min-[980px]:order-1 lg:order-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Corporate Grid</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Commercial Solar Systems</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Reduce operational expenses and improve sustainability with advanced solar solutions for offices, malls, schools, hospitals, and commercial facilities.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Lower Operating Costs",
                  "Fast Return On Investment",
                  "Sustainable Business Growth",
                  "Scalable Installations"
                ].map((feat) => (
                  <motion.li
                    key={feat}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700 text-sm font-semibold"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <SolarButton to="/commercial">
                  Learn More
                </SolarButton>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="row-split-media order-split-first min-[980px]:order-2 lg:order-2 relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
                <img
                  src={images.commercial_solar}
                  alt="ZENCO Commercial Solar System"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>

              {/* Floating cards */}
              <FloatingCard
                text="₹45,000 / mo Savings"
                subtext="Average Office Efficiency"
                positionClass="top-[12%] right-[-4%]"
                floatClass="card-float-y-3"
                icon={Layers}
                iconColor="text-cyan-400"
              />
              <FloatingCard
                text="Tax Benefits & 5-Yr ROI"
                subtext="Accelerated Depreciation"
                positionClass="bottom-[10%] left-[-4%]"
                floatClass="card-float-y-1"
                icon={Award}
                iconColor="text-amber-400"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 4: INDUSTRIAL SOLAR SYSTEMS
         ========================================= */}
      <section className="section-padding overflow-hidden bg-slate-50/50">
        <div className="container-custom">
          <div className="row-split items-center lg:gap-16">
            {/* Left Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="row-split-media relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
                <img
                  src={images.industrial_solar}
                  alt="ZENCO Industrial Solar System"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>

              {/* Floating stats card */}
              <FloatingCard
                text="320 kW Peak Output"
                subtext="High-Output Live Generation"
                positionClass="top-[10%] left-[-4%]"
                floatClass="card-float-y-2"
                icon={Cpu}
                iconColor="text-emerald-400"
              />
              <FloatingCard
                text="850 MWh Generated"
                subtext="Annual Clean Energy Yield"
                positionClass="bottom-[12%] right-[-4%]"
                floatClass="card-float-y-3"
                icon={Activity}
                iconColor="text-cyan-400"
              />
            </motion.div>

            {/* Right Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="row-split-content"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Enterprise Scale</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Industrial Solar Systems</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                High-capacity solar power solutions engineered for factories, manufacturing units, warehouses, and industrial facilities.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "High Energy Output",
                  "Reduced Production Costs",
                  "Large-Scale Installations",
                  "Reliable Performance"
                ].map((feat) => (
                  <motion.li
                    key={feat}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700 text-sm font-semibold"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <SolarButton to="/industrial">
                  Learn More
                </SolarButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 5: ON-GRID SOLAR SYSTEMS
         ========================================= */}
      <section className="section-padding overflow-hidden bg-white">
        <div className="container-custom">
          <div className="row-split items-center lg:gap-16">
            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="row-split-content order-split-second min-[980px]:order-1 lg:order-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Utility Connected</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">On-Grid Solar Systems</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Connect your solar system directly to the electricity grid and maximize savings through net-metering benefits.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Net Metering Support",
                  "Lower Electricity Bills",
                  "High ROI",
                  "Smart Monitoring"
                ].map((feat) => (
                  <motion.li
                    key={feat}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700 text-sm font-semibold"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <SolarButton to="/solar-calculator">
                  Learn More
                </SolarButton>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="row-split-media order-split-first min-[980px]:order-2 lg:order-2 relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
                <img
                  src={images.On1}
                  alt="ZENCO On-Grid Utility Solar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>

              {/* Floating card */}
              <FloatingCard
                text="Net Metering Active"
                subtext="Grid Upload Stream Enabled"
                positionClass="top-[12%] right-[-4%]"
                floatClass="card-float-y-1"
                icon={Radio}
                iconColor="text-cyan-400"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 6: OFF-GRID SOLAR SYSTEMS
         ========================================= */}
      <section className="section-padding overflow-hidden bg-slate-50/50">
        <div className="container-custom">
          <div className="row-split items-center lg:gap-16">
            {/* Left Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="row-split-media relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
                <img
                  src={images.offgrid_solar}
                  alt="ZENCO Off-Grid Battery Solar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>

              {/* Floating Card */}
              <FloatingCard
                text="100% Autonomous"
                subtext="Off-grid Independent Power"
                positionClass="top-[10%] left-[-4%]"
                floatClass="card-float-y-3"
                icon={Battery}
                iconColor="text-emerald-400"
              />
            </motion.div>

            {/* Right Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="row-split-content"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Grid Free</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Off-Grid Solar Systems</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Achieve complete energy independence with battery-backed solar systems designed for locations without reliable grid access.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Energy Independence",
                  "Battery Storage Support",
                  "Reliable Backup Power",
                  "Remote Area Solutions"
                ].map((feat) => (
                  <motion.li
                    key={feat}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700 text-sm font-semibold"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <SolarButton to='/solar-calculator'>
                  Learn More
                </SolarButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 7: HYBRID SOLAR SYSTEMS
         ========================================= */}
      <section className="section-padding overflow-hidden bg-white">
        <div className="container-custom">
          <div className="row-split items-center lg:gap-16">
            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="row-split-content order-split-second min-[980px]:order-1 lg:order-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Smart Storage</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Hybrid Solar Systems</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Combine the benefits of on-grid and off-grid systems with intelligent energy management and battery backup.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Battery Backup Support",
                  "Grid Integration benefits",
                  "Smart Energy Control",
                  "Maximum Efficiency Index"
                ].map((feat) => (
                  <motion.li
                    key={feat}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700 text-sm font-semibold"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <SolarButton to='/solar-calculator'>
                  Learn More
                </SolarButton>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="row-split-media order-split-first min-[980px]:order-2 lg:order-2 relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
                <img
                  src={images.Hybrid}
                  alt="ZENCO Hybrid Smart Solar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>

              {/* Floating card */}
              <FloatingCard
                text="Smart Switch Active"
                subtext="AI Optimized Storage Mode"
                positionClass="top-[12%] right-[-4%]"
                floatClass="card-float-y-2"
                icon={Cpu}
                iconColor="text-cyan-400"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 8: WHY CHOOSE ZENCO
         ========================================= */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">The ZENCO Edge</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900">
            Why Choose ZENCO Solar Energies
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base">
            We combine high-performance equipment, certified engineering, and premium warranties to guarantee maximum solar savings.
          </p>

          {/* Grid of 6 Unique (non-repetitive) cards */}
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Card 1: Expert Engineering (Gradient Style) */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-xl flex flex-col items-start text-left relative overflow-hidden group cursor-pointer"
            >
              <div className="p-3 bg-white/10 rounded-2xl mb-6 text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display leading-tight mb-3">Expert Engineering</h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                Custom structured designs mapped specifically to your roof alignment and shadows to ensure maximum sun absorption.
              </p>
              <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-32 h-32 rounded-full bg-white/5 blur-xl pointer-events-none" />
            </motion.div>

            {/* Card 2: Premium Components (Clean border, glow hover) */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-white border border-slate-100 shadow-lg flex flex-col items-start text-left relative overflow-hidden group cursor-pointer hover:border-cyan-400 hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">Premium Components</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We use exclusively Tier-1 monocrystalline panels, micro-inverters, and high-tensile hot-dip structural fasteners.
              </p>
            </motion.div>

            {/* Card 3: Government Subsidy Assistance (Glassmorphism layout) */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-white/60 border border-slate-200/50 backdrop-blur-xl shadow-lg flex flex-col items-start text-left relative overflow-hidden group cursor-pointer hover:border-emerald-400 transition-all duration-300"
            >
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">Subsidy Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                End-to-end documentation support for PM-Surya Ghar Muft Bijli Yojana, ensuring subsidies flow directly to you.
              </p>
            </motion.div>

            {/* Card 4: Professional Installation (Horizontal layout effect) */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-white border border-slate-100 shadow-lg flex flex-col items-start text-left relative overflow-hidden group cursor-pointer hover:border-teal-400 transition-all duration-300 lg:col-span-1"
            >
              <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">Professional Installation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Highly experienced execution team ensuring structured safety parameters, zero structural load risks, and prompt service.
              </p>
            </motion.div>

            {/* Card 5: Smart Monitoring (Radial gradient shine background style) */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-slate-950 text-white shadow-xl flex flex-col items-start text-left relative overflow-hidden group cursor-pointer"
            >
              {/* Radial gradient background accent */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none" />
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-6 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-300 z-10">
                <MonitorPlay className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3 z-10">Smart Monitoring</h3>
              <p className="text-slate-300 text-sm leading-relaxed z-10">
                Track real-time generation metrics, carbon offsets, system health parameters and net metering credits on your mobile device.
              </p>
            </motion.div>

            {/* Card 6: Dedicated Support (Dark border style) */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-white border border-slate-200/80 hover:border-amber-400 shadow-lg flex flex-col items-start text-left relative overflow-hidden group cursor-pointer transition-all duration-300"
            >
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">Dedicated Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prompt maintenance support, regular structural checkups, array cleaning alerts, and performance warranty guarantees.
              </p>
            </motion.div>
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
              Discover how much you can save with a customized solar solution from ZENCO Solar Energies. Let's build your clean energy independence blueprint today.
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

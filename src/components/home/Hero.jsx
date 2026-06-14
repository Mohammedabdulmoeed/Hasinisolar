import { useRef, useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Shield, Activity, Zap, CheckCircle } from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';
import HeroVisual from './HeroVisual';

const headlineText = "Powering Tomorrow With Intelligent Solar Energy";
const trustItems = [
  "✓ MNRE Compliant",
  "✓ Tier-1 Solar Panels",
  "✓ Net Metering Support",
  "✓ 25-Year Performance Warranty",
  "✓ End-To-End Installation"
];

const stats = [
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: ' MW+', label: 'Installed Capacity' },
  { value: 100, suffix: '%', label: 'Customer Satisfaction' },
  { value: 25, suffix: '+', label: 'Years Performance Warranty' },
];

const solarSolutions = [
  "Residential Solar Systems",
  "Commercial Solar Systems",
  "Industrial Solar Systems",
  "On-Grid Solar Systems",
  "Off-Grid Solar Systems",
  "Hybrid Solar Systems",
];

const indicatorColors = [
  "bg-emerald-400 shadow-[0_0_12px_#10b981]",
  "bg-cyan-400 shadow-[0_0_12px_#06b6d4]",
  "bg-amber-400 shadow-[0_0_12px_#fbbf24]",
  "bg-teal-400 shadow-[0_0_12px_#14b8a6]",
  "bg-sky-400 shadow-[0_0_12px_#38bdf8]",
  "bg-emerald-400 shadow-[0_0_12px_#10b981]",
];

function HeroStatCard({ value, suffix, label }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div
      ref={ref}
      className="glass-card-2026 rounded-2xl p-4 flex flex-col items-start transition-all duration-300 hover:-translate-y-1"
    >
      <span className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight leading-none mb-1.5 flex items-baseline">
        <span>{count}</span>
        <span className="text-cyan-400 font-extrabold">{suffix}</span>
      </span>
      <span className="text-[10px] sm:text-xs font-medium text-slate-400 leading-tight">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const outletContext = useOutletContext();
  const openQuote = outletContext?.openQuote;
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '15%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '-5%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Load animations trigger
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [solutionIndex, setSolutionIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSolutionIndex((prev) => (prev + 1) % solarSolutions.length);
    }, 3300);
    return () => clearInterval(timer);
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const headlineWordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const words = headlineText.split(" ");

  return (
    <section
      ref={containerRef}
      className="hero-aurora-bg min-h-screen relative flex flex-col justify-between overflow-hidden pt-24 md:pt-28 pb-12"
    >
      {/* 2026 Background Layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY, opacity: opacityFade }}
      >
        {/* Animated Mesh/Aurora Orbs */}
        <div className="aurora-orb aurora-emerald" />
        <div className="aurora-orb aurora-cyan" />
        <div className="aurora-orb aurora-gold" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 futuristic-grid opacity-80" />
        {/* Soft glowing drift particles */}
        <div className="absolute inset-0 particles-container opacity-30" />
        {/* Dark mask overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/80" />
      </motion.div>

      {/* Main Split Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        style={{ y: contentY, opacity: opacityFade }}
        className="container-custom relative z-10 flex-grow grid grid-cols-1 min-[980px]:grid-cols-12 gap-12 min-[980px]:gap-8 items-center py-8"
      >
        {/* LEFT COLUMN: Ultra-Premium Content Stack */}
        <div className="min-[980px]:col-span-7 flex flex-col items-start min-w-0">
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 px-4 py-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            ZENCO Next-Gen Energy
          </motion.div>

          {/* Heading with word-by-word reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] font-display text-left"
          >
            <motion.span
              variants={containerVariants}
              className="inline-flex flex-wrap"
            >
              {words.map((word, idx) => {
                const cleanWord = word.replace(/[^a-zA-Z]/g, "");
                const isGradient = ["Intelligent", "Solar", "Energy"].includes(cleanWord);
                return (
                  <motion.span
                    key={idx}
                    variants={headlineWordVariants}
                    className={`inline-block mr-2.5 sm:mr-3.5 pb-1 ${
                      isGradient
                        ? "text-liquid-gradient font-extrabold glow-text-cyan"
                        : "text-white font-bold"
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.span>
          </motion.h1>

          {/* Rotating Solar Solutions Pill */}
          <motion.div
            variants={itemVariants}
            className="mt-6 relative group overflow-hidden rounded-full p-[1.5px] bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-amber-500/30 shadow-[0_0_25px_rgba(6,182,212,0.1)] inline-flex"
            animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-full bg-slate-950/80 backdrop-blur-2xl px-6 py-3.5 flex items-center gap-3.5 sm:gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              <AnimatePresence mode="wait">
                <motion.div
                   key={solutionIndex}
                   initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                   animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                   exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                   transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                   className="flex items-center gap-3.5 sm:gap-4"
                >
                  <span className="relative flex h-3.5 w-3.5 shrink-0">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-65 transition-colors duration-500 ${indicatorColors[solutionIndex]}`} />
                    <span className={`relative inline-flex h-3.5 w-3.5 rounded-full transition-colors duration-500 ${indicatorColors[solutionIndex]}`} />
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[2.4rem] font-extrabold tracking-tight text-liquid-gradient leading-none">
                    {solarSolutions[solutionIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Subtext explaining core value props */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-sans"
          >
            Reduce electricity bills by up to <strong className="text-white">90%</strong>. Get government subsidies of up to <strong className="text-white">₹78,000</strong>. Optimize performance in real-time with AI-driven energy monitoring. Invest in clean, sustainable energy independence backed by a <strong className="text-white">25-year warranty</strong>.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Magnetic CTA */}
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="relative rounded-full overflow-hidden shadow-lg hover:shadow-emerald-500/25 transition-shadow duration-300"
            >
              <Link
                to="/solar-calculator"
                className="btn-border-trail inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white uppercase tracking-wider w-full text-center"
              >
                Calculate Your Savings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Secondary CTA */}
           <motion.div
  whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -1 }}
  whileTap={prefersReducedMotion ? {} : { scale: 0.99 }}
>
  <Link
    to="/contact#contact-form"
    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-300 hover:text-white uppercase tracking-wider rounded-full border border-white/10 hover:border-cyan-400 bg-white/5 backdrop-blur-xl transition-all duration-300 w-full sm:w-auto"
  >
    Book Free Consultation
  </Link>
</motion.div>
          </motion.div>

          {/* Desktop Statistics Stack */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-12 w-full grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat, idx) => (
              <HeroStatCard key={idx} {...stat} />
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Cinematic Solar Visualization */}
        <motion.div
          variants={itemVariants}
          className="min-[980px]:col-span-5 relative w-full flex items-center justify-center min-w-0"
        >
          <HeroVisual />
        </motion.div>
      </motion.div>

      {/* Trust Indicators Bar (Bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="container-custom relative z-10 mt-8 min-w-0"
      >
        <div className="w-full border-t border-b border-white/5 bg-slate-900/30 backdrop-blur-md py-4.5 px-4 overflow-hidden rounded-2xl">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase text-center">
            {trustItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -0.5 }}
                className="flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                {item.replace("✓ ", "")}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
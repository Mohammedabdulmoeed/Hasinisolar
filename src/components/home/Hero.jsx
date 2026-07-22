import { useRef, useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Button } from 'antd';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Headphones, 
  ChevronDown, 
  Zap 
} from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';
import HeroVisual from './HeroVisual';
import heroBgImage from '../../assets/hero/backgound.png';
import './Hero.css';

const headlineWords = [
  { text: "Powering", isGradient: false },
  { text: "The Future", isGradient: false },
  { text: "With", isGradient: false },
  { text: "Solar Energy", isGradient: true }
];

const trustStats = [
  { value: 100, suffix: "+", label: "Projects Completed", icon: Award },
  { value: 2, suffix: "+", label: "Years Experience", icon: ShieldCheck },
  { value: 24, suffix: "/7", label: "Support", icon: Headphones }
];

function HeroStatCounter({ value, suffix, label, icon: IconComponent }) {
  const { count, ref } = useCounter(value, 2200);
  return (
    <motion.div 
      ref={ref} 
      className="flex flex-col items-start shrink-0"
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="flex items-center gap-0.5 text-amber-400 font-extrabold text-3xl sm:text-4xl font-mono tracking-tight drop-shadow-[0_0_15px_rgba(245,180,0,0.35)]">
        <span>{count}</span>
        <span className="text-amber-300">{suffix}</span>
      </div>
      <div className="text-xs font-bold text-slate-300 mt-1 flex items-center gap-1.5 uppercase tracking-wider">
        <IconComponent className="h-3.5 w-3.5 text-teal-400 shrink-0 hidden sm:inline" aria-hidden="true" />
        <span>{label}</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const outletContext = useOutletContext();
  const openQuote = outletContext?.openQuote;
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Desktop mode / Desktop site detection
  const forceDesktop =
    typeof navigator !== 'undefined' &&
    (navigator.userAgent.includes("Windows") ||
     navigator.userAgent.includes("Macintosh") ||
     navigator.userAgent.includes("X11") ||
     navigator.userAgent.includes("Linux x86_64") ||
     navigator.userAgentData?.mobile === false);

  const [isDesktopLayout, setIsDesktopLayout] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 992 || forceDesktop;
  });

  const [isAndroidDesktopSite, setIsAndroidDesktopSite] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ua = navigator.userAgent || '';
      const isAndroidUA = /Android|Linux|X11/i.test(ua);
      const isDesktopSiteViewport = width >= 900 && width <= 1100 && height < 900;
      
      setIsDesktopLayout(width >= 992 || forceDesktop);
      setIsAndroidDesktopSite(isAndroidUA && isDesktopSiteViewport);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [forceDesktop]);

  // Mouse move handler for subtle background parallax
  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Scroll Parallax & Scale Dynamics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '-6%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const magneticButtonSpring = {
    type: "spring",
    stiffness: 400,
    damping: 20
  };

  return (
    <section
      ref={containerRef}
      className={`hero-canvas-root ${
        isDesktopLayout ? 'force-desktop-hero' : ''
      } ${isAndroidDesktopSite ? 'android-desktop-site-hero' : ''}`}
      id="hero"
      aria-label="SunVolt Solar Hero Section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="hero-bg-image-layer">
        <motion.img
          src={heroBgImage}
          alt="SunVolt Solar Floating Energy Island Background"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.03, 1],
            x: mousePos.x * 20,
            y: mousePos.y * 20
          }}
          transition={{
            scale: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 0.3, ease: 'easeOut' },
            y: { duration: 0.3, ease: 'easeOut' }
          }}
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="hero-bg-overlay" />

      {/* Sunlight Lens Flare Burst */}
      <motion.div 
        className="hero-sun-lensflare"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles Overlay */}
      {[
        { top: '18%', left: '20%', delay: 0 },
        { top: '38%', left: '45%', delay: 1 },
        { top: '72%', left: '30%', delay: 2 },
        { top: '22%', left: '78%', delay: 0.5 },
        { top: '68%', left: '85%', delay: 1.5 },
      ].map((particle, idx) => (
        <motion.div
          key={idx}
          className="absolute h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_12px_#f5b400] pointer-events-none z-10"
          style={{ top: particle.top, left: particle.left }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 4 + idx,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* 2. MAIN CSS GRID CONTAINER (42% / 58%) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        style={{ y: contentY, opacity: opacityFade }}
        className="hero-grid-container"
      >
        {/* LEFT COLUMN: FLEXBOX COLUMN LAYOUT */}
        <div className="hero-left-flex-column">
          
          {/* Animated Glass Badge */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="hero-glass-badge inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full text-xs font-black tracking-widest text-amber-400 uppercase cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={magneticButtonSpring}
            >
              <div className="hero-badge-spark" />
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <Zap className="h-4 w-4 text-amber-300 fill-amber-300/30" />
              <span>SunVolt Solar</span>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="hero-heading-text"
          >
            {headlineWords.map((word, idx) => (
              <motion.div key={idx} variants={wordVariants} className="block">
                {word.isGradient ? (
                  <span className="text-solar-4color-gradient inline-block">
                    {word.text}
                  </span>
                ) : (
                  <span className="text-white inline-block">
                    {word.text}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.h1>

          {/* Subheading Paragraph */}
          <motion.p
            variants={itemVariants}
            className="hero-paragraph-text"
          >
            Architecting utility-scale Solar EPC, Commercial, Industrial, and Residential renewable grid infrastructures. Engineered with 24/7 intelligent O&M telemetry and turnkey electrical services to achieve complete zero-carbon energy autonomy.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants} className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.96 }}
              transition={magneticButtonSpring}
            >
              <Button
                type="primary"
                size="large"
                onClick={() => openQuote ? openQuote() : window.location.href = '/contact#contact-form'}
                className="btn-primary-golden border-none flex items-center gap-2 group h-auto"
                aria-label="Get Free Quote"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Statistics Row */}
          <motion.div
            variants={itemVariants}
            className="hero-stats-row"
          >
            {trustStats.map((stat, index) => (
              <HeroStatCounter key={index} {...stat} />
            ))}
          </motion.div>

        </div>

        {/* RIGHT COLUMN: FLOATING DASHBOARD CARDS OVER BACKGROUND */}
        <div className="relative w-full flex items-center justify-center">
          <HeroVisual isDesktopLayout={isDesktopLayout} isAndroidDesktopSite={isAndroidDesktopSite} />
        </div>

      </motion.div>

      {/* 3. BOTTOM SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center gap-1.5 pb-4 mt-auto"
      >
        <motion.a 
          href="#services" 
          whileHover={{ y: 3 }}
          className="flex flex-col items-center gap-1.5 text-[10px] font-extrabold tracking-widest text-slate-300 hover:text-amber-400 transition-colors uppercase decoration-none cursor-pointer"
          aria-label="Scroll down to explore services"
        >
          <div className="mouse-scroll-box">
            <div className="mouse-scroll-dot" />
          </div>
          <span className="flex items-center gap-1">
            SCROLL TO EXPLORE
            <ChevronDown className="h-3 w-3 animate-bounce text-amber-400" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
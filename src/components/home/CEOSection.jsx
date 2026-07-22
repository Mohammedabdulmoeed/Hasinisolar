import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  User, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Quote 
} from 'lucide-react';
import ceoImage from '../../assets/hero/ceo.jpeg';
import './CEOSection.css';

const achievementCards = [
  {
    title: "100+ Projects Completed",
    description: "Utility-scale Commercial, Industrial & Residential Solar Installations",
    icon: Award,
    highlightColor: "text-amber-400"
  },
  {
    title: "25+ Years Combined Expertise",
    description: "End-to-End Solar EPC, High-Voltage Electrical & O&M Operations",
    icon: ShieldCheck,
    highlightColor: "text-teal-400"
  },
  {
    title: "Trusted Across India",
    description: "24/7 Real-Time Telemetry Monitoring & 30-Year Performance Warranties",
    icon: CheckCircle2,
    highlightColor: "text-sky-400"
  }
];

export default function CEOSection() {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Android Chrome Desktop Site Detection
  const [isAndroidDesktopSite, setIsAndroidDesktopSite] = useState(false);

  useEffect(() => {
    const checkAndroidDesktopSite = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ua = navigator.userAgent || '';
      const isAndroidUA = /Android|Linux|X11/i.test(ua);
      const isDesktopSiteViewport = width >= 900 && width <= 1100 && height < 900;
      setIsAndroidDesktopSite(isAndroidUA && isDesktopSiteViewport);
    };

    checkAndroidDesktopSite();
    window.addEventListener('resize', checkAndroidDesktopSite);
    return () => window.removeEventListener('resize', checkAndroidDesktopSite);
  }, []);

  // Mouse parallax for the CEO portrait
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

  // Stagger Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      className={`ceo-section-root relative z-10 ${
        isAndroidDesktopSite ? 'android-desktop-site-ceo' : ''
      }`} 
      id="ceo-message"
      aria-label="CEO Leadership Message"
    >
      {/* Background Atmosphere */}
      <div className="ceo-space-bg" />
      <div className="ceo-grid-pattern" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* TOP MAIN SPLIT GRID (45% LEFT / 55% RIGHT) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ceo-main-grid"
        >
          {/* ===================================================================
              LEFT COLUMN (45% WIDE - CEO PORTRAIT IN GLASS FRAME)
              =================================================================== */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative w-full flex flex-col items-center ceo-left-col"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glowing Aura Behind Image */}
            <div className="ceo-image-glow-aura pointer-events-none" />

            {/* Floating Glass Portrait Frame */}
            <motion.div 
              className="ceo-portrait-frame w-full max-w-[460px] float-portrait-anim cursor-pointer"
              style={{
                transform: prefersReducedMotion ? 'none' : `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img 
                src={ceoImage} 
                alt="CEO & Managing Director - Sun Volt Solars"
                className="ceo-portrait-img"
                loading="lazy"
              />

              {/* Glass Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />

              {/* Floating Quote Tag overlay on image */}
              <div className="absolute top-4 right-4 h-11 w-11 rounded-2xl bg-amber-500/20 backdrop-blur-xl border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-lg">
                <Quote className="h-5 w-5" />
              </div>

              {/* Glass Name Bar on Image Bottom */}
              <div className="absolute bottom-4 inset-x-4 glass-card-ceo p-4 border border-amber-400/30">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-black tracking-widest uppercase mb-0.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  Executive Leadership
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Managing Director
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  SunVolt Solar
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ===================================================================
              RIGHT COLUMN (55% WIDE - EXECUTIVE MESSAGE)
              =================================================================== */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col items-start text-left ceo-right-col"
          >
            {/* 1. Small Animated Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="ceo-glass-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black tracking-widest text-amber-400 uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                </span>
                <User className="h-4 w-4 text-amber-300" />
                <span>MESSAGE FROM OUR CEO</span>
              </div>
            </motion.div>

            {/* 2. Large Heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans"
            >
              Leading India's <span className="text-ceo-gold-gradient">Energy Transformation</span>
            </motion.h2>

            {/* 3. Executive Message Copy (~190 Words) */}
            <motion.div variants={itemVariants} className="mt-6 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-normal">
              <p>
                "At SunVolt Solar, our vision is built on an unwavering commitment to engineering excellence, technological innovation, and trust. As India accelerates towards clean energy independence, we are proud to be at the forefront—delivering utility-scale Solar EPC, turnkey commercial and industrial solar installations, and 24/7 intelligent O&M operations.
              </p>
              <p>
                We believe that transitioning to solar is more than just installing photovoltaic panels; it is about building resilient, high-efficiency grid infrastructure that empowers enterprises, safeguards our environment, and drives sustainable economic growth. Every project we undertake is executed with zero-downtime reliability, tier-1 MNRE-compliant components, and rigorous safety standards.
              </p>
              <p>
                Our commitment extends far beyond technology. We build enduring partnerships with our clients, providing end-to-end support throughout the 30-year performance lifecycle of their solar assets. Together with our engineers and partners, we are shaping a zero-carbon future for generations to come."
              </p>
            </motion.div>

            {/* 4. Signature Block */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-between flex-wrap gap-4"
            >
              <div>
                <h4 className="text-lg font-bold text-white tracking-wide">
                  Executive Leadership
                </h4>
                <p className="text-sm font-semibold text-amber-400">
                  Founder & Managing Director, SunVolt Solar
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="h-3.5 w-3.5" /> Clean Energy Vision
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* ===================================================================
            BOTTOM: THREE PREMIUM ACHIEVEMENT CARDS
            =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 ceo-achievement-cards-grid"
        >
          {achievementCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="ceo-achievement-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-900/80 border border-white/15 flex items-center justify-center shrink-0 group-hover:border-amber-400/50 transition-colors">
                    <IconComponent className={`h-6 w-6 ${card.highlightColor}`} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Activity,
  Award,
  Clock,
  Compass,
  CheckCircle,
  Zap,
  Target,
  Eye,
  Sparkles,
  Heart,
  Cpu,
  Bookmark,
  CheckSquare,
  ShieldAlert,
  Flame,
  Leaf
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { pageSeo } from '../data/seo';
import { images } from '../data/images';
import { useCounter } from '../hooks/useCounter';
import MissionVision from '../components/home/MissionVision';

// ----------------------------------------------------
// Reusable About Sub-components
// ----------------------------------------------------

function AboutStatCard({ value, prefix = "", suffix = "", label, icon: Icon }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div
      ref={ref}
      className="glass-card-2026 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-white/5 bg-slate-900/60 backdrop-blur-md"
    >
      <div className="p-3 bg-white/5 rounded-2xl mb-4 text-emerald-400 shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-1 flex items-baseline">
        <span>{prefix}</span>
        <span>{count}</span>
        <span className="text-emerald-400 font-extrabold">{suffix}</span>
      </span>
      <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest leading-none">{label}</span>
    </div>
  );
}

function AboutCTAButton({ children, onClick, to, variant = "primary" }) {
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

  const baseClass = "px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 inline-flex items-center justify-center text-center cursor-pointer";
  const styling = isPrimary
    ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-bold shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.03]"
    : "border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 bg-transparent";

  if (to) {
    if (to.startsWith("#")) {
      return (
        <a href={to} className={`${baseClass} ${styling}`}>
          {content}
        </a>
      );
    }
    return (
      <Link to={to} className={`${baseClass} ${styling}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClass} ${styling}`}>
      {content}
    </button>
  );
}

// ----------------------------------------------------
// Main About Page Component
// ----------------------------------------------------

export default function AboutPage() {
  const openQuote = useOutletContext()?.openQuote;
  const prefersReducedMotion = useReducedMotion();
  const journeySectionRef = useRef(null);

  // Timeline Scroll Progress
  const { scrollYProgress: journeyScroll } = useScroll({
    target: journeySectionRef,
    offset: ["start center", "end center"]
  });
  const lineScaleY = useSpring(journeyScroll, { stiffness: 100, damping: 30 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 35 },
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
      <SEO {...pageSeo.about} />
      
      {/* =====================================================================
        PASSED BACKGROUND IMAGE DOWN TO PAGEHERO HOOK
        =====================================================================
      */}
      <PageHero
        title="About Us"
        subtitle="Build your future with a team that values excellence, growth, and innovation."
        image="https://images.unsplash.com/photo-1694327671697-730cc4c5b9e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        breadcrumb="Home / About"
      />
      {/* =========================================
         SECTION 2: ABOUT COMPANY SECTION
         ========================================= */}
      <section className="section-padding bg-white overflow-hidden text-left">
        <div className="container-custom px-4">
          <div className="row-split items-center lg:gap-16">
            
            {/* Left Image Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="row-split-media relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
                <img
                  src={images.office}
                  alt="Hasini Solar Enterprises & Solutions Installation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>
            </motion.div>

            {/* Right Details Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="row-split-content"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Who We Are</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Premium Solar EPC Partners</h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-base">
                At Hasini Solar Enterprises & Solutions, we provide end-to-end engineering, procurement, and construction (EPC) services. We specialize in planning, structurally validating, and installing clean energy solar systems tailored specifically for residential, commercial, and industrial facilities.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Our team is committed to deploying exclusively Tier-1 monocrystalline panels, micro-inverters, and safety structures that meet rigorous MNRE guidelines to deliver high-capacity operational returns.
              </p>

              {/* Quick info cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-sm font-bold text-slate-900 font-display mb-1">Rooftop Solar EPC</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Turnkey setup from technical site analysis to active net-meter connection.</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-sm font-bold text-slate-900 font-display mb-1">Industrial Blueprints</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">High-capacity microgrid systems custom engineered for factories and campuses.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 3: MISSION & VISION
         ========================================= */}
      <MissionVision />

      {/* =========================================
         SECTION 5: OUR JOURNEY (Vertical Timeline)
         ========================================= */}
      <section ref={journeySectionRef} className="section-padding bg-slate-900 text-white relative overflow-hidden">
        {/* Soft background light mesh glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sans">Timeline</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-white">Our Journey</h2>
          </div>

          <div className="max-w-3xl mx-auto relative px-4 text-left">
            {/* Scroll-Linked Progress Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-white/10 rounded-full md:-translate-x-px z-0">
              <motion.div
                style={{ scaleY: lineScaleY, originY: 0 }}
                className="h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"
              />
            </div>

            {[
              { year: "2024", title: "Company Founded", desc: "Established with a vision to build decentralized clean energy networks across southern India." },
              { year: "2024", title: "First Project", desc: "Successfully completed our first high-capacity industrial rooftop array in Adilabad." },
              { year: "2025", title: "100+ Installations", desc: "Deployed modular hybrid systems and corporate net offsets PAN India." },
              { year: "2026", title: "PAN India Expansion", desc: "Actively expanding clean tech distribution and operations nodes to 15+ major metros." }
            ].map((mile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block md:w-1/2" />
                
                {/* Timeline node marker */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 -translate-x-1.5 md:-translate-x-2 mt-1.5 shadow-[0_0_10px_#10b981] z-10" />

                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <span className="text-emerald-400 font-extrabold text-lg sm:text-xl font-display">{mile.year}</span>
                  <h4 className="font-bold text-white text-base sm:text-lg mt-1 leading-tight">{mile.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">{mile.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    SECTION 6: STANDARDS & CERTIFICATIONS
    ========================================= */}
<section className="relative py-28 lg:py-40 bg-slate-50 overflow-hidden w-full select-none text-left">
  
  {/* Engineering Vector Mesh Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-sky-200/20 to-emerald-200/20 rounded-full blur-[160px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
  </div>

  {/* Full Widescreen Outer Frame */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full">
      
      {/* LEFT LAYER: Sticky Dynamic Headline Block (4 Columns) */}
      <div className="lg:col-span-4 lg:sticky lg:top-36 flex flex-col items-start space-y-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner">
          <Sparkles className="h-3 w-3 text-sky-500 animate-pulse" /> Compliance Framework
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Standards & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
            Certifications.
          </span>
        </h2>
        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs pt-2">
          Every project configuration undergoes structural compliance verification to guarantee grid authorization.
        </p>
      </div>

      {/* RIGHT LAYER: Asymmetrical Interactive Card Track (8 Columns) */}
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-stretch">
        {[
          { title: "MNRE Approved", desc: "Fully compliant with Ministry of New and Renewable Energy parameters for seamless regional implementation.", icon: CheckSquare, colors: "text-emerald-600 bg-emerald-50 border-emerald-100" },
          { title: "ISO Certified", desc: "Rigorous ISO quality management and eco-execution metrics systematically active across all operations.", icon: Shield, colors: "text-sky-600 bg-sky-50 border-sky-100" },
          { title: "Net Metering Partner", desc: "Certified and registered advisor for integrated local DISCOM solar grid upload configuration.", icon: Compass, colors: "text-cyan-600 bg-cyan-50 border-cyan-100" },
          { title: "Tier-1 Solar Arrays", desc: "Exclusive framework supply contracts ensuring procurement of exclusively top-rated cell efficiency lines.", icon: Bookmark, colors: "text-indigo-600 bg-indigo-50 border-indigo-100" }
        ].map((cert, idx) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-[32px] bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer flex flex-col justify-between"
            >
              {/* Discrete Left Glowing Accent Border */}
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-slate-200 group-hover:bg-gradient-to-b group-hover:from-sky-500 group-hover:to-emerald-500 transition-colors duration-400" />
              
              <div>
                {/* Dynamic Counter Index Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl shadow-inner shrink-0 ${cert.colors}`}>
                    <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-slate-100 font-mono font-black text-3xl select-none group-hover:text-slate-200 transition-colors">
                    /0{idx + 1}
                  </span>
                </div>

                {/* Typography Stack */}
                <h4 className="text-xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-sky-600 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              {/* Technical Validation Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                <span>Verified Component</span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  </div>
</section>
    
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        {/* Animated gradient mesh backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px]" />
          <div className="absolute inset-0 particles-container opacity-25" />
        </div>

        <div className="container-custom relative z-10 px-4 text-center max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-sans">By the Numbers</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-white mb-12">Why Choose Hasini Solar Enterprises & Solutions</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <AboutStatCard value={200} suffix=" kW+" label="Total Installed" icon={Zap} />
            <AboutStatCard value={14} suffix="K+Tons" label="CO₂ Saved" icon={Leaf} />
            <AboutStatCard value={100} suffix="%" label="Satisfaction" icon={Heart} />
            <AboutStatCard value={30} suffix="%" label="ROI Improvement" icon={TrendingUp} />
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 8: FINAL CTA SECTION
         ========================================= */}
      <section className="py-20 bg-white px-4 overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-2xl relative overflow-hidden py-16 px-6 sm:px-12 md:py-24 text-center border border-white/5"
        >
          {/* Animated glowing background blobs */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-20%] left-[-20%] h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-[-20%] right-[-20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 particles-container opacity-20" />
            <div className="absolute inset-0 futuristic-grid opacity-10" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Ready to Switch?
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              Let's Build a Sustainable Future Together
            </h2>

            <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              Find out how much your facility can save with premium rooftop solar blueprints. Get in touch with our engineering team today.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
              <AboutCTAButton to="/contact" variant='outline'>
                Book Site Survey
              </AboutCTAButton>
             
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

// ----------------------------------------------------
// AlertCircle Replacement Icon (to prevent import mismatch)
// ----------------------------------------------------
function AlertCircleShim(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
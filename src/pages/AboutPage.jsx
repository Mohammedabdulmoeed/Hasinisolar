// import { useRef, useState, useEffect } from 'react';
// import { useOutletContext, Link } from 'react-router-dom';
// import PageHero from '../components/ui/PageHero';
// import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
// import {
//   ArrowRight,
//   TrendingUp,
//   Shield,
//   Activity,
//   Award,
//   Clock,
//   Compass,
//   CheckCircle,
//   Zap,
//   Target,
//   Eye,
//   Sparkles,
//   Heart,
//   Cpu,
//   Bookmark,
//   CheckSquare,
//   ShieldAlert,
//   Flame,
//   Leaf
// } from 'lucide-react';
// import SEO from '../components/common/SEO';
// import { pageSeo } from '../data/seo';
// import { images } from '../data/images';
// import { useCounter } from '../hooks/useCounter';

// // ----------------------------------------------------
// // Reusable About Sub-components
// // ----------------------------------------------------

// function AboutStatCard({ value, prefix = "", suffix = "", label, icon: Icon }) {
//   const { count, ref } = useCounter(value, 2000);
//   return (
//     <div
//       ref={ref}
//       className="glass-card-2026 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-white/5 bg-slate-900/60 backdrop-blur-md"
//     >
//       <div className="p-3 bg-white/5 rounded-2xl mb-4 text-emerald-400 shrink-0">
//         <Icon className="h-6 w-6" />
//       </div>
//       <span className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-1 flex items-baseline">
//         <span>{prefix}</span>
//         <span>{count}</span>
//         <span className="text-emerald-400 font-extrabold">{suffix}</span>
//       </span>
//       <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest leading-none">{label}</span>
//     </div>
//   );
// }

// function AboutCTAButton({ children, onClick, to, variant = "primary" }) {
//   const prefersReducedMotion = useReducedMotion();
//   const isPrimary = variant === "primary";

//   const content = (
//     <span className="flex items-center justify-center gap-2">
//       {children}
//       <motion.span
//         className="inline-block"
//         animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//       >
//         <ArrowRight className="h-4 w-4" />
//       </motion.span>
//     </span>
//   );

//   const baseClass = "px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 inline-flex items-center justify-center text-center cursor-pointer";
//   const styling = isPrimary
//     ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-bold shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.03]"
//     : "border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 bg-transparent";

//   if (to) {
//     if (to.startsWith("#")) {
//       return (
//         <a href={to} className={`${baseClass} ${styling}`}>
//           {content}
//         </a>
//       );
//     }
//     return (
//       <Link to={to} className={`${baseClass} ${styling}`}>
//         {content}
//       </Link>
//     );
//   }

//   return (
//     <button type="button" onClick={onClick} className={`${baseClass} ${styling}`}>
//       {content}
//     </button>
//   );
// }

// // ----------------------------------------------------
// // Main About Page Component
// // ----------------------------------------------------

// export default function AboutPage() {
//   const openQuote = useOutletContext()?.openQuote;
//   const prefersReducedMotion = useReducedMotion();
//   const journeySectionRef = useRef(null);

//   // Timeline Scroll Progress
//   const { scrollYProgress: journeyScroll } = useScroll({
//     target: journeySectionRef,
//     offset: ["start center", "end center"]
//   });
//   const lineScaleY = useSpring(journeyScroll, { stiffness: 100, damping: 30 });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.1 }
//     }
//   };

//   const fadeInUpVariants = {
//     hidden: { opacity: 0, y: 35 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
//     }
//   };

//   const slideInLeft = {
//     hidden: { opacity: 0, x: -60 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
//     }
//   };

//   const slideInRight = {
//     hidden: { opacity: 0, x: 60 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
//     }
//   };

//   return (
//     <>
//       <SEO {...pageSeo.about} />
//       <PageHero
//               title="About"
//               subtitle="Build your future with a team that values excellence, growth, and innovation."
//               image={images.building}
//               breadcrumb="Home / About"
//             />

//       {/* =========================================
//          SECTION 1: HERO
//          ========================================= */}
    

//       {/* =========================================
//          SECTION 2: ABOUT COMPANY SECTION
//          ========================================= */}
//       <section className="section-padding bg-white overflow-hidden text-left">
//         <div className="container-custom px-4">
//           <div className="row-split items-center lg:gap-16">
            
//             {/* Left Image Side */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={slideInLeft}
//               className="row-split-media relative"
//             >
//               <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[30rem] bg-slate-200">
//                 <img
//                   src={images.commercial_solar}
//                   alt="ZENCO Solar Installation"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
//               </div>
//             </motion.div>

//             {/* Right Details Side */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={slideInRight}
//               className="row-split-content"
//             >
//               <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Who We Are</span>
//               <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Premium Solar EPC Partners</h2>
//               <p className="mt-6 text-slate-600 leading-relaxed text-base">
//                 At ZENCO Solar, we provide end-to-end engineering, procurement, and construction (EPC) services. We specialize in planning, structurally validating, and installing clean energy solar systems tailored specifically for residential, commercial, and industrial facilities.
//               </p>
//               <p className="mt-4 text-slate-600 leading-relaxed text-base">
//                 Our team is committed to deploying exclusively Tier-1 monocrystalline panels, micro-inverters, and safety structures that meet rigorous MNRE guidelines to deliver high-capacity operational returns.
//               </p>

//               {/* Quick info cards */}
//               <div className="mt-8 grid grid-cols-2 gap-4">
//                 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
//                   <h4 className="text-sm font-bold text-slate-900 font-display mb-1">Rooftop Solar EPC</h4>
//                   <p className="text-xs text-slate-500 leading-relaxed">Turnkey setup from technical site analysis to active net-meter connection.</p>
//                 </div>
//                 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
//                   <h4 className="text-sm font-bold text-slate-900 font-display mb-1">Industrial Blueprints</h4>
//                   <p className="text-xs text-slate-500 leading-relaxed">High-capacity microgrid systems custom engineered for factories and campuses.</p>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================
//          SECTION 3: MISSION & VISION (Glassmorphism card grid)
//          ========================================= */}
//       <section className="section-padding bg-slate-50 overflow-hidden text-left relative">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

//         <div className="container-custom relative z-10 px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
//             {/* Mission Card */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="relative overflow-hidden rounded-[32px] bg-slate-900 p-8 sm:p-10 border border-white/5 shadow-2xl group cursor-pointer"
//             >
//               {/* Highlight bar */}
//               <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
//               <div className="p-4 bg-emerald-500/10 rounded-2xl w-max text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <Target className="h-8 w-8" />
//               </div>
//               <h3 className="text-2xl font-bold font-display text-white mb-4">Our Mission</h3>
//               <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
//                 To make clean solar energy affordable, accessible, and reliable for every residential home and commercial business while accelerating India's transition toward sustainable energy independence.
//               </p>
//             </motion.div>

//             {/* Vision Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="relative overflow-hidden rounded-[32px] bg-slate-900 p-8 sm:p-10 border border-white/5 shadow-2xl group cursor-pointer"
//             >
//               {/* Highlight bar */}
//               <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
//               <div className="p-4 bg-cyan-500/10 rounded-2xl w-max text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <Eye className="h-8 w-8" />
//               </div>
//               <h3 className="text-2xl font-bold font-display text-white mb-4">Our Vision</h3>
//               <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
//                 To become India's most trusted solar energy company by delivering innovative panel technology, customized blueprints, and exceptional support that empowers future generations.
//               </p>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================
//          SECTION 4: CORE VALUES
//          ========================================= */}
//       <section className="section-padding bg-white overflow-hidden text-center">
//         <div className="container-custom px-4">
//           <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans">Our Principles</span>
//           <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-12">Core Values</h2>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {[
//               { title: "Quality First", desc: "Rigorous standards from raw solar arrays to engineering panel locks.", icon: Shield },
//               { title: "Active Innovation", desc: "Smart localized monitoring and customized hybrid microgrids.", icon: Cpu },
//               { title: "Sustainability", desc: "Delivering carbon offsets and clean sustainable output parameters.", icon: Leaf },
//               { title: "Integrity", desc: "Document transparency on subsidy files and net metering metrics.", icon: Award },
//               { title: "Rooftop Safety", desc: "Strict adherence to safety grids, secure frames, and structural protection.", icon: AlertCircleShim },
//               { title: "Customer Focus", desc: "Dedicated warranty assistance, active clean alerts, and support.", icon: Heart }
//             ].map((val, idx) => {
//               const Icon = val.icon;
//               return (
//                 <motion.div
//                   key={idx}
//                   variants={fadeInUpVariants}
//                   whileHover={{ y: -6 }}
//                   className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md hover:shadow-xl hover:border-emerald-300/40 transition-all duration-300 flex flex-col items-start text-left group cursor-pointer"
//                 >
//                   <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     <Icon className="h-5 w-5" />
//                   </div>
//                   <h4 className="text-lg font-bold font-display text-slate-900 leading-tight mb-2">{val.title}</h4>
//                   <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//          SECTION 5: OUR JOURNEY (Vertical Timeline)
//          ========================================= */}
//       <section ref={journeySectionRef} className="section-padding bg-slate-900 text-white relative overflow-hidden">
//         {/* Soft background light mesh glow */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

//         <div className="container-custom relative z-10 px-4">
//           <div className="text-center mb-16">
//             <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sans">Timeline</span>
//             <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-white">Our Journey</h2>
//           </div>

//           <div className="max-w-3xl mx-auto relative px-4 text-left">
//             {/* Scroll-Linked Progress Line */}
//             <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-white/10 rounded-full md:-translate-x-px z-0">
//               <motion.div
//                 style={{ scaleY: lineScaleY, originY: 0 }}
//                 className="h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"
//               />
//             </div>

//             {[
//               { year: "2024", title: "Company Founded", desc: "Established with a vision to build decentralized clean energy networks across southern India." },
//               { year: "2024", title: "First 1MW Project", desc: "Successfully completed our first high-capacity industrial rooftop array in Adilabad." },
//               { year: "2025", title: "200+ Installations", desc: "Deployed modular hybrid systems and corporate net offsets PAN India." },
//               { year: "2026", title: "PAN India Expansion", desc: "Actively expanding clean tech distribution and operations nodes to 15+ major metros." }
//             ].map((mile, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6 }}
//                 className={`relative flex flex-col md:flex-row gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
//               >
//                 <div className="hidden md:block md:w-1/2" />
                
//                 {/* Timeline node marker */}
//                 <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 -translate-x-1.5 md:-translate-x-2 mt-1.5 shadow-[0_0_10px_#10b981] z-10" />

//                 <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
//                   <span className="text-emerald-400 font-extrabold text-lg sm:text-xl font-display">{mile.year}</span>
//                   <h4 className="font-bold text-white text-base sm:text-lg mt-1 leading-tight">{mile.title}</h4>
//                   <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">{mile.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//          SECTION 6: STANDARDS & CERTIFICATIONS
//          ========================================= */}
//       <section className="section-padding bg-white overflow-hidden text-center">
//         <div className="container-custom px-4">
//           <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans">Credentials</span>
//           <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-12">Standards & Certifications</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {[
//               { title: "MNRE Approved", desc: "Fully compliant with Ministry of New and Renewable Energy parameters.", icon: CheckSquare },
//               { title: "ISO Certified", desc: "Rigorous ISO environmental and execution guidelines active.", icon: Shield },
//               { title: "Net Metering Partner", desc: "Certified and registered assistant for grid upload connectivity.", icon: Compass },
//               { title: "Tier-1 Solar Arrays", desc: "Exclusive supplier contracts for top-performing equipment.", icon: Bookmark }
//             ].map((cert, idx) => {
//               const Icon = cert.icon;
//               return (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.04 }}
//                   className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
//                 >
//                   <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <Icon className="h-6 w-6" />
//                   </div>
//                   <h4 className="text-base font-bold text-slate-900 leading-tight mb-2">{cert.title}</h4>
//                   <p className="text-slate-500 text-xs leading-relaxed">{cert.desc}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//          SECTION 7: WHY CHOOSE ZENCO (High conversion counters)
//          ========================================= */}
//       <section className="section-padding bg-slate-900 relative overflow-hidden">
//         {/* Animated gradient mesh backdrop */}
//         <div className="absolute inset-0 pointer-events-none z-0">
//           <div className="absolute top-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[100px]" />
//           <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px]" />
//           <div className="absolute inset-0 particles-container opacity-25" />
//         </div>

//         <div className="container-custom relative z-10 px-4 text-center max-w-5xl mx-auto">
//           <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-sans">By the Numbers</span>
//           <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-white mb-12">Why Choose ZENCO</h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//             <AboutStatCard value={10} suffix=" MW+" label="Total Installed" icon={Zap} />
//             <AboutStatCard value={14} suffix="K+ Tons" label="CO₂ Saved" icon={Leaf} />
//             <AboutStatCard value={100} suffix="%" label="Satisfaction" icon={Heart} />
//             <AboutStatCard value={30} suffix="%" label="ROI Improvement" icon={TrendingUp} />
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//          SECTION 8: FINAL CTA SECTION
//          ========================================= */}
//       <section className="py-20 bg-white px-4 overflow-hidden text-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-2xl relative overflow-hidden py-16 px-6 sm:px-12 md:py-24 text-center border border-white/5"
//         >
//           {/* Animated glowing background blobs */}
//           <div className="absolute inset-0 pointer-events-none z-0">
//             <div className="absolute top-[-20%] left-[-20%] h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
//             <div className="absolute bottom-[-20%] right-[-20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse" style={{ animationDuration: '8s' }} />
//             <div className="absolute inset-0 particles-container opacity-20" />
//             <div className="absolute inset-0 futuristic-grid opacity-10" />
//           </div>

//           <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
//             <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
//               Ready to Switch?
//             </span>

//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
//               Let's Build a Sustainable Future Together
//             </h2>

//             <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
//               Find out how much your facility can save with premium rooftop solar blueprints. Get in touch with our engineering team today.
//             </p>

//             <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
//               <AboutCTAButton to= "/contact" variant='outline'>
//                 Book Site Survey
//               </AboutCTAButton>
//               <AboutCTAButton to="/solar-calculator" variant="outline">
//                 Calculate Savings
//               </AboutCTAButton>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

// // ----------------------------------------------------
// // AlertCircle Replacement Icon (to prevent import mismatch)
// // ----------------------------------------------------
// function AlertCircleShim(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       width="24"
//       height="24"
//       stroke="currentColor"
//       strokeWidth="2"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={props.className}
//       style={props.style}
//     >
//       <circle cx="12" cy="12" r="10" />
//       <line x1="12" y1="8" x2="12" y2="12" />
//       <line x1="12" y1="16" x2="12.01" y2="16" />
//     </svg>
//   );
// }
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
        image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80" 
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
                  src={images.commercial_solar}
                  alt="ZENCO Solar Installation"
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
                At ZENCO Solar, we provide end-to-end engineering, procurement, and construction (EPC) services. We specialize in planning, structurally validating, and installing clean energy solar systems tailored specifically for residential, commercial, and industrial facilities.
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
         SECTION 3: MISSION & VISION (Glassmorphism card grid)
         ========================================= */}
      <section className="section-padding bg-slate-50 overflow-hidden text-left relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[32px] bg-slate-900 p-8 sm:p-10 border border-white/5 shadow-2xl group cursor-pointer"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="p-4 bg-emerald-500/10 rounded-2xl w-max text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To make clean solar energy affordable, accessible, and reliable for every residential home and commercial business while accelerating India's transition toward sustainable energy independence.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[32px] bg-slate-900 p-8 sm:p-10 border border-white/5 shadow-2xl group cursor-pointer"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <div className="p-4 bg-cyan-500/10 rounded-2xl w-max text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To become India's most trusted solar energy company by delivering innovative panel technology, customized blueprints, and exceptional support that empowers future generations.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

     {/* =========================================
          SECTION 4: CORE VALUES (Bento Grid Edition)
          ========================================= */}
      <section className="section-padding bg-slate-50 overflow-hidden relative text-left">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
              Our Principles
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight font-display text-slate-900">
              Driven by Values, Built for Performance
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-6 gap-6"
          >
            {[
              { 
                title: "Quality First", 
                desc: "Rigorous standards from raw solar arrays to engineering panel locks. We accept nothing short of Tier-1 excellence.", 
                icon: Shield,
                span: "md:col-span-3",
                accent: "from-emerald-500 to-teal-500"
              },
              { 
                title: "Active Innovation", 
                desc: "Smart localized cloud monitoring and customized hybrid microgrids tailored for maximum yield.", 
                icon: Cpu,
                span: "md:col-span-3",
                accent: "from-cyan-500 to-blue-500"
              },
              { 
                title: "Sustainability", 
                desc: "Delivering massive carbon offsets and clean output parameters for generations.", 
                icon: Leaf,
                span: "md:col-span-2",
                accent: "from-green-400 to-emerald-600"
              },
              { 
                title: "Integrity", 
                desc: "100% document transparency on subsidy processing and net metering metrics.", 
                icon: Award,
                span: "md:col-span-2",
                accent: "from-amber-400 to-orange-500"
              },
              { 
                title: "Rooftop Safety", 
                desc: "Strict adherence to safety grids, wind-resistant secure frames, and structural protection.", 
                icon: AlertCircleShim,
                span: "md:col-span-2",
                accent: "from-rose-500 to-red-600"
              },
              { 
                title: "Customer Focus", 
                desc: "Dedicated lifetime warranty assistance, active clean alerts, and continuous optimization support.", 
                icon: Heart,
                span: "md:col-span-6",
                accent: "from-indigo-500 via-purple-500 to-pink-500"
              }
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUpVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`${val.span} group relative overflow-hidden rounded-[2.5rem] bg-white p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-500 flex flex-col justify-between cursor-pointer`}
                >
                  {/* Subtle Gradient Line Hover Effect */}
                  <div className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${val.accent} transition-all duration-500 rounded-b-[2.5rem]`} />

                  <div>
                    {/* Icon Base */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-4 bg-slate-50 text-slate-800 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500 shadow-inner">
                        <Icon className="h-6 w-6 group-hover:rotate-6 transition-transform duration-500" />
                      </div>
                      <span className="text-slate-200 font-display font-black text-4xl group-hover:text-slate-100 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
                      {val.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-normal leading-relaxed max-w-xl group-hover:text-slate-700 transition-colors">
                      {val.desc}
                    </p>
                  </div>

                  {/* Aesthetic clean arrow link decoration */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 text-slate-900 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span>Learn standard</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
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
              { year: "2024", title: "First 1MW Project", desc: "Successfully completed our first high-capacity industrial rooftop array in Adilabad." },
              { year: "2025", title: "200+ Installations", desc: "Deployed modular hybrid systems and corporate net offsets PAN India." },
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
      <section className="section-padding bg-white overflow-hidden text-center">
        <div className="container-custom px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans">Credentials</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-12">Standards & Certifications</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "MNRE Approved", desc: "Fully compliant with Ministry of New and Renewable Energy parameters.", icon: CheckSquare },
              { title: "ISO Certified", desc: "Rigorous ISO environmental and execution guidelines active.", icon: Shield },
              { title: "Net Metering Partner", desc: "Certified and registered assistant for grid upload connectivity.", icon: Compass },
              { title: "Tier-1 Solar Arrays", desc: "Exclusive supplier contracts for top-performing equipment.", icon: Bookmark }
            ].map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight mb-2">{cert.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{cert.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 7: WHY CHOOSE ZENCO (High conversion counters)
         ========================================= */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        {/* Animated gradient mesh backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px]" />
          <div className="absolute inset-0 particles-container opacity-25" />
        </div>

        <div className="container-custom relative z-10 px-4 text-center max-w-5xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-sans">By the Numbers</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-white mb-12">Why Choose ZENCO</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <AboutStatCard value={10} suffix=" MW+" label="Total Installed" icon={Zap} />
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
              <AboutCTAButton to="/solar-calculator" variant="outline">
                Calculate Savings
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
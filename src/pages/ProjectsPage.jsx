import { useRef, useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Activity,
  Sun,
  Leaf,
  Award,
  Clock,
  Compass,
  MapPin,
  CheckCircle,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TreePine,
  CloudLightning,
  Share2
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { pageSeo } from '../data/seo';
import { projects, projectCategories } from '../data/projects';
import { images } from '../data/images';
import { useCounter } from '../hooks/useCounter';

// ----------------------------------------------------
// Reusable Sub-components
// ----------------------------------------------------

function ProjectsStatCard({ value, prefix = "", suffix = "", label, icon: Icon }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div
      ref={ref}
      className="glass-card-2026 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-white/5 bg-slate-900/60 backdrop-blur-md"
    >
      <div className="p-3 bg-white/5 rounded-2xl mb-4 text-cyan-400">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-1 flex items-baseline">
        <span>{prefix}</span>
        <span>{count}</span>
        <span className="text-cyan-400 font-extrabold">{suffix}</span>
      </span>
      <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}

function ProjectCTAButton({ children, onClick, to, variant = "primary" }) {
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
// Main Projects Page Component
// ----------------------------------------------------


const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
export default function ProjectsPage() {
  const openQuote = useOutletContext()?.openQuote;
  const prefersReducedMotion = useReducedMotion();

  // State Management
  const [filter, setFilter] = useState('All');
  const [selectedCity, setSelectedCity] = useState("India");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Before/After Slider Coordinates
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  // Timeline Progress Scroll Tracking
  const timelineSectionRef = useRef(null);
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineSectionRef,
    offset: ["start end", "end end"]
  });
  const timelineScaleX = useSpring(timelineScroll, { stiffness: 100, damping: 30 });

  // Handle Drag Move for Before & After
  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };
  const handleMouseLeave = () => {
  setIsDragging(false);
};

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Filtered project list
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  // Testimonials Array
  const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Textile Mill Owner",
    review: "Hasini Solar Enterprises & Solutions setup completely transformed our operating costs. Our monthly electricity bills fell by 40% starting from month one. The online monitoring dashboard and net-metering support were outstanding.",
    logo: "Kumar Textiles",
    savings: "₹8 Lakhs / month",
    roi: "3.8 Years achieved",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "A. Srinivasa Rao",
    role: "Hospital Administrator",
    review: "Power reliability is critical for us. Hasini Solar Enterprises & Solutionsengineered an On-Grid 250 kW solution that integrated seamlessly with our existing setup. Our electricity overheads have reduced significantly, hitting ROI target in exactly 4 years.",
    logo: "City Hospital",
    savings: "₹2.2 Lakhs / month",
    roi: "4.0 Years achieved",
    image: "https://images.unsplash.com/photo-1733348137468-90b917d2ebf1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Vikram Malhotra",
    role: "Homeowner",
    review: "For our new house, keeping the rooftop neat was very important. Hasini Solar Enterprises & Solutions custom-engineered a sleek solar panel installation that matched the home's design while easily supplying 100% of our daily power requirements.",
    logo: "Residential",
    savings: "₹15,000 / month",
    roi: "4.5 Years achieved",
    image: "https://images.unsplash.com/photo-1720805752653-10ddccea4c94?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  ];

  // Map Cities coordinates
  const mapCities = [
  {
    name: "Adilabad",
    x: "50%",
    y: "50%",
    capacity: "Main Hub",
    projects: 400,
    co2: "Active Operations",
  },
  {
    name: "Nirmal",
    x: "60%",
    y: "35%",
    capacity: "Expansion Zone",
    projects: 10,
    co2: "Growing Demand",
  },
  {
    name: "Mancherial",
    x: "40%",
    y: "30%",
    capacity: "Service Area",
    projects: 8,
    co2: "Ongoing Work",
  },
  {
    name: "Komaram Bheem",
    x: "55%",
    y: "65%",
    capacity: "Coverage Zone",
    projects: 6,
    co2: "Upcoming Installations",
  },
  {
    name: "Asifabad",
    x: "35%",
    y: "55%",
    capacity: "Field Operations",
    projects: 5,
    co2: "Early Stage",
  },
  {
    name: "Boath",
    x: "45%",
    y: "40%",
    capacity: "Support Zone",
    projects: 4,
    co2: "Small Projects",
  },
  {
    name: "Utnoor",
    x: "52%",
    y: "72%",
    capacity: "Rural Reach",
    projects: 7,
    co2: "Rural Electrification",
  },
];

  const currentCityData = mapCities.find(c => c.name === selectedCity) || mapCities[0];

  return (
    <>
      <SEO {...pageSeo.projects} />
      <PageHero
        title="Project"
        subtitle="Delivering high-performance solar solutions that help homes and businesses reduce electricity costs and embrace clean, reliable energy"
        image="https://images.unsplash.com/photo-1698752821934-28bd5ce6fd42?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        breadcrumb="Home / project"
      />

      {/* =========================================
       SECTION 3: FEATURED PROJECT SHOWCASE (Case study)
       ========================================= */}
      <section id="case-study" className="section-padding bg-white overflow-hidden">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans">Residential Success</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900">Featured Case Study</h2>
          </div>

          <div className="row-split items-center lg:gap-16">
            {/* Case Study Image with hover zoom */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="row-split-media relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[32rem] w-[85%] bg-slate-200">
  <img
    src={images.projectnext}
    alt="Hasini Solar Enterprises & Solutions 15 kWp Residential Grid"
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all duration-300" />
</div>

              {/* Floating metrics labels */}
              <div className="absolute top-[8%] left-[-4%] glass-card-2026 rounded-2xl p-4 shadow-xl border border-white/10 pointer-events-none card-float-y-1">
                <p className="text-xs text-slate-400 font-bold uppercase">Savings Achieved</p>
                <p className="text-2xl font-extrabold text-emerald-600 font-display">₹1.8 Lakhs / yr</p>
              </div>

              <div className="absolute bottom-[10%] right-[-4%] glass-card-2026 rounded-2xl p-4 shadow-xl border border-white/10 pointer-events-none card-float-y-2">
                <p className="text-xs text-slate-400 font-bold uppercase">Project Timeline</p>
                <p className="text-lg font-bold text-slate-800">12 Days Execution</p>
              </div>
            </motion.div>

            {/* Case Study Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="row-split-content text-left"
            >
              <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">Premium Housing</span>
              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-slate-900">90 kWp Luxury Villa Solar System</h3>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Hasini Solar Enterprises & Solutions designed and commissioned a luxury net-metered rooftop solar solution for a multi-story premium residence. Engineered seamlessly into the villa's modern architecture, this grid-tied setup fully powers heavy domestic loads, including centralized air conditioning and electric vehicle charging infrastructure.
              </p>

              {/* Grid of details */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Capacity</p>
                  <p className="text-lg font-extrabold text-slate-800 font-display">90 kWp</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Annual Generation</p>
                  <p className="text-lg font-extrabold text-slate-800 font-display">75,500 kWh</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Investment ROI</p>
                  <p className="text-lg font-extrabold text-emerald-600 font-display">4.2 Years</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Client Sector</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">Residential / Villa</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">Hyderabad, TS</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Installation Year</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">2025</p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <ProjectCTAButton to='/solar-calculator'>Calculate Savings</ProjectCTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* =========================================
    SECTION 4: PREMIUM EDITORIAL PORTFOLIO HEADER
    ========================================= */}
<section className="relative pt-20 pb-12 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
  {/* Ambient Geometric Glow Accents */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
  <div className="absolute top-12 right-1/4 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

  <div className="container-custom px-4 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-8 border-b border-slate-100">
      
      {/* Left Column: Authoritative Editorial Heading */}
      <div className="text-left max-w-2xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600 font-sans">
            Case Studies
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-none">
          Our Residential <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-800 to-emerald-600">
            Success Stories
          </span>
        </h2>
        
        <p className="mt-4 text-sm sm:text-base text-slate-500 font-medium max-w-lg leading-relaxed">
          Real-world execution of clean energy transition. Explore live, high-performance residential rooftop engineering deployed across premium neighborhoods.
        </p>
      </div>

      {/* Right Column: High-End Minimal Tag Filtering System */}
      <div className="w-full lg:w-auto flex flex-wrap gap-2 justify-start lg:justify-end">
        {[
          { label: "All Installations", count: "9" },
          { label: "Rooftop On-Grid", count: "5" },
          { label: "Premium Hybrid", count: "4" }
        ].map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
              idx === 0
                ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105"
                : "bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            <span>{tab.label}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-black ${
              idx === 0 ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-500"
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

    </div>
  </div>
</section>

    

{/* =========================================
    SECTION 5: 15-IMAGE MINIMALIST GALLERY
    ========================================= */}
<section className="section-padding bg-slate-50/50">
  <div className="container-custom px-4 max-w-7xl mx-auto">
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.slice(0, 15).map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-md relative group aspect-[4/3] cursor-pointer"
          >
            <img
              src={project.image}
              alt="Hasini Solar Enterprises & Solutions Installation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Soft, minimal darkening vignette overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full transition-transform duration-300 transform scale-90 group-hover:scale-100">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>
</section>

      {/* =========================================
         SECTION 6: BEFORE & AFTER SLIDER
         ========================================= */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans">Visual Transformation</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Before & After Solar</h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base mb-12">
            Drag the slider divider left or right to view the architectural impact and roofing transformation of a premium rooftop solar installation.
          </p>

          {/* Interactive Slider */}
          <div
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 select-none cursor-ew-resize"
          >
            {/* Image Before (underneath) */}
            <div className="absolute inset-0">
              <img
                src={images.old}
                alt="Before Solar Installation"
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full">
                Before Solar Setup
              </div>
            </div>

            
            <div
              className="absolute inset-0 z-10 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              
              <div className="absolute inset-0 w-[calc(100%)] h-full min-w-[896px]">
                <img
                  src={images.commercial_solar}
                  alt="After Solar Installation"
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ width: sliderRef.current?.getBoundingClientRect().width }}
                />
              </div>
              <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full">
                After Solar Setup
              </div>
            </div>

            {/* Drag Handle Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[2.5px] bg-white shadow-xl cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="h-10 w-10 bg-slate-900 border-2 border-white rounded-full flex items-center justify-center shadow-2xl shrink-0 pointer-events-none">
                <Compass className="h-4 w-4 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Quick slider metrics */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Electricity Bills</p>
              <p className="text-xl font-extrabold text-red-500 font-display mt-1">-90% Reduction</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">CO2 Emissions</p>
              <p className="text-xl font-extrabold text-emerald-500 font-display mt-1">-450 Tons / yr</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Building Value</p>
              <p className="text-xl font-extrabold text-cyan-600 font-display mt-1">+15% Appreciation</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
         SECTION 8: INSTALLATION PROCESS (Timeline)
         ========================================= */}
      <section ref={timelineSectionRef} className="section-padding bg-white overflow-hidden">
        <div className="container-custom px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans">Execution</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900">Rooftop Project Timeline</h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base mb-16">
            From initial structural consultation to grid synchronization, we guarantee systematic planning at every stage.
          </p>

          <div className="relative w-full max-w-6xl mx-auto">
            {/* Scroll-Linked Progress Line (horizontal layout) */}
            <div className="hidden md:block absolute top-[44px] left-8 right-8 h-[3px] bg-slate-100 rounded-full overflow-hidden z-0">
              <motion.div
                style={{ scaleX: timelineScaleX, originX: 0 }}
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
              {[
                { step: "01", title: "Consultation", desc: "Energy load profiling & rooftop capacity estimate.", color: "border-emerald-400 text-emerald-500 bg-emerald-50" },
                { step: "02", title: "Site Survey", desc: "Digital drone scans & structural shadow checks.", color: "border-teal-400 text-teal-500 bg-teal-50" },
                { step: "03", title: "Design & Proposal", desc: "Electrical layouts, blueprints and financial estimates.", color: "border-cyan-400 text-cyan-500 bg-cyan-50" },
                { step: "04", title: "Installation", desc: "Tier-1 array structural execution & wiring.", color: "border-blue-400 text-blue-500 bg-blue-50" },
                { step: "05", title: "Testing", desc: "Electrical grounding checks & safety audits.", color: "border-indigo-400 text-indigo-500 bg-indigo-50" },
                { step: "06", title: "Handover", desc: "Net metering launch and digital dashboard app setup.", color: "border-purple-400 text-purple-500 bg-purple-50" },
              ].map((proc, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left group bg-white border border-slate-100 p-5 rounded-3xl shadow-sm md:shadow-none"
                >
                  <div className={`h-[56px] w-[56px] rounded-full border-2 ${proc.color} flex items-center justify-center font-bold text-lg mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
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
            </div>
          </div>
        </div>
      </section>

    {/* =========================================
    SECTION 9: INTERACTIVE SOLAR NETWORK
========================================= */}
<section className="relative overflow-hidden bg-[#06111f] py-12 sm:py-16 lg:py-24">

  {/* =========================================
      COLORFUL BACKGROUND EFFECTS
  ========================================= */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Yellow Solar Glow */}
    <div className="absolute -left-40 top-10 h-[400px] w-[400px] animate-pulse rounded-full bg-yellow-400/10 blur-[140px]" />

    {/* Orange Glow */}
    <div className="absolute right-0 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-orange-500/10 blur-[160px]" />

    {/* Green Glow */}
    <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />

    {/* Cyan Glow */}
    <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

    {/* Background Grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

  </div>


  <div className="container-custom relative z-10 w-full px-2 sm:px-4 lg:px-6">

    {/* =========================================
        SECTION HEADER
    ========================================= */}
    <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-12 lg:mb-16">

      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 backdrop-blur-xl sm:mb-5 sm:px-5 sm:py-2">

        <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.9)] sm:h-3 sm:w-3" />

        </span>

        <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-yellow-300 sm:text-xs sm:tracking-[0.25em]">
          Solar Network • India
        </span>

      </div>


      <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">

        Powering Every Corner

        <span className="mt-1 block bg-gradient-to-r from-yellow-300 via-orange-400 to-emerald-400 bg-clip-text text-transparent sm:mt-2">

          With The Energy Of The Sun

        </span>

      </h2>


      <p className="mx-auto mt-3 max-w-2xl text-[10px] leading-relaxed text-slate-400 sm:mt-6 sm:text-sm lg:text-lg">

        Building a cleaner, smarter and more sustainable India through
        innovative solar energy solutions and a rapidly expanding
        installation network.

      </p>

    </div>


    {/* =========================================
        TOP SOLAR STATISTICS
    ========================================= */}
    <div className="mb-4 grid grid-cols-4 gap-2 sm:mb-6 sm:gap-4">

      {/* PROJECTS */}
      <div className="group relative overflow-hidden rounded-xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-transparent p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_20px_60px_rgba(250,204,21,0.18)] sm:rounded-3xl sm:p-5">

        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-yellow-400/10 blur-2xl transition-all duration-500 group-hover:scale-150 sm:h-28 sm:w-28" />

        <div className="relative">

          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/30 sm:h-11 sm:w-11 sm:rounded-2xl">

            <Zap className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125 sm:h-5 sm:w-5" />

          </div>

          <p className="mt-2 text-sm font-black text-white sm:mt-5 sm:text-3xl lg:text-4xl">
            57k+
          </p>

          <p className="mt-1 text-[6px] font-bold uppercase tracking-tight text-yellow-300 sm:text-[10px] sm:tracking-widest">
            Trees saved
          </p>

        </div>

      </div>


      {/* ENERGY */}
      <div className="group relative overflow-hidden rounded-xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)] sm:rounded-3xl sm:p-5">

        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-400/10 blur-2xl transition-all duration-500 group-hover:scale-150 sm:h-28 sm:w-28" />

        <div className="relative">

          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-400 text-white shadow-lg shadow-orange-400/30 sm:h-11 sm:w-11 sm:rounded-2xl">

            <Sun className="h-3.5 w-3.5 transition-transform duration-700 group-hover:rotate-180 sm:h-5 sm:w-5" />

          </div>

          <p className="mt-2 text-sm font-black text-white sm:mt-5 sm:text-3xl lg:text-4xl">
            100%
          </p>

          <p className="mt-1 text-[6px] font-bold uppercase tracking-tight text-orange-300 sm:text-[10px] sm:tracking-widest">
            UPTIME
          </p>

        </div>

      </div>


      {/* CO2 */}
      <div className="group relative overflow-hidden rounded-xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)] sm:rounded-3xl sm:p-5">

        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl transition-all duration-500 group-hover:scale-150 sm:h-28 sm:w-28" />

        <div className="relative">

          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30 sm:h-11 sm:w-11 sm:rounded-2xl">

            <Leaf className="h-3.5 w-3.5 transition-transform duration-500 group-hover:scale-125 sm:h-5 sm:w-5" />

          </div>

          <p className="mt-2 text-sm font-black text-white sm:mt-5 sm:text-3xl lg:text-4xl">
            12K+
          </p>

          <p className="mt-1 text-[6px] font-bold uppercase tracking-tight text-emerald-300 sm:text-[10px] sm:tracking-widest">
            CO₂ Saved
          </p>

        </div>

      </div>


      {/* REGIONS */}
      <div className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:rounded-3xl sm:p-5">

        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-500 group-hover:scale-150 sm:h-28 sm:w-28" />

        <div className="relative">

          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30 sm:h-11 sm:w-11 sm:rounded-2xl">

            <MapPin className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-1 sm:h-5 sm:w-5" />

          </div>

          <p className="mt-2 text-sm font-black text-white sm:mt-5 sm:text-3xl lg:text-4xl">
           24/7
          </p>

          <p className="mt-1 text-[6px] font-bold uppercase tracking-tight text-cyan-300 sm:text-[10px] sm:tracking-widest">
         Support Available
          </p>

        </div>

      </div>

    </div>


    {/* =========================================
        MAIN SECTION
        ALWAYS LEFT + RIGHT
    ========================================= */}
    <div className="grid grid-cols-12 items-stretch gap-2 sm:gap-4 lg:gap-6">


      {/* =========================================
          LEFT SIDE — INTERACTIVE MAP
      ========================================= */}
      <div className="relative col-span-8 min-h-[360px] overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-[#0b1d2f] via-[#07111f] to-[#020712] shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:min-h-[500px] sm:rounded-[2rem] lg:min-h-[580px]">


        {/* TOP LIVE BAR */}
        <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-white/5 bg-black/20 px-3 py-2 backdrop-blur-xl sm:px-5 sm:py-4 lg:px-7">

          <div className="flex items-center gap-2 sm:gap-3">

            <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400/10 sm:h-10 sm:w-10 sm:rounded-xl">

              <Sun className="h-3.5 w-3.5 animate-[spin_10s_linear_infinite] text-yellow-400 sm:h-5 sm:w-5" />

            </div>

            <div>

              <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-yellow-300 sm:text-[9px] sm:tracking-[0.25em]">
                Live Solar Network
              </p>

              <p className="text-[8px] font-bold text-white sm:text-sm">
                India Operations
              </p>

            </div>

          </div>


          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 sm:flex">

            <span className="relative flex h-2.5 w-2.5">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />

            </span>

            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300">
              Active
            </span>

          </div>

        </div>


        {/* ANIMATED SUN */}
        <div className="absolute right-5 top-16 opacity-40 sm:right-10 sm:top-24">

          <div className="relative">

            <div className="absolute inset-0 animate-ping rounded-full bg-yellow-400/20 blur-xl" />

            <div className="relative flex h-10 w-10 animate-[spin_25s_linear_infinite] items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 sm:h-20 sm:w-20">

              <Sun className="h-5 w-5 text-yellow-400 sm:h-10 sm:w-10" />

            </div>

          </div>

        </div>


        {/* ENERGY RAYS */}
        <div className="absolute inset-0 opacity-30">

          <div className="absolute left-1/2 top-1/2 h-[1px] w-[70%] origin-left rotate-[25deg] bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-transparent animate-pulse" />

          <div className="absolute left-1/2 top-1/2 h-[1px] w-[60%] origin-left -rotate-[30deg] bg-gradient-to-r from-orange-400/0 via-orange-400 to-transparent animate-pulse" />

          <div className="absolute left-1/2 top-1/2 h-[1px] w-[50%] origin-left rotate-[70deg] bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-transparent animate-pulse" />

        </div>


        {/* INDIA MAP SVG */}
        <div className="absolute inset-x-0 bottom-0 top-10 sm:top-16">

          <svg
            viewBox="0 0 400 600"
            className="absolute left-1/2 top-1/2 h-[82%] w-[70%] -translate-x-1/2 -translate-y-1/2 sm:h-[88%] sm:w-[65%]"
            xmlns="http://www.w3.org/2000/svg"
          >

            <defs>

              <linearGradient
                id="solarIndiaGradient"
                x1="0"
                y1="0"
                x2="400"
                y2="600"
              >

                <stop offset="0%" stopColor="#facc15" />
                <stop offset="45%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#22c55e" />

              </linearGradient>

            </defs>


            {/* INDIA INSPIRED SHAPE */}
            <path
              d="
                M190 20
                L245 65
                L280 120
                L245 170
                L300 220
                L275 290
                L315 350
                L270 430
                L245 520
                L200 580
                L165 510
                L135 430
                L95 350
                L125 285
                L105 220
                L145 160
                L135 85
                Z
              "
              fill="rgba(250,204,21,0.04)"
              stroke="url(#solarIndiaGradient)"
              strokeWidth="2"
            />


            {/* ENERGY CONNECTIONS */}
            <path
              d="M180 100 L230 160 L160 230 L250 300 L180 370 L240 470"
              fill="none"
              stroke="#facc15"
              strokeWidth="1.5"
              strokeDasharray="6 10"
              className="animate-[pulse_3s_ease-in-out_infinite]"
            />

            <path
              d="M145 170 L230 160 L250 300 L170 380 L240 470"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              strokeDasharray="5 10"
              className="animate-[pulse_4s_ease-in-out_infinite]"
            />

            <path
              d="M230 160 L290 240 L250 300 L295 380"
              fill="none"
              stroke="#22c55e"
              strokeWidth="1.5"
              strokeDasharray="5 10"
              className="animate-[pulse_5s_ease-in-out_infinite]"
            />

          </svg>

        </div>


        {/* =========================================
            CITY MARKERS
        ========================================= */}
        {mapCities.map((city, index) => (

          <motion.button
            key={city.name}
            type="button"
            onClick={() => setSelectedCity(city.name)}

            initial={{
              opacity: 0,
              scale: 0,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}

            whileHover={{
              scale: 1.4,
            }}

            whileTap={{
              scale: 0.9,
            }}

            style={{
              left: city.x,
              top: city.y,
            }}

            className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
          >

            {/* OUTER PULSE */}
            <span
              className={`absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full sm:h-12 sm:w-12 ${
                selectedCity === city.name
                  ? "bg-yellow-400/30"
                  : "bg-cyan-400/20"
              }`}
            />


            {/* GLOW */}
            <span
              className={`absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg transition-all duration-300 group-hover:scale-150 sm:h-8 sm:w-8 ${
                selectedCity === city.name
                  ? "bg-yellow-400"
                  : "bg-cyan-400"
              }`}
            />


            {/* MAIN NODE */}
            <span
              className={`relative flex h-3 w-3 items-center justify-center rounded-full border border-white shadow-xl transition-all duration-300 sm:h-5 sm:w-5 sm:border-2 ${
                selectedCity === city.name
                  ? "bg-yellow-400 shadow-yellow-400/80"
                  : "bg-gradient-to-br from-cyan-300 to-emerald-400 shadow-cyan-400/70"
              }`}
            >

              <span className="h-1 w-1 rounded-full bg-white sm:h-1.5 sm:w-1.5" />

            </span>


            {/* CITY NAME */}
            <span
              className={`absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-lg border px-1.5 py-0.5 text-[5px] font-bold uppercase tracking-wide backdrop-blur-xl transition-all duration-300 sm:top-8 sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-[9px] ${
                selectedCity === city.name
                  ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-300 opacity-100"
                  : "border-white/10 bg-slate-950/80 text-white opacity-0 group-hover:opacity-100"
              }`}
            >

              {city.name}

            </span>

          </motion.button>

        ))}


        {/* BOTTOM STATUS */}
        <div className="absolute bottom-3 left-3 z-30 sm:bottom-5 sm:left-5">

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-2 py-1.5 backdrop-blur-xl sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">

            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] sm:h-3 sm:w-3" />

            <span className="text-[6px] font-bold uppercase tracking-wide text-slate-300 sm:text-[9px] sm:tracking-wider">

              Solar Hubs

            </span>

          </div>

        </div>


        {/* GROWTH */}
        <div className="absolute bottom-3 right-3 z-30 hidden sm:block">

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 backdrop-blur-xl">

            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-300">

              +38% Growth

            </span>

          </div>

        </div>

      </div>



      {/* =========================================
          RIGHT SIDE — CITY INFORMATION
      ========================================= */}
      <div className="col-span-4">

        <AnimatePresence mode="wait">

          <motion.div
            key={selectedCity}

            initial={{
              opacity: 0,
              x: 20,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: -20,
            }}

            transition={{
              duration: 0.35,
            }}

            className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-2.5 backdrop-blur-xl sm:min-h-[500px] sm:rounded-[2rem] sm:p-5 lg:min-h-[580px] lg:p-8"
          >

            {/* BACKGROUND GLOW */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-yellow-400/10 blur-[80px]" />


            <div className="relative">

              {/* TOP ICON */}
              <div className="flex items-center justify-between">

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-300 to-orange-500 shadow-xl shadow-orange-500/30 sm:h-11 sm:w-11 sm:rounded-xl lg:h-14 lg:w-14 lg:rounded-2xl">

                  <MapPin className="h-3.5 w-3.5 text-white sm:h-5 sm:w-5 lg:h-7 lg:w-7" />

                </div>


                <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 sm:block sm:px-3 sm:py-1.5">

                  <span className="text-[7px] font-bold uppercase tracking-wide text-emerald-300 lg:text-[9px] lg:tracking-widest">

                    Active

                  </span>

                </div>

              </div>


              {/* SELECTED CITY */}
              <p className="mt-3 text-[6px] font-bold uppercase tracking-[0.12em] text-yellow-400 sm:mt-6 sm:text-[9px] sm:tracking-[0.2em] lg:mt-8 lg:text-[10px] lg:tracking-[0.3em]">

                Selected Hub

              </p>


              <h3 className="mt-1 break-words text-sm font-black text-white sm:mt-2 sm:text-2xl lg:text-4xl">

                {selectedCity}

              </h3>


              <p className="mt-2 hidden text-xs leading-relaxed text-slate-400 sm:block lg:mt-3 lg:text-sm">

                Delivering reliable solar energy solutions and helping homes
                and businesses transition towards a cleaner future.

              </p>


              {/* DATA CARDS */}
              <div className="mt-4 space-y-2 sm:mt-7 sm:space-y-3 lg:mt-10 lg:space-y-4">


                {/* CAPACITY */}
                <div className="group rounded-lg border border-white/10 bg-black/20 p-2 transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400/40 sm:rounded-2xl sm:p-3 lg:p-4">

                  <p className="text-[6px] font-bold uppercase tracking-tight text-slate-500 sm:text-[8px] sm:tracking-widest lg:text-[9px]">

                    Capacity

                  </p>

                  <p className="mt-1 text-xs font-black text-yellow-400 sm:text-lg lg:mt-2 lg:text-2xl">

                    {currentCityData.capacity}

                  </p>

                </div>


                {/* PROJECTS */}
                <div className="group rounded-lg border border-white/10 bg-black/20 p-2 transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/40 sm:rounded-2xl sm:p-3 lg:p-4">

                  <p className="text-[6px] font-bold uppercase tracking-tight text-slate-500 sm:text-[8px] sm:tracking-widest lg:text-[9px]">

                    Projects

                  </p>

                  <p className="mt-1 text-xs font-black text-cyan-400 sm:text-lg lg:mt-2 lg:text-2xl">

                    {currentCityData.projects}+

                  </p>

                </div>


                {/* CO2 */}
                <div className="group rounded-lg border border-white/10 bg-black/20 p-2 transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400/40 sm:rounded-2xl sm:p-3 lg:p-4">

                  <p className="text-[6px] font-bold uppercase tracking-tight text-slate-500 sm:text-[8px] sm:tracking-widest lg:text-[9px]">

                    CO₂ Saved

                  </p>

                  <p className="mt-1 text-xs font-black text-emerald-400 sm:text-lg lg:mt-2 lg:text-2xl">

                    {currentCityData.co2}

                  </p>

                </div>

              </div>


              {/* BUTTON */}
<button
  type="button"
  onClick={() => {
    window.location.href = "/contact";
  }}
  className="group mt-3 flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 px-2 py-2 text-[6px] font-black text-slate-950 shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:mt-6 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-3 sm:text-[10px] lg:mt-8 lg:gap-3 lg:px-5 lg:py-4 lg:text-sm lg:hover:shadow-2xl"
>
  <span className="hidden sm:inline">
    Contact Us
  </span>

  <span className="sm:hidden">
    Contact
  </span>

  <span className="transition-transform duration-300 group-hover:translate-x-1 lg:group-hover:translate-x-2">
    →
  </span>
</button>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </div>



    </div>

  

</section>
    

      {/* =========================================
         SECTION 12: FINAL CTA
         ========================================= */}
      <section className="py-20 bg-white px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-2xl relative overflow-hidden py-16 px-6 sm:px-12 md:py-24 text-center border border-white/5"
        >
          {/* Back mesh glowing animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-20%] left-[-20%] h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-[-20%] right-[-20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 particles-container opacity-20" />
            <div className="absolute inset-0 futuristic-grid opacity-10" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Success Begins Here
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              Ready To Become Our Next Success Story?
            </h2>

            <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              Get a customized solar solution designed for maximum savings and long-term performance. Book your site survey today.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <ProjectCTAButton to ='/contact'>
                Book Site Survey
              </ProjectCTAButton>
            
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

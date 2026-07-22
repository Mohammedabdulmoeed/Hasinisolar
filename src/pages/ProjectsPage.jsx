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
  const [selectedCity, setSelectedCity] = useState("Ahmedabad");
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
    review: "Sun Volt Solar setup completely transformed our operating costs. Our monthly electricity bills fell by 40% starting from month one. The online monitoring dashboard and net-metering support were outstanding.",
    logo: "Kumar Textiles",
    savings: "₹8 Lakhs / month",
    roi: "3.8 Years achieved",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "A. Srinivasa Rao",
    role: "Hospital Administrator",
    review: "Power reliability is critical for us. Sun Volt Solarengineered an On-Grid 250 kW solution that integrated seamlessly with our existing setup. Our electricity overheads have reduced significantly, hitting ROI target in exactly 4 years.",
    logo: "City Hospital",
    savings: "₹2.2 Lakhs / month",
    roi: "4.0 Years achieved",
    image: "https://images.unsplash.com/photo-1733348137468-90b917d2ebf1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Vikram Malhotra",
    role: "Homeowner",
    review: "For our new house, keeping the rooftop neat was very important. Sun Volt Solar custom-engineered a sleek solar panel installation that matched the home's design while easily supplying 100% of our daily power requirements.",
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
    projects: 25,
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
        subtitle="Sun Volt Solar Energies helps homeowners and businesses reduce electricity costs through high-performance rooftop solar solutions."
        image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80"
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
              <div className="relative overflow-hidden rounded-[32px] border border-slate-100 shadow-2xl group cursor-pointer aspect-[4/3] max-h-[32rem] bg-slate-200">
                <img
                  src={images.industrial_solar} // Ensure this points to a residential roof image in your assets
                  alt="Sun Volt Solar 15 kWp Residential Grid"
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
                <p className="text-lg font-bold text-slate-800">3 Days Execution</p>
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
              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-display text-slate-900">15 kWp Luxury Villa Solar System</h3>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Sun Volt Solar designed and commissioned a luxury net-metered rooftop solar solution for a multi-story premium residence. Engineered seamlessly into the villa's modern architecture, this grid-tied setup fully powers heavy domestic loads, including centralized air conditioning and electric vehicle charging infrastructure.
              </p>

              {/* Grid of details */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Capacity</p>
                  <p className="text-lg font-extrabold text-slate-800 font-display">15 kWp</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Annual Generation</p>
                  <p className="text-lg font-extrabold text-slate-800 font-display">22,500 kWh</p>
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
    SECTION 5: 9-IMAGE MINIMALIST GALLERY
    ========================================= */}
<section className="section-padding bg-slate-50/50">
  <div className="container-custom px-4 max-w-7xl mx-auto">
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
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
              alt="Sun Volt Solar Residential Installation"
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
    SECTION 7: CUSTOMER SUCCESS STORIES (Testimonials)
    ========================================= */}
<section className="relative py-24 lg:py-36 bg-slate-50 overflow-hidden w-full select-none text-left">
  
  {/* Modern Ambient Fluid Backdrop Fields */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[140px]" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-40" />
  </div>

  {/* Expanded Widescreen Outer Shell Canvas */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
    
    {/* Section Header */}
    <div className="max-w-3xl mb-16 sm:mb-20">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-4">
        <Sparkles className="h-3 w-3 text-sky-500" /> Endorsements
      </span>
      <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
        Customer Success <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-600">
          Stories & Impact.
        </span>
      </h2>
    </div>

    {/* Slider Box Constraint Container */}
    <div className="max-w-5xl mx-auto relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200 shadow-xl text-left relative"
        >
          {/* Top Decorative Gradient Horizon Tag */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-500" />

          {/* LEFT PANEL: Client Profile Details (4 Columns) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
            <div className="h-28 w-28 rounded-[28px] border border-slate-200 overflow-hidden mb-5 shadow-inner bg-slate-50 relative p-1 bg-gradient-to-br from-sky-100 to-emerald-100">
              <div className="w-full h-full rounded-[24px] overflow-hidden">
                <img
                  src={testimonials[testimonialIndex].image}
                  alt={testimonials[testimonialIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h4 className="text-lg font-black text-slate-900 tracking-tight leading-tight">
              {testimonials[testimonialIndex].name}
            </h4>
            <p className="text-xs text-slate-400 font-bold tracking-wide mt-1">
              {testimonials[testimonialIndex].role}
            </p>
            
            <span className="mt-4 inline-flex items-center text-[10px] font-black text-emerald-700 bg-emerald-50 rounded-lg px-3 py-1 border border-emerald-100 uppercase tracking-widest">
              {testimonials[testimonialIndex].logo}
            </span>
          </div>

          {/* RIGHT PANEL: Review Narrative Details (8 Columns) */}
          <div className="md:col-span-8 flex flex-col justify-between h-full pt-4 md:pt-0">
            {/* Structural Large Quote Decoration Accent */}
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed italic mb-8 relative">
              "{testimonials[testimonialIndex].review}"
            </p>
            
            {/* Live Data Grid Indicators */}
            <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-6">
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Operational Savings</p>
                <p className="text-2xl font-black text-emerald-600 tracking-tight mt-1">
                  {testimonials[testimonialIndex].savings}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Investment Return</p>
                <p className="text-2xl font-black text-sky-600 tracking-tight mt-1">
                  {testimonials[testimonialIndex].roi}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Testimonials Interactive Control Hub */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          type="button"
          onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)}
          className="p-3 border border-slate-200 text-slate-600 hover:border-slate-950 hover:text-slate-900 rounded-full bg-white shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Previous story"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        {/* Navigation Pip Stream */}
        <div className="flex gap-2.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setTestimonialIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === testimonialIndex ? 'w-8 bg-slate-900' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
              aria-label={`Slide to review ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonials.length)}
          className="p-3 border border-slate-200 text-slate-600 hover:border-slate-950 hover:text-slate-900 rounded-full bg-white shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Next story"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
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
          SECTION 9: PROJECT MAP
          ========================================= */}
      <section className="section-padding bg-slate-950 border-t border-b border-white/5 relative overflow-hidden">
        {/* Soft background light mesh glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 w-full px-2 sm:px-4">
          
          {/* Main Section Header */}
          <div className="w-full text-center mb-10 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full">
              Enterprise Footprint
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight font-display text-white">
              Our Operational Network
            </h2>
          </div>

          {/* Grid Layout: Stays left and right across all modes including simulated mobile */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center">
            
           {/* Left Side: Interactive Map Side details */}
            <div className="col-span-5 text-left flex flex-col items-start space-y-4">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-400 font-sans">Interactive Dashboard</span>
                
                {/* Margin bottom added to create breathing room beneath the main heading */}
                <h3 className="mt-1 sm:mt-2 mb-4 lg:mb-6 text-base sm:text-2xl lg:text-4xl font-black font-display text-white tracking-tight">
                  PAN India Presence
                </h3>
              </div>
              
              <p className="mt-2 text-slate-400 leading-relaxed text-[10px] sm:text-sm lg:text-base hidden xs:block">
                Click on the glowing interactive solar markers on the dashboard map to track localized statistics.
              </p>

              {/* Selected City Telemetry Card (Pushed down slightly for structural clarity) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCity}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full mt-4 glass-card-2026 rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-white/10 bg-slate-900/80 backdrop-blur-md"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                    <MapPin className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-amber-400 shrink-0" />
                    <h4 className="text-xs sm:text-lg font-bold text-white font-display leading-none">{selectedCity} Hub</h4>
                  </div>

                  {/* Grid layout within the telemetry card */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-4 border-t border-white/5 pt-2 sm:pt-4">
                    <div>
                      <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-tight">Capacity</p>
                      <p className="text-[10px] sm:text-base font-extrabold text-white font-display mt-0.5">{currentCityData.capacity}</p>
                    </div>
                    <div>
                      <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-tight">Projects</p>
                      <p className="text-[10px] sm:text-base font-extrabold text-white font-display mt-0.5">{currentCityData.projects}+</p>
                    </div>
                    <div>
                      <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-tight">CO₂ Offset</p>
                      <p className="text-[10px] sm:text-base font-extrabold text-emerald-400 font-display mt-0.5">{currentCityData.co2}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: SVG Map of India Layer (With New Contrast Background) */}
            <div className="col-span-7 flex items-center justify-center relative w-full aspect-square border border-slate-800 rounded-2xl sm:rounded-3xl bg-slate-900/90 shadow-2xl p-2 sm:p-4 overflow-hidden">
              
              {/* Abstract map visual layout background */}
              <svg viewBox="0 0 400 450" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100 200 L 170 100 L 250 250 L 180 300 Z" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <path d="M 170 100 L 190 280 L 100 200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <path d="M 180 300 L 190 380 L 250 250" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                <circle cx="170" cy="100" r="1.5" fill="rgba(255,255,255,0.15)" />
                <circle cx="100" cy="200" r="1.5" fill="rgba(255,255,255,0.15)" />
                <circle cx="250" cy="250" r="1.5" fill="rgba(255,255,255,0.15)" />
                <circle cx="180" cy="300" r="1.5" fill="rgba(255,255,255,0.15)" />
                <circle cx="190" cy="380" r="1.5" fill="rgba(255,255,255,0.15)" />
                <circle cx="190" cy="280" r="1.5" fill="rgba(255,255,255,0.15)" />
              </svg>

              {/* Map Pulsing City Markers */}
              {mapCities.map((city) => (
                <button
                  key={city.name}
                  type="button"
                  onClick={() => setSelectedCity(city.name)}
                  className="absolute z-10 flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-300"
                  style={{ left: city.x, top: city.y }}
                >
                  <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${selectedCity === city.name ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                    <span className={`relative inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full ${selectedCity === city.name ? 'bg-amber-400 border border-white' : 'bg-cyan-400'}`} />
                  </span>
                  
                  {/* Tooltip text elements optimized for micro screen heights */}
                  <span className="absolute bottom-4 sm:bottom-6 bg-slate-950 border border-white/10 text-white text-[7px] sm:text-[9px] font-bold px-1 sm:px-2 py-0.5 rounded shadow-xl uppercase whitespace-nowrap pointer-events-none">
                    {city.name}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* =========================================
         SECTION 10: TECHNOLOGY PARTNERS
         ========================================= */}
      <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
        <div className="container-custom px-4">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
            Our Certified Engineering & Technology Partners
          </p>

          {/* Scrolling logo ticker wrapper (infinite loop) */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-16 items-center w-max animate-[hero-marquee-scroll_20s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
              {[
                "Waaree", "Adani Solar", "Tata Power Solar", "Sungrow", "Growatt", "Havells", "Polycab",
                "Waaree", "Adani Solar", "Tata Power Solar", "Sungrow", "Growatt", "Havells", "Polycab"
              ].map((partner, index) => (
                <div
                  key={index}
                  className="text-lg sm:text-xl font-black font-display text-slate-400/70 hover:text-slate-800 tracking-wider transition-colors duration-300 select-none uppercase"
                >
                  ⚡ {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* =========================================
          SECTION 11: PROJECT PERFORMANCE DASHBOARD (Analytics charts)
          ========================================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-2 sm:px-4">
          
          <div className="text-center mb-8 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-sans">Clean Energy Dashboard</span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-display text-slate-900">Sun Volt Solar Performance Analytics</h2>
          </div>

          {/* Forced Grid: Stays side-by-side left and right across all screens including simulated desktop-mode mobile */}
          <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-stretch">
            
            {/* Left Side: Live Chart Visual Overlay */}
            <div className="col-span-7 rounded-2xl sm:rounded-3xl bg-slate-950 p-3 sm:p-6 flex flex-col justify-between border border-white/5 shadow-2xl relative overflow-hidden text-left min-h-[220px] sm:min-h-[350px]">
              
              {/* Ambient back glow */}
              <div className="absolute top-[-20%] left-[-20%] h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] rounded-full bg-emerald-500/10 blur-[40px] sm:blur-[80px] pointer-events-none" />
              
              <div className="flex justify-between items-start mb-3 sm:mb-6 relative z-10 gap-2">
                <div>
                  <p className="text-[7px] sm:text-xs text-slate-400 font-bold uppercase leading-none mb-1">Energy Production Curve</p>
                  <h4 className="text-xs sm:text-2xl font-extrabold text-white font-display tracking-tight leading-tight">Active Real-Time Array Output</h4>
                </div>
                <div className="flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-1.5 py-0.5 sm:px-3 sm:py-1 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[6px] sm:text-[10px] text-emerald-400 font-bold uppercase tracking-tight">Live</span>
                </div>
              </div>

              {/* Power curve Bell SVG path */}
              <div className="w-full h-24 sm:h-48 relative z-10 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid lines */}
                  <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

                  {/* Bell Curve line */}
                  <path
                    d="M 10 140 C 100 140, 150 10, 250 10 C 350 10, 400 140, 490 140"
                    stroke="url(#chart-grad-dashboard)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Active dot tracer */}
                  <circle cx="250" cy="10" r="5" fill="#10B981" className="animate-pulse" />

                  <defs>
                    <linearGradient id="chart-grad-dashboard" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Curve legend timelines */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[6px] sm:text-[8px] text-slate-500 font-bold uppercase tracking-wider px-1">
                  <span>06:00 AM</span>
                  <span>12:00 PM (Peak)</span>
                  <span>06:00 PM</span>
                </div>
              </div>
            </div>

            {/* Right Side: Performance Stats Overlay cards */}
            <div className="col-span-5 grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { title: "CO₂ Saved", value: "14,250 T", desc: "Lifetime offsets", icon: CloudLightning, color: "text-emerald-400" },
                { title: "Trees Saved", value: "57,000", desc: "Afforestation value", icon: TreePine, color: "text-emerald-500" },
                { title: "Gains", value: "₹10.24 Cr", desc: "Consumer savings", icon: TrendingUp, color: "text-cyan-400" },
                { title: "Uptime", value: "99.8%", desc: "Direct rating", icon: Activity, color: "text-amber-400" }
              ].map((dash, idx) => {
                const Icon = dash.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl sm:rounded-3xl bg-white border border-slate-100 shadow-lg p-2.5 sm:p-5 flex flex-col justify-between text-left group hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`p-1.5 bg-slate-50 rounded-lg sm:rounded-2xl w-max ${dash.color}`}>
                      <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                    </div>

                    <div className="mt-2 sm:mt-4">
                      <p className="text-[7px] sm:text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">{dash.title}</p>
                      <p className="text-xs sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight leading-none">{dash.value}</p>
                      <p className="text-[6px] sm:text-[10px] text-slate-400 font-medium leading-none mt-1 sm:mt-2 opacity-0 xs:opacity-100">{dash.desc}</p>
                    </div>
                  </div>
                );
              })}
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
              <ProjectCTAButton to="/solar-calculator" variant="outline">
                Calculate Savings
              </ProjectCTAButton>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

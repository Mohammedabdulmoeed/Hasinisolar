import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import { pageSeo } from '../data/seo';
import PageHero from '../components/ui/PageHero';
import referImage from '../assets/hero/refer.jpg';
import { 
  UserPlus, 
  ClipboardCheck, 
  Gift, 
  Award, 
  Crown,
  CheckCircle2, 
  Zap, 
  Home, 
  Building2, 
  Building, 
  PhoneCall ,
  FileText,
  Wrench,
  Clock,
  Landmark,
  Store, 
  Briefcase, 
  Hotel, 
  GraduationCap, 
  School, 
  Hospital, 
  Factory, 
  Warehouse, 
  Cpu, 
  Check, 
  TrendingUp, 
  Leaf, 
  Sun, 
  Users, 
  Smile, 
  Trophy, 
  Star, 
  X, 
  Heart, 
  ChevronDown, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

// Leaderboard data
const topReferrers = [
  { rank: 1, name: "Priya Sharma", earnings: "₹48,000", referrals: 12, city: "Adilabad", avatar: "AR", medal: "🥇" },
  { rank: 2, name: "Abdul Rahman", earnings: "₹32,500", referrals: 8, city: "Adilabad", avatar: "RK", medal: "🥈" },
  { rank: 3, name: "Ravi Kumar", earnings: "₹25,000", referrals: 6, city: "Adilabad", avatar: "PS", medal: "🥉" }
];

// Stats data
const stats = [
  { label: "Top Referrer", value: "12 Referrals", icon: Trophy, color: "text-amber-500" },
  { label: "Total Referrals", value: "350+", icon: Users, color: "text-sky-500" },
  { label: "Rewards Distributed", value: "₹8.5 Lakhs", icon: Gift, color: "text-emerald-500" },
  { label: "Happy Referrers", value: "250+", icon: Smile, color: "text-amber-500" }
];

// Hall of Fame badges
const badges = [
  { title: "Solar Champion", icon: Sun, desc: "Successfully referred 10+ installations." },
  { title: "Green Ambassador", icon: Leaf, desc: "Helped offset 50+ tons of CO2." },
  { title: "Gold Referrer", icon: Award, desc: "Reached ₹50k milestone earnings." },
  { title: "Platinum Partner", icon: Trophy, desc: "Exceeded 15+ successful installations." },
  { title: "Eco Hero", icon: Heart, desc: "Top carbon offsetting ambassador." },
  { title: "Referral Star", icon: Star, desc: "Highly active monthly referrer." }
];

// Who can you refer data
const categories = [
  { name: "Home Owners", icon: Home },
  { name: "Villas", icon: Building2 },
  { name: "Apartments", icon: Building },
  { name: "Shops", icon: Store },
  { name: "Offices", icon: Briefcase },
  { name: "Hotels", icon: Hotel },
  { name: "Schools", icon: GraduationCap },
  { name: "Colleges", icon: School },
  { name: "Hospitals", icon: Hospital },
  { name: "Factories", icon: Factory },
  { name: "Warehouses", icon: Warehouse },
  { name: "Industries", icon: Cpu }
];

// FAQ list
const faqs = [
  { question: "Who can join the referral program?", answer: "Anyone can join! Existing customers, solar advocates, real estate brokers, or anyone passionate about clean energy can register and start referring." },
  { question: "How do I submit a referral?", answer: "Simply click the 'Refer Now' or 'Refer a Friend' buttons on this page. Fill out our simple online form with your details and your friend's contact information." },
  { question: "How do I track my referral?", answer: "Once you submit a referral, our dedicated support team will contact you. We send regular updates via WhatsApp and email on their survey, quotation, and installation status." },
  { question: "When will I receive my reward?", answer: "Your reward will be processed and sent directly to your bank account within 7 to 14 working days after the referred client's solar installation is successfully verified, commissioned, and active." },
  { question: "Can I refer commercial projects?", answer: "Yes, you absolutely can! You can refer houses, office buildings, shops, warehouses, hotels, schools, hospitals, or large industrial factories. Commercial and industrial referrals qualify for much larger reward slabs based on installation capacity." },
  { question: "Is there any referral limit?", answer: "No, there is absolutely no limit! You can submit as many referrals as you want and earn rewards for every single successful installation." }
];

export default function ReferEarnPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const [formData, setFormData] = useState({
    projectType: 'Residential'
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      <SEO {...pageSeo.projects} />
      <PageHero
    title="Refer & Earn"
    subtitle="Join the Sunrise Solar Hub Ambassador Program, share the benefits of clean energy with your network, and earn exciting rewards for every successful referral."
    image="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
    breadcrumb="Home / refer & earn"
/>

      <div className="relative w-full bg-slate-50 text-slate-900 font-sans overflow-hidden selection:bg-amber-400 selection:text-slate-950">
        
        {/* Soft Background Accent Glows */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-5%] left-[10%] w-[50vw] h-[50vw] bg-amber-400/10 rounded-full blur-[160px]" />
          <div className="absolute top-[30%] right-[-5%] w-[45vw] h-[45vw] bg-sky-400/10 rounded-full blur-[170px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-emerald-400/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-80" />
        </div>

        {/* ===================================================================
1. HERO SECTION
=================================================================== */}

<section className="overflow-hidden py-12 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* CHANGED: Removed flex-col so it stays side-by-side (grid-cols-12) on all viewports */}
    <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
      
      {/* Left Content (Takes 7 columns) */}
      <div className="col-span-7 text-left space-y-4 lg:space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4.5 lg:py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-xl shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-amber-600" />
          <span className="text-amber-800 text-[10px] lg:text-xs font-extrabold uppercase tracking-widest">
            Sunrise solar hub Ambassador Program 2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] font-display"
        >
          Refer Friends.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">
            Earn Exciting Rewards.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-600 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal"
        >
          Introduce your friends, neighbors, or business networks to clean, cost-saving solar energy. Earn handsome cash incentives for every successful rooftop installation commissioned by Sunrise Solar Hub.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 lg:gap-3 px-5 py-3 lg:px-8 lg:py-4.5 rounded-xl lg:rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-300 font-black text-xs lg:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25"
          >
            <span>Refer Now</span>
            <ArrowRight className="h-4 w-4 lg:h-4.5 lg:w-4.5 stroke-[3]" />
          </button>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:px-8 lg:py-4.5 rounded-xl lg:rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold text-xs lg:text-sm uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            Contact Support
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-slate-200 text-[10px] lg:text-xs text-slate-500 font-medium"
        >
          <div className="flex items-center gap-1.5 lg:gap-2">
            <ShieldCheck className="h-4 w-4 lg:h-4.5 lg:w-4.5 text-emerald-600" />
            <span>Government Subsidy Aligned</span>
          </div>
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Zap className="h-4 w-4 lg:h-4.5 lg:w-4.5 text-amber-600" />
            <span>Direct Bank Transfer</span>
          </div>
        </motion.div>
      </div>

      {/* Right Side Composition Card (Takes 5 columns) */}
      <div className="col-span-5 relative flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[460px]"
        >
          <div className="relative rounded-[24px] lg:rounded-[36px] overflow-hidden border border-slate-200 shadow-2xl bg-white group">
            <img 
              src={referImage} 
              alt="Referral Gold Coins and Rewards"
              className="w-full h-[240px] sm:h-[320px] lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Floating Reward Card Overlay inside Image */}
            <div className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:left-6 lg:right-6 p-3 lg:p-6 rounded-xl lg:rounded-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl space-y-2 lg:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="h-9 w-9 lg:h-12 lg:w-12 rounded-lg lg:rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 shadow-inner">
                    <Gift className="h-4 w-4 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <p className="text-[8px] lg:text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Referral Incentive</p>
                    <p className="text-sm lg:text-lg font-black text-slate-900 font-mono">Up to ₹10,000+</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 lg:px-3 lg:py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 text-[8px] lg:text-[10px] font-mono font-bold">
                  ACTIVE BONUS
                </span>
              </div>

              <div className="pt-2 lg:pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] lg:text-xs">
                <span className="text-slate-600 font-medium">Average payout duration</span>
                <span className="font-bold text-amber-600">7 - 14 Days</span>
              </div>
            </div>
          </div>

          {/* Floating Milestone Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-2 lg:-top-6 lg:-right-4 rounded-xl lg:rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200 p-2.5 lg:p-4 shadow-2xl flex items-center gap-2 lg:gap-3"
          >
            <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-lg lg:rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5" />
            </div>
            <div className="text-left pr-1 lg:pr-2">
              <p className="text-[8px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Milestone</p>
              <p className="text-[10px] lg:text-xs font-black text-slate-900">350+ Installations</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

    </div>
  </div>
</section>

       {/* ===================================================================
            2. HOW IT WORKS
            =================================================================== */}
        <section className="py-24 relative border-t border-slate-800 z-10 bg-[#081322] text-white shadow-xl">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="text-xs font-extrabold text-[#FDB813] tracking-widest uppercase bg-amber-400/10 border border-amber-400/25 px-4.5 py-1.5 rounded-full inline-block mb-3">
                Simple Flow
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-display">
                How It Works
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Refer and earn in three straightforward steps. No complications, no hidden requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
              <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-amber-500/30 via-sky-500/30 to-emerald-500/30 z-0" />

              {[
                { step: "01", title: "Refer Someone", desc: "Enter details of any friend, neighbor, or commercial business owner looking for a rooftop solar system on our easy referral form.", icon: UserPlus, color: "text-[#FDB813]", bg: "bg-amber-400/10", border: "border-amber-400/20" },
                { step: "02", title: "We Handle Everything", desc: "Our solar specialists schedule a detailed site survey, design a high-efficiency system, coordinate subsidy documentation, and complete the installation.", icon: ClipboardCheck, color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20" },
                { step: "03", title: "Earn Rewards", desc: "Once your friend's solar plant is successfully commissioned and active, your cash reward is credited directly to your bank account with complete transparency.", icon: Gift, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:border-[#FDB813]/40 transition-all duration-300 flex flex-col items-center text-center shadow-xl group z-10"
                  >
                    <div className="absolute top-6 right-6 text-2xl font-black text-white/10 group-hover:text-[#FDB813]/30 transition-colors font-mono">
                      {item.step}
                    </div>
                    <div className={`h-16 w-16 rounded-2xl ${item.bg} border ${item.border} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                      <IconComp className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* ===================================================================
            3. WHY REFER Sunrise Solar Hub
            =================================================================== */}
        <section className="py-24 relative border-t border-slate-200 z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="text-xs font-extrabold text-amber-600 tracking-widest uppercase bg-amber-50 border border-amber-200 px-4.5 py-1.5 rounded-full inline-block mb-3">
                Why Us
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                Why Refer Sunrise Solar Hub
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                When you refer a friend, you refer them to India's most trusted solar EPC and custom design experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Trusted Solar Experts", desc: "Proven track record of engineering top-quality utility rooftops and solar systems with standard high durability.", icon: Award },
                { title: "Residential & Commercial", desc: "Custom scale capability from small residential properties to large corporate complexes, factories, and agricultural pumps.", icon: Building2 },
                { title: "End-to-End Installation", desc: "End-to-end management covering feasibility reports, structural designs, subsidy processing, net metering, and lifetime support.", icon: CheckCircle2 },
                { title: "Simple Referral Process", desc: "Easy submission portal, regular live updates, zero capping limits, and direct bank settlement within 14 business days.", icon: Zap }
              ].map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="bg-white border border-slate-200 rounded-[28px] p-7 hover:border-amber-400 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                        <FeatIcon className="h-6 w-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. WHO CAN YOU REFER?
            =================================================================== */}
        <section className="py-24 relative border-t border-slate-800 z-10 bg-[#081322] text-white shadow-xl">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="text-xs font-extrabold text-[#FDB813] tracking-widest uppercase bg-amber-400/10 border border-amber-400/25 px-4.5 py-1.5 rounded-full inline-block mb-3">
                Eligible Categories
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-display">
                Who Can You Refer?
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Refer any property owners or business entities suffering from high power tariffs.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {categories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-[#FDB813]/40 hover:bg-slate-900 transition-all duration-300 shadow-xl"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-[#FDB813] flex items-center justify-center shadow-inner">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {cat.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
       {/* ===================================================================
    5. PROGRAM BENEFITS SPLIT SECTION
    =================================================================== */}
<section className="py-16 lg:py-24 relative border-t border-slate-200 z-10 bg-slate-50/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* CHANGED: Removed grid-cols-1 so it stays side-by-side (grid-cols-12) everywhere */}
    <div className="grid grid-cols-12 gap-6 lg:gap-16 items-center">
      
      {/* Left Content (Takes 7 columns) */}
      <div className="col-span-7 space-y-6 lg:space-y-8 text-left">
        <div>
          <span className="text-[10px] lg:text-xs font-extrabold text-amber-600 tracking-widest uppercase bg-amber-50 border border-amber-200/60 px-3 py-1 lg:px-4.5 lg:py-1.5 rounded-full inline-block mb-2 lg:mb-3 shadow-sm">
            Program Benefits
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            Why People Love Our Referral Program
          </h2>
          <p className="mt-2 lg:mt-3 text-slate-600 text-xs sm:text-base leading-relaxed">
            Designed to reward our solar network fairly while accelerating India's rooftop solar adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          {[
            { title: "Unlimited referrals", desc: "No capping or limitations. The more you refer, the more cash rewards you earn." },
            { title: "Transparent process", desc: "Clear visibility on survey validation, pricing, and active installation status updates." },
            { title: "Dedicated support", desc: "Direct access to our referral desk via phone and WhatsApp support." },
            { title: "Fast verification", desc: "Verification is initiated immediately once structure solar commissioning begins." },
            { title: "Professional installation", desc: "Refer with pride knowing they get double-validated structure components." },
            { title: "Excellent customer service", desc: "We treat your friends like VIPs. Complete guidance on government subsidy structures." }
          ].map((benefit, i) => (
            <div key={i} className="p-3.5 lg:p-5 rounded-xl lg:rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center gap-2 lg:gap-3 mb-1.5 lg:mb-2">
                <div className="h-6 w-6 lg:h-7 lg:w-7 rounded-lg lg:rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="h-3.5 w-3.5 lg:h-4 lg:w-4 stroke-[3]" />
                </div>
                <h4 className="text-xs lg:text-sm font-bold text-slate-900">{benefit.title}</h4>
              </div>
              <p className="text-[10px] lg:text-xs text-slate-600 leading-relaxed pl-8 lg:pl-10">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Modern Glass Telemetry Widget Card (Takes 5 columns) */}
      <div className="col-span-5 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-[440px] rounded-2xl lg:rounded-[32px] bg-white border border-slate-200/80 p-4 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-4 lg:space-y-6"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-400/10 to-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 lg:pb-4 z-10">
            <div className="flex items-center gap-2 lg:gap-2.5">
              <div className="p-1.5 lg:p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                <TrendingUp className="h-4 w-4 lg:h-4.5 lg:w-4.5" />
              </div>
              <span className="text-[11px] lg:text-xs font-bold text-slate-900">Monthly Savings Trend</span>
            </div>
            <span className="text-[9px] lg:text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full shadow-inner">ACTIVE</span>
          </div>

          <div className="space-y-3 lg:space-y-5 z-10 text-left">
            <div className="p-3.5 lg:p-5 rounded-xl lg:rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-baseline shadow-inner">
              <div>
                <p className="text-[9px] lg:text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Accumulated Earnings</p>
                <p className="text-xl lg:text-3xl font-black text-slate-900 font-mono mt-0.5">₹48,000</p>
              </div>
              <span className="text-[10px] lg:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-lg border border-emerald-200">+12% this mo</span>
            </div>

            <div className="space-y-1.5 lg:space-y-2">
              <div className="flex justify-between text-[10px] lg:text-[11px] font-extrabold text-slate-600 uppercase tracking-widest">
                <span>Milestone Progress</span>
                <span className="text-amber-600 font-mono">Gold Level (12/15)</span>
              </div>
              <div className="h-2 lg:h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow" style={{ width: '80%' }} />
              </div>
            </div>

            <p className="text-[10px] lg:text-xs text-slate-600 leading-relaxed bg-amber-50/50 p-3 lg:p-4 rounded-xl border border-amber-200/40">
              💡 Excellent job! Referring <strong>3 more clients</strong> unlocks the Platinum Partner tier with higher cash bonus incentives.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3 lg:pt-4 flex items-center justify-between z-10 text-[10px] lg:text-xs">
            <span className="text-slate-500 font-semibold">Active Referrals Pipeline</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-md border border-emerald-200">12 Successful</span>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
</section>
      {/* ===================================================================
    6. REFERRAL JOURNEY TIMELINE
    =================================================================== */}
<section className="py-16 lg:py-24 relative border-t border-slate-800 z-10 bg-[#081322] text-white overflow-hidden shadow-xl">
  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
      <span className="text-[10px] lg:text-xs font-extrabold text-[#FDB813] tracking-widest uppercase bg-amber-400/10 border border-amber-400/25 px-3.5 py-1 lg:px-4.5 lg:py-1.5 rounded-full inline-block mb-2.5 lg:mb-3 shadow-sm">
        Tracking Tiers
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
        The Referral Journey
      </h2>
      <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed">
        Track the chronological flow of every referral from initial submit down to final bank credit.
      </p>
    </div>

    <div className="relative w-full overflow-x-auto pb-6 scrollbar-thin">
      <div className="min-w-[1024px] lg:min-w-0 flex justify-between items-start relative px-4 pt-6">
        {/* Connecting Line Progress Bar */}
        <div className="absolute top-[48px] lg:top-[52px] left-[6%] right-[6%] h-[3px] bg-gradient-to-r from-amber-500 via-sky-500 to-emerald-500 opacity-40 z-0 rounded-full" />

        {[
          { title: "Submit Referral", desc: "Form Entry", icon: UserPlus },
          { title: "Customer Contacted", desc: "Desk Call", icon: PhoneCall },
          { title: "Site Survey", desc: "Matrix Check", icon: ClipboardCheck },
          { title: "Quotation", desc: "Design Plan", icon: FileText },
          { title: "Installation", desc: "Execution", icon: Wrench },
          { title: "Verification", desc: "Active Check", icon: ShieldCheck },
          { title: "Reward Processed", desc: "Audit Cleared", icon: Clock },
          { title: "Reward Delivered", desc: "Bank Credit", icon: Landmark }
        ].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center text-center space-y-3 z-10 w-[12.5%] relative px-1 group"
            >
              {/* Icon Container with glowing ring effect */}
              <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-2xl bg-slate-900/90 border border-white/15 text-[#FDB813] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-amber-400 group-hover:bg-amber-400/15 transition-all duration-300 relative">
                <div className="absolute inset-1 rounded-xl border border-dashed border-white/10 group-hover:border-amber-400/40" />
                <IconComponent className="h-5 w-5 lg:h-6 lg:w-6 stroke-[2.2]" />
                
                {/* Step indicator mini-badge */}
                <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-slate-800 border border-white/20 text-[9px] font-mono text-slate-300 flex items-center justify-center font-bold shadow-md">
                  {idx + 1}
                </span>
              </div>
              
              <div className="space-y-1">
                <span className="text-[11px] lg:text-xs font-bold text-white leading-tight block select-none group-hover:text-amber-300 transition-colors">
                  {item.title}
                </span>
                <span className="text-[9px] lg:text-[10px] text-slate-400 font-medium block select-none">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>
        {/* ===================================================================
    7. LEADERBOARD & STATISTICS
    =================================================================== */}
<section className="py-20 lg:py-28 relative border-t border-slate-200 z-10 bg-gradient-to-b from-slate-50/50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="max-w-3xl mx-auto mb-14 lg:mb-20 text-center">
      <span className="text-[10px] lg:text-xs font-extrabold text-amber-600 tracking-widest uppercase bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
        Monthly Leaderboard
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
        This Month's Top Referrers
      </h2>
      <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        Celebrating our valued customers who are helping build a greener future.
      </p>
    </div>

    {/* Podium Leaderboard Grid (Forced Horizontal Side-by-Side Everywhere) */}
    <div className="w-full overflow-x-auto pb-4 scrollbar-none mb-12 lg:mb-20">
      <div className="grid grid-cols-3 gap-4 lg:gap-8 min-w-[900px] lg:min-w-0 items-end">
        {topReferrers.map((ref, idx) => {
          const isFirst = ref.rank === 1;
          
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-[28px] lg:rounded-[32px] p-5 lg:p-8 flex flex-col justify-between items-center text-center shadow-xl transition-all duration-300 group overflow-hidden ${
                isFirst 
                  ? 'border-2 border-amber-400 shadow-amber-500/10 lg:-translate-y-4 bg-gradient-to-b from-amber-50/30 to-white' 
                  : 'border border-slate-200 hover:border-amber-300'
              }`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${isFirst ? 'from-amber-400 via-yellow-500 to-amber-500' : 'from-slate-300 to-slate-400'} scale-x-75 group-hover:scale-x-100 transition-transform duration-300`} />

              {/* First Place Crown Banner */}
              {isFirst && (
                <div className="absolute top-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[9px] lg:text-[10px] font-black uppercase tracking-widest py-1 px-4 lg:px-6 rounded-b-xl shadow-md flex items-center gap-1.5">
                  <Crown className="h-3 w-3 lg:h-3.5 lg:w-3.5 fill-slate-950" />
                  <span>Champion Referrer</span>
                </div>
              )}

              {/* Header Icons & Rank */}
              <div className="w-full flex justify-between items-center pt-2 lg:pt-3">
                <span className="text-xl lg:text-2xl select-none">{ref.medal}</span>
                <div className="h-8 w-8 lg:h-9 lg:w-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-amber-600 group-hover:bg-amber-50 transition-colors">
                  <Trophy className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                </div>
              </div>

              {/* Circular Avatar & Profile Info */}
              <div className="flex flex-col items-center my-4 lg:my-6">
                <div className="relative mb-3 lg:mb-4">
                  {isFirst && (
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-75 blur-sm animate-pulse" />
                  )}
                  
                  <div className={`relative h-16 w-16 lg:h-24 lg:w-24 rounded-full flex items-center justify-center text-xl lg:text-2xl font-black shadow-inner overflow-hidden ${
                    isFirst ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 border-2 border-slate-200 text-slate-800'
                  }`}>
                    {ref.avatar}
                  </div>

                  <span className={`absolute -bottom-1 -right-1 h-6 w-6 lg:h-7 lg:w-7 rounded-full text-[10px] lg:text-xs font-black flex items-center justify-center shadow-lg ${
                    isFirst ? 'bg-slate-950 text-amber-400 border-2 border-amber-400' : 'bg-amber-500 text-white border-2 border-white'
                  }`}>
                    #{ref.rank}
                  </span>
                </div>

                <h3 className="text-base lg:text-xl font-bold text-slate-900">{ref.name}</h3>
                <p className="text-[11px] lg:text-xs text-slate-500 font-semibold flex items-center gap-1 mt-1 justify-center">
                  <MapPin className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-amber-500" /> {ref.city}
                </p>
              </div>

              {/* Earnings & Referrals Footer Card */}
              <div className="w-full pt-4 lg:pt-5 border-t border-slate-100 grid grid-cols-2 gap-2 lg:gap-4 bg-slate-50/70 p-3 lg:p-4 rounded-2xl border">
                <div className="text-left">
                  <p className="text-[9px] lg:text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Earnings</p>
                  <p className="text-sm lg:text-lg font-mono font-black text-amber-600 mt-0.5">{ref.earnings}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] lg:text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Referrals</p>
                  <p className="text-sm lg:text-lg font-mono font-black text-slate-900 mt-0.5">{ref.referrals}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Statistics Cards (Horizontal Side-by-Side Layout) */}
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="grid grid-cols-4 gap-3 sm:gap-6 min-w-[700px] lg:min-w-0">
        {stats.map((stat, idx) => {
          const StatIcon = stat.icon;
          return (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 text-left flex items-center gap-3 sm:gap-4 shadow-md hover:shadow-xl transition-shadow group">
              <div className={`p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-amber-50/50 border border-amber-200/60 shrink-0 text-amber-600 group-hover:scale-110 transition-transform ${stat.color}`}>
                <StatIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-[8px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest truncate">
                  {stat.label}
                </p>
                <h4 className="text-sm sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5 font-mono">
                  {stat.value}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
        {/* ===================================================================
            10. FAQ SECTION
            =================================================================== */}
        <section className="py-24 relative border-t border-slate-200 z-10 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="text-xs font-extrabold text-amber-600 tracking-widest uppercase bg-amber-50 border border-amber-200 px-4.5 py-1.5 rounded-full inline-block mb-3">
                Help Desk
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                FAQ
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Quick answers to common questions about our ambassador rewards process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left bg-slate-50 ${
                    activeFaq === index
                      ? 'border-amber-400 shadow-lg shadow-amber-500/5 bg-white'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left group"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-amber-600"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================================================================
            11. FINAL CTA
            =================================================================== */}
        <section className="py-24 relative border-t border-slate-200 z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="relative overflow-hidden rounded-[40px] bg-slate-900 border border-slate-800 px-6 py-16 md:px-16 md:py-24 shadow-2xl text-center text-white"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/15 blur-[150px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

              <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                <span className="text-xs font-extrabold text-amber-400 tracking-widest uppercase bg-amber-400/15 border border-amber-400/30 px-5 py-2 rounded-full inline-block">
                  Solar Revolution
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
                  Become Our Next Top Referrer
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  Help your friends save on electricity while contributing to a cleaner, greener future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-xl shadow-amber-400/20 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span>Refer a Friend</span>
                    <ArrowRight className="h-4.5 w-4.5 stroke-[3]" />
                  </button>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl border border-white/20 bg-white/10 text-white font-bold text-sm hover:bg-white/25 transition-colors backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Contact Our Team
                  </a>
                </div>

                <div className="pt-12 text-amber-400/90 text-xs sm:text-sm font-extrabold uppercase tracking-widest select-none">
                  Together We Power a Greener Tomorrow.
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </div>

      {/* ===================================================================
          REFERRAL FORM MODAL
          =================================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 z-[9999] overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl relative text-left"
            >
              <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 rounded-t-3xl" />

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-amber-700">
                  Referral Form
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-3">Submit A Referral</h2>
                <p className="text-xs text-slate-500 mt-1.5 font-medium">Please enter your details and the referred prospect's details below.</p>
              </div>

              <form
                action="https://formsubmit.co/sunrisesolarhub@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New Solar Referral Submission - Sunrise solar hub Network" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${window.location.origin}/refer-earn?success=true`} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-amber-700 border-b border-slate-200 pb-2">Your Details (Referrer)</h3>
                    
                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Your Full Name *</label>
                      <input 
                        name="referrer_name" 
                        type="text" 
                        placeholder="Enter Full Name" 
                        required 
                        className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-amber-500 transition-all" 
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Your Phone Number *</label>
                      <input
                        type="tel"
                        name="referrer_phone"
                        placeholder="9876543210"
                        required
                        pattern="[6-9][0-9]{9}"
                        maxLength="10"
                        title="Please enter a valid 10-digit Indian mobile number"
                        onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); }}
                        className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Your Email Address *</label>
                      <input 
                        name="referrer_email" 
                        type="email" 
                        placeholder="john.doe@gmail.com" 
                        required 
                        className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-amber-500 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-amber-700 border-b border-slate-200 pb-2">Referree Details (Friend)</h3>

                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Friend's Full Name *</label>
                      <input 
                        name="friend_name" 
                        type="text" 
                        placeholder="Jane Smith" 
                        required 
                        className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-amber-500 transition-all" 
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Friend's Phone *</label>
                      <input
                        type="tel"
                        name="friend_phone"
                        placeholder="9876543210"
                        required
                        pattern="[6-9][0-9]{9}"
                        maxLength="10"
                        title="Please enter a valid 10-digit Indian mobile number"
                        onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); }}
                        className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Friend's City *</label>
                      <input 
                        name="friend_city" 
                        type="text" 
                        placeholder="Adilabad" 
                        required 
                        className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-amber-500 transition-all" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Friend's Email Address (Optional)</label>
                    <input 
                      name="friend_email" 
                      type="email" 
                      placeholder="jane.smith@gmail.com" 
                      className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-amber-500 transition-all" 
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1.5 ml-1">Project Scale type *</label>
                    <select
                      name="project_type"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full border border-slate-300 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:border-amber-500 transition-all"
                    >
                      <option value="Residential">Residential Solar</option>
                      <option value="Commercial">Commercial Solar</option>
                      <option value="Industrial">Industrial Solar</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 border border-slate-300 rounded-xl hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
                  >
                    <span>Submit Referral</span>
                    <ArrowRight className="h-4 w-4 stroke-[3]" />
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ===================================================================
          SUCCESS CONFIRMATION MODAL
          =================================================================== */}
      <AnimatePresence>
        {success && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 max-w-md w-full mx-4 text-center shadow-2xl relative border border-slate-200"
            >
              <div className="absolute top-0 left-0 right-0 h-[6px] bg-emerald-500 rounded-t-[32px]" />
              
              <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-200">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Referral<br />
                Submitted
              </h2>

              <p className="mt-4 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Thank you for submitting your referral! The Sunrise Solar Hub ambassador operations desk has received the prospect's details and will coordinate the site survey matrix. We'll update you shortly.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="mt-8 px-8 py-4 w-full rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
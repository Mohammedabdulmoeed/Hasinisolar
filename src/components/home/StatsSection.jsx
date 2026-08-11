import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { images } from '../../data/images';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import { Sparkles, Activity } from 'lucide-react';

const stats = [
  { 
    value: 200, 
    suffix: '+', 
    label: 'Projects Completed',
    // Sky Blue to Royal Blue gradient
    gradientClass: 'from-cyan-500 to-blue-600'
  },
  { 
    value: 200, 
    suffix: ' kW+', 
    label: 'Solar Capacity Delivered',
    // Energetic Orange to Red gradient
    gradientClass: 'from-amber-500 to-orange-600'
  },
  { 
    value: 25, 
    suffix: ' Yrs', 
    label: 'Panel Performance Assurance',
    // Deep Blue to Indigo gradient
    gradientClass: 'from-blue-600 to-indigo-700'
  },
  { 
    value: 100, 
    suffix: '%', 
    label: 'Customer Satisfaction',
    // Lush Emerald to Mint Green gradient
    gradientClass: 'from-emerald-500 to-teal-600'
  },
];

export default function StatsSection() {
  return (
    <section className="relative bg-slate-50 py-24 lg:py-36 overflow-hidden select-none w-full">
      
      {/* Structural layout grid backgrounds calibrated for light theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Vibrant Full-Color Media Frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-[40px] opacity-15 blur-xl" />
            
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[36px] overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
              <motion.img
                src={images.office}
                alt="Sunrise Solar Hub Corporate Facility"
                className="w-full h-full object-cover object-center opacity-100"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Floating active badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-neutral-900/90 border border-white/5 backdrop-blur-md flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Activity className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-widest">Live Operations</h4>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">Actively monitoring solar outputs across local loops.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Heavy Architectural Modern Dashboard Stats Array */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="max-w-xl mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest mb-6 shadow-inner">
                <Sparkles className="h-3 w-3 text-sky-500" /> Verified Operations Ledger
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                Our Impact in numbers. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
                  Real Performance Metrics.
                </span>
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="relative p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between overflow-hidden shadow-sm"
                >
                  {/* Matching left-side border accent line using the specific box gradient */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${stat.gradientClass}`} />

                  <div>
                    {/* 
                      FORCED GRADIENT TEXT ACCENT: 
                      We look inside the counter components and inject gradient fill properties directly.
                    */}
                    <div className={`text-4xl sm:text-5xl font-black tracking-tight flex items-baseline bg-gradient-to-r ${stat.gradientClass} bg-clip-text text-transparent [&_*]:text-transparent [&_*]:bg-clip-text [&_*]:bg-gradient-to-r [&_*]:${stat.gradientClass}`}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>

                    <h3 className="mt-4 text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider leading-relaxed">
                      {stat.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
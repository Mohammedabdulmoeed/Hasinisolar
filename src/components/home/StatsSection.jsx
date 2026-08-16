import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { images } from '../../data/images';
import { Sparkles, Zap, ShieldCheck, Trophy, Users, ArrowRight } from 'lucide-react';

const statsData = [
  { 
    value: 350, 
    suffix: '+', 
    label: 'Successful Installations',
    percentage: 95,
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-100/70 text-amber-600 border-amber-200'
  },
  { 
    value: 1200, 
    suffix: ' kW+', 
    label: 'Solar Capacity Delivered',
    percentage: 90,
    icon: Trophy,
    color: 'from-amber-400 to-yellow-500',
    iconBg: 'bg-yellow-100/70 text-yellow-700 border-yellow-200'
  },
  { 
    value: 25, 
    suffix: ' Yrs', 
    label: 'Performance Assurance',
    percentage: 100,
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-100/70 text-emerald-700 border-emerald-200'
  },
  { 
    value: 100, 
    suffix: '%', 
    label: 'Client Satisfaction',
    percentage: 100,
    icon: Users,
    color: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-100/70 text-sky-700 border-sky-200'
  },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#FDFBF7] py-24 lg:py-32 overflow-hidden select-none w-full border-t border-amber-900/5">
      
      {/* Background Decorative Ambient Blur Gradients */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-yellow-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Content & Featured Image */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-amber-100/60 text-amber-800 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" /> Performance Milestones
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Driving Clean Energy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600">
                Through Proven Impact.
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              We don't just build solar systems; we engineer long-term energy independence. Our commitment is reflected in every project we complete, measured by reliability and real financial savings.
            </p>

            {/* Featured Image Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-900/10 h-60 shadow-lg group bg-white">
              <img 
                src={images.office} 
                alt="Hasini Solar Enterprises & Solutions Workspace" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-2">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Certified Excellence</span>
                  <h4 className="text-white text-sm font-bold">Pioneering Sustainable Growth</h4>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md shrink-0">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Progress Metric Rows with Percentage Display */}
          <div className="lg:col-span-7 space-y-4">
            {statsData.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-amber-900/10 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${item.iconBg}`}>
                        <IconComp size={22} />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        <AnimatedCounter value={item.value} suffix={item.suffix} />
                      </div>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Clean Progress Track */}
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
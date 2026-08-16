import { motion } from 'framer-motion';
import { Phone, Search, ClipboardCheck, Sun, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const steps = [
  { icon: Phone, title: 'Consultation', desc: 'Contact our solar experts for a free discussion about your energy requirements.' },
  { icon: Search, title: 'Site Survey', desc: 'Our engineers perform a detailed site inspection, roof analysis, and energy consumption assessment.' },
  { icon: ClipboardCheck, title: 'Custom Proposal', desc: 'Receive a tailored solar solution with system design, projected savings, ROI analysis, and pricing.' },
  { icon: Sun, title: 'Installation', desc: 'Our certified installation team deploys your solar system safely, efficiently, and on schedule.' },
  { icon: ShieldCheck, title: 'Monitoring & Support', desc: 'Enjoy ongoing monitoring, and ensure maximum solar performance.' },
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-zinc-950 relative overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-500/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Solar Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">Made Simple</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From consultation to installation and long-term support, we ensure a seamless transition to clean energy.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full overflow-x-auto min-[980px]:overflow-visible scrollbar-none pb-6"
        >
          {/* Animated Glow Connection Line */}
          <motion.div
            className="hidden min-[980px]:block absolute top-[44px] left-[10%] right-[10%] h-0.5 rounded-full bg-gradient-to-r from-amber-400/20 via-amber-400 to-amber-400/20 origin-left z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Horizontal Flex Flow */}
          <div className="flex flex-row items-start justify-between min-w-[1000px] min-[980px]:min-w-0 w-full gap-6">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="relative text-center group flex-1 min-w-[180px] p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/50 backdrop-blur-xl transition-all duration-300 shadow-2xl flex flex-col items-center"
                >
                  {/* Step Number Indicator Pin */}
                  <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 text-[10px] font-black uppercase tracking-widest shadow-md z-20">
                    Step 0{i + 1}
                  </div>

                  {/* Floating Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300 shadow-xl relative z-10 mt-2"
                  >
                    <IconComponent className="h-7 w-7" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-5 text-base lg:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs lg:text-sm text-zinc-400 leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
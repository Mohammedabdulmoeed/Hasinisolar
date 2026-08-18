import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      desc: 'Established with a vision to build decentralized clean energy networks across southern India.'
    },
    {
      year: '2024',
      title: 'First Key Project',
      desc: 'Successfully completed our first high-capacity industrial rooftop array in Adilabad.'
    },
    {
      year: '2025',
      title: '100+ Installations',
      desc: 'Deployed modular hybrid solar networks and residential energy storage systems.'
    },
    {
      year: '2026',
      title: 'PAN India Expansion',
      desc: 'Actively expanding clean tech distribution and operational nodes to 15+ major cities.'
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 h-[400px] w-[400px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-sans">
              Our Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Charting Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Growth Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
            A chronological timeline of how we evolved from a local EPC installer into a trusted multi-state clean energy developer.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="max-w-4xl mx-auto relative px-2 sm:px-4 text-left">
          
          {/* Vertical Track Line Background */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[3px] bg-slate-800/80 rounded-full md:-translate-x-px z-0">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full bg-gradient-to-b from-emerald-500 via-teal-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)]"
            />
          </div>

          {/* Milestones Array Map */}
          {milestones.map((mile, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Desktop Spacer */}
                <div className="hidden md:block md:w-1/2" />
                
                {/* Center Node Indicator */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-400 -translate-x-3 md:-translate-x-3 mt-4 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.6)] z-10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                  <div className="group relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:-translate-y-1">
                    {/* Corner accent glow */}
                    <div className="absolute -top-px right-6 w-16 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-black text-sm tracking-wide font-display border border-emerald-500/20">
                        {mile.year}
                      </span>
                    </div>

                    <h4 className="font-bold text-white text-lg sm:text-xl group-hover:text-emerald-300 transition-colors leading-tight">
                      {mile.title}
                    </h4>
                    
                    <p className="text-slate-400 text-sm mt-2.5 leading-relaxed">
                      {mile.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
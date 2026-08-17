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
    <section ref={containerRef} className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow mesh highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 font-sans">
              Milestones
            </span>
            <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Journey.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
            A chronological timeline of how we grew from a local EPC installer into a trusted multi-state clean energy developer.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="max-w-3xl mx-auto relative px-4 text-left">
          
          {/* Vertical scroll-linked track line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-white/10 rounded-full md:-translate-x-px z-0">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-amber-400"
            />
          </div>

          {/* Milestones Array Map */}
          {milestones.map((mile, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-6 mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Spacer on desktop */}
              <div className="hidden md:block md:w-1/2" />
              
              {/* Outer circle node indicator */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 -translate-x-1.5 md:-translate-x-2 mt-1.5 shadow-[0_0_10px_#10b981] z-10" />

              <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                <span className="text-emerald-400 font-black text-xl font-display">{mile.year}</span>
                <h4 className="font-bold text-white text-lg mt-1 leading-tight">{mile.title}</h4>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{mile.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import FloatingOrbs from '../common/FloatingOrbs';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function PageHero({ title, subtitle, image, breadcrumb }) {
  return (
    <section
      // Adjusted mobile minimum height down to 20vh, while keeping md screen heights intact
      className="relative min-h-[20vh] sm:min-h-[25vh] md:min-h-[25vh] lg:min-h-[50vh] flex items-center overflow-hidden bg-slate-950"
      aria-labelledby="page-hero-title"
    >
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
        role="presentation"
        aria-hidden="true"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Balanced Gradient Tint: Protects text contrast without drowning out your background image */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80 z-1" />
      <div className="absolute inset-0 grid-pattern opacity-25 z-2" />
      <FloatingOrbs variant="dark" />

      {/* Content Container - Reduced vertical padding on mobile (py-8) but kept it large on desktops (md:py-32) */}
      <div className="container-custom relative z-10 py-8 sm:py-12 md:py-28 lg:py-32 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {breadcrumb && (
            <motion.p
              variants={fadeInUp}
              className="text-brand-300 text-xs sm:text-sm font-medium mb-3 tracking-wide"
            >
              {breadcrumb}
            </motion.p>
          )}
          
          <motion.h1
            id="page-hero-title"
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl tracking-tight"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-xs sm:text-sm md:text-lg lg:text-xl text-slate-200 max-w-2xl font-light leading-relaxed drop-shadow-md"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div
            variants={fadeInUp}
            className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
          />
        </motion.div>
      </div>
    </section>
  );
}
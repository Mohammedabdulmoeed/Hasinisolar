import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useOutletContext, Link } from 'react-router-dom';
import { company } from '../../data/company';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function ContactCTA() {
  const openQuote = useOutletContext()?.openQuote;

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    'Hello, I would like a free consultation for a solar installation.'
  )}`;

  return (
    <section className="relative py-24 lg:py-36 bg-slate-50 overflow-hidden w-full select-none">
      
      {/* Premium subtle light architectural grids */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-200/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-200/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60" />
      </div>

      {/* Expanded Wide Container matching full size desktop bounds */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-[40px] bg-[#050816] border border-slate-800 px-6 py-20 md:px-16 md:py-28 shadow-2xl shadow-slate-950/20 text-center"
        >
          {/* Internal High-Tech Lens Flares */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            
            {/* Upscaled Heavy Typography */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none"
            >
              Power Your Future With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 mt-3 block">
                Smart Solar Energy
              </span>
            </motion.h2>

            {/* Description Narrative */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed opacity-90"
            >
              Reduce electricity costs up to 90%, maximize direct government bank subsidies, and secure total power independence across Telangana with Tier-1 grade infrastructure engineering.
            </motion.p>

            {/* Premium Micro-Badge */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-950 text-[11px] font-bold uppercase tracking-widest text-slate-400 shadow-inner"
            >
              <Sparkles className="h-3 w-3 text-sky-400 animate-pulse" /> Tier-1 Technology • Government Subsidy Approved
            </motion.div>

            {/* 3-WAY PREMIUM ACTION HUB */}
            <motion.div
              variants={fadeInUp}
              className="mt-14 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto"
            >
              {/* Phone CTA Button */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white text-slate-950 font-black text-base shadow-xl hover:bg-slate-100 transition-colors duration-300"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>Call Now</span>
              </motion.a>

              {/* WhatsApp CTA Button */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-emerald-600 text-white font-black text-base shadow-xl shadow-emerald-950/40 hover:bg-emerald-700 transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                <span>WhatsApp Us</span>
              </motion.a>

              {/* Solar Calculator Route Transition */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
               
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
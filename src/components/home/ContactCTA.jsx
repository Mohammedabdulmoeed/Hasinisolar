import { motion } from 'framer-motion';
import { Phone, MessageCircle, SunMedium } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { company } from '../../data/company';
import Button from '../ui/Button';
import { Link } from "react-router-dom";
import {
  fadeInUp,
  staggerContainer,
} from '../../animations/variants';

export default function ContactCTA() {
  const openQuote = useOutletContext()?.openQuote;

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    'Hello, I would like a free consultation for a solar installation.'
  )}`;

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-[32px] bg-[#050816] border border-white/10 px-8 py-20 md:px-16 md:py-24 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        >
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/20 blur-[180px] rounded-full" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Solar Icon */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-8"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center"
              >
                <SunMedium className="h-12 w-12 text-yellow-400" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Power Your Future With
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                Smart Solar Energy
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Reduce electricity costs, increase energy independence,
              and embrace a sustainable future. Our experts will design
              the perfect solar solution for your home, business,
              or industrial facility.
            </motion.p>

            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-white/5 backdrop-blur-xl px-6 py-3 text-sm text-white"
            >
              ☀️ Clean Energy • Lower Bills • Sustainable Future
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap justify-center gap-5"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Button
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className=" text-slate-900 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
               <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white shadow-xl transition-all duration-300"
>
  <MessageCircle className="h-5 w-5" />
  WhatsApp Us
</a>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
               <Link
  to="/solar-calculator"
  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all duration-300"
>
  Calculate Your Savings
</Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
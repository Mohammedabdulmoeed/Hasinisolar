import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import SafeImage from '../ui/SafeImage';
import { images } from '../../data/images';
import {
  slideInLeft,
  slideInRight,
  staggerFast,
  fadeInUp,
} from '../../animations/variants';

const highlights = [
  '400+ Solar Installations Completed',
  'Residential, Commercial & Industrial Expertise',
  'Premium Tier-1 Solar Panels & Inverters',
  'End-to-End Design, Installation & Support',
];

export default function AboutSection() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-custom">
        <div className="row-split lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative group row-split-media flex justify-center items-center w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="media-frame shadow-2xl overflow-hidden rounded-3xl w-full max-w-[380px] sm:max-w-[420px]"
            >
              <SafeImage
                src={images.office}
                alt="Hasini Solar Enterprises & Solutions"
                className="w-full h-auto object-cover max-h-[420px] sm:max-h-[480px] transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 pointer-events-none" />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
              whileHover={{ scale: 1.08 }}
              className="absolute -bottom-6 -right-2 sm:right-4 glass rounded-2xl p-6 shadow-2xl hidden md:block border border-white/50 bg-white/90 backdrop-blur-lg"
            >
              <p className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                400+
              </p>
              <p className="text-sm font-semibold text-slate-600">
                Solar Projects Installed
              </p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="row-split-content"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              About Hasini Solar Enterprises & Solutions
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Powering Homes & Businesses With
              <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Clean Solar Energy
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              Hasini Solar Enterprises & Solutions accelerates the shift to clean energy with cutting-edge solar technology. We design, install, and manage high-efficiency power systems that help homeowners and businesses slash energy costs and secure complete power independence.
            </p>

            <motion.ul
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 text-slate-700 cursor-default"
                >
                  <CheckCircle2 className="h-6 w-6 text-yellow-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/about">
                Discover Our Solar Journey
              </Button>

              <Button to="/contact">
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
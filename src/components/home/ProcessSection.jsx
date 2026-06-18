import { motion } from 'framer-motion';
import { Phone, Search, ClipboardCheck, Sun, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const steps = [
  { icon: Phone, title: 'Consultation', desc: 'Contact our solar experts for a free discussion about your energy requirements and savings potential.' },
  { icon: Search, title: 'Site Survey', desc: 'Our engineers perform a detailed site inspection, roof analysis, and energy consumption assessment.' },
  { icon: ClipboardCheck, title: 'Custom Proposal', desc: 'Receive a tailored solar solution with system design, projected savings, ROI analysis, and pricing.' },
  { icon: Sun, title: 'Installation', desc: 'Our certified installation team deploys your solar system safely, efficiently, and on schedule.' },
  { icon: ShieldCheck, title: 'Monitoring & Support', desc: 'Enjoy ongoing monitoring, maintenance, and dedicated support to ensure maximum solar performance.' },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Our Process"
          title="Your Solar Journey Made Simple"
          subtitle="From consultation to installation and long-term support, we ensure a seamless transition to clean energy."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full overflow-x-auto min-[980px]:overflow-visible scrollbar-none"
        >
          {/* Connection Line */}
          <motion.div
            className="hidden min-[980px]:block absolute top-16 left-[8%] right-[8%] h-1 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Changed layout from dynamic grid to a flex container to keep all 5 steps tightly grouped in one line */}
          <div className="flex flex-row items-start justify-between min-w-[900px] min-[980px]:min-w-0 w-full gap-4 lg:gap-6 pb-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="relative text-center group flex-1 min-w-[160px]"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-xl relative z-10"
                >
                  <step.icon className="h-7 w-7" />
                </motion.div>

                {/* Step Badge */}
                <span className="inline-block mt-4 text-xs font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                  Step {i + 1}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-base lg:text-lg font-bold text-slate-900 group-hover:text-yellow-600 transition-colors line-clamp-1">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs lg:text-sm text-slate-600 leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
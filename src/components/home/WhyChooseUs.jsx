import { motion } from 'framer-motion';
import {
  Sun,
  BatteryCharging,
  ShieldCheck,
  Award,
  Zap,
  Leaf,
} from 'lucide-react';

import SectionHeading from '../ui/SectionHeading';
import HoverCard from '../ui/HoverCard';
import FloatingOrbs from '../common/FloatingOrbs';
import {
  staggerContainer,
  fadeInUp,
  iconPop,
} from '../../animations/variants';

const reasons = [
  {
    icon: Sun,
    title: 'Premium Solar Technology',
    desc: 'We use high-efficiency Tier-1 solar panels and advanced inverter technologies to maximize energy generation.',
  },
  {
    icon: BatteryCharging,
    title: 'Complete Energy Solutions',
    desc: 'From solar panels and battery storage to EV charging systems, we deliver end-to-end clean energy solutions.',
  },
  {
    icon: ShieldCheck,
    title: '25-Year Performance Assurance',
    desc: 'Our solar systems are built for long-term reliability with industry-leading product and performance warranties.',
  },
  {
    icon: Award,
    title: 'Expert Installation Team',
    desc: 'Certified engineers and technicians ensure safe, precise, and professional installation on every project.',
  },
  {
    icon: Zap,
    title: 'Maximum Savings',
    desc: 'Reduce electricity costs significantly while increasing energy independence and long-term financial returns.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Future',
    desc: 'Join the clean energy revolution and reduce your carbon footprint with environmentally responsible solar power.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden">
      <FloatingOrbs variant="dark" />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] rounded-full" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Why Choose ZENCO Solar"
          title="The ZENCO Advantage"
          subtitle="Delivering innovative solar energy solutions with premium technology, expert engineering, and long-term value."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid-desktop-3"
        >
          {reasons.map((item, i) => (
            <HoverCard
              key={item.title}
              variant={fadeInUp}
              delay={i * 0.06}
              shine={false}
              className="glass-dark p-8 border border-white/10 hover:border-yellow-500/30 hover:bg-white/5 transition-all duration-500"
            >
              <motion.div
                variants={iconPop}
                initial="rest"
                whileHover="hover"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300"
              >
                <item.icon className="h-7 w-7" />
              </motion.div>

              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {item.desc}
              </p>
            </HoverCard>
          ))}
        </motion.div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
      
          
        </motion.div>
      </div>
    </section>
  );
}
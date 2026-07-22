
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

// LOCAL IMAGES
import solarImg from '../../assets/hero/solar.jpeg';
import batteryImg from '../../assets/hero/Hybrid.jpg';
import warrantyImg from '../../assets/hero/On.jpg';
import engineerImg from '../../assets/hero/project1.jpg';
import savingsImg from '../../assets/hero/commercial_solar.png';
import greenImg from '../../assets/hero/futuristic_energy_home.png';
const reasons = [
  {
    icon: Sun,
    image: solarImg,
    title: 'Premium Solar Technology',
    desc: 'We use high-efficiency Tier-1 solar panels and advanced inverter technologies to maximize energy generation.',
  },
  {
    icon: BatteryCharging,
    image: batteryImg,
    title: 'Complete Energy Solutions',
    desc: 'From solar panels and battery storage to EV charging systems, we deliver end-to-end clean energy solutions.',
  },
  {
    icon: ShieldCheck,
    image: warrantyImg,
    title: '25-Year Performance Assurance',
    desc: 'Industry-leading product and performance warranties for long-term reliability.',
  },
  {
    icon: Award,
    image: engineerImg,
    title: 'Expert Installation Team',
    desc: 'Certified engineers and technicians ensure safe, precise, and professional installation.',
  },
  {
    icon: Zap,
    image: savingsImg,
    title: 'Maximum Savings',
    desc: 'Reduce electricity costs while increasing energy independence and long-term returns.',
  },
  {
    icon: Leaf,
    image: greenImg,
    title: 'Sustainable Future',
    desc: 'Join the clean energy revolution and reduce your carbon footprint with solar power.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden">
    

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
  <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-semibold uppercase tracking-widest">
    Why Choose SunVolt Solar
  </span>

  <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
    The <span className="text-yellow-400">SunVolt</span> Advantage
  </h2>

  <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
    Delivering innovative solar energy solutions with premium technology,
    expert engineering, and long-term value for homes, businesses, and industries.
  </p>
</div>
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
    delay={i * 0.08}
    shine={false}
    className="group relative overflow-hidden rounded-3xl h-[360px] border border-white/10 shadow-2xl"
  >
    {/* Background Image */}
    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col justify-end p-8">
      <motion.div
        variants={iconPop}
        initial="rest"
        whileHover="hover"
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-white shadow-lg"
      >
        <item.icon className="h-8 w-8" />
      </motion.div>

      <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-lg">
        {item.title}
      </h3>

      <p className="leading-7 text-slate-200">
        {item.desc}
      </p>

      {/* <div className="mt-5 flex items-center text-sm font-semibold text-yellow-400">
        Learn More
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div> */}
    </div>
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


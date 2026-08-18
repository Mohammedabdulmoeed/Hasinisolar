import { motion, useReducedMotion } from 'framer-motion';
import whyImage from '../../assets/hero/why.webp';
import './WhyChooseUs.css';

const benefits = [
  {
    num: "01",
    title: "Premium Solar Technology",
    desc: "Advanced solar systems engineered for efficiency, reliability, and long-term performance."
  },
  {
    num: "02",
    title: "25-Year Performance Assurance",
    desc: "Built around dependable components and long-term performance you can trust."
  },
  {
    num: "03",
    title: "Expert Installation Team",
    desc: "Experienced professionals delivering precise, safe, and high-quality installations."
  },
  {
    num: "04",
    title: "Complete Energy Solutions",
    desc: "From system design to installation and support, we provide complete solar solutions."
  }
];

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 1.03 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 1.5, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const slideUp = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 25 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 15 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section 
      className="wcu-section" 
      aria-labelledby="why-choose-title"
    >
      {/* Background Image Layer */}
      <div className="wcu-bg-image-wrapper">
        <motion.img
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          src={whyImage}
          alt="Why choose Hasini Solar Enterprises and Solutions"
          className="wcu-bg-image"
        />
      </div>

      {/* Dark/Green Gradient Overlay */}
      <div className="wcu-bg-overlay" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="wcu-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="wcu-content"
        >
          {/* Eyebrow */}
          <motion.span variants={slideUp} className="wcu-eyebrow">
            <span className="wcu-status-dot" aria-hidden="true" />
            WHY CHOOSE US
          </motion.span>

          {/* Heading */}
          <motion.h2 
            variants={slideUp} 
            id="why-choose-title" 
            className="wcu-title"
          >
            Why Choose Hasini Solar?
          </motion.h2>

          {/* Introduction */}
          <motion.p variants={slideUp} className="wcu-intro">
            We combine advanced solar technology, expert execution, and complete energy solutions to deliver dependable performance for every project.
          </motion.p>

          {/* Editorial list of benefits */}
          <div className="wcu-list">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.num}
                variants={itemVariants}
                className="wcu-item"
              >
                <span className="wcu-item-num" aria-hidden="true">
                  {benefit.num}
                </span>
                <div className="wcu-item-body">
                  <h3 className="wcu-item-title">{benefit.title}</h3>
                  <p className="wcu-item-text">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

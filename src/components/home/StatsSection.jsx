import { motion, useReducedMotion } from 'framer-motion';
import { useCounter } from '../../hooks/useCounter';
import staticGif from '../../assets/hero/static.gif';
import './StatsSection.css';

const statsData = [
  {
    num: "01",
    value: 400,
    suffix: "+",
    label: "Successful Installations",
    desc: "Solar solutions installed across diverse applications."
  },
  {
    num: "02",
    value: 900,
    suffix: " kW+",
    label: "Solar Capacity Delivered",
    desc: "Solar capacity driving dependable renewable-energy solutions."
  },
  {
    num: "03",
    value: 25,
    suffix: " Yrs",
    label: "Performance Assurance",
    desc: "Designed for dependable long-term solar performance."
  },
  {
    num: "04",
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Built around quality, transparency, and long-term support."
  }
];

function StatCard({ num, value, suffix, label, desc, variants }) {
  // Animates the counter when the individual card enters the viewport
  const { count, ref } = useCounter(value, 1500);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      className="sts-card"
    >
      <span className="sts-card-index">{num}</span>
      <div className="sts-card-num-group">
        <span className="sts-card-num">{count}</span>
        <span className="sts-card-suffix">{suffix}</span>
      </div>
      <h3 className="sts-card-label">{label}</h3>
      <p className="sts-card-desc">{desc}</p>
      <div className="sts-card-accent" aria-hidden="true" />
    </motion.div>
  );
}

export default function StatsSection() {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.97 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.8, 
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

  const cardRevealVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 25, 
      scale: prefersReducedMotion ? 1 : 0.98 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.7, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section 
      className="sts-section" 
      aria-labelledby="stats-title"
    >
      {/* Background Ambient Glows */}
      <div className="sts-bg-glow-1" aria-hidden="true" />
      <div className="sts-bg-glow-2" aria-hidden="true" />

      <div className="sts-container">
        <div className="sts-grid-layout">
          
          {/* LEFT COLUMN: Large Solar Image */}
          <div className="sts-image-column">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="sts-image-wrapper"
            >
              <img 
                src={staticGif} 
                alt="Powering a Brighter Future with clean solar energy" 
                className="sts-image"
              />
              <div className="sts-image-overlay" aria-hidden="true" />
              
              {/* Floating label */}
              <div className="sts-image-badge">
                <span className="sts-badge-dot" aria-hidden="true" />
                Powering a Brighter Future
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Heading & Grid */}
          <div className="sts-content-column">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="sts-intro-wrapper"
            >
              <motion.span variants={slideUp} className="sts-eyebrow">
                OUR IMPACT
              </motion.span>
              <motion.h2 variants={slideUp} id="stats-title" className="sts-title">
                Powering Progress Through Solar
              </motion.h2>
              <motion.p variants={slideUp} className="sts-intro">
                Our growing impact reflects a commitment to reliable solar energy, expert execution, and long-term customer value.
              </motion.p>
            </motion.div>

            {/* Staggered 2x2 Grid of metrics */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="sts-grid"
            >
              {statsData.map((item) => (
                <StatCard
                  key={item.num}
                  num={item.num}
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  desc={item.desc}
                  variants={cardRevealVariants}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
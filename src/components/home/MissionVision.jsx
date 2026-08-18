import { motion, useReducedMotion } from 'framer-motion';
import missionVideo from '../../assets/hero/mission.mp4';
import './MissionVision.css';

export default function MissionVision() {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textFadeUp = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const videoVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      className="mv-section" 
      aria-label="Hasini Solar mission and vision"
    >
      {/* Background Decoratives */}
      <div className="mv-bg-glow" aria-hidden="true" />
      <div className="mv-bg-grid" aria-hidden="true" />
      <div className="mv-bg-deco-text" aria-hidden="true">
        PURPOSE
      </div>

      <div className="mv-container">
        <div className="mv-grid">
          
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mv-content"
          >
            <motion.span variants={textFadeUp} className="mv-eyebrow">
              OUR PURPOSE
            </motion.span>
            
            <motion.h2 variants={textFadeUp} className="mv-title">
              Mission & Vision
            </motion.h2>

            <div className="mv-block-list">
              {/* Mission Block */}
              <motion.div variants={textFadeUp} className="mv-block">
                <span className="mv-block-num" aria-hidden="true">01</span>
                <div className="mv-block-body">
                  <h3 className="mv-block-label">OUR MISSION</h3>
                  <p className="mv-block-text">
                    To deliver reliable, intelligent, and sustainable solar energy solutions that help homes, businesses, and communities reduce energy costs while moving toward a cleaner future.
                  </p>
                </div>
              </motion.div>

              {/* Vision Block */}
              <motion.div variants={textFadeUp} className="mv-block">
                <span className="mv-block-num" aria-hidden="true">02</span>
                <div className="mv-block-body">
                  <h3 className="mv-block-label">OUR VISION</h3>
                  <p className="mv-block-text">
                    To build a future where clean solar energy is accessible, dependable, and empowering — creating a greener India powered by innovation and the sun.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Video */}
          <div className="mv-video-wrapper-outer">
            <div className="mv-video-glow-underlay" aria-hidden="true" />
            <motion.div
              variants={videoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.015 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mv-video-wrapper"
            >
              <div className="mv-video-container">
                <video
                  src={missionVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="mv-video-element"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                <div className="mv-video-overlay" aria-hidden="true" />
                
                {/* Floating Video Label */}
                <div className="mv-video-label">
                  <span className="mv-label-top">
                    <span className="mv-status-dot" aria-hidden="true" />
                    Clean Energy
                  </span>
                  <span className="mv-label-bottom">Built for Tomorrow</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

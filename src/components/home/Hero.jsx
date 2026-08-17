// Hero.jsx
import { useRef, useState, useEffect } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Zap,
  Sun,
  Battery,
  Home,
  TrendingUp,
  PiggyBank,
  ChevronRight
} from 'lucide-react';
import heroVideo from '../../assets/hero/heroVideo.mp4';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();
  const outletContext = useOutletContext();
  const openQuote = outletContext?.openQuote;
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Live telemetry states
  const [liveGen, setLiveGen] = useState(12.8);
  const [co2Saved, setCo2Saved] = useState(32.6);
  const [savings, setSavings] = useState(842);

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setLiveGen(parseFloat((12.5 + Math.random() * 0.6).toFixed(1)));
      setCo2Saved(parseFloat((32.1 + Math.random() * 1.0).toFixed(1)));
      setSavings(Math.floor(830 + Math.random() * 25));
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants = (delay) => ({
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
    },
  });

  const journeyVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="hero-section-root"
      id="hero"
      aria-label="Home Hero Section"
    >
      {/* Background Video Layer */}
      <div className="hero-bg-layer">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
        />
      </div>

      {/* Main Content Container */}
      <div className="hero-content-container">
        <div className="hero-main-layout">
          
          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            className="hero-left-content"
          >
            {/* Premium Badge */}
            <motion.div variants={fadeInUpVariants} className="hero-premium-badge">
              <Sun className="badge-sun-icon" />
              <span>CLEAN ENERGY. BRIGHTER FUTURE.</span>
            </motion.div>

            {/* Headline */}
           <motion.h1 variants={fadeInUpVariants} className="hero-headline">
  POWER YOUR
  <br />
  <span className="highlight-yellow">FUTURE</span>
  <br />
  WITH THE <span className="highlight-yellow">SUN</span>
</motion.h1>

            {/* Accent Line */}
            <motion.div variants={fadeInUpVariants} className="hero-accent-line" />

            {/* Description */}
            <motion.p variants={fadeInUpVariants} className="hero-description">
              Advanced solar solutions that transform sunlight into clean energy, lower bills, and a sustainable future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUpVariants} className="hero-buttons-container">
              <button
                onClick={() => openQuote ? openQuote() : (window.location.href = '/contact#contact-form')}
                className="hero-btn-primary"
                aria-label="Get Your Solar Plan"
              >
                <span>GET YOUR SOLAR PLAN</span>
                <ArrowRight className="btn-arrow-icon" />
              </button>

              <button
                onClick={() => navigate("/services")}
                className="hero-btn-secondary"
                aria-label="Explore Our Services"
              >
                <span className="dot-icon">◉</span>
                <span>EXPLORE OUR SERVICES</span>
              </button>
            </motion.div>

            {/* Three Feature Items */}
          
          </motion.div>

          {/* Right-side Live Data Cards */}
          <div className="hero-right-cards">
            {/* Card 1 */}
            <motion.div
              variants={cardVariants(0.2)}
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              className="telemetry-card"
            >
              <div className="card-header-row">
                <div className="card-title-group">
                  <Zap className="card-icon text-yellow" />
                  <span className="card-title">EXPERIENCE</span>
                </div>
              </div>
              <div className="card-value">2+</div>
              <div className="card-subtitle">Years Experience</div>
              <div className="card-graph-container">
                <svg viewBox="0 0 100 20" className="card-graph-svg">
                  <path
                    d="M 0 12 Q 15 2 30 14 T 60 4 T 90 10 L 100 8"
                    fill="none"
                    stroke="#FFD000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants(0.35)}
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              className="telemetry-card"
            >
              <div className="card-header-row">
                <div className="card-title-group">
                  <Leaf className="card-icon text-green" />
                  <span className="card-title">INSTALLATIONS</span>
                </div>
              </div>
              <div className="card-value">200+</div>
              <div className="card-subtitle">Successfully completed</div>
              <div className="card-graph-container">
                <svg viewBox="0 0 100 20" className="card-graph-svg">
                  <path
                    d="M 0 16 Q 20 6 45 15 T 80 4 L 100 6"
                    fill="none"
                    stroke="#A6E637"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants(0.5)}
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              className="telemetry-card"
            >
              <div className="card-header-row">
                <div className="card-title-group">
                  <PiggyBank className="card-icon text-yellow-green" />
                  <span className="card-title">SATISFACTION</span>
                </div>
              </div>
              <div className="card-value">99%</div>
              <div className="card-subtitle">Happy customers who trust Hasini Solar.</div>
              <div className="card-graph-container">
                <svg viewBox="0 0 100 20" className="card-graph-svg">
                  <path
                    d="M 0 15 Q 15 5 35 12 T 70 2 L 100 4"
                    fill="none"
                    stroke="#8CFF3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Solar Journey Panel */}
        <motion.div
          variants={journeyVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          className="solar-journey-panel"
        >
          <div className="journey-left-header">
            <span className="journey-eyebrow">THE SOLAR JOURNEY</span>
            <h4 className="journey-title">
              Sunlight to Savings,<br />We Power Everything
            </h4>
          </div>

          <div className="journey-right-flow">
            {/* Stage 1 */}
            <div className="journey-stage">
              <div className="journey-stage-icon-circle accent-yellow" style={{ background: 'linear-gradient(135deg, rgba(255, 208, 0, 0.25), rgba(255, 140, 0, 0.25))', boxShadow: '0 0 20px rgba(255, 208, 0, 0.3)', border: '1px solid rgba(255, 208, 0, 0.5)' }}>
                <Sun className="journey-stage-icon" style={{ color: '#FFD000', filter: 'drop-shadow(0 0 8px rgba(255, 208, 0, 0.8))' }} />
              </div>
              <div className="journey-stage-text">
                <span className="stage-title">SUNLIGHT</span>
                <span className="stage-desc">Captured by solar panels</span>
              </div>
            </div>

            <div className="journey-arrow">
              <ChevronRight className="arrow-icon" />
            </div>

            {/* Stage 2 */}
            <div className="journey-stage">
              <div className="journey-stage-icon-circle accent-cyan" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(0, 150, 255, 0.25))', boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)', border: '1px solid rgba(0, 240, 255, 0.5)' }}>
                <Zap className="journey-stage-icon" style={{ color: '#00F0FF', filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.8))' }} />
              </div>
              <div className="journey-stage-text">
                <span className="stage-title">GENERATION</span>
                <span className="stage-desc">Clean electricity produced</span>
              </div>
            </div>

            <div className="journey-arrow">
              <ChevronRight className="arrow-icon" />
            </div>

            {/* Stage 3 */}
            <div className="journey-stage">
              <div className="journey-stage-icon-circle accent-green" style={{ background: 'linear-gradient(135deg, rgba(166, 230, 55, 0.25), rgba(0, 200, 100, 0.25))', boxShadow: '0 0 20px rgba(166, 230, 55, 0.3)', border: '1px solid rgba(166, 230, 55, 0.5)' }}>
                <Battery className="journey-stage-icon" style={{ color: '#A6E637', filter: 'drop-shadow(0 0 8px rgba(166, 230, 55, 0.8))' }} />
              </div>
              <div className="journey-stage-text">
                <span className="stage-title">STORAGE</span>
                <span className="stage-desc">Stored for when you need it</span>
              </div>
            </div>

            <div className="journey-arrow">
              <ChevronRight className="arrow-icon" />
            </div>

            {/* Stage 4 */}
            <div className="journey-stage">
              <div className="journey-stage-icon-circle accent-purple" style={{ background: 'linear-gradient(135deg, rgba(180, 100, 255, 0.25), rgba(120, 50, 255, 0.25))', boxShadow: '0 0 20px rgba(180, 100, 255, 0.3)', border: '1px solid rgba(180, 100, 255, 0.5)' }}>
                <Home className="journey-stage-icon" style={{ color: '#C084FC', filter: 'drop-shadow(0 0 8px rgba(180, 100, 255, 0.8))' }} />
              </div>
              <div className="journey-stage-text">
                <span className="stage-title">POWER</span>
                <span className="stage-desc">Powers your home & business</span>
              </div>
            </div>

            <div className="journey-arrow">
              <ChevronRight className="arrow-icon" />
            </div>

            {/* Stage 5 */}
            <div className="journey-stage">
              <div className="journey-stage-icon-circle accent-yellow-green" style={{ background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.25), rgba(16, 185, 129, 0.25))', boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)', border: '1px solid rgba(74, 222, 128, 0.5)' }}>
                <span className="journey-stage-rupee" style={{ color: '#4ADE80', fontSize: '1.25rem', fontWeight: 'bold', filter: 'drop-shadow(0 0 8px rgba(74, 222, 128, 0.8))' }}>₹</span>
              </div>
              <div className="journey-stage-text">
                <span className="stage-title">SAVINGS</span>
                <span className="stage-desc">Lower bills, greater independence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
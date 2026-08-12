// Hero.jsx
import { useRef, useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Zap,
  Award,
  Sun,
  Users,
  Smile,
  Home,
  Building2,
  Factory,
  Gauge,
  Droplet,
  LineChart
} from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import heroVideo from '../../assets/hero/heroVideo.mp4';
import './Hero.css';

export default function Hero() {
  const outletContext = useOutletContext();
  const openQuote = outletContext?.openQuote;
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTouchDesktopSite, setIsTouchDesktopSite] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const checkTouchDesktopSite = () => {
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      // Tall portrait layout typical of mobile viewports running Desktop Site emulation
      const isPortraitOrTall = window.innerHeight / window.innerWidth > 1.0;
      setIsTouchDesktopSite(isTouch && isPortraitOrTall && window.innerWidth >= 980);
    };

    checkTouchDesktopSite();
    window.addEventListener('resize', checkTouchDesktopSite);
    return () => window.removeEventListener('resize', checkTouchDesktopSite);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 } }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 } }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 } }
  };

  return (
    <section
      ref={containerRef}
      className={`hero-section-root ${isTouchDesktopSite ? 'is-touch-desktop-site' : ''}`}
      id="hero"
      aria-label="Sunrise Solar Hub Hero Section"
    >
      {/* BACKGROUND VIDEO LAYER */}
      <div className="hero-bg-layer">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-bg-video"
        />
        {/* Cinematic dark left-to-right gradient overlay */}
        <div className="hero-bg-overlay" />
      </div>

      {/* GLOWING DOTTED LINES SVG LAYER */}
      <svg className="hero-badge-lines-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
       
      </svg>

      {/* FLOATING BADGES OVERLAY */}
      {isLoaded && (
        <div className="hero-badges-layer">
         
          
        </div>
      )}

      {/* MAIN CONTENT CONTAINER */}
      <div className="hero-content-container">
        {/* LEFT SIDE CONTENT PANEL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="hero-left-content"
        >
          {/* Eyebrow Label with Yellow Line */}
          <motion.div variants={itemVariants} className="hero-eyebrow-container">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">
              POWERING A GREENER FUTURE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="hero-headline"
          >
            Powering a Brighter Tomorrow with <br />
            <span className="hero-headline-highlight">Smart Solar</span> Solutions
          </motion.h1>

          {/* Paragraph */}
          

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-buttons-container">
            <button
              onClick={() => openQuote ? openQuote() : window.location.href = '/contact#contact-form'}
              className="hero-btn-primary"
              aria-label="Get Free Quote"
            >
              <span>Get a Free Quote</span>
              <div className="hero-btn-icon-circle-primary">
                <ArrowRight className="h-4.5 w-4.5" />
              </div>
            </button>

            <Link
              to="/services"
              className="hero-btn-secondary"
            >
              <span>Explore Our Services</span>
              <div className="hero-btn-icon-circle-secondary">
                <ArrowRight className="h-4.5 w-4.5" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* OVERLAID VERTICAL GLASS CARD */}
        
          {/* Item 1 */}
          

          <hr className="feature-divider" />

          {/* Item 2 */}
         

          <hr className="feature-divider" />

          {/* Item 3 */}
          
        
      </div>

      {/* BOTTOM FLOATING STATISTICS CARD */}
      <div className="hero-stats-panel-container">
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="hero-stats-strip"
        >
          {/* Column 1 */}
          <div className="stat-column">
            <div className="stat-icon-circle">
              <Award className="h-5 w-5" />
            </div>
            <div className="stat-content-box">
              <AnimatedCounter value={3} suffix="+" label="Years Experience" />
              <p className="stat-subtitle">Delivering trusted solar solutions .</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="stat-column">
            <div className="stat-icon-circle">
              <Users className="h-5 w-5" />
            </div>
            <div className="stat-content-box">
              <AnimatedCounter value={200} suffix="+" label="Installations" />
              <p className="stat-subtitle">Successfully completed .</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="stat-column">
            <div className="stat-icon-circle">
              <Zap className="h-5 w-5" />
            </div>
            <div className="stat-content-box">
              <AnimatedCounter value={200} suffix="kW+" label="Installed Capacity" />
              <p className="stat-subtitle">Generating clean energy at a greater scale.</p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="stat-column">
            <div className="stat-icon-circle">
              <Smile className="h-5 w-5" />
            </div>
            <div className="stat-content-box">
              <AnimatedCounter value={100} suffix="%" label="Customer Satisfaction" />
              <p className="stat-subtitle">Happy customers who trust Sunrise Solar.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

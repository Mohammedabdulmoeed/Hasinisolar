// src/components/home/SubsidySection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sun,
  Zap,
  ShieldCheck,
  Coins,
  Sparkles,
  ArrowRight,
  Landmark,
  Star
} from "lucide-react";
import { images } from "../../data/images";
import { staggerContainer, fadeInUp } from "../../animations/variants";
import "./SubsidySection.css";

const subsidyPlans = [
  {
    id: "1kw",
    title: "1KW",
    subtitle: "CAPACITY",
    icon: Sun,
    image: images.img1,
    accentColor: "#F5A000",
    accentBg: "rgba(245, 160, 0, 0.1)",
    footerBg: "#FFF7E5",
    amount: "₹30,000",
  },
  {
    id: "2kw",
    title: "2KW",
    subtitle: "CAPACITY",
    icon: Zap,
    image: images.img2,
    accentColor: "#2563C7",
    accentBg: "rgba(37, 99, 199, 0.1)",
    footerBg: "#EEF5FF",
    amount: "₹60,000",
  },
  {
    id: "3kw",
    title: "3KW",
    subtitle: "& ABOVE",
    icon: ShieldCheck,
    image: images.Residential_Solar_Systems, // matches the high spec card image
    accentColor: "#249447",
    accentBg: "rgba(36, 148, 71, 0.1)",
    footerBg: "#EAF8EE",
    amount: "₹78,000",
    highlighted: true,
  }
];

const benefits = [
  {
    id: "dbt",
    title: "Direct Bank\nTransfer",
    icon: Landmark,
    color: "#249447",
    bg: "#EAF8EE",
  },
  {
    id: "secure",
    title: "100% Secure\nProcess",
    icon: ShieldCheck,
    color: "#2563C7",
    bg: "#EEF5FF",
  },
  {
    id: "save",
    title: "Save More on\nElectricity",
    icon: Coins,
    color: "#F5A000",
    bg: "#FFF7E5",
  },
  {
    id: "easy",
    title: "Easy & Hassle\nFree Process",
    icon: Sparkles,
    color: "#8B5CF6", // Purple
    bg: "#F5EEFF",
  }
];

export default function SubsidySection() {
  return (
    <section className="subsidy-section">
      {/* Decorative Dots */}
      <div className="subsidy-dots subsidy-dots-top-left" />
      <div className="subsidy-dots subsidy-dots-bottom-left" />
      <div className="subsidy-dots subsidy-dots-bottom-right" />

      {/* Upper-right Hero House */}
      <div className="subsidy-hero-image-wrapper">
        <div className="subsidy-sun-circle" />
        <img
          src={images.On1} // distinct visual house image
          alt="Premium Residential Solar Installation"
          className="subsidy-hero-house-img"
        />
      </div>

      <div className="subsidy-container">
        
        {/* Header Area */}
        <div className="subsidy-header">
          {/* Top Badge */}
          <div className="subsidy-badge">
            <Sun />
            <span>National Rooftop Solar Program</span>
          </div>

          {/* Heading */}
          <h2 className="subsidy-heading">
            Scale Down Bills.<br />
            <span className="highlight-blue">Claim Your </span>
            <span className="highlight-green">Subsidy.</span>
          </h2>

          {/* Yellow underline */}
          <div className="subsidy-underline" />

          {/* Intro Text */}
          <div className="subsidy-intro">
            <div className="subsidy-intro-line">
              <span>Secure up to </span>
              <span className="subsidy-cash-pill">
                <Coins /> ₹78,000 Cash Support
              </span>
              <span> directly into your bank account</span>
            </div>
            <div>and start saving on electricity from day one.</div>
          </div>
        </div>

        {/* Three Cards Horizontal Layout */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="subsidy-cards-grid"
        >
          {subsidyPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div 
                key={plan.id}
                variants={fadeInUp}
                className={`subsidy-card ${plan.highlighted ? "subsidy-card-highlighted" : ""}`}
              >
                {/* Most Popular Badge on highlighted card (absolute overlay) */}
                {plan.highlighted && (
                  <div className="subsidy-popular-badge">
                    <Star />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* 1. Top Full-Bleed Image */}
                <div className="subsidy-card-image-wrapper">
                  <img 
                    src={plan.image}
                    alt={`${plan.title} Capacity House`}
                    className="subsidy-card-img"
                  />
                </div>

                {/* 2. Middle Content Area (Compact, no description) */}
                <div className="subsidy-card-content">
                  <div 
                    className="subsidy-card-icon-circle"
                    style={{ backgroundColor: plan.accentBg, color: plan.accentColor }}
                  >
                    <Icon />
                  </div>
                  
                  <div className="subsidy-card-text-group">
                    <div className="subsidy-card-title" style={{ color: plan.accentColor }}>
                      {plan.title}
                    </div>
                    <div className="subsidy-card-subtitle">
                      {plan.subtitle}
                    </div>
                  </div>
                </div>

                {/* 3. Card DBT Strip Footer */}
                <div className="subsidy-card-footer" style={{ backgroundColor: plan.footerBg }}>
                  <div className="subsidy-card-footer-left">
                    <span className="subsidy-card-dbt-tag" style={{ color: plan.accentColor }}>
                      Direct DBT Subsidy
                    </span>
                    <span className="subsidy-card-amount">
                      {plan.amount}
                    </span>
                  </div>

                  <Link 
                    to="/contact" 
                    className="subsidy-card-arrow-btn"
                    style={{ backgroundColor: plan.accentColor }}
                    aria-label={`Get started with ${plan.title} capacity subsidy`}
                  >
                    <ArrowRight />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Benefit Bar */}
        <div className="subsidy-benefit-bar">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const textLines = benefit.title.split('\n');
            return (
              <div key={benefit.id} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div className="subsidy-benefit-item">
                  <div 
                    className="subsidy-benefit-icon-wrapper"
                    style={{ backgroundColor: benefit.bg, color: benefit.color }}
                  >
                    <Icon />
                  </div>
                  <span className="subsidy-benefit-text">
                    {textLines.map((line, idx) => (
                      <span key={idx} style={{ display: 'block' }}>
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
                {i < benefits.length - 1 && (
                  <div className="subsidy-benefit-separator" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
// src/components/home/AboutSection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  Building2,
  Cpu,
  Wrench,
  Lightbulb,
  Users,
  Award,
  Leaf,
  Phone,
  ArrowRight
} from 'lucide-react';
import { images } from '../../data/images';
import { slideInLeft, slideInRight } from '../../animations/variants';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          
          {/* Left Column Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="about-content-block"
          >
            {/* Eyebrow Header */}
            <div className="about-eyebrow-container">
              <span className="about-eyebrow">
                ABOUT <span className="highlight">HASINI SOLAR</span> ENTERPRISES & SOLUTIONS
              </span>
              <div className="about-eyebrow-line" />
            </div>

            {/* Main Heading */}
            <h2 className="about-heading">
              Powering Homes &<br />
              Businesses With<br />
              <span className="highlight">Clean Solar Energy</span>
            </h2>

            {/* Description */}
            <p className="about-description">
              Hasini Solar Enterprises & Solutions accelerates the shift to clean energy with cutting-edge solar technology. We design, install, and manage high-efficiency power systems that help homeowners and businesses slash energy costs and secure complete power independence.
            </p>

            {/* Feature Grid */}
            <div className="about-features-grid">
              
              {/* Feature Item 1 */}
              <div className="about-feature-item">
                <div className="about-badge-wrapper" style={{ '--badge-accent': '#F39A00', '--badge-bg': 'rgba(243, 154, 0, 0.1)' }}>
                  <div className="about-badge-outer" />
                  <div className="about-badge-inner">
                    <Sun />
                  </div>
                </div>
                <div className="about-feature-text">
                  <span className="highlight highlight-orange">400+</span>
                  <span>Solar Installations</span>
                  <span>Completed</span>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="about-feature-item">
                <div className="about-badge-wrapper" style={{ '--badge-accent': '#10B981', '--badge-bg': 'rgba(16, 185, 129, 0.1)' }}>
                  <div className="about-badge-outer" />
                  <div className="about-badge-inner">
                    <Building2 />
                  </div>
                </div>
                <div className="about-feature-text">
                  <span>Residential,</span>
                  <span>Commercial &</span>
                  <span>Industrial Expertise</span>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div className="about-feature-item">
                <div className="about-badge-wrapper" style={{ '--badge-accent': '#1D4FA3', '--badge-bg': 'rgba(29, 79, 163, 0.1)' }}>
                  <div className="about-badge-outer" />
                  <div className="about-badge-inner">
                    <Cpu />
                  </div>
                </div>
                <div className="about-feature-text">
                  <span className="highlight highlight-blue">Premium Tier-1</span>
                  <span>Solar Panels &</span>
                  <span>Inverters</span>
                </div>
              </div>

              {/* Feature Item 4 */}
              <div className="about-feature-item">
                <div className="about-badge-wrapper" style={{ '--badge-accent': '#EC4899', '--badge-bg': 'rgba(236, 72, 153, 0.1)' }}>
                  <div className="about-badge-outer" />
                  <div className="about-badge-inner">
                    <Wrench />
                  </div>
                </div>
                <div className="about-feature-text">
                  <span className="highlight highlight-pink">End-to-End</span>
                  <span>Design, Installation</span>
                  <span>& Support</span>
                </div>
              </div>

            </div>

            {/* Bottom Call to Actions */}
            <div className="about-buttons-container">
              <Link to="/about" className="about-btn-primary">
                Discover Our Solar Journey <ArrowRight size={18} />
              </Link>
              
            </div>

          </motion.div>

          {/* Right Column Visuals */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="about-visual-wrapper"
          >
            {/* Solar House Image Frame */}
            <div className="about-image-frame">
              <img
                src={images.office}
                alt="Premium Residential Solar Energy Home"
                className="about-solar-image"
              />
              {/* Curved White Overlay Mask */}
              <div className="about-curved-mask" />
            </div>

            {/* Overlapping Hasini Solar Logo */}
            

            {/* Deep Navy Bottom Statistics Card */}
            <div className="about-stats-panel">
              
              {/* Stat Col 1 */}
              <div className="about-stat-col">
                <div className="about-stat-icon-wrapper">
                  <Lightbulb />
                </div>
                <span className="about-stat-number">4+</span>
                <span className="about-stat-label">Years of{"\n"}Experience</span>
              </div>

              <div className="about-stats-separator" />

              {/* Stat Col 2 */}
              <div className="about-stat-col">
                <div className="about-stat-icon-wrapper">
                  <Users />
                </div>
                <span className="about-stat-number">500+</span>
                <span className="about-stat-label">Happy{"\n"}Customers</span>
              </div>

              <div className="about-stats-separator" />

              {/* Stat Col 3 */}
              <div className="about-stat-col">
                <div className="about-stat-icon-wrapper">
                  <Award />
                </div>
                <span className="about-stat-number">100%</span>
                <span className="about-stat-label">Quality{"\n"}Assurance</span>
              </div>

              <div className="about-stats-separator" />

              {/* Stat Col 4 */}
              

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
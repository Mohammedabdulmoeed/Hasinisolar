

import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
  Zap,
  Activity,
  HeartHandshake
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { pageSeo } from '../data/seo';
import { company } from '../data/company';
import { images } from '../data/images';

export default function ContactPage() {
  const openQuote = useOutletContext()?.openQuote;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Select Service *',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  if (params.get('success') === 'true') {
    setSuccess(true);

    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    );
  }
}, []);

  // Form Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (formData.service === 'Select Service *') {
      tempErrors.service = 'Please select a service type';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate submission
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Select Service *',
          message: ''
        });
      }, 3000);
    }
  };

  // Stagger animation variables
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Hasini Solar Enterprises & Solutions Energies"
        description="Get in touch with Hasini Solar Enterprises & Solutions Energies for premium Residential, Commercial, and Industrial rooftop solar power installations."
      />
<PageHero
              title="Contact"
              subtitle="Build your future with a team that values excellence, growth, and innovation."
              image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1000&q=80"
              breadcrumb="Home / Contact "
            />
      

      {/* =========================================
          SECTION 2: CONTACT INFO CARDS
          ========================================= */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden text-left relative">
        <div className="container-custom px-2 sm:px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 gap-2 sm:gap-6"
          >
            {/* Card 1: Phone */}
            <motion.a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              variants={fadeInUpVariants}
              whileHover={{ y: -6 }}
              className="rounded-xl sm:rounded-3xl border border-slate-100 bg-white p-3 sm:p-6 shadow-md hover:shadow-xl hover:border-emerald-300/40 transition-all duration-300 flex flex-col items-start relative overflow-hidden group cursor-pointer"
            >
              <div className="p-1.5 sm:p-3 bg-emerald-50 text-emerald-600 rounded-lg sm:rounded-xl mb-2 sm:mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-4 sm:h-6 w-4 sm:w-6" />
              </div>
              <h3 className="text-xs sm:text-lg font-bold font-display text-slate-900 leading-tight mb-1 sm:mb-2">Phone</h3>
              <div className="space-y-0.5 sm:space-y-1 w-full min-w-0">
                {company.phoneDisplay.map((phone, index) => (
                  <p
                    key={index}
                    className="text-slate-600 text-[9px] sm:text-sm font-semibold truncate"
                  >
                    {phone}
                  </p>
                ))}
              </div>
              <span className="text-[6px] sm:text-[10px] text-emerald-600 font-bold uppercase tracking-wide mt-2 block whitespace-nowrap">Call Team ⚡</span>
            </motion.a>

            {/* Card 2: Email */}
            <motion.a
              href={`mailto:${company.email[0]}`}
              variants={fadeInUpVariants}
              whileHover={{ y: -6 }}
              className="rounded-xl sm:rounded-3xl border border-slate-100 bg-white p-3 sm:p-6 shadow-md hover:shadow-xl hover:border-cyan-300/40 transition-all duration-300 flex flex-col items-start relative overflow-hidden group cursor-pointer"
            >
              <div className="p-1.5 sm:p-3 bg-cyan-50 text-cyan-600 rounded-lg sm:rounded-xl mb-2 sm:mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-4 sm:h-6 w-4 sm:w-6" />
              </div>
              <h3 className="text-xs sm:text-lg font-bold font-display text-slate-900 leading-tight mb-1 sm:mb-2">Email</h3>
              <div className="space-y-0.5 sm:space-y-1 w-full min-w-0">
                {company.email.map((email, index) => (
                  <a
                    key={index}
                    href={`mailto:${email}`}
                    className="block text-slate-600 text-[9px] sm:text-sm font-semibold hover:text-emerald-600 transition-colors truncate"
                  >
                    {email}
                  </a>
                ))}
              </div>
              <span className="text-[6px] sm:text-[10px] text-cyan-600 font-bold uppercase tracking-wide mt-2 block whitespace-nowrap">Support ⚡</span>
            </motion.a>

            {/* Card 3: Address */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ y: -6 }}
              className="rounded-xl sm:rounded-3xl border border-slate-100 bg-white p-3 sm:p-6 shadow-md hover:shadow-xl hover:border-amber-300/40 transition-all duration-300 flex flex-col items-start relative overflow-hidden group"
            >
              <div className="p-1.5 sm:p-3 bg-amber-50 text-amber-600 rounded-lg sm:rounded-xl mb-2 sm:mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-4 sm:h-6 w-4 sm:w-6" />
              </div>
              <h3 className="text-xs sm:text-lg font-bold font-display text-slate-900 leading-tight mb-1 sm:mb-2">Address</h3>
              <p className="text-slate-600 text-[9px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-none">
                {company.address}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
    {/* =========================================
        INQUIRY AND LIVE EMBED GEOLOCATION INFRASTRUCTURE
        ========================================= */}
    <section className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container-custom px-2 sm:px-4">

        {/* Forced Grid: Guarantees Form and Map stay side-by-side even on desktop-mode mobile screens */}
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-stretch">

          {/* LEFT SIDE - INQUIRY ENGINE (60% Width Share) */}
          <div
            id="inquiry-form"
            className="col-span-7 bg-white rounded-2xl sm:rounded-[32px] p-3 sm:p-8 lg:p-10 shadow-2xl border border-slate-100 flex flex-col justify-between text-left"
          >
            <div className="mb-4 sm:mb-8">
              <span className="inline-flex px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-emerald-100 text-emerald-700 text-[8px] sm:text-xs font-bold uppercase tracking-wider">
                Contact Hasini Solar Enterprises & Solutions
              </span>

              <h2 className="mt-1 sm:mt-4 text-sm sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Send Us an Inquiry
              </h2>

              <p className="mt-1 sm:mt-3 text-[9px] sm:text-slate-600 font-medium leading-tight">
                Fill out the form and our solar experts will contact you within 24 hours.
              </p>
            </div>

            <form
              action="https://formsubmit.co/hasinisolar@gmail.com"
              method="POST"
              className="space-y-2 sm:space-y-5"
            >
              <input type="hidden" name="_subject" value="New Inquiry From Hasini Solar Enterprises & Solutions Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}/contact?success=true`} />

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full text-[10px] sm:text-base rounded-lg sm:rounded-2xl border border-slate-200 p-2 sm:p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setFormData((prev) => ({
                    ...prev,
                    phone: value
                  }));
                }}
                placeholder="Phone Number *"
                pattern="[0-9]{10}"
                maxLength="10"
                title="Please enter a valid 10-digit mobile number"
                className="w-full text-[10px] sm:text-base rounded-lg sm:rounded-2xl border border-slate-200 p-2 sm:p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full text-[10px] sm:text-base rounded-lg sm:rounded-2xl border border-slate-200 p-2 sm:p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />

              <select
                name="service"
                value={formData.service}
                required
                onChange={handleChange}
                className="w-full text-[10px] sm:text-base rounded-lg sm:rounded-2xl border border-slate-200 p-2 sm:p-4 focus:ring-2 focus:ring-emerald-500 outline-none bg-white transition-all"
              >
                <option>Select Service *</option>
                <option>Residential Solar</option>
                <option>Commercial Solar</option>
                <option>Industrial Solar</option>
                <option>On-grid Solar</option>
                <option>Off-grid Solar</option>
                <option>Hybrid Solar</option>
                <option>Street Light Solar</option>
              </select>

              <textarea
                rows="3"
                name="message"
                value={formData.message}
                required
                onChange={handleChange}
                placeholder="Your Message *"
                className="w-full text-[10px] sm:text-base rounded-lg sm:rounded-2xl border border-slate-200 p-2 sm:p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none sm:resize-y"
              />

              <button
                type="submit"
                className="w-full text-[10px] sm:text-base rounded-lg sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 py-2 sm:py-4 text-white font-bold hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT SIDE - MAP WITH GLASS OVERLAY INFOCARD (40% Width Share) */}
          <div className="col-span-5 relative overflow-hidden rounded-2xl sm:rounded-[32px] shadow-2xl min-h-[300px] sm:min-h-[600px]">
            <iframe
              title="Hasini Solar Enterprises & Solutions Location"
              src={company.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />

            {/* Floating Glassmorphic Hub Card */}
            <div className="absolute bottom-2 sm:bottom-6 left-2 sm:left-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-3xl p-2.5 sm:p-6 shadow-2xl text-left border border-white/20">
              <h3 className="text-[11px] sm:text-2xl font-black font-display text-slate-900 mb-1.5 sm:mb-4 tracking-tight">
                Visit Our Office
              </h3>

              <div className="space-y-1 sm:space-y-4">
                <div className="flex gap-1.5 sm:gap-3 items-start min-w-0">
                  <MapPin className="text-emerald-600 h-3 w-3 sm:h-5 sm:w-5 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-[8px] sm:text-sm font-medium leading-tight truncate-2-lines">
                    {company.address}
                  </span>
                </div>

                <div className="flex gap-1.5 sm:gap-3 items-center min-w-0">
                  <Phone className="text-emerald-600 h-3 w-3 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-slate-700 text-[8px] sm:text-sm font-bold truncate">
                    {Array.isArray(company.phoneDisplay) ? company.phoneDisplay[0] : company.phoneDisplay}
                  </span>
                </div>

                <div className="flex gap-1.5 sm:gap-3 items-center min-w-0">
                  <Mail className="text-emerald-600 h-3 w-3 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-slate-700 text-[8px] sm:text-sm font-bold truncate">
                    {Array.isArray(company.email) ? company.email[0] : company.email}
                  </span>
                </div>

                <div className="flex gap-1.5 sm:gap-3 items-center min-w-0">
                  <Clock className="text-emerald-600 h-3 w-3 sm:h-5 sm:w-5 shrink-0" />
                  <span className="text-slate-700 text-[8px] sm:text-sm font-medium whitespace-nowrap">
                    Mon - Sat : 9AM - 6PM
                  </span>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.address)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 sm:mt-6 w-full inline-flex justify-center items-center rounded-lg sm:rounded-2xl bg-amber-400 px-3 sm:px-5 py-1.5 sm:py-3 text-[9px] sm:text-sm font-bold text-slate-900 hover:bg-amber-500 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* =========================================
        SECTION 5: TRUST / SUPPORT STRIP
        ========================================= */}
    <section className="py-6 sm:py-12 bg-slate-900 border-t border-white/5 overflow-hidden text-center text-white relative">
      <div className="container-custom px-2 sm:px-4 max-w-5xl mx-auto">
        {/* Forced Horizontal Row Grid across all desktop-mode environments */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          
          <div className="flex flex-col items-center">
            <div className="p-1 sm:p-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-2xl mb-1 sm:mb-3 text-cyan-400">
              <Clock className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </div>
            <h4 className="text-[9px] sm:text-sm font-bold text-white font-display uppercase tracking-wider mb-0.5 sm:mb-1">Fast Response</h4>
            <p className="text-[7px] sm:text-xs text-slate-400 font-medium leading-none">Proposal within 2 hours</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-1 sm:p-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-2xl mb-1 sm:mb-3 text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </div>
            <h4 className="text-[9px] sm:text-sm font-bold text-white font-display uppercase tracking-wider mb-0.5 sm:mb-1">24/7 Support</h4>
            <p className="text-[7px] sm:text-xs text-slate-400 font-medium leading-none">Telemetry monitoring</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-1 sm:p-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-2xl mb-1 sm:mb-3 text-amber-400">
              <HeartHandshake className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            </div>
            <h4 className="text-[9px] sm:text-sm font-bold text-white font-display uppercase tracking-wider mb-0.5 sm:mb-1">Trusted Partner</h4>
            <p className="text-[7px] sm:text-xs text-slate-400 font-medium leading-none">500+ projects built</p>
          </div>

        </div>
      </div>
    </section>

    {/* Success Modal Overlay */}
    {success && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-slate-900 font-display">Inquiry Sent Successfully</h2>
          <p className="mt-3 text-slate-600 text-sm">
            Thank you for contacting Hasini Solar Enterprises & Solutions Energies. Our team will contact you shortly.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-6 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Continue
          </button>
        </div>
      </div>
    )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { company } from '../../data/company';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Select Service *',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="h-4 w-4" />
            <span>Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Let's Build Your Solar Future.
          </h2>

          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Contact our engineering desk directly or request a structural rooftop survey using the enquiry portal below.
          </p>
        </div>

        {/* Unified Cards Layout Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Phone */}
          <a
            href={`tel:${company.phoneDisplay?.[0]?.replace(/\s/g, '') || '+918555033246'}`}
            className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900 mb-1">Phone Channels</h3>
            <div className="space-y-1">
              {company.phoneDisplay.map((phone, idx) => (
                <p key={idx} className="text-slate-600 text-xs sm:text-sm font-semibold">{phone}</p>
              ))}
            </div>
            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-4">Call Team Now ⚡</span>
          </a>

          {/* Card 2: Email */}
          <a
            href={`mailto:${company.email?.[0]}`}
            className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900 mb-1">Email Desk</h3>
            <div className="space-y-1">
              {company.email.map((mail, idx) => (
                <p key={idx} className="text-slate-600 text-xs sm:text-sm font-semibold truncate max-w-full">{mail}</p>
              ))}
            </div>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mt-4">Support Email ⚡</span>
          </a>

          {/* Card 3: Address */}
          <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm flex flex-col items-start">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900 mb-1">Corporate Address</h3>
            <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
              {company.address}
            </p>
            <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider mt-4">Visit Location ⚡</span>
          </div>
        </div>

        {/* Side-by-Side Map and Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/60 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Request a Free Consultation</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium mb-8">
                Submit details below and our technical advisors will reach out within 24 hours.
              </p>
            </div>

            <form
              action="https://formsubmit.co/hasinisolar@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New Website Consultation Inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}/?success=true#contact`} />

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full text-xs sm:text-sm rounded-2xl border border-slate-200 p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-slate-800"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setFormData((prev) => ({ ...prev, phone: value }));
                }}
                placeholder="Phone Number *"
                pattern="[0-9]{10}"
                maxLength="10"
                className="w-full text-xs sm:text-sm rounded-2xl border border-slate-200 p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-slate-800"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full text-xs sm:text-sm rounded-2xl border border-slate-200 p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-slate-800"
              />

              <select
                name="service"
                value={formData.service}
                required
                onChange={handleChange}
                className="w-full text-xs sm:text-sm rounded-2xl border border-slate-200 p-4 focus:ring-2 focus:ring-emerald-500 outline-none bg-white transition-all font-medium text-slate-700"
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
                className="w-full text-xs sm:text-sm rounded-2xl border border-slate-200 p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none font-medium text-slate-800"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-white text-xs font-bold uppercase tracking-wider hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Request a Free Consultation
              </button>
            </form>
          </div>

          {/* Map & Glass Card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl shadow-xl min-h-[350px] lg:min-h-[550px] border border-slate-200/60">
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

            {/* Floating Details box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/20 text-left">
              <h4 className="text-base font-bold text-slate-900 mb-3 uppercase tracking-wide">Visit Office</h4>
              
              <div className="space-y-3 text-xs text-slate-600 font-semibold">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="text-emerald-600 h-4 w-4 shrink-0 mt-0.5" />
                  <span>{company.address}</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Clock className="text-emerald-600 h-4 w-4 shrink-0" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.address)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 w-full inline-flex justify-center items-center rounded-xl bg-amber-400 py-2.5 text-xs font-bold text-slate-900 hover:bg-amber-500 transition-colors uppercase tracking-wider"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>

        {/* Lower support metrics strip */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 border border-white/5 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start text-center">
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-3 text-cyan-400 max-w-max">
                <Clock className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Fast Response</h4>
              <p className="text-xs text-slate-400 font-medium">Site report within 24 hours</p>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center">
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-3 text-emerald-400 max-w-max">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Telemetry Support</h4>
              <p className="text-xs text-slate-400 font-medium">Continuous system monitoring</p>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center">
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl mb-3 text-amber-400 max-w-max">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Reliable Partner</h4>
              <p className="text-xs text-slate-400 font-medium">MNRE and DISCOM compliant</p>
            </div>
          </div>
        </div>

      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full mx-4 text-center shadow-2xl relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-emerald-500" />
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">Inquiry Received</h3>
            <p className="mt-3 text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
              Thank you for contacting Hasini Solar Enterprises & Solutions. Our engineering desk will connect with you shortly.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, Sparkles } from 'lucide-react';
import { company } from '../../data/company';
import logos from '../../assets/hero/logos.jpeg';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 w-full text-left font-sans border-t border-white/5 overflow-hidden select-none">
      
      {/* Decorative premium glow gradients in background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 pt-16 pb-8 relative z-10">
        
        {/* Main Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-12">
          
          {/* Column 1: Brand Profile / Large Logo */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
            <div className="flex justify-center sm:justify-start w-full">
              <img
                src={logos}
                alt="Sunrise Solar Hub" 
                className="w-[140px] sm:w-[160px] md:w-[200px] h-auto object-contain bg-white rounded-2xl p-2 shadow-2xl border border-white/10 hover:scale-102 transition-transform duration-300"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs font-medium">
              Sunrise Solar Hub delivers premium Residential, Commercial, Industrial and Government solar EPC solutions with complete design, installation, maintenance and energy optimization across Telangana and India.
            </p>
            
            {/* Social Instagram Card */}
            <div className="pt-2 flex flex-col items-center sm:items-start gap-2.5 w-full">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect With Us</span>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4.5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-900/90 border border-white/5 hover:border-amber-400/40 text-slate-300 hover:text-amber-400 hover:shadow-[0_0_25px_rgba(245,180,0,0.12)] transition-all duration-300 group max-w-max"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                  <svg className="h-4.5 w-4.5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Follow Us on Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-white mb-6 text-xs sm:text-sm uppercase tracking-wider pb-1.5 border-b border-white/5 w-full max-w-[120px] sm:max-w-none">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/careers', label: 'Careers' },
                { to: '/contact', label: 'Contact' },
               
              ].map((link) => (
                <li key={link.to} className="flex justify-center sm:justify-start">
                  <Link 
                    to={link.to} 
                    className="relative text-xs sm:text-sm font-semibold text-slate-400 hover:text-amber-400 transition-colors block py-0.5 max-w-max group"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-white mb-6 text-xs sm:text-sm uppercase tracking-wider pb-1.5 border-b border-white/5 w-full max-w-[120px] sm:max-w-none">
              Our Services
            </h4>
            <ul className="space-y-3.5">
              {[
                'Residential Solar',
                'Commercial Solar',
                'Industrial Solar',
                'On-Grid Solar',
                'Off-Grid Solar',
                'Solar street Light'
              ].map((title, idx) => (
                <li key={idx} className="flex justify-center sm:justify-start">
                  <Link 
                    to="/services" 
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-amber-400 transition-colors block py-0.5 group"
                  >
                    <Zap className="h-3.5 w-3.5 text-slate-600 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 shrink-0" />
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Cards */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-white mb-6 text-xs sm:text-sm uppercase tracking-wider pb-1.5 border-b border-white/5 w-full max-w-[120px] sm:max-w-none">
              Contact Us
            </h4>
            <ul className="space-y-4 w-full">
              
              {/* Address Card */}
              <li className="p-3.5 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 hover:bg-slate-900/60 hover:shadow-lg transition-all duration-300 flex gap-3.5 items-start text-left">
                <div className="p-2.5 bg-amber-400/10 rounded-xl text-amber-400 shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Corporate Office</h5>
                  <span className="text-xs text-slate-300 leading-relaxed font-semibold block">{company.address}</span>
                </div>
              </li>
              
              {/* Phone Card */}
              <li className="p-3.5 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 hover:bg-slate-900/60 hover:shadow-lg transition-all duration-300 flex gap-3.5 items-start text-left">
                <div className="p-2.5 bg-amber-400/10 rounded-xl text-amber-400 shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Phone Channels</h5>
                  <div className="flex flex-col space-y-0.5">
                    {company.phoneDisplay.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="text-xs text-slate-300 hover:text-amber-400 transition-colors font-semibold block"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {/* Email Card */}
              <li className="p-3.5 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-white/10 hover:bg-slate-900/60 hover:shadow-lg transition-all duration-300 flex gap-3.5 items-start text-left">
                <div className="p-2.5 bg-amber-400/10 rounded-xl text-amber-400 shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Email Support</h5>
                  <div className="flex flex-col space-y-0.5 break-all">
                    {company.email.map((email, index) => (
                      <a
                        key={index}
                        href={`mailto:${email}`}
                        className="text-xs text-slate-300 hover:text-amber-400 transition-colors font-semibold block"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider text-center">
          <div>
            &copy; {new Date().getFullYear()} Sunrise Solar Hub. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400 font-semibold">
            Designed & Developed with <span className="text-red-500 animate-pulse">❤️</span>
          </div>
          <div className="text-slate-400 font-semibold">
            Reliable Solar EPC & Clean Energy Solutions
          </div>
        </div>

      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Share2, Globe, Link2, AtSign } from 'lucide-react';
import { company } from '../../data/company';
import { servicesOverview } from '../../data/services';
import logos from '../../assets/hero/logos.jpeg';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 w-full text-left">
      <div className="max-w-7xl mx-auto px-2 py-8 pb-5">
        
        {/* Force absolutely everything into a single row line using flex-nowrap 
          with micro-gaps to keep space at an absolute minimum.
        */}
        <div className="flex flex-row flex-nowrap items-start justify-between gap-2">
          
          {/* Column 1: Brand Profile / Logo */}
          <div className="basis-[30%] shrink-0">
            <img
              src={logos}
              alt="ZENCO Solar Energies" 
              className="h-10 w-auto object-contain mb-2"
            />
            <p className="text-[10px] leading-relaxed text-slate-400 max-w-[220px]">
              Premium facility management and maintenance services delivering reliable solutions
              for residential, commercial, and industrial clients across India.
            </p>
            <div className="mt-3 flex gap-1.5">
              {[
                { Icon: Share2, href: company.social.facebook, label: 'Facebook' },
                { Icon: Link2, href: company.social.linkedin, label: 'LinkedIn' },
                { Icon: Globe, href: company.social.instagram, label: 'Instagram' },
                { Icon: AtSign, href: company.social.twitter, label: 'Twitter' },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-6 w-6 items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <Icon className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="basis-[20%] shrink-0 pl-1">
            <h4 className="font-bold text-white mb-2 text-xs tracking-tight">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[10px] text-slate-400 hover:text-white transition-colors block whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="basis-[20%] shrink-0 pl-1">
            <h4 className="font-bold text-white mb-2 text-xs tracking-tight">Our Services</h4>
            <ul className="space-y-1">
              {servicesOverview.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-[10px] text-slate-400 hover:text-white transition-colors block whitespace-nowrap">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="basis-[30%] shrink-0 pl-1">
            <h4 className="font-bold text-white mb-2 text-xs tracking-tight">Contact Us</h4>
            <ul className="space-y-2 text-[10px] text-slate-400">
              <li className="flex gap-1 items-start">
                <MapPin className="h-3 w-3 shrink-0 text-blue-400 mt-0.5" />
                <span className="leading-tight">{company.address}</span>
              </li>
              
              <li className="flex gap-1 items-start">
                <Phone className="h-3 w-3 shrink-0 text-blue-400 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  {company.phoneDisplay.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-1 items-start">
                <Mail className="h-3 w-3 shrink-0 text-blue-400 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  {company.email.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-8 pt-4 border-t border-slate-800/60 flex flex-row justify-between items-center text-[10px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Reliable Facility & Maintenance Solutions</p>
        </div>

      </div>
    </footer>
  );
}
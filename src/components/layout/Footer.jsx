import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Share2, Globe, Link2, AtSign } from 'lucide-react';
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
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[980px]:grid-cols-4 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <img
  src={logos}
  alt="ZENCO Solar Energies" 
  className="h-16 w-auto object-contain mb-4"
/>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium facility management and maintenance services delivering reliable solutions
              for residential, commercial, and industrial clients across India.
            </p>
            <div className="mt-6 flex gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {servicesOverview.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-sm hover:text-brand-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-400" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
  <Phone className="h-5 w-5 shrink-0 text-brand-400 mt-1" />

  <div className="flex flex-col">
    {company.phoneDisplay.map((phone, index) => (
      <a
        key={index}
        href={`tel:${phone.replace(/\s/g, '')}`}
        className="hover:text-white transition-colors"
      >
        {phone}
      </a>
    ))}
  </div>
</li>
              <li className="flex gap-3">
  <Mail className="h-5 w-5 shrink-0 text-brand-400 mt-1" />

  <div className="flex flex-col">
    {company.email.map((email, index) => (
      <a
        key={index}
        href={`mailto:${email}`}
        className="hover:text-white transition-colors"
      >
        {email}
      </a>
    ))}
  </div>
</li>
            </ul>
            
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Reliable Facility & Maintenance Solutions</p>
        </div>
      </div>
    </footer>
  );
}

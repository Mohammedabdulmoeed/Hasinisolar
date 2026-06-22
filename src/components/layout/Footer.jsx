// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin, Share2, Globe, Link2, AtSign } from 'lucide-react';
// import { company } from '../../data/company';
// import { servicesOverview } from '../../data/services';
// import logos from '../../assets/hero/logos.jpeg';

// const quickLinks = [
//   { to: '/', label: 'Home' },
//   { to: '/about', label: 'About Us' },
//   { to: '/services', label: 'Services' },
//   { to: '/projects', label: 'Projects' },
//   { to: '/careers', label: 'Careers' },
//   { to: '/contact', label: 'Contact' },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-slate-300 w-full text-left font-sans border-t border-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        
//         {/* 
//           BULLETPROOF DISPLAY MATRIX:
//           - Stacks gracefully in 1 column on normal mobile views to prevent clipping.
//           - Breaks into 2 columns on emulated phone desktop modes to retain layout proportions.
//           - Sits neatly as a clean 4-column balanced grid on laptop views.
//         */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8">
          
//           {/* Column 1: Brand Profile / Logo */}
//           <div className="space-y-3">
//             <img
//               src={logos}
//               alt="ZENCO Solar Energies" 
//               className="h-10 w-auto object-contain bg-white rounded-lg p-1"
//             />
//             <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
//               Premium facility management and maintenance services delivering reliable solutions
//               for residential, commercial, and industrial clients across India.
//             </p>
//             <div className="flex gap-2 pt-1">
//               {[
//                 { Icon: Share2, href: company.social.facebook, label: 'Facebook' },
//                 { Icon: Link2, href: company.social.linkedin, label: 'LinkedIn' },
//                 { Icon: Globe, href: company.social.instagram, label: 'Instagram' },
//                 { Icon: AtSign, href: company.social.twitter, label: 'Twitter' },
//               ].map(({ Icon, href, label }, i) => (
//                 <a
//                   key={i}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200"
//                 >
//                   <Icon className="h-3.5 w-3.5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider pb-1 border-b border-slate-900">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {quickLinks.map((link) => (
//                 <li key={link.to}>
//                   <Link to={link.to} className="text-xs sm:text-sm text-slate-400 hover:text-emerald-400 transition-colors block py-0.5">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Our Services */}
//           <div>
//             <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider pb-1 border-b border-slate-900">
//               Our Services
//             </h4>
//             <ul className="space-y-2">
//               {servicesOverview.map((s) => (
//                 <li key={s.id}>
//                   <Link to="/services" className="text-xs sm:text-sm text-slate-400 hover:text-emerald-400 transition-colors block py-0.5">
//                     {s.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Contact Us */}
//           <div>
//             <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider pb-1 border-b border-slate-900">
//               Contact Us
//             </h4>
//             <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
//               <li className="flex gap-2.5 items-start">
//                 <MapPin className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
//                 <span className="leading-relaxed">{company.address}</span>
//               </li>
              
//               <li className="flex gap-2.5 items-start">
//                 <Phone className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
//                 <div className="flex flex-col space-y-1">
//                   {company.phoneDisplay.map((phone, index) => (
//                     <a
//                       key={index}
//                       href={`tel:${phone.replace(/\s/g, '')}`}
//                       className="hover:text-emerald-400 transition-colors block"
//                     >
//                       {phone}
//                     </a>
//                   ))}
//                 </div>
//               </li>

//               <li className="flex gap-2.5 items-start">
//                 <Mail className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
//                 <div className="flex flex-col space-y-1 break-all">
//                   {company.email.map((email, index) => (
//                     <a
//                       key={index}
//                       href={`mailto:${email}`}
//                       className="hover:text-emerald-400 transition-colors block"
//                     >
//                       {email}
//                     </a>
//                   ))}
//                 </div>
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom copyright segment */}
//         <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-medium text-slate-500 tracking-wide text-center sm:text-left">
//           <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
//           <p className="text-slate-400">Reliable Facility & Maintenance Solutions</p>
//         </div>

//       </div>
//     </footer>
//   );
// }
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
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
    <footer className="bg-slate-950 text-slate-300 w-full text-left font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        
        {/* Responsive Grid Layout Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8">
          
          {/* Column 1: Brand Profile / Logo & Real Highlight Brands */}
          <div className="space-y-4">
            <img
              src={logos}
              alt="ZENCO Solar Energies" 
              className="h-10 w-auto object-contain bg-white rounded-lg p-1"
            />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              Premium facility management and maintenance services delivering reliable solutions
              for residential, commercial, and industrial clients across India.
            </p>
            
            {/* Real Official Platform Label Strip */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Connect With Us</span>
              {[
                { 
                  label: 'Facebook', 
                  href: company.social.facebook, 
                  color: 'hover:text-blue-500',
                  svg: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  )
                },
                { 
                  label: 'Instagram', 
                  href: company.social.instagram, 
                  color: 'hover:text-pink-500',
                  svg: (
                    <svg className="h-4 w-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" w="20" h="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )
                },
                { 
                  label: 'LinkedIn', 
                  href: company.social.linkedin, 
                  color: 'hover:text-sky-600',
                  svg: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
              ].map((platform, i) => (
                <a
                  key={i}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 text-xs font-semibold text-slate-400 ${platform.color} transition-colors duration-200 group`}
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:bg-slate-900/40 transition-colors">
                    {platform.svg}
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors">{platform.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider pb-1 border-b border-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-xs sm:text-sm text-slate-400 hover:text-emerald-400 transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider pb-1 border-b border-slate-900">
              Our Services
            </h4>
            <ul className="space-y-2">
              {servicesOverview.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-xs sm:text-sm text-slate-400 hover:text-emerald-400 transition-colors block py-0.5">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs sm:text-sm uppercase tracking-wider pb-1 border-b border-slate-900">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <span className="leading-relaxed">{company.address}</span>
              </li>
              
              <li className="flex gap-2.5 items-start">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  {company.phoneDisplay.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="hover:text-emerald-400 transition-colors block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-2.5 items-start">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <div className="flex flex-col space-y-1 break-all">
                  {company.email.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="hover:text-emerald-400 transition-colors block"
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
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-medium text-slate-500 tracking-wide text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="text-slate-400">Reliable Facility & Maintenance Solutions</p>
        </div>

      </div>
    </footer>
  );
}

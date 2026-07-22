// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import { Star, Quote } from 'lucide-react';
// import { testimonials } from '../../data/testimonials';
// import SectionHeading from '../ui/SectionHeading';

// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function Testimonials() {
//   return (
//     <section className="section-padding bg-slate-50 overflow-hidden relative">
//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] rounded-full" />

//       <div className="container-custom relative z-10">
//         <SectionHeading
//           label="Customer Success Stories"
//           title="Trusted By Homeowners & Businesses"
//           subtitle="See how our solar solutions are helping customers reduce electricity costs and embrace clean energy."
//         />

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             autoplay={{
//               delay: 4500,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 24,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 24,
//               },
//             }}
//             className="pb-14"
//           >
//             {testimonials.map((t) => (
//               <SwiperSlide key={t.id}>
//                 <motion.div
//                   whileHover={{
//                     y: -8,
//                     scale: 1.02,
//                   }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 300,
//                   }}
//                   className="h-full rounded-3xl bg-white p-8 shadow-md border border-slate-100 hover:shadow-2xl hover:border-yellow-300 relative transition-all duration-300"
//                 >
//                   <Quote className="absolute top-6 right-6 h-10 w-10 text-yellow-100" />

//                   {/* Rating */}
//                   <div className="flex gap-1 mb-4">
//                     {[...Array(t.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="h-4 w-4 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
//                   </div>

//                   {/* Review */}
//                   <p className="text-slate-600 leading-relaxed mb-6">
//                     "{t.review}"
//                   </p>

//                   {/* User */}
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-100"
//                       loading="lazy"
//                     />

//                     <div>
//                       <p className="font-semibold text-slate-900">
//                         {t.name}
//                       </p>

//                       <p className="text-sm text-slate-500">
//                         {t.role}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
//         >
          
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';

// Highly optimized, brand-specific Indian testimonials for SunVolt Solar
const sunVoltTestimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Residential Homeowner (Hyderabad)",
    review: "Switching to SunVolt Solar has been life-changing for our family. Our monthly electricity bill dropped from ₹8,500 to under ₹900. The transition was completely smooth, and the team managed the entire government subsidy paperwork for us effortlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Ananya Reddy",
    role: "Managing Director, Sri Krishna Textiles",
    review: "We deployed a 45 kW commercial solar system at our manufacturing unit with SunVolt. Our operational energy overhead costs dropped by nearly 75% in the very first month. Their Tier-1 panel infrastructure and expert engineering team are top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Chairman, GreenTech Cold Storage",
    review: "For an industrial cold storage plant, power reliability is critical. SunVolt designed a robust hybrid solar system that handles our high loads smoothly. The investment is already paying off ahead of schedule, with an impressive 28% calculated ROI.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 bg-slate-50 overflow-hidden w-full select-none">
      
      {/* Premium Clean Tech Light Background Fields */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-sky-200/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Modernized Header with Premium Badging */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-4">
            <Sparkles className="h-3 w-3 text-sky-500" /> Customer Success Stories
          </span>
          
          <SectionHeading
            title="Trusted By Homeowners & Enterprise Leaders"
            subtitle="See how our custom engineered solar solutions empower regional businesses and residential spaces across Telangana to lock in energy independence."
          />
        </div>

        {/* SWIPER CONTAINER CAROUSEL ARRAY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1150: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="pb-20 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:bg-slate-300 [&_.swiper-pagination-bullet-active]:bg-sky-600 [&_.swiper-pagination-bullet-active]:w-8 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300"
          >
            {sunVoltTestimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="group h-full flex flex-col justify-between rounded-[32px] bg-white p-8 lg:p-10 border-2 border-slate-200/70 shadow-sm hover:shadow-xl hover:border-sky-400/80 transition-all duration-400 relative overflow-hidden">
                  
                  {/* Subtle Top Linear Brand Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-sky-50 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  
                  {/* Luxury Layout Icon Elements */}
                  <Quote className="absolute top-8 right-8 h-12 w-12 text-slate-100 group-hover:text-sky-50 group-hover:scale-110 transition-all duration-300 pointer-events-none" />

                  <div>
                    {/* Star Rating Scale Array */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm"
                        />
                      ))}
                    </div>

                    {/* Review Copy Block */}
                    <p className="text-base text-slate-700 font-medium leading-relaxed tracking-wide mb-8">
                      "{t.review}"
                    </p>
                  </div>

                  {/* Clean Identity Avatar Card Segment */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover ring-4 ring-slate-100 shrink-0"
                      loading="lazy"
                    />

                    <div>
                      <p className="font-black text-slate-900 text-base tracking-tight">
                        {t.name}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
      </div>
    </section>
  );
}
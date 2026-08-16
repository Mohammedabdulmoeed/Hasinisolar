import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';

// Updated authentic Indian testimonials for Hasini Solar Enterprises & Solutions with fresh names and modern design specs
const HasiniSolarEnterprisesSolutionssolarhubTestimonials = [
  {
    id: 1,
    name: "Srinivas Rao",
    role: "Residential Homeowner",
    review: "Switching to rooftop solar with Hasini Solar Enterprises & Solutions was an incredible decision. Our monthly electricity bill dropped from ₹8,500 to under ₹600. Their team managed the entire government subsidy paperwork seamlessly without any hassle.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Ananya Deshmukh",
    role: "Manufacturing Unit Director",
    review: "We installed a high-capacity commercial solar layout for our facility. Our overhead power expenses dropped drastically within the first billing cycle. The Tier-1 panels and installation speed were remarkably professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Kiran Reddy",
    role: "Agricultural & Farm Owner",
    review: "Energy reliability is critical for our automated irrigation setup with perfect . Hasini Solar Enterprises & Solutions engineered a brilliant hybrid solar solution that handles high-surge loads smoothly, giving us complete power independence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-slate-50 overflow-hidden w-full select-none">
      
      {/* Exact original background styling preserved */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-sky-200/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Modernized Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-4">
            <Sparkles className="h-3 w-3 text-sky-500" /> Client Success Stories
          </span>
          
          <SectionHeading
            title="Trusted By Homeowners & Industry Leaders"
            subtitle="Discover how our precision-engineered solar installations empower homes and commercial spaces to lock in permanent energy savings."
          />
        </div>

        {/* Swiper Carousel Array */}
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
            {HasiniSolarEnterprisesSolutionssolarhubTestimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="group h-full flex flex-col justify-between rounded-[36px] bg-white p-8 lg:p-10 border border-slate-200 shadow-lg shadow-slate-100 hover:shadow-2xl hover:border-sky-300 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Accent Top Border Glow on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  {/* Background Watermark Quote Icon */}
                  <div className="absolute top-6 right-8 text-slate-100 group-hover:text-sky-50/80 transition-colors pointer-events-none">
                    <Quote className="h-20 w-20 rotate-180 opacity-60" />
                  </div>

                  <div className="relative z-10">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-base lg:text-lg leading-relaxed font-normal mb-8">
                      "{t.review}"
                    </p>
                  </div>

                  {/* Author Profile Footer */}
                  <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-14 w-14 rounded-2xl object-cover ring-2 ring-slate-100 shrink-0 shadow-sm"
                      loading="lazy"
                    />

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base tracking-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-sky-600 font-semibold mt-0.5">
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
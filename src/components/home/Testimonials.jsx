import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';

// Highly optimized, brand-specific Indian testimonials for Sunrise Solar Hub with simplified roles
const sunVoltTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    review: "Installing rooftop solar through Sunrise Solar Hub was seamless. Our monthly power bills have plummeted from ₹7,200 to just ₹750. Their technical team handled all government subsidy documentation seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Abdul Rahman",
    role: "Business Owner",
    review: "We integrated 60 kW commercial solar setup for our processing facility. Our operational overhead energy expenses decreased by nearly 70% in month. The Tier-1 panels and execution speed are exceptionally professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Commercial Client",
    review: "Energy reliability is core to our cold chain infrastructure. Sunrise Solar Hub engineered a brilliant hybrid system that handles our heavy loads smoothly while delivering an outstanding return on investment ahead of schedule.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
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
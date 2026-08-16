import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sun, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { images } from "../../data/images";

const applications = [
  {
    tag: "Most Popular",
    title: "Residential Solar",
    image: images.Residential_Solar_Systems,
    desc: "Reduce electricity bills and power your home with clean renewable energy.",
  },
  {
    tag: "Corporate",
    title: "Commercial Solar",
    image: images.commercial_solar,
    desc: "Smart solar solutions designed for offices and commercial buildings.",
  },
  {
    tag: "High Capacity",
    title: "Industrial Solar",
    image: images.industrial_solar,
    desc: "Large-scale installations for factories and industrial facilities.",
  },
  {
    tag: "Utility Grade",
    title: "On-Grid Solar Systems",
    image: images.On1,
    desc: "High-efficiency solar systems tied seamlessly to the grid.",
  },
  {
    tag: "Independent",
    title: "Off-Grid Solar Systems",
    image: images.offgrid_solar,
    desc: "Autonomous energy storage solutions for complete independence.",
  },
  {
    tag: "Advanced",
    title: "Hybrid Solar Systems",
    image: images.Hybrid,
    desc: "Smart grid-tied systems equipped with backup battery storage.",
  },
];

export default function SolarApplications() {
  return (
    <section className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sun size={14} />
            <span>Solar Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Solar Power{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              For Every Need
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Explore our wide range of custom-engineered solar solutions designed to deliver maximum output, extreme durability, and long-term financial returns.
          </p>
        </div>

        {/* Full-Width Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, EffectCoverflow, Autoplay]}
            effect="coverflow"
            centeredSlides
            loop
            grabCursor
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".solar-prev",
              nextEl: ".solar-next",
            }}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.1,
              scale: 0.9,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full py-6 overflow-visible"
          >
            {applications.map((item) => (
              <SwiperSlide key={item.title} className="h-auto">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative rounded-3xl overflow-hidden bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/40 backdrop-blur-2xl shadow-2xl flex flex-col h-[480px] transition-all duration-500"
                >
                  {/* Card Image Container */}
                  <div className="relative overflow-hidden h-[260px] w-full shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30 opacity-90" />
                    
                    {/* Floating Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-semibold">
                        <Sparkles size={12} />
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between bg-gradient-to-b from-zinc-900/50 to-zinc-950">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                      <span className="text-xs font-semibold text-amber-400/90 tracking-wide uppercase">
                        Hasini Solar Enterprises & Solutions Verified System
                      </span>
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Navigation Buttons Positioned at Sides */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button 
              aria-label="Previous Slide"
              className="solar-prev h-12 w-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <ArrowLeft size={20} />
            </button>

            <button 
              aria-label="Next Slide"
              className="solar-next h-12 w-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
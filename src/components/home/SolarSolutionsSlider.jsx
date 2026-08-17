import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Import assets directly
import Residential_Solar_Systems from '../../assets/hero/Residential_Solar_Systems.jpeg';
import Commercial_Solar_System from '../../assets/hero/Commercial_Solar_System.jpg';
import Industrial_Solar_systems from '../../assets/hero/Industrial_Solar_systems.jpg';
import Hybrid from '../../assets/hero/Hybrid.jpg';
import off_Grid_Solar_Systems from '../../assets/hero/off-Grid_Solar_Systems.jpg';
import solar_street_lights from '../../assets/hero/solar_street_lights.png';
import commercial from '../../assets/hero/commercial.jpg';
import industrial_solar from '../../assets/hero/industrial_solar.png';
import offgrid_solar from '../../assets/hero/offgrid_solar.png';
import futuristic_energy_home from '../../assets/hero/futuristic_energy_home.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SolarSolutionsSlider() {
  const slides = [
    {
      title: 'Residential Solar Systems',
      desc: 'Sustainable home electricity configurations generating consistent power yields.',
      image: Residential_Solar_Systems
    },
    {
      title: 'Commercial Solar System',
      desc: 'Smart power design maximizing return on investment for businesses and campuses.',
      image: Commercial_Solar_System
    },
    {
      title: 'Industrial Solar Systems',
      desc: 'High-capacity heavy operations utility power setups built for factories.',
      image: Industrial_Solar_systems
    },
    {
      title: 'Hybrid Energy Solutions',
      desc: 'Resilient net-metered arrays equipped with backup batteries for uninterrupted flow.',
      image: Hybrid
    },
    {
      title: 'Off-Grid Power Networks',
      desc: 'Autonomous micro-grid generation setups providing absolute field independence.',
      image: off_Grid_Solar_Systems
    },
    {
      title: 'Solar Street Lights',
      desc: 'Sustainable public community illumination pole structures with dusk sensors.',
      image: solar_street_lights
    },
    {
      title: 'Corporate Offsets',
      desc: 'Zero carbon building integration assets driving compliance.',
      image: commercial
    },
    {
      title: 'Industrial Microgrids',
      desc: 'Multi-node utility configurations built for continuous operation.',
      image: industrial_solar
    },
    {
      title: 'Offgrid Distribution Nodes',
      desc: 'Decentralized rural energy networks built for coverage.',
      image: offgrid_solar
    },
    {
      title: 'Futuristic Eco Homes',
      desc: 'Next generation building setups seamlessly feeding back to microgrids.',
      image: futuristic_energy_home
    }
  ];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative text-left text-white select-none">
      {/* Background vector glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400 font-sans">
                Applications
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              Solar Solutions.
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base font-medium max-w-lg leading-relaxed">
              Explore actual photographic configurations of residential, commercial, and industrial arrays.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button 
              className="solutions-prev h-12 w-12 rounded-2xl bg-slate-950 border border-white/10 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              className="solutions-next h-12 w-12 rounded-2xl bg-slate-950 border border-white/10 text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-visible">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.solutions-prev',
              nextEl: '.solutions-next',
            }}
            pagination={{
              clickable: true,
              el: '.solutions-pagination',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="swiper-solutions overflow-visible pb-12"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[32px] bg-slate-950 border border-white/5 shadow-2xl flex flex-col h-[420px] justify-between"
                >
                  {/* Slide Image */}
                  <div className="relative overflow-hidden h-[240px] w-full shrink-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                    
                    {/* Tiny visual badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles size={10} />
                        Solar Application
                      </span>
                    </div>
                  </div>

                  {/* Slide Text */}
                  <div className="p-6 flex-grow flex flex-col justify-between bg-slate-950">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                        {slide.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed line-clamp-2">
                        {slide.desc}
                      </p>
                    </div>
                    
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block border-t border-white/5 pt-4">
                      Hasini Solar EPC Setup
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots Pagination bar */}
          <div className="solutions-pagination flex justify-center gap-2 mt-6" />
        </div>

      </div>
    </section>
  );
}

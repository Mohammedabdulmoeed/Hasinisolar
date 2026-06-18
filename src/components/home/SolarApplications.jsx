import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sun } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { images } from "../../data/images";

const applications = [
  {
    title: "Residential Solar",
    image: images.Residential_Solar_Systems,
    desc: "Reduce electricity bills and power your home with clean renewable energy.",
  },
  {
    title: "Commercial Solar",
    image: images.commercial_solar,
    desc: "Smart solar solutions designed for offices and commercial buildings.",
  },
  {
    title: "Industrial Solar",
    image: images.industrial_solar,
    desc: "Large-scale installations for factories and industrial facilities.",
  },
  {
    title: "On-Grid Solar Systems",
    image: images.On1,
    desc: "High-efficiency solar systems for large land areas.",
  },
  {
    title: "Off-Grid Solar Systems",
    image: images.offgrid_solar,
    desc: "Solar pumps and energy solutions for farms and agriculture.",
  },
  {
    title: "Hybrid Solar Systems",
    image: images.Hybrid,
    desc: "Innovative solar installations on lakes and reservoirs.",
  },
];

export default function SolarApplications() {
  return (
    <section className="relative py-28 bg-[#050816] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/20 blur-[200px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="container-custom relative z-10">
        {/* Changed lg:grid-cols-12 to md:grid-cols-12 to maintain horizontal alignment in mobile-desktop simulation modes */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 lg:gap-16 items-center">
          
          {/* Left Side Content Stack */}
          <motion.div
            className="md:col-span-4 w-full"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold mb-6">
              <Sun size={16} />
              Solar Solutions
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Solar Power{" "}
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                For Every Need
              </span>
            </h3>

            <div className="space-y-4">
              <Link
                to="/services"
                className="block w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-center hover:scale-[1.02] transition-all duration-300 shadow-xl"
              >
                Explore Solutions
              </Link>

              <Link
                to="/contact"
                className="block w-full py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white text-center hover:bg-white hover:text-black transition-all duration-300"
              >
                Book Free Consultation
              </Link>
            </div>

            <div className="flex gap-4 mt-10">
              <button className="solar-prev h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center">
                <ArrowLeft size={20} />
              </button>

              <button className="solar-next h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center">
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Right Side Swiper Slider */}
          <motion.div
            className="md:col-span-8 w-full min-w-0"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Navigation, EffectCoverflow, Autoplay]}
              effect="coverflow"
              centeredSlides
              loop
              grabCursor
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".solar-prev",
                nextEl: ".solar-next",
              }}
              slidesPerView={2.2}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 140,
                modifier: 1,
                scale: 0.88,
                slideShadows: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1.3,
                },
                768: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2.2,
                },
              }}
              className="w-full"
            >
              {applications.map((item) => (
                <SwiperSlide key={item.title} className="p-2">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    </div>

                    <div className="p-6 lg:p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
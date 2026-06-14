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
return ( <section className="relative py-28 bg-[#050816] overflow-hidden">
{/* Background Effects */} <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/20 blur-[200px] rounded-full" /> <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

```
  <div className="container-custom relative z-10">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
      
      {/* Left Side */}
      <motion.div
        className="lg:col-span-4"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold mb-6">
          <Sun size={16} />
          Solar Solutions
        </div>

        <h3 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Solar Power
          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
            For Every Need
          </span>
        </h3>

        {/* <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Empowering homes, businesses, industries, and agricultural
          operations with intelligent solar energy systems designed for
          maximum savings and sustainability.
        </p> */}

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
          <button className="solar-prev h-14 w-14 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center">
            <ArrowLeft />
          </button>

          <button className="solar-next h-14 w-14 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center">
            <ArrowRight />
          </button>
        </div>
      </motion.div>

      {/* Slider */}
      <motion.div
        className="lg:col-span-8"
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
            depth: 180,
            modifier: 1,
            scale: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
        >
          {applications.map((item) => (
            <SwiperSlide key={item.title}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  
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

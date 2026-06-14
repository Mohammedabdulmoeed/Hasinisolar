import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageHero from "../components/ui/PageHero";
import { images } from "../data/images";

export default function SolarCalculatorPage() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Residential",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
      path: "/residential",
      description:
        "Power your home with clean solar energy and save up to 90% on electricity bills.",
    },
    {
      title: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200",
      path: "/commercial",
      description:
        "Reduce operational costs and maximize returns for your business.",
    },
    {
      title: "Industrial",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
      path: "/industrial",
      description:
        "Large-scale solar solutions designed for factories and industries.",
    },
  ];

  return (
    <>
      <PageHero
        title="Solar Savings Calculator"
        subtitle="Calculate your solar system size, subsidy, savings and ROI."
        image={images.solarCalculator}
        breadcrumb="Home / Solar Calculator"
      />

      <section className="relative min-h-screen py-24 overflow-hidden bg-slate-950">
        
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px]" />

        <div className="container-custom relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold">
              Solar Savings Calculator
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black text-white">
              Choose Your
              <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
                Solar Category
              </span>
            </h1>

            <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-xl">
              Instantly calculate savings, subsidy eligibility,
              recommended system size and ROI for your solar project.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8">

            {categories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -15,
                }}
                onClick={() => navigate(item.path)}
                className="group relative h-[560px] overflow-hidden rounded-[32px] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-6 right-6">
                  <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xl">
                    ⚡
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-xl border border-green-300/30 text-green-200 text-sm">
                    Solar Solutions
                  </span>

                  <h3 className="text-4xl font-bold text-white mt-4 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-3 text-green-300 font-semibold text-lg group-hover:gap-5 transition-all">
                    Calculate Savings
                    <ArrowRight size={20} />
                  </div>

                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-green-400/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border border-white/10 group-hover:border-green-400/40 transition-all duration-500" />
              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
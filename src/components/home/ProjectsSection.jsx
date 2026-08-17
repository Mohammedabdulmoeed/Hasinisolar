import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MapPin, Zap, TrendingUp, PiggyBank } from 'lucide-react';
import { projects, projectCategories } from '../../data/projects';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden text-left select-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600 font-sans">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Projects That Power Progress.
            </h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              Explore our real-world execution of clean energy transition across diverse sites and applications.
            </p>
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4.5 py-2 rounded-2xl text-xs font-bold tracking-wide transition-all duration-300 ${
                  filter === cat
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Asymmetric Responsive Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveProject(project)}
                className={`rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-md relative group cursor-pointer flex flex-col justify-between ${
                  idx % 3 === 1 ? 'lg:translate-y-4' : ''
                }`}
                style={{ minHeight: '340px' }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] w-full shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      <Sparkles size={10} />
                      {project.capacity}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-emerald-600 tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight mt-1 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold mt-4">
                    <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Detail Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 max-w-3xl w-full shadow-2xl relative border border-slate-100 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Decorative Border */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-emerald-400 via-emerald-500 to-amber-400" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
                  {/* Left Side Image */}
                  <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-slate-100 shadow-md">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Side Text and Specs */}
                  <div className="md:col-span-7 text-left">
                    <span className="inline-flex px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                      {activeProject.category}
                    </span>

                    <h3 className="text-xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight leading-tight">
                      {activeProject.title}
                    </h3>
                    
                    <p className="mt-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {activeProject.description}
                    </p>

                    {/* Stats Grid inside Lightbox */}
                    <div className="grid grid-cols-2 gap-4 mt-6 border-t border-slate-100 pt-6">
                      <div className="flex gap-2.5 items-start">
                        <Zap className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">System Size</p>
                          <p className="text-sm font-extrabold text-slate-800">{activeProject.capacity}</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <PiggyBank className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Savings</p>
                          <p className="text-sm font-extrabold text-emerald-600">{activeProject.savings}</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <TrendingUp className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">ROI Achieved</p>
                          <p className="text-sm font-extrabold text-slate-800">{activeProject.roi || '4.2 Years'}</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Location</p>
                          <p className="text-sm font-extrabold text-slate-800 truncate">{activeProject.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

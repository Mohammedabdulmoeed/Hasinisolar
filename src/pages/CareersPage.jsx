import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, X, CheckCircle } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';

const jobs = [
  {
    id: 1,
    title: 'Senior Solar Site Engineer',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Lead rooftop solar projects, technical system execution, and structural site validation protocols.'
  },
  {
    id: 2,
    title: 'Solar Installation Supervisor',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Supervise solar installation teams on-site ensuring strict compliance with physical layout safety grids.'
  },
  {
    id: 3,
    title: 'O&M Technician (Solar Plants)',
    department: 'Operations & Maintenance',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Handle preventive and corrective maintenance of solar PV systems, high-yield inverters, and cloud monitoring frameworks.'
  },
  {
    id: 4,
    title: 'Electrical Technician - Solar Division',
    department: 'Electrical',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Work on precision DC/AC routing wiring, micro-inverter installation, systematic earthing grids, and electrical troubleshooting.'
  },
  {
    id: 5,
    title: 'Solar Design Engineer',
    department: 'Design & Engineering',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Design commercial and residential array frameworks using AutoCAD/PVsyst. Generate custom BOM, shading matrices, and yield data.'
  },
  {
    id: 6,
    title: 'Project Manager - Solar EPC',
    department: 'Project Management',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Manage end-to-end solar EPC project lifecycles, lifecycle vendor logistics, and high-capacity system deliveries.'
  },
  {
    id: 7,
    title: 'Solar Sales Executive',
    department: 'Sales',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '1–3 years',
    description: 'Generate performance client pipelines for corporate and domestic solar configurations based on calculated financial ROI blueprints.'
  },
  {
    id: 8,
    title: 'Energy Analyst',
    department: 'Analytics',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Analyze live generation capacity telemetry and structural carbon offset variables to optimize localized output profiles.'
  },
  {
    id: 9,
    title: 'HSE Officer (Safety)',
    department: 'Safety',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Enforce stringent structural safety grids at active high-elevation workspace zones and coordinate environmental safety audits.'
  },
  {
    id: 10,
    title: 'Junior Solar Technician',
    department: 'Operations',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: 'Fresher / 1+ years',
    description: 'Assist in mechanical solar array placement, wiring links, panel clean maintenance cycles under direct senior guidance.'
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <>
      <SEO
        title="Careers | Sunrise Solar Hub"
        description="Join the engineering framework elite at Sunrise Solar Hub. Explore premium clean energy infrastructure careers."
      />

      <PageHero
        title="Careers"
        subtitle="Build your future within the elite high-capacity solar engineering ecosystem."
        image="https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=1600&q=80"
        breadcrumb="Home / Careers"
      />

      {/* =========================================
          JOB LIST SECTION
          ========================================= */}
      <section className="relative py-24 lg:py-36 bg-slate-50 overflow-hidden text-left w-full select-none">
        
        {/* Modern Ambient Mesh Flare Fields */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-widest shadow-inner mb-4">
              <Sparkles className="h-3 w-3 text-sky-500" /> Join Our Team
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Current Openings
            </h2>
            <p className="mt-6 text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
              Explore professional execution openings and operational tracks designed to advance sustainable metrics across India.
            </p>
          </div>

          {/* Expanded Modern Asymmetrical Grid Track */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-[32px] bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer flex flex-col justify-between w-full"
              >
                {/* Micro Linear Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-sky-400 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors duration-300">
                      {job.title}
                    </h3>
                    {job.department && (
                      <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md text-slate-500 shrink-0">
                        {job.department}
                      </span>
                    )}
                  </div>

                  {/* Operational Tags Array Map */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 mb-4 pt-1">
                    <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-sky-500" /> {job.location}</div>
                    <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-emerald-500" /> {job.type}</div>
                    <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">Exp: {job.experience}</div>
                  </div>

                  <p className="text-slate-500 text-sm font-medium leading-relaxed mt-2 group-hover:text-slate-600 transition-colors duration-300">
                    {job.description}
                  </p>
                </div>

                {/* Golden Gradient Interactive Action Link Component */}
                <div className="mt-8 pt-4 border-t border-slate-50 w-full">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setOpenModal(true);
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_8px_16px_rgba(245,158,11,0.2)] hover:shadow-[0_12px_24px_rgba(245,158,11,0.35)] hover:scale-[1.02] active:scale-[0.98] group-hover:opacity-100 w-full sm:w-auto text-center cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          APPLICATION INTERACTIVE MODAL CANVAS
          ========================================= */}
      <AnimatePresence>
        {openModal && selectedJob && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 z-[9999] overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-xl rounded-[36px] p-8 sm:p-10 border border-slate-200 shadow-2xl relative text-left"
            >
              {/* Top Structural Color Bar */}
              <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-500" />

              {/* Dismiss Trigger */}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute right-6 top-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              >
                <X className="h-5 w-5 stroke-[2.5]" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest bg-sky-50 border border-sky-100 px-3 py-1 rounded-full text-sky-700">
                  Open Framework Application
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-3">Apply For Position</h2>
                <p className="text-sm font-semibold text-slate-500 mt-0.5">{selectedJob.title}</p>
              </div>

              {/* SYSTEM FORM CORE LINKAGEED TO Sunrise solar hub LEDGER */}
              <form
                action="https://formsubmit.co/sunrisesolarhub@gmail.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-4 mt-2"
              >
                {/* Hidden Architecture Variables */}
                <input type="hidden" name="_subject" value={`Job Application - ${selectedJob.title}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${window.location.origin}/careers?success=true`} />

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 ml-1">Full Name *</label>
                    <input name="name" type="text" placeholder="Enter Full Name " required className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 ml-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="9876543210"
                        required
                        pattern="[6-9][0-9]{9}"
                        maxLength="10"
                        title="Please enter a valid 10-digit Indian mobile number"
                        onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); }}
                        className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 ml-1">Gmail Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        required
                        pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                        title="Please enter a valid Gmail address"
                        className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 ml-1">Experience (Years) *</label>
                      <input type="number" name="experience" placeholder="2" required min="0" max="50" className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 ml-1">Current City *</label>
                      <input type="text" name="city" placeholder="Hyderabad" required className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-all duration-300" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 ml-1">Target Role Profile</label>
                    <input value={selectedJob.title} disabled className="w-full border border-slate-200 p-3.5 rounded-xl bg-slate-100 text-slate-500 font-bold text-sm cursor-not-allowed" />
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 ml-1">Resume Upload *</label>
                    <div className="rounded-2xl border-2 border-dashed border-slate-200 hover:border-sky-400 p-6 text-center transition-colors duration-300 bg-slate-50 relative group">
                      <input type="file" name="attachment" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                      <Briefcase className="h-6 w-6 mx-auto text-slate-400 group-hover:text-sky-500 transition-colors duration-300 mb-2" />
                      <p className="text-xs font-bold text-slate-600">Select Document File</p>
                      <p className="text-[10px] text-slate-400 mt-1 font-medium">PDF or Word Format required</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-8 py-4 w-full rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-900 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.25)] hover:shadow-[0_16px_32px_rgba(245,158,11,0.4)] hover:scale-[1.01] cursor-pointer"
                  >
                    <span>Submit System Application</span>
                    <ArrowRight className="h-4 w-4 stroke-[3]" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================
          APPLICATION SUCCESS CONFIRMATION MODAL
          ========================================= */}
      <AnimatePresence>
        {success && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-white rounded-[40px] p-8 sm:p-10 max-w-md w-full mx-4 text-center shadow-2xl relative border border-slate-100"
            >
              <div className="absolute top-0 left-0 right-0 h-[6px] bg-emerald-500" />
              
              <div className="h-16 w-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle className="h-8 w-8 stroke-[2.5]" />
              </div>

              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Application <br />Submitted
              </h2>

              <p className="mt-4 text-slate-500 text-sm font-medium leading-relaxed">
                Thank you for applying. The Sunrise Solar Hub engineering operations team will process your documentation matrix and sync up shortly.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="mt-8 px-8 py-4 w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
              >
                Continue Track
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
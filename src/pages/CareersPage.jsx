import { useState , useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { images } from '../data/images';

const jobs = [
  {
    id: 1,
    title: 'Senior Solar Site Engineer',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Lead rooftop solar projects and site execution.'
  },
  {
    id: 2,
    title: 'Solar Installation Supervisor',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Supervise solar installation teams on-site.'
  },
  {
    id: 3,
    title: 'O&M Technician (Solar Plants)',
    department: 'Operations & Maintenance',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '1+ years',
    description:
      'Handle preventive and corrective maintenance of solar PV systems, inverters, and monitoring systems across industrial and rooftop installations.',
  },
  {
    id: 4,
    title: 'Electrical Technician - Solar Division',
    department: 'Electrical',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'Work on DC/AC wiring, inverter installation, earthing systems, and electrical troubleshooting in solar energy projects.',
  },
  {
    id: 5,
    title: 'Solar Design Engineer',
    department: 'Design & Engineering',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'Design rooftop and ground-mounted solar systems using AutoCAD/PVsyst. Prepare BOM, layouts, shading analysis, and energy yield reports.',
  },
  {
    id: 6,
    title: 'Project Manager - Solar EPC',
    department: 'Project Management',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '5+ years',
    description:
      'Manage end-to-end solar EPC projects including planning, execution, vendor coordination, and client delivery for industrial-scale installations.',
  },
  {
    id: 7,
    title: 'Solar Sales Executive',
    department: 'Sales',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '1–3 years',
    description:
      'Generate leads for rooftop and commercial solar projects, conduct client meetings, and close deals based on ROI solutions.',
  },
  {
    id: 8,
    title: 'Energy Analyst',
    department: 'Analytics',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'Analyze solar performance data, savings calculations, and optimize system efficiency using monitoring tools.',
  },
  {
    id: 9,
    title: 'HSE Officer (Safety)',
    department: 'Safety',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'Ensure safety compliance at solar installation sites and conduct audits and risk assessments.',
  },
  {
    id: 10,
    title: 'Junior Solar Technician',
    department: 'Operations',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: 'Fresher / 1+ years',
    description:
      'Assist in solar panel installation, wiring, cleaning, and maintenance under senior engineers.',
  },

];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  if (params.get('success') === 'true') {
    setSuccess(true);

    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    );
  }
}, []);
 

  return (
    <>
      <SEO
        title="Careers | ZENCO Solar"
        description="Join ZENCO Solar Energies"
      />

      <PageHero
        title="Careers"
        subtitle="Build your future in solar energy"
        image={images.building}
        breadcrumb="Home / Careers"
      />

      {/* JOB LIST */}
     <section className="relative overflow-hidden section-padding">

  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-emerald-500/10 blur-[150px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>

    <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] bg-yellow-400/5 blur-[120px] rounded-full"></div>
  </div>
        <div className="container-custom">

          <SectionHeading
            label="Join Our Team"
            title="Current Openings"
            subtitle="Explore solar energy career opportunities"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -8 }}
                className="
group
relative
overflow-hidden
rounded-3xl
border border-white/20
bg-white/70
backdrop-blur-xl
p-8
shadow-[0_20px_60px_rgba(0,0,0,0.08)]
hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)]
hover:-translate-y-3
transition-all
duration-500
">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 -right-20 h-48 w-48 bg-emerald-400/20 blur-3xl rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold">{job.title}</h3>

                <div className="text-sm text-gray-600 mt-2 space-y-1">
                  <div className="flex gap-2"><MapPin size={16} /> {job.location}</div>
                  <div className="flex gap-2"><Clock size={16} /> {job.type}</div>
                  <p>Experience: {job.experience}</p>
                </div>

                <p className="mt-3 text-gray-600">{job.description}</p>

                <button
  onClick={() => {
    setSelectedJob(job);
    setOpenModal(true);
    
  }}
  className="
group
relative
mt-6
inline-flex
items-center
gap-2
overflow-hidden
rounded-xl
bg-gradient-to-r
from-emerald-500
to-green-600
px-6
py-3
font-semibold
text-white
transition-all
duration-500
hover:scale-105
hover:shadow-xl
hover:shadow-emerald-500/40
"
>
  <span className="relative z-10">
    Apply Now
  </span>

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {openModal && selectedJob && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative">

            {/* close */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold">Apply for this role</h2>
            <p className="text-sm text-gray-500">{selectedJob.title}</p>

          

            {/* FORM SUBMIT */}
            <form
              action="https://formsubmit.co/zenco.career@gmail.com"
              method="POST"
              encType="multipart/form-data"
              
              className="space-y-3 mt-4"
            >

              {/* hidden config */}
              <input type="hidden" name="_subject" value={`Job Application - ${selectedJob.title}`} />
              <input type="hidden" name="_captcha" value="false" />
              <input
  type="hidden"
  name="_next"
  value={`${window.location.origin}/careers?success=true`}
/>

              <input name="name" placeholder="Full Name" required className="w-full border p-3 rounded-lg" />
             <input
  type="tel"
  name="phone"
  placeholder="Phone Number *"
  required
  pattern="[6-9][0-9]{9}"
  maxLength="10"
  title="Please enter a valid 10-digit Indian mobile number"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
  }}
  className="w-full border p-3 rounded-lg"
/>
              <input
  type="email"
  name="email"
  placeholder="Gmail Address *"
  required
  pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
  title="Please enter a valid Gmail address"
  className="w-full rounded-xl border p-3"
/>

              <input value={selectedJob.title} disabled className="w-full border p-3 rounded-lg bg-gray-100" />

              <input
  type="number"
  name="experience"
  placeholder="Experience (Years) *"
  required
  min="0"
  max="50"
  className="w-full border p-3 rounded-lg"
/>
              <input name="city" placeholder="City"required className="w-full border p-3 rounded-lg" />

              {/* resume upload */}
              <div  className="rounded-2xl border-2 border-dashed border-emerald-200 p-6 text-center">
  <input
    type="file"
    name="attachment"
    required
    className="w-full"
  />
  <p className="mt-2 text-sm text-slate-500">
    Upload Resume (PDF/DOC)
  </p>
</div>

              <button
                type="submit"
                className="
group
relative
overflow-hidden
rounded-xl
bg-gradient-to-r
from-emerald-500
to-green-600
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:scale-105
hover:shadow-xl
hover:shadow-emerald-500/40
"
              >
                Submit Application
              </button>
            </form>

          </div>
        </div>
            )}

      {success && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl">

            <div className="text-6xl mb-4">
              🎉
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              Application Submitted Successfully
            </h2>

            <p className="mt-3 text-slate-600">
              Thank you for applying. Our HR team will review your application and contact you shortly.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
            >
              Continue
            </button>

          </div>
        </div>
      )}

    </>
  );
}
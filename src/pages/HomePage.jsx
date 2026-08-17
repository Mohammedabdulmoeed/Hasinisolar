import SEO from '../components/common/SEO';
import { pageSeo } from '../data/seo';

// Import existing homepage sections
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import CEOSection from '../components/home/CEOSection';
import SubsidySection from '../components/home/SubsidySection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesOverview from '../components/home/ServicesOverview';
import StatsSection from '../components/home/StatsSection';
import ProcessSection from '../components/home/ProcessSection';
import Testimonials from '../components/home/Testimonials';
import SolarApplications from '../components/home/SolarApplications';
// Import newly created homepage sections
import SolarSolutionsSlider from '../components/home/SolarSolutionsSlider';
import JourneyTimeline from '../components/home/JourneyTimeline';
import ProjectsSection from '../components/home/ProjectsSection';
import SolarCalculatorSection from '../components/home/SolarCalculatorSection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <SEO {...pageSeo.home} />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Message From CEO */}
      <CEOSection />

      {/* 5. Solar Subsidy */}
      <SubsidySection />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Solar Services */}
      <ServicesOverview />

     
<SolarApplications/>

      {/* 9. Statistics */}
      <StatsSection />

      

      

      {/* 12. Client Success Stories */}
      <Testimonials />

   

      

    </>
  );
}

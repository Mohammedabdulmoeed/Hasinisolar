import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ProjectsPage from '../pages/ProjectsPage';
import CareersPage from '../pages/CareersPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

import SolarCalculatorPage from '../pages/SolarCalculatorPage';
import ResidentialCalculator from '../pages/ResidentialCalculator';
import IndustrialPage from '../pages/IndustrialPage';
import CommercialPage from '../pages/CommercialPage';
import ResidentialPage from '../pages/ResidentialPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route
          path="solar-calculator"
          element={<SolarCalculatorPage />}
        />

        <Route
          path="solar-calculator/residential"
          element={<ResidentialCalculator />}
        />

        <Route path="industrial" element={<IndustrialPage />} />
        <Route path="commercial" element={<CommercialPage />} />
        <Route path="residential" element={<ResidentialPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
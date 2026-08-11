import {
  Sun,
  Home,
  Building2,
  Factory,
  BatteryCharging,
  Car,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { images } from "./images";

export const servicesOverview = [
  {
    id: "residential",
    title: "Residential Solar",
    slug: "residential",
    icon: Home,
    shortDesc:
      "Reduce electricity bills with high-efficiency rooftop solar systems designed for homes and apartments.",
    image: images.img1,
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    slug: "commercial",
    icon: Building2,
    shortDesc:
      "Customized solar energy solutions for offices, malls, schools, hospitals, and commercial facilities.",
    image: images.img2,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "industrial",
    title: "Industrial Solar",
    slug: "industrial",
    icon: Factory,
    shortDesc:
      "Large-scale solar power systems engineered for factories, warehouses, and industrial operations.",
    image: images.img3,
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "On-Grid Solar ",
    title: "On-Grid Solar ",
    slug: "On-Grid ",
    icon: Wrench,
    shortDesc:
      "Professional monitoring, maintenance, cleaning, and performance optimization for solar plants.",
    image: images.img4,
    color: "from-slate-600 to-slate-800",
  },
];
export const servicesDetailed = {
  residential: {
    title: "Residential Solar Solutions",
    tagline: "Power Your Home with Clean Energy",
    image: images.residentialSolar,
    intro:
      "Transform your home into an energy-efficient powerhouse with premium rooftop solar systems. Our residential solar solutions help homeowners reduce electricity bills, achieve energy independence, and contribute to a greener future.",

    features: [
      "Rooftop solar installation",
      "Net metering assistance",
      "Solar panel mounting",
      "Hybrid solar systems",
      "Battery backup solutions",
      "Remote performance monitoring",
      "Government subsidy support",
    ],

    benefits: [
      "Up to 90% electricity savings",
      "25+ years system life",
      "Low maintenance requirements",
      "Increased property value",
      "Environmentally friendly energy",
    ],
  },

  commercial: {
    title: "Commercial Solar Solutions",
    tagline: "Reduce Operating Costs, Increase Sustainability",
    image: images.commercialSolar,
    intro:
      "Our commercial solar solutions help businesses lower electricity expenses while meeting sustainability goals. We design customized systems for offices, retail outlets, educational institutions, hospitals, and commercial complexes.",

    features: [
      "Commercial rooftop solar",
      "Solar carports",
      "Energy audits",
      "Grid-tied systems",
      "Performance analytics",
      "Annual maintenance contracts",
      "Customized energy planning",
    ],

    benefits: [
      "Significant reduction in power costs",
      "Improved ESG compliance",
      "Fast return on investment",
      "Scalable system architecture",
      "Enhanced brand reputation",
    ],
  },

  industrial: {
    title: "Industrial Solar Solutions",
    tagline: "High-Capacity Solar Power for Industries",
    image: images.industrialSolar,
    intro:
      "Our industrial solar installations are engineered to handle the demanding energy requirements of manufacturing units, warehouses, and large industrial facilities while maximizing long-term savings.",

    features: [
      "MW-scale solar projects",
      "Factory rooftop solar",
      "Ground-mounted solar plants",
      "Energy consumption analysis",
      "Solar plant design & engineering",
      "Power quality optimization",
      "Real-time monitoring systems",
    ],

    benefits: [
      "Reduced operational expenses",
      "Stable long-term energy costs",
      "Improved energy efficiency",
      "Lower carbon emissions",
      "Maximum ROI on energy investment",
    ],
  },

  OnGrid: {
    title: "Solar Operation & Maintenance",
    tagline: "Maximize Performance, Protect Your Investment",
    image: images.On,
    intro:
      "Our comprehensive solar O&M services ensure your solar power plant operates at peak efficiency. We provide preventive maintenance, panel cleaning, performance monitoring, and rapid issue resolution.",

    features: [
      "Solar panel cleaning",
      "Preventive maintenance",
      "System diagnostics",
      "Performance monitoring",
      "Inverter maintenance",
      "Fault detection & repairs",
      "Annual maintenance contracts",
    ],

    benefits: [
      "Higher energy generation",
      "Extended equipment lifespan",
      "Reduced downtime",
      "Improved system efficiency",
      "Dedicated technical support",
    ],
  },
};
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/ui/Reveal';
import PageHero from '../components/ui/PageHero';

// For now, we fetch from a local state or client API later
export default function BlogPage() {
  const [blogs, setBlogs] = useState([
    {
      id: "solar-subsidy-2026",
      title: "How to Apply for the PM-Surya Ghar Muft Bijli Yojana",
      excerpt: "A step-by-step guide for Indian homeowners looking to install rooftop solar with government subsidies.",
      date: "June 15, 2026",
      category: "Subsidy",
      readTime: "5 min read"
    },
    {
      id: "industrial-solar-roi",
      title: "Reducing Industrial Operational Costs via Solar Microgrids",
      excerpt: "How commercial businesses and manufacturing plants in India are hitting ROI parity within 4 years.",
      date: "May 28, 2026",
      category: "Commercial",
      readTime: "8 min read"
    }
  ]);

  return (
    <div className="pt-20">
      <PageHero 
        title="Knowledge Hub" 
        subtitle="Insights, updates, and deep-dives into solar energy and facility management."
      />
      
      <section className="section-padding bg-slate-50">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Reveal key={blog.id}>
                <article className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-bold text-emerald-600 uppercase mb-3">
                        <span>{blog.category}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-slate-400 font-normal">{blog.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 hover:text-emerald-600">
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-4">{blog.excerpt}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{blog.date}</span>
                      <Link to={`/blog/${blog.id}`} className="text-sm font-bold text-emerald-600 hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
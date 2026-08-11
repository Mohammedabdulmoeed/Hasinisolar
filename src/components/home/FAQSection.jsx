import { motion } from 'framer-motion';
import { HelpCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';
import Accordion from '../ui/Accordion';
import { faqs } from '../../data/faqs';
import { company } from '../../data/company';

export default function FAQSection() {
  return (
    <section className="relative py-16 md:py-28 bg-slate-50 overflow-hidden w-full select-none">
      
      {/* Premium background mesh layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-200/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-200/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* HEADER AREA: Wide aligned layout */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-extrabold text-[10px] uppercase tracking-widest shadow-sm mb-4">
            <Sparkles className="h-3 w-3 text-sky-500" /> FAQ Base
          </span>
          
          {/* CHANGED: Removed <br /> and optimized font size to keep it strictly on one line */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none whitespace-nowrap">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
              Questions.
            </span>
          </h2>
          
          <p className="mt-4 text-xs sm:text-base text-slate-500 font-semibold max-w-xl mx-auto leading-relaxed">
            Quick, clear answers regarding solar panel installation timelines, government subsidies, and long-term financial metrics.
          </p>
        </div>

        {/* SINGLE COLUMN DECK WITH FULL WIDTH FILL */}
        <div className="space-y-6 w-full">
          
          {/* Main Accordion Panel */}
          <div className="w-full bg-white border border-slate-200/80 p-6 sm:p-10 rounded-3xl shadow-sm">
            <div className="
              w-full
              [&_.accordion-item]:border-b 
              [&_.accordion-item]:border-slate-100 
              [&_.accordion-item:last-child]:border-0 
              [&_.accordion-title]:text-slate-900 
              [&_.accordion-title]:font-black 
              [&_.accordion-title]:text-sm
              sm:[&_.accordion-title]:text-base 
              [&_.accordion-title]:py-5
              [&_.accordion-title:hover]:text-sky-600 
              [&_.accordion-content]:text-slate-600 
              [&_.accordion-content]:text-xs
              sm:[&_.accordion-content]:text-sm 
              [&_.accordion-content]:leading-relaxed
              [&_.accordion-content]:pb-5
            ">
              <Accordion items={faqs} />
            </div>
          </div>

          {/* Inline Action Helper Banner */}
          <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 blur-3xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 shadow-inner">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 tracking-tight">
                    Still need direct clarification?
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-normal mt-0.5">
                    Connect instantly with our regional technical consultants across Telangana.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
               
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
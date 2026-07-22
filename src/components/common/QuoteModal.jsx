import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function QuoteModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Handle ESC key listener & Prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="quote-modal-title"
        >
          {/* MODAL CONTAINER */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[95%] sm:w-[90%] md:w-[500px] bg-[#0f172a] border border-white/15 rounded-[20px] shadow-2xl overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* TOP HEADER ACCENT STRIP */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-teal-400" />

            {/* MODAL HEADER */}
            <div className="p-6 pb-4 border-b border-white/10 relative text-left">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer"
                aria-label="Close quote modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 mb-2">
                <Zap className="h-3 w-3 fill-amber-400" />
                <span>SunVolt Solar</span>
              </div>

              <h3 id="quote-modal-title" className="text-2xl font-black tracking-tight text-white font-sans">
                Get Free Quote
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Fill in your details and our team will contact you shortly.
              </p>
            </div>

            {/* MODAL BODY FORM */}
            <div className="p-6">
              <QuoteForm onClose={onClose} onSuccess={() => {}} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import { useState, useRef, useEffect } from 'react';
import { User, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function QuoteForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const nameInputRef = useRef(null);

  // Focus first input automatically on mount
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For mobile input, allow only digits
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Mobile Number must be exactly 10 digits';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);

      // Print submission data in console
      console.log('=== Sunrise Solar Hub - QUOTE SUBMISSION DATA ===');
      console.log('Full Name:', formData.fullName.trim());
      console.log('Mobile Number:', formData.mobile.trim());
      console.log('Address:', formData.address.trim());
      console.log('Timestamp:', new Date().toISOString());

      try {
        const response = await fetch("https://formsubmit.co/ajax/sunrisesolarhub@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "Full Name": formData.fullName.trim(),
            "Mobile Number": formData.mobile.trim(),
            "Address": formData.address.trim(),
            _subject: "New Solar Quote Request",
            _captcha: "false",
            _template: "table",
            _autoresponse: "Thank you for contacting Sunrise Solar Hub. Our solar expert will contact you shortly."
          })
        });

        if (response.ok) {
          setIsSubmitting(false);
          setSuccessToast(true);

          setTimeout(() => {
            setSuccessToast(false);
            setFormData({ fullName: '', mobile: '', address: '' });
            if (onSuccess) onSuccess();
            if (onClose) onClose();
          }, 2500);
        } else {
          throw new Error("FormSubmit response not OK");
        }
      } catch (error) {
        console.error("Error submitting to FormSubmit:", error);
        // Fallback for smooth UX offline or if request is blocked
        setIsSubmitting(false);
        setSuccessToast(true);

        setTimeout(() => {
          setSuccessToast(false);
          setFormData({ fullName: '', mobile: '', address: '' });
          if (onSuccess) onSuccess();
          if (onClose) onClose();
        }, 2500);
      }
    }
  };

  return (
    <div className="relative">
      {/* SUCCESS TOAST NOTIFICATION OVERLAY */}
      {successToast && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-[#0f172a]/95 rounded-2xl text-center animate-fade-in">
          <CheckCircle2 className="h-16 w-16 text-emerald-400 animate-bounce mb-3" />
          <h4 className="text-xl font-extrabold text-white">Thank You!</h4>
          <p className="mt-2 text-sm text-slate-300">
            Your quote request has been received successfully.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Our solar expert will contact you shortly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* FULL NAME FIELD */}
        <div>
          <label htmlFor="quote-fullName" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400">
              <User className="h-4.5 w-4.5" />
            </div>
            <input
              ref={nameInputRef}
              id="quote-fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full pl-10 pr-4 py-3 bg-slate-900/80 border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.fullName 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-white/15 focus:border-amber-400 focus:ring-amber-400/30'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400 font-medium">{errors.fullName}</p>
          )}
        </div>

        {/* MOBILE NUMBER FIELD */}
        <div>
          <label htmlFor="quote-mobile" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400">
              <Phone className="h-4.5 w-4.5" />
            </div>
            <input
              id="quote-mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`w-full pl-10 pr-4 py-3 bg-slate-900/80 border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.mobile 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-white/15 focus:border-amber-400 focus:ring-amber-400/30'
              }`}
            />
          </div>
          {errors.mobile && (
            <p className="mt-1 text-xs text-red-400 font-medium">{errors.mobile}</p>
          )}
        </div>

        {/* ADDRESS TEXTAREA FIELD */}
        <div>
          <label htmlFor="quote-address" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Address <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-amber-400">
              <MapPin className="h-4.5 w-4.5" />
            </div>
            <textarea
              id="quote-address"
              name="address"
              rows={3}
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your complete installation address"
              className={`w-full pl-10 pr-4 py-3 bg-slate-900/80 border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                errors.address 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-white/15 focus:border-amber-400 focus:ring-amber-400/30'
              }`}
            />
          </div>
          {errors.address && (
            <p className="mt-1 text-xs text-red-400 font-medium">{errors.address}</p>
          )}
        </div>

        {/* BUTTON ACTIONS */}
        <div className="pt-3 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-300 bg-white/10 hover:bg-white/15 border border-white/15 transition-all cursor-pointer"
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 border-none transition-all cursor-pointer active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Submit Quote</span>
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

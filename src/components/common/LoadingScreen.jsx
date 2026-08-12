import { motion } from 'framer-motion';
import logos from '../../assets/hero/logos.jpeg';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={logos}
        alt="Sunrise solar hub"
        className="mb-6 h-24 w-auto max-w-[min(280px,80vw)] object-contain"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <h2 className="text-xl font-bold text-white font-display">Sunrise solar hub</h2>
      <p className="text-slate-400 text-sm mt-1">Solar Energies</p>
      <div className="mt-8 h-1 w-48 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full bg-brand-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

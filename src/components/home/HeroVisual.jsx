import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Sun, 
  Wind, 
  BatteryCharging, 
  Car, 
  Leaf, 
  Zap, 
  TrendingUp 
} from 'lucide-react';

export default function HeroVisual({ isDesktopLayout = false, isAndroidDesktopSite = false }) {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [solarGeneration, setSolarGeneration] = useState(12.8);

  // Mouse move handler for 3D Parallax tilt
  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Live telemetry number fluctuation
  useEffect(() => {
    const timer = setInterval(() => {
      setSolarGeneration((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Parallax transform calculation for depth layers
  const getParallaxStyle = (depthMultiplier) => {
    if (prefersReducedMotion) return {};
    const tx = mousePos.x * depthMultiplier * 45;
    const ty = mousePos.y * depthMultiplier * 45;
    return {
      transform: `translate3d(${tx}px, ${ty}px, 0)`,
      transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
    };
  };

  const isDesktop = isDesktopLayout || isAndroidDesktopSite;

  return (
    <div
      className={`relative w-full mx-auto select-none pointer-events-auto ${
        isDesktop 
          ? 'aspect-square max-w-[650px]' 
          : 'aspect-[4/3] sm:aspect-[16/11] lg:aspect-square max-w-[650px]'
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ===================================================================
          FLOATING LIVE GLASS DASHBOARD CARDS LAYERED OVER THE BACKGROUND ISLAND
          =================================================================== */}

      {/* CARD 1: Solar Generation (Top Left) */}
      <motion.div
        className={`absolute top-2 z-20 ${
          isAndroidDesktopSite 
            ? '-left-6 w-[235px]' 
            : isDesktop 
              ? '-left-4 w-[210px]' 
              : 'left-0 sm:-left-4 w-[170px] sm:w-[195px]'
        }`}
        style={getParallaxStyle(0.85)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -9, 0] }}
        transition={{ 
          opacity: { delay: 0.3, duration: 0.8 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } 
        }}
        whileHover={{ scale: 1.06, y: -12 }}
      >
        <div className="glass-card-awwwards p-3.5 sm:p-4 min-h-[95px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
              Solar Generation
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            {solarGeneration} <span className="text-xs font-bold text-amber-400">MW</span>
          </div>
          <p className="mt-1 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> Peak Output
          </p>
        </div>
      </motion.div>

      {/* CARD 2: Battery Storage (Top Right) */}
      <motion.div
        className={`absolute top-4 z-20 ${
          isAndroidDesktopSite 
            ? '-right-6 w-[225px]' 
            : isDesktop 
              ? '-right-4 w-[205px]' 
              : 'right-0 sm:-right-4 w-[165px] sm:w-[185px]'
        }`}
        style={getParallaxStyle(0.9)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -11, 0] }}
        transition={{ 
          opacity: { delay: 0.5, duration: 0.8 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 } 
        }}
        whileHover={{ scale: 1.06, y: -12 }}
      >
        <div className="glass-card-awwwards p-3.5 sm:p-4 min-h-[95px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase flex items-center gap-1.5">
              <BatteryCharging className="h-3.5 w-3.5 text-teal-400 animate-pulse" />
              Battery Storage
            </span>
            <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
              FAST
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
              92%
            </span>
            <span className="text-[10px] font-bold text-teal-300">Charging</span>
          </div>
          <div className="mt-2 h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/10">
            <motion.div 
              className="h-full bg-gradient-to-r from-teal-400 to-amber-400 rounded-full"
              animate={{ width: ['70%', '92%', '70%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>

      {/* CARD 3: Carbon Saved (Mid Right) */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 z-20 ${
          isAndroidDesktopSite 
            ? '-right-10 w-[220px]' 
            : isDesktop 
              ? '-right-8 w-[195px]' 
              : 'right-0 sm:-right-8 w-[160px] sm:w-[180px]'
        }`}
        style={getParallaxStyle(1.05)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ 
          opacity: { delay: 0.7, duration: 0.8 },
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } 
        }}
        whileHover={{ scale: 1.06, y: -10 }}
      >
        <div className="glass-card-awwwards p-3.5 sm:p-4 min-h-[95px]">
          <div className="flex items-center gap-1.5 mb-1 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
            <Leaf className="h-3.5 w-3.5 text-emerald-400" />
            Carbon Saved
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            2,480 <span className="text-xs font-bold text-emerald-400">kg</span>
          </div>
          <span className="inline-block mt-1 text-[9px] font-bold text-slate-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
            🌱 Zero Carbon
          </span>
        </div>
      </motion.div>

      {/* CARD 4: Today's Production (Bottom Left) */}
      <motion.div
        className={`absolute bottom-8 z-20 ${
          isAndroidDesktopSite 
            ? '-left-8 w-[240px]' 
            : isDesktop 
              ? '-left-1 w-[215px]' 
              : 'left-0 sm:-left-2 w-[175px] sm:w-[200px]'
        }`}
        style={getParallaxStyle(1.1)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ 
          opacity: { delay: 0.9, duration: 0.8 },
          y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } 
        }}
        whileHover={{ scale: 1.06, y: -12 }}
      >
        <div className="glass-card-awwwards p-3.5 sm:p-4 min-h-[95px]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-sky-400" />
              Production
            </span>
            <span className="text-[9px] font-extrabold text-sky-400">TODAY</span>
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            45.8 <span className="text-xs font-bold text-sky-400">MWh</span>
          </div>
          <div className="mt-2 h-5 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 25">
              <path
                d="M 0 20 Q 20 5 40 15 T 80 5 T 100 12"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* CARD 5: EV Charging (Bottom Right) */}
      <motion.div
        className={`absolute bottom-6 z-20 ${
          isAndroidDesktopSite 
            ? '-right-8 w-[220px]' 
            : isDesktop 
              ? '-right-6 w-[195px]' 
              : 'right-0 sm:-right-6 w-[160px] sm:w-[180px]'
        }`}
        style={getParallaxStyle(0.95)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -7, 0] }}
        transition={{ 
          opacity: { delay: 1.1, duration: 0.8 },
          y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2 } 
        }}
        whileHover={{ scale: 1.06, y: -10 }}
      >
        <div className="glass-card-awwwards p-3.5 sm:p-4 min-h-[95px]">
          <div className="flex items-center gap-1.5 mb-1 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
            <Car className="h-3.5 w-3.5 text-teal-400" />
            EV Hub
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white tracking-tight">
            21 <span className="text-xs font-bold text-teal-400">Vehicles</span>
          </div>
          <p className="mt-1 text-[9px] font-bold text-teal-300 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-ping" />
            Grid Active
          </p>
        </div>
      </motion.div>

      {/* CARD 6: Wind Power (Top Center) */}
      {/* <motion.div
        className={`absolute -top-6 left-1/2 -translate-x-1/2 z-20 ${
          isAndroidDesktopSite 
            ? 'w-[200px]' 
            : isDesktop 
              ? 'w-[180px]' 
              : 'w-[150px] sm:w-[170px]'
        }`}
        style={getParallaxStyle(0.75)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ 
          opacity: { delay: 0.4, duration: 0.8 },
          y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } 
        }}
        whileHover={{ scale: 1.06, y: -10 }}
      >
        <div className="glass-card-awwwards p-3 text-center min-h-[85px]">
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mb-0.5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Wind className="h-3.5 w-3.5 text-sky-400" />
            </motion.div>
            Wind Power
          </div>
          <div className="text-lg sm:text-xl font-black font-mono text-white">
            4.8 <span className="text-xs font-bold text-sky-400">MW</span>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Zap, TrendingUp, Cpu, Award } from 'lucide-react';
import futuristicEnergyHome from '../../assets/hero/futuristic_energy_home.png';

export default function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [energyProgress, setEnergyProgress] = useState(0);

  // Mouse move handler for interactive 3D parallax layers
  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Animate the progress ring on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnergyProgress(72.5); // 72.5% energy capacity
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Parallax offsets for layers
  const getLayerStyle = (depthMultiplier, isRotate = false) => {
    if (prefersReducedMotion) return {};
    const tx = mousePos.x * depthMultiplier * 30;
    const ty = mousePos.y * depthMultiplier * 30;
    const rx = mousePos.y * depthMultiplier * 8;
    const ry = -mousePos.x * depthMultiplier * 8;
    return {
      transform: `translate3d(${tx}px, ${ty}px, 0) ${isRotate ? `rotateX(${rx}deg) rotateY(${ry}deg)` : ''}`,
      transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
    };
  };

  return (
    <div
      className="relative w-full aspect-[4/3] min-[980px]:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden min-[980px]:overflow-visible cursor-pointer select-none group perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      {/* Background radial glow */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl opacity-75 pointer-events-none" />

      {/* BASE LAYER: Premium Luxury Smart Home Image */}
      <div
        className="w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative transition-transform duration-500"
        style={getLayerStyle(0.3, true)}
      >
        <img
          src={futuristicEnergyHome}
          alt="ZENCO Futuristic Energy House"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay gradients for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />

        {/* Ambient pulse particles on top of the house */}
        <div className="absolute inset-0 particles-container opacity-40 pointer-events-none" />
      </div>

      {/* SVG LAYER: Energy Flow Network Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={getLayerStyle(0.5)}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 600 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradients */}
          <defs>
            <linearGradient id="sun-beam-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="energy-flow-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Sunlight Beams striking the roof */}
          <line
            x1="100"
            y1="-50"
            x2="240"
            y2="140"
            stroke="url(#sun-beam-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <line
            x1="180"
            y1="-50"
            x2="280"
            y2="120"
            stroke="url(#sun-beam-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          />
          <line
            x1="20"
            y1="-50"
            x2="190"
            y2="150"
            stroke="url(#sun-beam-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '0.5s' }}
          />

          {/* Glowing Energy Network lines from Solar Panels to Battery/Grid */}
          <path
            d="M 280 145 C 310 180, 320 220, 360 250"
            stroke="url(#energy-flow-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 8"
            className="hero-wire-a svg-energy-glow"
          />
          <path
            d="M 290 135 C 360 140, 420 180, 450 210"
            stroke="url(#energy-flow-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8 6"
            className="hero-wire-b svg-energy-glow"
          />
          <path
            d="M 270 155 C 220 190, 180 230, 140 280"
            stroke="url(#energy-flow-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            className="hero-pipe-a svg-energy-glow"
          />

          {/* Node intersections (pulsing dots) */}
          <circle cx="280" cy="145" r="4" fill="#FBBF24" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="280" cy="145" r="3" fill="#FBBF24" />

          <circle cx="360" cy="250" r="4" fill="#10B981" className="animate-ping" style={{ animationDuration: '2.5s' }} />
          <circle cx="360" cy="250" r="3" fill="#10B981" />

          <circle cx="450" cy="210" r="4" fill="#06B6D4" className="animate-ping" style={{ animationDuration: '4s' }} />
          <circle cx="450" cy="210" r="3" fill="#06B6D4" />
        </svg>
      </div>

      {/* FLOATING TELEMETRY CARDS */}

      {/* 1. Live Savings Widget (Top Left) */}
      <div
        className="absolute top-[8%] left-0 min-[480px]:left-[-2%] z-20 w-[170px] min-[480px]:w-[190px] card-float-y-1"
        style={getLayerStyle(0.65)}
      >
        <div className="glass-card-2026 rounded-2xl p-4 transition-all duration-300">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Monthly Savings</span>
            <span className="flex h-2.5 w-2.5 items-center justify-center text-emerald-400">
              <span className="absolute h-2 w-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">₹8,750</span>
            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-400">
              <TrendingUp className="h-3 w-3" />
              +18%
            </span>
          </div>
          <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* 2. AI Energy Card (Bottom Right) */}
      <div
        className="absolute bottom-[6%] right-0 min-[480px]:right-[-2%] z-20 w-[180px] min-[480px]:w-[210px] card-float-y-2"
        style={getLayerStyle(0.8)}
      >
        <div className="glass-card-2026 rounded-2xl p-4 transition-all duration-300">
          <div className="flex gap-3 items-center">
            {/* Circular Progress Ring */}
            <div className="relative h-11 w-11 shrink-0 flex items-center justify-center">
              <svg className="h-full w-full -rotate-90">
                <circle cx="22" cy="22" r="18" fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
                <motion.circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="transparent"
                  stroke="url(#ring-grad)"
                  strokeWidth="3.5"
                  strokeDasharray="113.1"
                  initial={{ strokeDashoffset: 113.1 }}
                  animate={{ strokeDashoffset: 113.1 - (113.1 * energyProgress) / 100 }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-[9px] font-bold text-cyan-400">
                {energyProgress ? `${Math.round(energyProgress)}%` : '0%'}
              </div>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-wider text-slate-400 uppercase leading-none mb-1">AI Gen Today</p>
              <p className="text-lg font-bold font-display text-white tracking-tight leading-none">42.8 kWh</p>
              <span className="inline-flex items-center gap-1 mt-1 text-[9px] text-cyan-400 font-semibold">
                <Cpu className="h-2.5 w-2.5 animate-spin" style={{ animationDuration: '8s' }} />
                Real-time optimized
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Subsidy Card (Top Right) */}
      <div
        className="absolute top-[20%] right-0 min-[480px]:right-[-3%] z-20 w-[150px] min-[480px]:w-[170px] card-float-y-3"
        style={getLayerStyle(0.7)}
      >
        <div className="glass-card-2026 rounded-2xl p-3.5 transition-all duration-300">
          <div className="flex items-center gap-1.5 mb-1">
            <Award className="h-4 w-4 text-amber-400 animate-pulse" />
            <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">Govt Subsidy</span>
          </div>
          <p className="text-base font-bold font-display text-white tracking-tight">Up To ₹78,000</p>
          <div className="mt-1.5 inline-flex items-center gap-1 bg-amber-500/15 border border-amber-400/30 rounded-full px-2 py-0.5">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            <span className="text-[8px] font-bold tracking-wide text-amber-300 uppercase">MNRE Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}
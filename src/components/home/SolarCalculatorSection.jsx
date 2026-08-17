import { useState } from 'react';
import { Zap, Info } from 'lucide-react';

export default function SolarCalculatorSection() {
  const [units, setUnits] = useState('350');
  const [activeTab, setActiveTab] = useState('Residential');

  const numericUnits = Number(units) || 0;

  const pricingMatrix = [
    { minU: 1,    maxU: 240,  capacity: '2 kW',  popular: true,  totalCost: '₹1,60,000', subsidy: '- ₹60,000', effectiveCost: '₹1,00,000',  savings: '₹1,680/mo' },
    { minU: 241,  maxU: 360,  capacity: '3 kW',  popular: true,  totalCost: '₹2,30,000', subsidy: '- ₹78,000', effectiveCost: '₹1,52,000', savings: '₹2,520/mo' },
    { minU: 351,  maxU: 480,  capacity: '4 kW',  popular: false, totalCost: '₹2,80,000', subsidy: '- ₹78,000', effectiveCost: '₹2,02,000', savings: '₹3,360/mo' },
    { minU: 481,  maxU: 600,  capacity: '5 kW',  popular: false, totalCost: '₹3,40,000', subsidy: '- ₹78,000', effectiveCost: '₹2,62,000', savings: '₹4,200/mo' },
    { minU: 601,  maxU: 720,  capacity: '6 kW',  popular: false, totalCost: '₹3,98,000', subsidy: '- ₹78,000', effectiveCost: '₹3,20,000', savings: '₹5,040/mo' },
    { minU: 721,  maxU: 960,  capacity: '8 kW',  popular: false, totalCost: '₹5,09,000', subsidy: '- ₹78,000', effectiveCost: '₹4,31,000', savings: '₹6,720/mo' },
    { minU: 961, maxU: 99999,capacity: '10 kW', popular: false, totalCost: '₹6,05,000', subsidy: '- ₹78,000', effectiveCost: '₹5,27,000', savings: '₹8,400/mo' }
  ];

  let selectedRow = {
    capacity: '0 kW',
    popular: false,
    totalCost: '₹0',
    subsidy: '₹0',
    effectiveCost: '₹0',
    savings: '₹0/mo'
  };

  if (numericUnits > 0) {
    if (activeTab === 'Residential') {
      const matchedRow = pricingMatrix.find(
        (row) => numericUnits >= row.minU && numericUnits <= row.maxU
      );
      if (matchedRow) {
        selectedRow = matchedRow;
      } else if (numericUnits > 1200) {
        selectedRow = pricingMatrix[pricingMatrix.length - 1];
      }
    } else {
      const dynamicKw = Math.max(10, Math.ceil(numericUnits / 120));
      const calculatedCost = dynamicKw * 64900;
      selectedRow = {
        capacity: `${dynamicKw} kW`,
        popular: false,
        totalCost: `₹${calculatedCost.toLocaleString('en-IN')}`,
        subsidy: '₹0 (No Subsidy)',
        effectiveCost: `₹${calculatedCost.toLocaleString('en-IN')}`,
        savings: `₹${Math.round(numericUnits * 7.5).toLocaleString('en-IN')}/mo`
      };
    }
  }

  return (
    <section id="solar-calculator" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden text-left select-none border-t border-b border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="h-4 w-4" />
            <span>Solar Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Calculate Your Savings.
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Find out recommended system size, initial outlays, subsidy approvals, and monthly operational savings in real-time.
          </p>
        </div>

        {/* Tab Picker */}
        <div className="w-full flex justify-center mb-10">
          <div className="bg-slate-900/90 border border-white/5 p-1.5 rounded-full flex gap-1 shadow-2xl">
            {['Residential', 'Commercial', 'Industrial'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16 max-w-5xl mx-auto">
          
          {/* Inputs */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                <Zap className="h-5 w-5 fill-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">Enter Monthly Usage</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Instant computation</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Consumption</label>
                  <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">From your power bill</span>
                </div>
                <div className="relative rounded-xl shadow-md">
                  <input
                    type="number"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl py-4 px-4 text-lg font-black text-white focus:outline-none focus:border-emerald-500 transition"
                    placeholder="350"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 bg-slate-900 border border-white/5 px-2 py-1 rounded-md">
                    Units / Month
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-white/5 rounded-3xl p-6 sm:p-8 text-white shadow-xl h-full relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-6">Estimated Savings & Specs</h3>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-950 border border-white/5 rounded-2xl p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Recommended System</span>
                    <div className="text-3xl font-black text-white mt-1 flex items-baseline gap-1">
                      {selectedRow.capacity}
                      {selectedRow.popular && activeTab === 'Residential' && numericUnits > 0 && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider self-center">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="bg-slate-950 border border-white/5 rounded-2xl p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Monthly Savings</span>
                    <div className="text-3xl font-black text-emerald-400 mt-1">
                      {selectedRow.savings}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price list item breakdown */}
              <div className="space-y-3.5 text-xs font-bold border-t border-white/5 pt-5 text-slate-300">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 uppercase tracking-wider">Total Setup Cost</span>
                  <span className="text-white font-mono">{selectedRow.totalCost}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 uppercase tracking-wider">Government Subsidy</span>
                  <span className="text-emerald-400 font-mono">{selectedRow.subsidy}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-white/5">
                  <span className="text-slate-200 uppercase tracking-wider">Effective Net Cost</span>
                  <span className="text-emerald-400 font-black text-xl font-mono">{selectedRow.effectiveCost}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Pricing matrix table for residential */}
        {activeTab === 'Residential' && (
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="text-left mb-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">Residential Cost Estimations</h3>
              <p className="text-xs text-slate-400 mt-1">
                Cross-reference configurations against national framework guidelines.
              </p>
            </div>

            <div className="w-full overflow-x-auto rounded-2xl border border-white/5 shadow-2xl bg-slate-900/90">
              <table className="w-full min-w-[700px] border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-emerald-600 text-white font-bold tracking-wide">
                    <th className="p-4 uppercase tracking-wider text-[10px]">Capacity</th>
                    <th className="p-4 uppercase tracking-wider text-[10px]">Total Cost</th>
                    <th className="p-4 uppercase tracking-wider text-[10px]">Govt. Subsidy</th>
                    <th className="p-4 uppercase tracking-wider text-[10px]">Effective Cost</th>
                    <th className="p-4 uppercase tracking-wider text-[10px]">Units / Month</th>
                    <th className="p-4 uppercase tracking-wider text-[10px]">Monthly Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300 font-bold bg-slate-900/50">
                  {pricingMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-950/50 transition-colors odd:bg-slate-900/20">
                      <td className="p-4 text-white flex items-center gap-2">
                        {row.capacity}
                        {row.popular && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                      </td>
                      <td className="p-4 font-mono">{row.totalCost}</td>
                      <td className="p-4 text-emerald-400 font-mono">{row.subsidy}</td>
                      <td className="p-4 text-emerald-400 font-mono">{row.effectiveCost}</td>
                      <td className="p-4 text-slate-400 font-mono">
                        {row.maxU === 99999 ? '960+ units' : `${row.minU} - ${row.maxU} units`}
                      </td>
                      <td className="p-4 text-emerald-400 font-mono">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-start gap-2.5 text-xs text-slate-500 bg-slate-900/20 p-4 rounded-xl border border-white/5">
              <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-medium">
                Subsidy allocations apply exclusively to Residential rooftops under current policy guidelines. Actual returns will vary depending on localized sun irradiance levels and DISCOM net metering parameters.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

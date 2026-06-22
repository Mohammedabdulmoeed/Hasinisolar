import { useState } from "react";
import { ArrowLeft, Zap, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import { images } from "../data/images";

export default function SolarCalculatorPage() {
  const navigate = useNavigate();
  const [units, setUnits] = useState("350");
  const [activeTab, setActiveTab] = useState("Residential");

  const numericUnits = Number(units) || 0;

  // Fully balanced interval steps with 0 isolated and tier 1 starting precisely at 1 unit
  const pricingMatrix = [
    { minU: 1,    maxU: 240,  capacity: "2 kW",  popular: true,  totalCost: "₹1,45,000", subsidy: "- ₹60,000", effectiveCost: "₹88,770",  savings: "₹1,680/mo" },
    { minU: 241,  maxU: 350,  capacity: "3 kW",  popular: true,  totalCost: "₹2,06,400", subsidy: "- ₹78,000", effectiveCost: "₹1,33,120", savings: "₹2,520/mo" },
    { minU: 351,  maxU: 480,  capacity: "4 kW",  popular: false, totalCost: "₹2,58,500", subsidy: "- ₹78,000", effectiveCost: "₹1,88,320", savings: "₹3,360/mo" },
    { minU: 481,  maxU: 600,  capacity: "5 kW",  popular: false, totalCost: "₹3,24,500", subsidy: "- ₹78,000", effectiveCost: "₹2,51,120", savings: "₹4,200/mo" },
    { minU: 601,  maxU: 720,  capacity: "6 kW",  popular: false, totalCost: "₹3,54,300", subsidy: "- ₹78,000", effectiveCost: "₹2,82,100", savings: "₹5,040/mo" },
    { minU: 721,  maxU: 840,  capacity: "7 kW",  popular: false, totalCost: "₹3,79,200", subsidy: "- ₹78,000", effectiveCost: "₹3,05,120", savings: "₹5,880/mo" },
    { minU: 841,  maxU: 960,  capacity: "8 kW",  popular: false, totalCost: "₹4,54,400", subsidy: "- ₹78,000", effectiveCost: "₹3,82,770", savings: "₹6,720/mo" },
    { minU: 961,  maxU: 1080, capacity: "9 kW",  popular: false, totalCost: "₹5,84,100", subsidy: "- ₹78,000", effectiveCost: "₹5,10,820", savings: "₹7,560/mo" },
    { minU: 1081, maxU: 99999,capacity: "10 kW", popular: false, totalCost: "₹6,49,000", subsidy: "- ₹78,000", effectiveCost: "₹5,75,720", savings: "₹8,400/mo" }
  ];

  // REAL-TIME EVALUATION ENGINE: Default clear values for 0 state
  let selectedRow = {
    capacity: "0 kW",
    popular: false,
    totalCost: "₹0",
    subsidy: "₹0",
    effectiveCost: "₹0",
    savings: "₹0/mo"
  };

  // Run evaluations only if input units are greater than 0
  if (numericUnits > 0) {
    if (activeTab === "Residential") {
      const matchedRow = pricingMatrix.find(
        (row) => numericUnits >= row.minU && numericUnits <= row.maxU
      );
      if (matchedRow) {
        selectedRow = matchedRow;
      } else if (numericUnits > 1200) {
        selectedRow = pricingMatrix[pricingMatrix.length - 1];
      }
    } else {
      // Commercial and Industrial dynamic scaling calculator fallback rule
      const dynamicKw = Math.max(10, Math.ceil(numericUnits / 120));
      const calculatedCost = dynamicKw * 64900;
      selectedRow = {
        capacity: `${dynamicKw} kW`,
        popular: false,
        totalCost: `₹${calculatedCost.toLocaleString("en-IN")}`,
        subsidy: "₹0 (No Subsidy)",
        effectiveCost: `₹${calculatedCost.toLocaleString("en-IN")}`,
        savings: `₹${Math.round(numericUnits * 7.5).toLocaleString("en-IN")}/mo`
      };
    }
  }

  return (
    <div className="bg-[#060b18] min-h-screen text-slate-100 antialiased text-left">
      <PageHero
        title="Solar Savings Calculator"
        subtitle="Calculate your solar system size, subsidy, savings and ROI."
        image={images.On}
        breadcrumb="Home / Solar Calculator"
      />

      <section className="py-12 sm:py-20 container-custom px-4 max-w-7xl mx-auto">
        
        {/* Navigation & Controls Row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </button>

          <div className="bg-slate-900/90 border border-slate-800 p-1.5 rounded-full flex gap-1 w-full sm:w-auto shadow-lg">
            {["Residential", "Commercial", "Industrial"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-emerald-500 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Workspace Display Layout Row */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* PARAMETERS INPUT PANEL CONTAINER */}
          <div className="lg:col-span-5 bg-[#0b1329] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                <Zap className="h-5 w-5 fill-emerald-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Enter Details</h3>
                <p className="text-xs text-slate-500 font-medium">Calculations sync in real-time</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Monthly Consumption</label>
                  <span className="text-[11px] text-slate-500 font-medium">From your electricity bills</span>
                </div>
                <div className="relative rounded-xl shadow-md">
                  <input
                    type="number"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                    className="w-full bg-[#070c1a] border border-slate-700/80 rounded-xl py-4 px-4 text-lg font-black text-white focus:outline-none focus:border-emerald-500 transition"
                    placeholder="0"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded-md">
                    Units / Month
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC METRIC OUTCOME LEDGER CARD */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b1329] border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl h-full relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
              
              <div>
                <h3 className="text-xs font-black tracking-widest text-slate-500 uppercase mb-6">Estimated Potential Projections</h3>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-950/60 border border-slate-800/60 rounded-2xl p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Recommended System</span>
                    <div className="text-3xl font-black text-white mt-1 flex items-baseline gap-1">
                      {selectedRow.capacity}
                      {selectedRow.popular && activeTab === "Residential" && numericUnits > 0 && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider self-center">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="bg-slate-950/60 border border-slate-800/60 rounded-2xl p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Estimated Savings</span>
                    <div className="text-3xl font-black text-emerald-400 mt-1">
                      {selectedRow.savings}
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Cost Outlays Stack */}
              <div className="space-y-3.5 text-sm font-semibold border-t border-slate-800 pt-5 text-slate-300">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Total Structural Cost</span>
                  <span className="text-white font-bold">{selectedRow.totalCost}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Government Subsidy Allotment</span>
                  <span className="text-emerald-400 font-bold">{selectedRow.subsidy}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                  <span className="text-slate-200 font-bold">Effective Cost Outlay</span>
                  <span className="text-emerald-400 font-black text-xl">{selectedRow.effectiveCost}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PRICING SPREADSHEET LEDGER TABLE OVERVIEW */}
        <div className="mt-14">
          <div className="text-left mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Estimated Residential Savings Sheet</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Cross-reference operational configurations cleanly against verified national framework parameters.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#0b1329]">
            <table className="w-full min-w-[840px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white font-bold tracking-wide">
                  <th className="p-4 sm:p-5">Capacity</th>
                  <th className="p-4 sm:p-5">Total Cost</th>
                  <th className="p-4 sm:p-5 text-amber-300">Govt. Subsidy</th>
                  <th className="p-4 sm:p-5">Effective Cost</th>
                  <th className="p-4 sm:p-5">Units / Month</th>
                  <th className="p-4 sm:p-5 text-emerald-300">Monthly Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 font-medium bg-[#0b1329]">
                {pricingMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors odd:bg-slate-950/20">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      {row.capacity}
                      {row.popular && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5">{row.totalCost}</td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-bold">{row.subsidy}</td>
                    <td className="p-4 sm:p-5 text-blue-400 font-bold">{row.effectiveCost}</td>
                    <td className="p-4 sm:p-5 text-slate-400">
                      {row.maxU === 99999 ? "1080+ units" : `${row.minU} - ${row.maxU} units`}
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-400 font-extrabold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-start gap-2.5 text-xs text-slate-500 bg-[#0b1329]/40 p-4 rounded-xl border border-slate-800/80 max-w-4xl">
            <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Subsidy models apply to Residential installations. Local utility grid interconnections and configuration values update dynamically based on certified net metering policy bounds.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
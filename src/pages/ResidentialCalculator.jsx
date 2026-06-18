// import { useState } from "react";
// import { Settings, ShieldCheck, ArrowLeft } from "lucide-react";

// export default function SolarLandingPage() {
//   const [bill, setBill] = useState("40000");
//   const [roofArea, setRoofArea] = useState("2000");
//   const [state, setState] = useState("");
//   const [activeTab, setActiveTab] = useState("Commercial");

//   // Real-time calculation logic
//   const numericBill = Number(bill) || 0;
//   const numericRoof = Number(roofArea) || 0;

//   const systemSize = numericRoof > 0 ? Math.round(numericRoof / 100) : (numericBill ? Math.round(numericBill / 2000) : 20);
//   const estimatedCost = systemSize * 46000;
//   const yr1TaxSavings = Math.round(estimatedCost * 0.10);
//   const annualSavings = Math.round(numericBill * 12 * 0.51);
//   const savings25 = Math.round(annualSavings * 25 * 1.45);
//   const payback = systemSize > 0 ? (estimatedCost / (annualSavings || 1)).toFixed(1) : "3.8";
//   const co2 = Math.round(systemSize * 1.2);

//   return (
//     /* FIX 1: Switched overflow-x-hidden to overflow-x-auto.
//       Removed all responsive text/padding mechanics ('sm:') so it forces a native desktop appearance.
//     */
//     <div className="min-h-screen w-full bg-[#060b18] text-slate-100 p-6 font-sans antialiased text-left overflow-x-auto">
      
//       {/* FIX 2: Enforced a concrete minimum viewport constraint. 
//         This stops mobile browsers from bunching or collapsing the side-by-side split row line.
//       */}
//       <div style={{ minWidth: "1200px" }} className="max-w-7xl mx-auto block">
        
//         {/* Top Utility Nav */}
//         <div className="w-full mb-4 flex items-center justify-between">
//           <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition">
//             <ArrowLeft className="h-3 w-3" /> Back to Home
//           </button>
//         </div>

//         {/* Filter Tabs */}
//         <div className="w-full mb-8 flex justify-center gap-2">
//           {["Residential", "Commercial", "Industrial"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
//                 activeTab === tab
//                   ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
//                   : "text-slate-400 hover:text-white bg-slate-900/40 border border-slate-800"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* FIX 3: Applied locked rigid percentage block dimensions to columns.
//           This preserves structural balance regardless of device size.
//         */}
//         <div className="w-full flex flex-row flex-nowrap justify-between items-start gap-8">
          
//           {/* =========================================
//               LEFT COLUMN: PARAMETERS PANEL
//               ========================================= */}
//           <div className="w-[48%] bg-[#0b1329] border border-slate-800/80 rounded-2xl p-6 shadow-2xl shrink-0 box-border">
            
//             <div className="flex items-start gap-2 mb-5">
//               <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
//                 <Settings className="h-5 w-5" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-extrabold text-white tracking-tight">Enter Your Parameters</h2>
//                 <p className="text-xs text-slate-500 mt-0.5">Calculations adjust in real-time</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {/* Input Group 1 */}
//               <div>
//                 <div className="flex justify-between items-baseline mb-1.5">
//                   <label className="text-xs font-bold text-slate-300">Monthly Electricity Bill</label>
//                   <span className="text-[11px] text-slate-500">Typical: ₹1,00,000+</span>
//                 </div>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base font-bold text-slate-400">₹</span>
//                   <input
//                     type="number"
//                     value={bill}
//                     onChange={(e) => setBill(e.target.value)}
//                     className="w-full bg-[#070c1a] border border-slate-700/60 rounded-lg py-3 pl-8 pr-2 text-base font-bold text-white focus:outline-none focus:border-cyan-500"
//                   />
//                 </div>
//               </div>

//               {/* Input Group 2 */}
//               <div>
//                 <div className="flex justify-between items-baseline mb-1.5">
//                   <label className="text-xs font-bold text-slate-300">Available Roof Area</label>
//                   <span className="text-[11px] text-slate-500">Typical: 5k-50k sq ft</span>
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="number"
//                     value={roofArea}
//                     onChange={(e) => setRoofArea(e.target.value)}
//                     className="w-full bg-[#070c1a] border border-slate-700/60 rounded-lg py-3 px-3 text-base font-bold text-white focus:outline-none focus:border-cyan-500"
//                   />
//                   <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">sq ft</span>
//                 </div>
//               </div>

//               {/* Input Group 3 */}
//               <div>
//                 <div className="flex justify-between items-baseline mb-1.5">
//                   <label className="text-xs font-bold text-slate-300">Installation State</label>
//                 </div>
//                 <select
//                   value={state}
//                   onChange={(e) => setState(e.target.value)}
//                   className="w-full bg-[#070c1a] border border-slate-700/60 rounded-lg py-3 px-3 text-sm font-bold text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer"
//                 >
//                   <option value="">Select State (Default)</option>
//                   <option value="maharashtra">Maharashtra</option>
//                   <option value="gujarat">Gujarat</option>
//                 </select>
//               </div>

//               {/* Info Banner Box */}
//               <div className="bg-[#070c1a]/50 border border-slate-800/60 rounded-xl p-3 flex gap-2 items-start mt-4">
//                 <ShieldCheck className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
//                 <div>
//                   <h4 className="text-xs font-bold text-white">40% Tax Depreciation</h4>
//                   <p className="text-[11px] text-slate-400 leading-normal font-medium">
//                     Businesses claim accelerated depreciation on solar assets in Year 1.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* =========================================
//               RIGHT COLUMN: LEDGER OUTPUT BREAKDOWN
//               ========================================= */}
//           <div className="w-[48%] bg-transparent shrink-0 box-border">
//             <h2 className="text-2xl font-black text-white tracking-tight mb-5 pl-1">Estimated Potential</h2>

//             {/* Dashboard Highlights Cards */}
//             <div className="grid grid-cols-2 gap-4 mb-5">
//               <div className="bg-[#0b1329] border border-slate-800/80 rounded-xl p-4">
//                 <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">System Recommended</span>
//                 <div className="text-2xl font-black text-white mt-1">
//                   {systemSize} <span className="text-sm font-normal text-slate-500">kW</span>
//                 </div>
//               </div>

//               <div className="bg-[#0b1329] border border-slate-800/80 rounded-xl p-4">
//                 <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Estimated Cost</span>
//                 <div className="text-2xl font-black text-emerald-400 mt-1">
//                   ₹{estimatedCost.toLocaleString("en-IN")}
//                 </div>
//               </div>
//             </div>

//             {/* Breakdown Ledger Section */}
//             <div className="space-y-3.5 text-sm font-semibold text-slate-300 px-1">
              
//               <div className="flex justify-between items-start border-b border-slate-800/60 pb-2.5">
//                 <span className="text-slate-300">Subsidy Estimate</span>
//                 <span className="font-bold text-slate-400">₹0</span>
//               </div>

//               <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
//                 <span className="text-slate-400">Est. Yr 1 Tax Savings</span>
//                 <span className="font-bold text-blue-400">₹{yr1TaxSavings.toLocaleString("en-IN")}</span>
//               </div>

//               <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
//                 <span className="text-slate-400">Annual Savings</span>
//                 <span className="font-bold text-emerald-400">₹{annualSavings.toLocaleString("en-IN")}</span>
//               </div>

//               <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
//                 <span className="text-slate-400">25-Year Savings</span>
//                 <span className="font-bold text-emerald-400">₹{savings25.toLocaleString("en-IN")}</span>
//               </div>

//               <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
//                 <span className="text-slate-400">Payback Period</span>
//                 <span className="font-bold text-amber-500">{payback} Years</span>
//               </div>

//               <div className="flex justify-between items-center pb-2.5">
//                 <span className="text-slate-400">CO₂ Reduction</span>
//                 <span className="font-bold text-emerald-400">{co2} Tons</span>
//               </div>
//             </div>

//             {/* Action Trigger Button */}
//             {/* <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm py-3.5 rounded-xl transition shadow-md">
//               ⚡ Get Detailed Proposal
//             </button> */}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Settings, ShieldCheck, ArrowLeft } from "lucide-react";

export default function SolarLandingPage() {
  const [bill, setBill] = useState("4000");
  const [roofArea, setRoofArea] = useState("2000");
  const [state, setState] = useState("");
  const [activeTab, setActiveTab] = useState("Commercial");

  // Real-time calculation logic
  const numericBill = Number(bill) || 0;
  const numericRoof = Number(roofArea) || 0;

  // Custom bill tier logic for Residential tab calculations
  let calculatedSystemSize = 0;
  if (activeTab === "Residential") {
    if (numericBill >= 1000 && numericBill <= 1500) {
      calculatedSystemSize = 2;
    } else if (numericBill > 1500 && numericBill <= 3000) {
      calculatedSystemSize = 3;
    } else if (numericBill > 3000 && numericBill <= 4000) {
      calculatedSystemSize = 4;
    } else if (numericBill > 4000 && numericBill <= 6000) {
      calculatedSystemSize = 5;
    } else if (numericBill > 6000) {
      calculatedSystemSize = Math.ceil(numericBill / 1200); // Dynamic curve for higher bills
    } else {
      calculatedSystemSize = numericRoof > 0 ? Math.round(numericRoof / 100) : 1; // Base case minimum
    }
  } else {
    // Original fallback logic preserved for Commercial & Industrial categories
    calculatedSystemSize = numericRoof > 0 ? Math.round(numericRoof / 100) : (numericBill ? Math.round(numericBill / 2000) : 20);
  }

  const systemSize = calculatedSystemSize;
  const estimatedCost = systemSize * 46000;
  const yr1TaxSavings = Math.round(estimatedCost * 0.10);
  const annualSavings = Math.round(numericBill * 12 * 0.51);
  const savings25 = Math.round(annualSavings * 25 * 1.45);
  const payback = systemSize > 0 ? (estimatedCost / (annualSavings || 1)).toFixed(1) : "3.8";
  const co2 = Math.round(systemSize * 1.2);

  return (
    /* FIX 1: Switched overflow-x-hidden to overflow-x-auto.
       Removed all responsive text/padding mechanics ('sm:') so it forces a native desktop appearance.
    */
    <div className="min-h-screen w-full bg-[#060b18] text-slate-100 p-6 font-sans antialiased text-left overflow-x-auto">
      
      {/* FIX 2: Enforced a concrete minimum viewport constraint. 
         This stops mobile browsers from bunching or collapsing the side-by-side split row line.
      */}
      <div style={{ minWidth: "1200px" }} className="max-w-7xl mx-auto block">
        
        {/* Top Utility Nav */}
        <div className="w-full mb-4 flex items-center justify-between">
          <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition">
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="w-full mb-8 flex justify-center gap-2">
          {["Residential", "Commercial", "Industrial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-white bg-slate-900/40 border border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FIX 3: Applied locked rigid percentage block dimensions to columns.
           This preserves structural balance regardless of device size.
        */}
        <div className="w-full flex flex-row flex-nowrap justify-between items-start gap-8">
          
          {/* =========================================
              LEFT COLUMN: PARAMETERS PANEL
              ========================================= */}
          <div className="w-[48%] bg-[#0b1329] border border-slate-800/80 rounded-2xl p-6 shadow-2xl shrink-0 box-border">
            
            <div className="flex items-start gap-2 mb-5">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                <Settings className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white tracking-tight">Enter Your Parameters</h2>
                <p className="text-xs text-slate-500 mt-0.5">Calculations adjust in real-time</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Input Group 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <label className="text-xs font-bold text-slate-300">Monthly Electricity Bill</label>
                  <span className="text-[11px] text-slate-500">
                    {activeTab === "Residential" ? "Typical: ₹1,500 - ₹8,000" : "Typical: ₹1,00,000+"}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base font-bold text-slate-400">₹</span>
                  <input
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="w-full bg-[#070c1a] border border-slate-700/60 rounded-lg py-3 pl-8 pr-2 text-base font-bold text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Input Group 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <label className="text-xs font-bold text-slate-300">Available Roof Area</label>
                  <span className="text-[11px] text-slate-500">Typical: 5k-50k sq ft</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    className="w-full bg-[#070c1a] border border-slate-700/60 rounded-lg py-3 px-3 text-base font-bold text-white focus:outline-none focus:border-cyan-500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">sq ft</span>
                </div>
              </div>

              {/* Input Group 3 */}
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <label className="text-xs font-bold text-slate-300">Installation State</label>
                </div>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-[#070c1a] border border-slate-700/60 rounded-lg py-3 px-3 text-sm font-bold text-slate-300 focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="">Select State (Default)</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="gujarat">Gujarat</option>
                </select>
              </div>

              {/* Info Banner Box */}
              <div className="bg-[#070c1a]/50 border border-slate-800/60 rounded-xl p-3 flex gap-2 items-start mt-4">
                <ShieldCheck className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {activeTab === "Residential" ? "PM Surya Ghar Yojana" : "40% Tax Depreciation"}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal font-medium">
                    {activeTab === "Residential" 
                      ? "Eligible households receive up to ₹78,000 direct central government subsidy."
                      : "Businesses claim accelerated depreciation on solar assets in Year 1."}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: LEDGER OUTPUT BREAKDOWN
              ========================================= */}
          <div className="w-[48%] bg-transparent shrink-0 box-border">
            <h2 className="text-2xl font-black text-white tracking-tight mb-5 pl-1">Estimated Potential</h2>

            {/* Dashboard Highlights Cards */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-[#0b1329] border border-slate-800/80 rounded-xl p-4">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">System Recommended</span>
                <div className="text-2xl font-black text-white mt-1">
                  {systemSize} <span className="text-sm font-normal text-slate-500">kW</span>
                </div>
              </div>

              <div className="bg-[#0b1329] border border-slate-800/80 rounded-xl p-4">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Estimated Cost</span>
                <div className="text-2xl font-black text-emerald-400 mt-1">
                  ₹{estimatedCost.toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            {/* Breakdown Ledger Section */}
            <div className="space-y-3.5 text-sm font-semibold text-slate-300 px-1">
              
              <div className="flex justify-between items-start border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-300">Subsidy Estimate</span>
                <span className="font-bold text-slate-400">
                  {activeTab === "Residential" ? "Eligible" : "₹0"}
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">Est. Yr 1 Tax Savings</span>
                <span className="font-bold text-blue-400">₹{yr1TaxSavings.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">Annual Savings</span>
                <span className="font-bold text-emerald-400">₹{annualSavings.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">25-Year Savings</span>
                <span className="font-bold text-emerald-400">₹{savings25.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">Payback Period</span>
                <span className="font-bold text-amber-500">{payback} Years</span>
              </div>

              <div className="flex justify-between items-center pb-2.5">
                <span className="text-slate-400">CO₂ Reduction</span>
                <span className="font-bold text-emerald-400">{co2} Tons</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
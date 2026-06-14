import { useState } from "react";
import { motion } from "framer-motion";

export default function SolarLandingPage() {
  const [bill, setBill] = useState("");
  const [roofArea, setRoofArea] = useState("");

  // Dummy calculations (replace with real logic later)
  const systemSize = bill ? (Number(bill) / 1000).toFixed(1) : "0";
  const subsidy = bill ? Math.min(Number(bill) * 0.2, 78000).toFixed(0) : "0";
  const annualSavings = bill ? (Number(bill) * 12 * 0.7).toFixed(0) : "0";
  const savings25 = bill ? (Number(bill) * 12 * 0.7 * 25).toFixed(0) : "0";
  const payback = bill ? (Number(bill) / 3000).toFixed(1) : "0";
  const co2 = bill ? (Number(bill) * 12 * 0.0008).toFixed(1) : "0";

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Calculate Your Solar Savings Instantly
        </motion.h1>
        <p className="mt-4 text-gray-400 text-lg">
          Get your rooftop solar potential in seconds
        </p>
      </section>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT - FORM CARD (STICKY) */}
        <div className="sticky top-20 self-start">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter Details</h2>

            <label className="text-sm text-gray-300">Monthly Electricity Bill (₹)</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full mt-2 mb-4 p-3 rounded-lg bg-black/40 border border-gray-600"
              placeholder="e.g. 3000"
            />

            <label className="text-sm text-gray-300">Roof Area (sq ft)</label>
            <input
              type="number"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-gray-600"
              placeholder="e.g. 500"
            />
          </div>
        </div>

        {/* RIGHT - RESULTS CARD (STICKY) */}
        <div className="sticky top-20 self-start">
          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-2xl border border-green-400/30 shadow-xl">
            <h2 className="text-xl font-semibold mb-6">Your Solar Report</h2>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span>Recommended System</span>
                <span className="font-bold">{systemSize} kW</span>
              </div>

              <div className="flex justify-between">
                <span>Subsidy</span>
                <span className="font-bold">₹{subsidy}</span>
              </div>

              <div className="flex justify-between">
                <span>Annual Savings</span>
                <span className="font-bold">₹{annualSavings}</span>
              </div>

              <div className="flex justify-between">
                <span>25 Year Savings</span>
                <span className="font-bold">₹{savings25}</span>
              </div>

              <div className="flex justify-between">
                <span>Payback Period</span>
                <span className="font-bold">{payback} years</span>
              </div>

              <div className="flex justify-between">
                <span>CO₂ Reduction</span>
                <span className="font-bold">{co2} tons</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-16">
        <button className="px-8 py-4 bg-green-500 hover:bg-green-600 transition rounded-full font-semibold text-lg">
          Get Detailed Proposal
        </button>
      </div>

      {/* PROGRESS BAR */}
      <div className="max-w-3xl mx-auto mt-10 px-6 pb-20">
        <p className="text-center text-gray-400 mb-2">
          Solar Potential Analysis
        </p>
        <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all"
            style={{ width: bill ? "75%" : "10%" }}
          />
        </div>
      </div>

    </div>
  );
}
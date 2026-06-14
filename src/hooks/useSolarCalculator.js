import { useState, useMemo } from 'react';

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

export const STATE_FACTORS = {
  "Gujarat": 1.15,
  "Rajasthan": 1.15,
  "Andhra Pradesh": 1.08,
  "Telangana": 1.08,
  "Karnataka": 1.08,
  "Tamil Nadu": 1.08,
  "Maharashtra": 1.08,
  "Madhya Pradesh": 1.08,
  "Delhi": 1.0,
  "Haryana": 1.0,
  "Punjab": 1.0,
  "Uttar Pradesh": 1.0,
  "Bihar": 1.0,
  "West Bengal": 1.0,
  "Kerala": 1.0,
  "Jammu & Kashmir": 0.9,
  "Himachal Pradesh": 0.9,
  "Uttarakhand": 0.9,
  "Assam": 0.9
};

export function calculateSolarMetrics({ bill, roofArea, state, category }) {
  const billVal = bill ? Number(bill) : 0;
  const areaVal = roofArea ? Number(roofArea) : 0;
  const stateFactor = state ? (STATE_FACTORS[state] || 1.0) : 1.0;

  if (billVal <= 0 && areaVal <= 0) {
    return {
      systemSize: 0,
      cost: 0,
      subsidy: 0,
      annualSavings: 0,
      savings25: 0,
      payback: 0,
      co2: 0,
      taxBenefit: 0
    };
  }

  // Tariff assumptions (₹ per kWh)
  const tariff = category === 'residential' ? 7.5 : category === 'commercial' ? 10.5 : 8.5;
  // 1 kW system produces ~120 units per month on average at 1.0 factor
  const monthlyGenPerkW = 120 * stateFactor;

  // 1 kW requires ~100 sq ft
  const maxKwByArea = areaVal > 0 ? areaVal / 100 : Infinity;
  // system size needed to offset bill
  const neededKwByBill = billVal > 0 ? (billVal / tariff) / monthlyGenPerkW : 0;

  let rawSize = 0;
  if (billVal > 0 && areaVal > 0) {
    rawSize = Math.min(neededKwByBill, maxKwByArea);
  } else if (billVal > 0) {
    rawSize = neededKwByBill;
  } else {
    rawSize = maxKwByArea;
  }

  // Bounds by category
  if (category === 'residential') {
    rawSize = Math.max(1, Math.min(15, rawSize));
  } else if (category === 'commercial') {
    rawSize = Math.max(5, Math.min(100, rawSize));
  } else if (category === 'industrial') {
    rawSize = Math.max(20, Math.min(1000, rawSize));
  }

  const systemSize = parseFloat(rawSize.toFixed(1));

  // Cost assumptions (₹ per kW)
  const costPerKw = category === 'residential' ? 62000 : category === 'commercial' ? 53000 : 46000;
  const cost = Math.round(systemSize * costPerKw);

  // Subsidy calculations (PM Surya Ghar Muft Bijli Yojana for Residential)
  let subsidy = 0;
  if (category === 'residential') {
    if (systemSize >= 3) {
      subsidy = 78000;
    } else if (systemSize >= 2) {
      subsidy = 60000;
    } else if (systemSize >= 1) {
      subsidy = 30000;
    } else if (systemSize > 0) {
      subsidy = Math.round(systemSize * 30000);
    }
  }

  // Tax Benefits (Accelerated Depreciation of 40% for Commercial/Industrial)
  // Assume a corporate tax bracket of 25% for simplified estimation
  const taxBenefit = (category === 'commercial' || category === 'industrial')
    ? Math.round(cost * 0.40 * 0.25)
    : 0;

  // Savings (monthly savings based on generated units, limited by the input bill if roof area restricts production)
  const calculatedMonthlySavings = systemSize * monthlyGenPerkW * tariff;
  const annualSavings = Math.round(calculatedMonthlySavings * 12);

  // 25-Year savings factoring in a modest 3% annual utility tariff hike
  let savings25 = 0;
  let runningSavings = annualSavings;
  for (let year = 1; year <= 25; year++) {
    savings25 += runningSavings;
    runningSavings *= 1.03; // 3% inflation per year
  }
  savings25 = Math.round(savings25);

  // Payback period in years
  const netCost = cost - subsidy;
  const payback = annualSavings > 0 ? parseFloat((netCost / annualSavings).toFixed(1)) : 0;

  // CO2 reduction: ~1.2 tons per kW per year
  const co2 = parseFloat((systemSize * 1.2 * stateFactor).toFixed(1));

  return {
    systemSize,
    cost,
    subsidy,
    annualSavings,
    savings25,
    payback,
    co2,
    taxBenefit
  };
}

export function useSolarCalculator(category) {
  const [bill, setBill] = useState('');
  const [roofArea, setRoofArea] = useState('');
  const [state, setState] = useState('');

  const metrics = useMemo(() => {
    return calculateSolarMetrics({ bill, roofArea, state, category });
  }, [bill, roofArea, state, category]);

  return {
    bill,
    setBill,
    roofArea,
    setRoofArea,
    state,
    setState,
    ...metrics
  };
}

import { useState } from 'react';
import { Button } from '../ui/Button';

export function ROICalculator() {
  const [budget, setBudget] = useState(5); // Millions
  const [duration, setDuration] = useState(24); // Months

  // Simple Logic based on spec: Savings = (Budget / 12 * Duration) * 0.5
  const estimatedSavings = ((budget / 12) * duration * 0.5).toFixed(1);
  const timeSaved = Math.round(duration * 0.31);

  return (
    <section className="py-24 bg-brand-light" id="roi">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Calculate Your Impact</h2>
              <p className="text-slate-600 mb-8">
                See how much you can save by switching to Qassas autonomous exploration.
              </p>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Exploration Budget ($M): <span className="text-brand-accent font-bold">${budget}M</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Duration (Months): <span className="text-brand-accent font-bold">{duration} mo</span>
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="60"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm">
                *Estimates based on average savings of 50% in logistics and 30% in time reduction.
              </div>
            </div>

            <div className="bg-brand-900 p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-xl font-medium text-slate-400 mb-8">Projected Results</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Estimated Cost Savings</p>
                  <p className="text-5xl font-bold text-brand-accent">${estimatedSavings}M</p>
                </div>
                
                <div className="w-full h-px bg-white/10" />
                
                <div>
                  <p className="text-sm text-slate-400 mb-1">Time Saved</p>
                  <p className="text-4xl font-bold text-white">{timeSaved} Months</p>
                </div>
              </div>

              <Button className="mt-10 w-full">Download Full Report</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Spline from '@splinetool/react-spline';
import { Car, Sparkles } from 'lucide-react';

export default function Hero({ onOpenLead }) {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-sm text-slate-200">Sleek. Luxurious. Trustworthy.</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            AutoPrime Dealers
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200">
            New and used cars from Toyota, Honda, Ford, and Tesla. Premium service with unbeatable prices.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input aria-label="Search by brand or model" placeholder="Brand or Model" className="md:col-span-1 w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder-slate-500" />
            <input aria-label="Price range" placeholder="Max Price ($)" type="number" className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder-slate-500" />
            <input aria-label="Year" placeholder="Year" type="number" className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder-slate-500" />
            <button onClick={onOpenLead} className="w-full px-4 py-3 rounded-md bg-red-600 hover:bg-red-700 font-semibold">Search Inventory</button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-2"><Car className="w-4 h-4 text-red-500"/> Certified Dealer</span>
            <span className="inline-flex items-center gap-2"><Car className="w-4 h-4 text-red-500"/> Financing Available</span>
            <span className="inline-flex items-center gap-2"><Car className="w-4 h-4 text-red-500"/> Limited Stock</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onOpenLead} className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 font-semibold">Schedule a Test Drive</button>
            <a href="#inventory" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 border border-white/10">Explore Inventory</a>
          </div>
        </div>
      </div>
    </section>
  );
}

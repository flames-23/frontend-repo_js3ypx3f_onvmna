import { useMemo, useState } from 'react';
import { ChevronDown, Gauge, Fuel, Battery, Star } from 'lucide-react';

const carsData = [
  { id: 1, brand: 'Toyota', model: 'Camry XSE', year: 2023, price: 30990, mileage: 12000, fuel: 'Gasoline', mpg: 33, img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop', featured: true },
  { id: 2, brand: 'Tesla', model: 'Model 3 Long Range', year: 2024, price: 42990, mileage: 500, fuel: 'Electric', mpg: 120, img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop', featured: true },
  { id: 3, brand: 'Honda', model: 'Civic Touring', year: 2022, price: 23990, mileage: 22000, fuel: 'Gasoline', mpg: 36, img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop', featured: false },
  { id: 4, brand: 'Ford', model: 'F-150 Lariat', year: 2021, price: 38990, mileage: 30000, fuel: 'Gasoline', mpg: 22, img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop', featured: false },
  { id: 5, brand: 'Toyota', model: 'RAV4 Hybrid', year: 2023, price: 34950, mileage: 8000, fuel: 'Hybrid', mpg: 41, img: 'https://images.unsplash.com/photo-1517363898875-737dfb4763fa?q=80&w=1200&auto=format&fit=crop', featured: true },
  { id: 6, brand: 'Honda', model: 'Accord Sport', year: 2023, price: 29950, mileage: 10000, fuel: 'Gasoline', mpg: 31, img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop', featured: false },
];

export default function Inventory({ onOpenLead }) {
  const [filters, setFilters] = useState({ brand: 'All', sort: 'price-asc', fuel: 'All' });

  const brands = ['All', 'Toyota', 'Honda', 'Ford', 'Tesla'];
  const fuels = ['All', 'Gasoline', 'Hybrid', 'Electric'];

  const filtered = useMemo(() => {
    let list = carsData.filter((c) => (filters.brand === 'All' ? true : c.brand === filters.brand));
    list = list.filter((c) => (filters.fuel === 'All' ? true : c.fuel === filters.fuel));
    if (filters.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (filters.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (filters.sort === 'mileage-asc') list.sort((a, b) => a.mileage - b.mileage);
    return list;
  }, [filters]);

  return (
    <section id="inventory" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Explore Our Inventory</h2>
            <p className="text-slate-600 mt-1">Find your perfect match from our curated selection.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <select aria-label="Brand filter" className="px-3 py-2 rounded-md border border-slate-200" value={filters.brand} onChange={(e)=>setFilters(f=>({...f, brand:e.target.value}))}>
              {brands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <select aria-label="Fuel filter" className="px-3 py-2 rounded-md border border-slate-200" value={filters.fuel} onChange={(e)=>setFilters(f=>({...f, fuel:e.target.value}))}>
              {fuels.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <select aria-label="Sort" className="px-3 py-2 rounded-md border border-slate-200" value={filters.sort} onChange={(e)=>setFilters(f=>({...f, sort:e.target.value}))}>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="mileage-asc">Mileage: Low to High</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(car => (
            <div key={car.id} className="bg-white rounded-lg shadow ring-1 ring-slate-200 overflow-hidden">
              <div className="relative">
                <img src={car.img} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover" loading="lazy" />
                {car.featured && <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600 text-white px-2 py-1 rounded">Limited Stock</span>}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{car.year} {car.brand} {car.model}</h3>
                  <span className="text-red-600 font-bold">${car.price.toLocaleString()}</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-1"><Gauge className="w-4 h-4"/> {car.mileage.toLocaleString()} mi</div>
                  <div className="flex items-center gap-1">{car.fuel === 'Electric' ? <Battery className="w-4 h-4"/> : <Fuel className="w-4 h-4"/>} {car.fuel}</div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-500"/> {car.mpg} MPG</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button onClick={onOpenLead} className="flex-1 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">View Details</button>
                  <button onClick={onOpenLead} className="px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50">Compare</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

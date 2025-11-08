import { Star, ShieldCheck, CreditCard, Quote, Calculator, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Extras({ onOpenLead }) {
  return (
    <>
      <section className="bg-white py-16" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">What Customers Say</h2>
          <p className="text-slate-600 mt-1">Real stories from happy drivers.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-amber-500" />)}
                </div>
                <p className="text-slate-700">“The buying experience was seamless and transparent. Highly recommend AutoPrime!”</p>
                <div className="mt-4 text-sm text-slate-500">— Alex M.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16" id="financing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Financing Calculator</h2>
              <p className="text-slate-300 mt-2">Estimate your monthly payments in seconds.</p>
              <Calculator className="w-10 h-10 mt-6 text-red-500"/>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <input type="number" placeholder="Price ($)" className="px-3 py-2 rounded-md bg-white text-slate-900" />
                <input type="number" placeholder="Down Payment ($)" className="px-3 py-2 rounded-md bg-white text-slate-900" />
                <input type="number" placeholder="APR (%)" className="px-3 py-2 rounded-md bg-white text-slate-900" />
                <input type="number" placeholder="Term (months)" className="px-3 py-2 rounded-md bg-white text-slate-900" />
              </div>
              <button onClick={onOpenLead} className="mt-4 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 font-semibold">Apply for Financing</button>
            </div>
            <div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-red-500"/>
                  <h3 className="mt-2 font-semibold">Certified Dealer</h3>
                  <p className="text-sm text-slate-300">Fully inspected vehicles with warranty options.</p>
                </div>
                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <CreditCard className="w-6 h-6 text-red-500"/>
                  <h3 className="mt-2 font-semibold">Flexible Payments</h3>
                  <p className="text-sm text-slate-300">Competitive rates and tailored plans.</p>
                </div>
                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <Quote className="w-6 h-6 text-red-500"/>
                  <h3 className="mt-2 font-semibold">Transparent Pricing</h3>
                  <p className="text-sm text-slate-300">No hidden fees, ever.</p>
                </div>
                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <Star className="w-6 h-6 text-red-500"/>
                  <h3 className="mt-2 font-semibold">Top-rated Service</h3>
                  <p className="text-sm text-slate-300">Trusted by thousands of customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold text-slate-900">AutoPrime Dealers</h4>
              <p className="text-sm text-slate-600 mt-2">123 Prime Ave, Motor City, USA</p>
              <p className="text-sm text-slate-600">Mon-Sat: 9am - 7pm</p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">Quick Links</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a href="#inventory" className="hover:text-red-600">Inventory</a></li>
                <li><a href="#financing" className="hover:text-red-600">Financing</a></li>
                <li><a href="#about" className="hover:text-red-600">About</a></li>
                <li><a href="#blog" className="hover:text-red-600">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">Newsletter</h5>
              <p className="text-sm text-slate-600 mt-2">Join our mailing list for exclusive offers.</p>
              <div className="mt-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-slate-500"/>
                <input placeholder="Your email" className="flex-1 px-3 py-2 rounded-md border border-slate-200" />
              </div>
              <button onClick={onOpenLead} className="mt-3 px-4 py-2 rounded-md bg-red-600 text-white">Subscribe</button>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">Follow Us</h5>
              <div className="mt-3 flex items-center gap-3 text-slate-600">
                <a aria-label="Facebook" href="#" className="hover:text-red-600"><Facebook/></a>
                <a aria-label="Instagram" href="#" className="hover:text-red-600"><Instagram/></a>
                <a aria-label="X" href="#" className="hover:text-red-600"><Twitter/></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} AutoPrime Dealers. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}

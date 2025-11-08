import { useState } from 'react';
import { X, Mail, Phone, CarFront } from 'lucide-react';

export default function LeadCapture({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', model: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div aria-hidden={!open} className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Lead Capture">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-slate-900">Get a Quote / Book Test Drive</h3>
          <button onClick={onClose} aria-label="Close" className="p-2 rounded hover:bg-slate-100"><X/></button>
        </div>
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Full Name</label>
                <input required className="w-full px-3 py-2 rounded-md border border-slate-200" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email</label>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500"/>
                  <input required type="email" className="flex-1 px-3 py-2 rounded-md border border-slate-200" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Phone</label>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500"/>
                  <input required type="tel" className="flex-1 px-3 py-2 rounded-md border border-slate-200" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Preferred Model</label>
                <div className="flex items-center gap-2">
                  <CarFront className="w-4 h-4 text-slate-500"/>
                  <input className="flex-1 px-3 py-2 rounded-md border border-slate-200" value={form.model} onChange={(e)=>setForm({...form, model:e.target.value})} placeholder="e.g., Toyota Camry" />
                </div>
              </div>
              <button type="submit" className="w-full px-4 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700">Submit</button>
              <p className="text-xs text-slate-500">By submitting, you agree to receive communications via email/SMS. Opt-out anytime.</p>
            </form>
          ) : (
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 grid place-items-center mx-auto">✓</div>
              <h4 className="text-lg font-semibold">Thank you!</h4>
              <p className="text-slate-600">Our sales team will reach out shortly to help you with your request.</p>
              <button onClick={onClose} className="px-4 py-2 rounded-md bg-slate-900 text-white">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

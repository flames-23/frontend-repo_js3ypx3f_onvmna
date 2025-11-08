import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import Extras from './components/Extras';
import LeadCapture from './components/LeadCapture';

function App() {
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <div className="font-inter text-slate-900">
      <Navbar onOpenContact={() => setLeadOpen(true)} />
      <main>
        <Hero onOpenLead={() => setLeadOpen(true)} />
        <Inventory onOpenLead={() => setLeadOpen(true)} />
        <Extras onOpenLead={() => setLeadOpen(true)} />
      </main>
      <LeadCapture open={leadOpen} onClose={() => setLeadOpen(false)} />

      {/* Analytics placeholders */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `}} />
    </div>
  );
}

export default App;

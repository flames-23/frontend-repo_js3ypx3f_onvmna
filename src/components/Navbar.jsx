import { useState } from 'react';
import { Menu, X, ChevronDown, Search, User, Phone } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => setOpen((v) => !v);

  const MenuItem = ({ label, children }) => (
    <div className="relative">
      <button
        className="flex items-center gap-1 px-3 py-2 hover:text-red-600 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={activeMenu === label}
        onMouseEnter={() => setActiveMenu(label)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <span>{label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {activeMenu === label && (
        <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-20" role="menu" onMouseEnter={() => setActiveMenu(label)} onMouseLeave={() => setActiveMenu(null)}>
          <div className="p-2 text-sm text-slate-700">
            {children}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200" id="home">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 grid place-items-center text-white font-bold">AP</div>
              <span className="font-extrabold tracking-tight text-slate-900 text-lg">AutoPrime Dealers</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-700">
            <a className="px-3 py-2 hover:text-red-600" href="#home">Home</a>
            <MenuItem label="Inventory">
              <a className="block px-3 py-2 hover:bg-slate-50 rounded" href="#inventory">All Cars</a>
              <a className="block px-3 py-2 hover:bg-slate-50 rounded" href="#inventory">New Cars</a>
              <a className="block px-3 py-2 hover:bg-slate-50 rounded" href="#inventory">Used Cars</a>
              <a className="block px-3 py-2 hover:bg-slate-50 rounded" href="#inventory">Electric Vehicles</a>
            </MenuItem>
            <MenuItem label="Services">
              <a className="block px-3 py-2 hover:bg-slate-50 rounded" href="#services">Maintenance</a>
              <a className="block px-3 py-2 hover:bg-slate-50 rounded" href="#services">Parts</a>
              <a className="block px-3 py-2 hover:bg-slate-50 rounded" href="#services">Warranty</a>
            </MenuItem>
            <a className="px-3 py-2 hover:text-red-600" href="#financing">Financing</a>
            <a className="px-3 py-2 hover:text-red-600" href="#about">About Us</a>
            <a className="px-3 py-2 hover:text-red-600" href="#blog">Blog/News</a>
            <a className="px-3 py-2 hover:text-red-600" href="#contact">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-slate-100">
              <Search className="w-5 h-5" />
            </button>
            <a href="#garage" className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 hover:border-slate-300">
              <User className="w-4 h-4" />
              <span>My Garage</span>
            </a>
            <a href="tel:+1234567890" className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-red-600 text-white hover:bg-red-700">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 space-y-2 border-t border-slate-200">
            <a className="block px-2 py-2" href="#home" onClick={toggleMenu}>Home</a>
            <a className="block px-2 py-2" href="#inventory" onClick={toggleMenu}>Inventory</a>
            <a className="block px-2 py-2" href="#services" onClick={toggleMenu}>Services</a>
            <a className="block px-2 py-2" href="#financing" onClick={toggleMenu}>Financing</a>
            <a className="block px-2 py-2" href="#about" onClick={toggleMenu}>About Us</a>
            <a className="block px-2 py-2" href="#blog" onClick={toggleMenu}>Blog/News</a>
            <button className="w-full text-left px-2 py-2" onClick={() => { toggleMenu(); onOpenContact?.(); }}>Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}

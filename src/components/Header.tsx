import { useState } from 'react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/874ab2e051e3c3e4fc76ecc3e1e4af1d4a7f626f.png';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Careers/Partnerships', to: '/careers' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="RE-SPORTS" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-[#0A2463]' : 'text-gray-600 hover:text-[#0A2463]'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden md:flex bg-[#FF6B35] hover:bg-[#FF5722] text-white">
            <Link to="/contact">Partner With Us</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-lg text-gray-700 py-2"
              >
                {link.label}
              </Link>
            ))}

            <div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 bg-[#FF6B35] text-white px-4 py-2 rounded-md"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

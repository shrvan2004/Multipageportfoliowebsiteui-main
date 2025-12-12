import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/874ab2e051e3c3e4fc76ecc3e1e4af1d4a7f626f.png';
import { Link } from 'react-router-dom';

export function Footer() {
  const quickLinks = [
    'About Us',
    'Our Services',
    'Programs',
    'Portfolio',
    'Blog',
    'Contact'
  ];

  const services = [
    'Curriculum Development',
    'Professional Coaching',
    'Facility Management',
    'Tournament Organization',
    'Athletic Development',
    'Partnerships'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#0A2463] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src={logoImage} 
              alt="RE-SPORTS" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building sporting excellence through comprehensive education, 
              professional coaching, and innovative management solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link === 'About Us' ? (
                    <Link to="/about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">{link}</Link>
                  ) : link === 'Our Services' ? (
                    <Link to="/services" className="text-gray-300 hover:text-[#FF6B35] transition-colors">{link}</Link>
                  ) : link === 'Programs' ? (
                    <Link to="/programs" className="text-gray-300 hover:text-[#FF6B35] transition-colors">{link}</Link>
                  ) : link === 'Portfolio' ? (
                    <Link to="/portfolio" className="text-gray-300 hover:text-[#FF6B35] transition-colors">{link}</Link>
                  ) : link === 'Blog' ? (
                    <Link to="/blog" className="text-gray-300 hover:text-[#FF6B35] transition-colors">{link}</Link>
                  ) : link === 'Contact' ? (
                    <Link to="/contact" className="text-gray-300 hover:text-[#FF6B35] transition-colors">{link}</Link>
                  ) : (
                    <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">{link}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const slug = service
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .trim()
                  .replace(/\s+/g, '-');

                return (
                  <li key={index}>
                    <Link to={`/services#${slug}`} className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                      {service}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Sports Avenue, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                <span className="text-gray-300">info@re-sports.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 RE-SPORTS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

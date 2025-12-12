import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link to="/" className="text-blue-600">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-600">About</Link>
        </li>
        <li>
          <Link to="/services" className="text-blue-600">Services</Link>
        </li>
        <li>
          <Link to="/portfolio" className="text-blue-600">Portfolio</Link>
        </li>
        <li>
          <Link to="/careers" className="text-blue-600">Careers</Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-600">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="mb-6">Page not found.</p>
        <Link to="/" className="text-[#FF6B35] underline">Go back home</Link>
      </div>
    </div>
  );
}

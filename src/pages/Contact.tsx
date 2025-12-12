import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8">Choose the appropriate contact channel below.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Customer & General Inquiries</h2>
          <p className="text-gray-600 mb-4">Questions about services, bookings or support.</p>
          <Link to="/contact/customer" className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-md">Contact Support</Link>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Careers & Professional Partnerships</h2>
          <p className="text-gray-600 mb-4">Apply for roles or propose partnerships with your organization.</p>
          <Link to="/contact/career" className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-md">Contact Careers</Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Programs</h1>
      <p className="text-gray-700 mb-6">Explore our development programs tailored for athletes, schools, and communities.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Youth Development Programs</li>
        <li>School Partnerships</li>
        <li>Community Outreach Programs</li>
      </ul>
      <p className="mt-6">
        Interested? <Link to="/contact" className="text-blue-600">Contact us</Link> to learn more.
      </p>
    </div>
  );
}

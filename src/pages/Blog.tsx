import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700 mb-6">Our latest news, updates, and stories about sport development and events.</p>
      <p className="text-gray-700">No posts yet — check back soon.</p>
      <p className="mt-6">Want to contribute? <Link to="/contact" className="text-blue-600">Get in touch</Link>.</p>
    </div>
  );
}

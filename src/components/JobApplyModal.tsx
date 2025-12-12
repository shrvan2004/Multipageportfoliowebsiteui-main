import React from 'react';
import { X } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function JobApplyModal({ open, onClose, jobTitle }: Props) {
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      jobTitle,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const resp = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await resp.json();
      alert(json.message || 'Application submitted');
      onClose();
    } catch (err) {
      alert('Submission failed');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg max-w-lg w-full mx-4 p-6">
        <button className="absolute top-4 right-4 text-gray-600" onClick={onClose} aria-label="Close">
          <X />
        </button>

        <h3 className="text-2xl font-semibold mb-2">Apply: {jobTitle}</h3>
        <p className="text-sm text-gray-600 mb-4">Fill in your details and we'll get back to you.</p>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input name="name" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" required type="email" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" className="w-full border rounded-md px-3 py-2 h-28" />
          </div>

          <div className="flex justify-end">
            <button type="button" className="mr-2 px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-[#FF6B35] text-white px-4 py-2 rounded-md">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
}

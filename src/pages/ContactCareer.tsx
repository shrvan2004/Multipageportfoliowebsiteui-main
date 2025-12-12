import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  position?: string;
  message: string;
  resume?: FileList;
};

export default function ContactCareer() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const payload = { ...data };
      // Note: resume file handling would require multipart upload; keeping simple here.
      const resp = await fetch('/api/contact/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await resp.json();
      alert(json.message || 'Submitted');
      reset();
    } catch (err) {
      alert('Submission failed');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact — Careers & Partnerships</h1>
      <p className="mb-8">If you're a professional looking for collaboration or career opportunities, apply here.</p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input {...register('name', { required: 'Name required' })} className="w-full border rounded-md px-3 py-2" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input {...register('email', { required: 'Email required' })} className="w-full border rounded-md px-3 py-2" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone (optional)</label>
          <input {...register('phone')} className="w-full border rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Position (optional)</label>
          <input {...register('position')} className="w-full border rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Resume (optional)</label>
          <input type="file" {...register('resume')} className="w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea {...register('message', { required: 'Message required' })} className="w-full border rounded-md px-3 py-2 h-32" />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <div>
          <button type="submit" disabled={isSubmitting} className="bg-[#FF6B35] text-white px-4 py-2 rounded-md">{isSubmitting ? 'Sending...' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
}

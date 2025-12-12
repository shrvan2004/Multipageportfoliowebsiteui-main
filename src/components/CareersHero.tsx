import { Briefcase, Users } from 'lucide-react';

export function CareersHero() {
  return (
    <section className="relative pt-20 bg-[#1A1A1A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-[#FF6B35] to-transparent" />
            <div className="w-12 h-12 rounded-full bg-[#0A2463]/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#0A2463]" />
            </div>
          </div>

          <h1 className="text-white mb-6">
            Join Our Team & Grow With Us
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Whether you're a passionate coach looking to make an impact or an institution 
            seeking to enhance your sports programs, RE-SPORTS offers exceptional opportunities 
            for collaboration and growth.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FF6B35]/50 transition-colors">
              <Briefcase className="w-8 h-8 text-[#FF6B35] mb-4 mx-auto" />
              <h3 className="text-white mb-2">For Coaches & Teachers</h3>
              <p className="text-gray-400 text-sm">
                Join our team of expert professionals
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#0A2463]/50 transition-colors">
              <Users className="w-8 h-8 text-[#0A2463] mb-4 mx-auto" />
              <h3 className="text-white mb-2">For Institutions</h3>
              <p className="text-gray-400 text-sm">
                Partner with us to elevate your programs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

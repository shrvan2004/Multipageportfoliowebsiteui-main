import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-20 bg-gradient-to-br from-[#0A2463] to-[#0D3B66] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1551390415-0de411440ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjZWxlYnJhdGlvbiUyMHN0YWRpdW18ZW58MXx8fHwxNzY0NTMzNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FF6B35]/20 rounded-full border border-[#FF6B35]">
            <span className="text-[#FF6B35]">Excellence in Sports Education</span>
          </div>
          
          <h1 className="text-white mb-6">
            Empowering Athletes Through World-Class Education & Management
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            We transform sports education with comprehensive programs, expert coaching, 
            and professional management services that nurture talent and build champions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF5722] text-white"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-4xl text-[#FF6B35] mb-2">500+</div>
              <div className="text-gray-300">Athletes Trained</div>
            </div>
            <div>
              <div className="text-4xl text-[#FF6B35] mb-2">50+</div>
              <div className="text-gray-300">Partner Institutions</div>
            </div>
            <div>
              <div className="text-4xl text-[#FF6B35] mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

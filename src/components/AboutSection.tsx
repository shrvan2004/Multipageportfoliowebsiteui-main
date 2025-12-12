import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Best in Professionalism',
      description: 'We are the most reliable brand with emergency replacement support to maintain professionalism in schools.'
    },
    {
      icon: Users,
      title: 'Multi-Sport Expertise',
      description: 'Our coaches have knowledge of 5+ games, enabling students to practice various sports disciplines.'
    },
    {
      icon: Award,
      title: 'Holistic Development',
      description: 'We help students develop motor fitness, overcome stress, and prepare physically and mentally for success.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Excellence',
      description: 'Best in financial terms with age-appropriate training practices and the most reliable brand reputation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606470542032-a9caa0be6e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb2FjaGluZyUyMHlvdXRofGVufDF8fHx8MTc2NDU4NzgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sports Coaching" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-[#FF6B35] text-white p-6 rounded-xl shadow-2xl">
              <div className="text-4xl mb-1">20+</div>
              <div className="text-sm">Partner Schools</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-[#F5F5F5] rounded-full">
              <span className="text-[#0A2463]">About RE-SPORTS</span>
            </div>
            
            <h2 className="text-[#0A2463] mb-6">
              Leading the Future of Sports Education
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              RE-SPORTS was formed to facilitate students in the field of sports during an era 
              when mobile phones dominate daily life. We provide real-world sports experiences, 
              helping students move from virtual gaming to actual physical activities. Our comprehensive 
              approach includes not just game knowledge, but also motor fitness development, nutrition 
              guidance, stress management, injury prevention, and tournament preparation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#0A2463] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { GraduationCap, Users, Building2, Trophy, Calendar, Briefcase, Heart, Brain, Apple, Shield, Activity, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Activity,
      title: 'Motor Fitness Development',
      description: 'Developing motor fitness ability and motor skills through specialized training programs designed for different age groups.',
      color: '#FF6B35'
    },
    {
      icon: Apple,
      title: 'Nutrition & Diet Planning',
      description: 'Proper balanced diet guidance and comprehensive knowledge about nutrition to fuel athletic performance.',
      color: '#0A2463'
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description: 'Teaching athletes how to protect themselves from getting injured and proper recovery techniques.',
      color: '#FF6B35'
    },
    {
      icon: Brain,
      title: 'Mental Wellness',
      description: 'Stress management techniques and mental preparation for tournaments and competitions.',
      color: '#0A2463'
    },
    {
      icon: Heart,
      title: 'Health & Disease Prevention',
      description: 'Ways to be disease free and maintain overall health through sports and physical activities.',
      color: '#FF6B35'
    },
    {
      icon: Zap,
      title: 'Coordinative Abilities',
      description: 'Recreational activities designed to develop motor skills and coordinative abilities of students.',
      color: '#0A2463'
    },
    {
      icon: Calendar,
      title: 'Sports Event Management',
      description: 'Organizing best sports day and annual day celebrations in budget-friendly packages.',
      color: '#FF6B35'
    },
    {
      icon: Trophy,
      title: 'Multi-Sport Training',
      description: 'Expert coaches with knowledge of 5+ games allowing students to practice many sports disciplines.',
      color: '#0A2463'
    },
    {
      icon: Briefcase,
      title: 'Institutional Partnerships',
      description: 'Collaborative programs for schools with emergency replacement support to maintain professionalism.',
      color: '#FF6B35'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-white rounded-full">
            <span className="text-[#0A2463]">Our Services</span>
          </div>
          
          <h2 className="text-[#0A2463] mb-6">
            Comprehensive Sports Education Solutions
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            From grassroots development to professional training, we offer a complete suite 
            of services designed to nurture athletic excellence at every level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const slug = service.title
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, '')
              .trim()
              .replace(/\s+/g, '-');

            return (
              <Card
                key={index}
                id={slug}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div
                    className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>

                  <h3 className="text-[#0A2463] mb-3">{service.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  <div
                    className="mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    style={{ color: service.color }}
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
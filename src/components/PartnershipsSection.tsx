import { Building2, Users, Award, TrendingUp } from 'lucide-react';
import eventPhoto from "figma:asset/dbfb0e2b0c8b57b1030300846871f92d5d855492.png";

export function PartnershipsSection() {
  const stats = [
    {
      icon: Building2,
      value: '20+',
      label: 'Partner Schools'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Students Trained'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Events Organized'
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: 'Client Satisfaction'
    }
  ];

  const partners = [
    {
      name: 'St. Thomas English School & Junior College',
      type: 'Premium Partnership',
      description: 'Long-term collaboration providing comprehensive sports education and event management.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2463] to-[#0A2463]/90 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-white/10 rounded-full">
            <span className="text-white">Our Partners</span>
          </div>
          
          <h2 className="text-white mb-6">
            Trusted by Leading Educational Institutions
          </h2>
          
          <p className="text-white/80 leading-relaxed">
            We partner with schools and colleges to deliver exceptional sports education, 
            event management, and comprehensive athletic development programs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B35] mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partnership Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={eventPhoto} 
              alt="School Partnership Event" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-white mb-6">Featured Partnership</h3>
            
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">{partner.name}</h4>
                    <div className="inline-block px-3 py-1 bg-[#FF6B35] rounded-full text-sm mb-3">
                      {partner.type}
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Benefits List */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-white/80">Emergency replacement support to maintain professionalism</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-white/80">Monthly fitness testing for all students</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-white/80">Budget-friendly sports day and annual day celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

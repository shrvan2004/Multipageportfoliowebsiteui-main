import whyChooseImage from "figma:asset/82f698fe779de427fb7ba7086baedcdb5a96aa82.png";
import { CheckCircle2 } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    "We are the best in means of professionalism.",
    "In case of emergency our company provides replacement, to maintain the professionalism in the school.",
    "Our teachers have knowledge of more than 5 games so that the students could practice many sports.",
    "Our company is best in financial terms and we are most reliable brand.",
    "Our company provides different kinds of training practices for different age-groups.",
    "Re-sports just don't give knowledge about games but also helps them in:",
  ];

  const additionalBenefits = [
    "Developing motor fitness ability (motor skills).",
    "Ways to be disease free.",
    "How to overcome stress?",
    "Proper balanced diet and knowledge about nutrition.",
    "How they can protect their themselves from getting injured.",
    "Preparing them physically and mentally for tournaments.",
    "Help them to maintain their daily routine and be disciplined.",
  ];

  const services = [
    "Our company provides students recreational activities as in to develop Motor Skills and coordinative abilities of the students.",
    "We provide many more services to the schools and students such as monthly fitness test for the students.",
    "Our company also work in sports event management in which we help schools in organizing best sports day and annual day celebration in the budget.",
  ];

  return (
    <section className="py-20 bg-[#F5F5F5] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={whyChooseImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-white rounded-full">
            <span className="text-[#0A2463]">Our Commitment</span>
          </div>
          
          <h2 className="text-[#0A2463] mb-6">
            WHY CHOOSE RE-SPORTS?
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            The company "Re-Sports" was basically formed to facilitate the students in the field of sports. 
            Now a days the students are using mobile in their daily life, they play games in phone, they take 
            help of mobile for clearing doubts, for regular coaching classes they use phone, and the biggest 
            concern is that they only have online friends and no real one to play, enjoy. The reason for choosing us is:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Main Reasons */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-[#0A2463] mb-6">Core Values</h3>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>

            {/* Additional Benefits */}
            <div className="mt-6 pl-8 border-l-4 border-[#FF6B35]">
              <div className="space-y-3">
                {additionalBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <span className="text-[#FF6B35]">✓</span>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0A2463] to-[#0A2463]/80 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="mb-6">Our Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                      <span>{index + 1}</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#FF6B35] rounded-2xl p-8 shadow-lg text-white">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl mb-2">5+</div>
                  <div className="text-white/90">Sports Disciplines</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">100%</div>
                  <div className="text-white/90">Professionalism</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">24/7</div>
                  <div className="text-white/90">Support Available</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">Best</div>
                  <div className="text-white/90">Value Brand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

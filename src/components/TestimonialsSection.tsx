import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Shyam Menon',
      role: 'Principal, St. Thomas English School & Junior College',
      content: 'RE-SPORTS has been instrumental in organizing our annual day celebrations and sports events. Their professionalism and dedication to student development is commendable. The emergency replacement support ensures continuity in our sports program.',
      rating: 5
    },
    {
      name: 'Mrs. Anita Desai',
      role: 'Sports Coordinator, Partner School',
      content: 'The monthly fitness tests and comprehensive training programs have significantly improved our students\' physical abilities. RE-SPORTS coaches are knowledgeable in multiple sports, giving our students diverse exposure.',
      rating: 5
    },
    {
      name: 'Mr. Arun Patel',
      role: 'Parent & School Board Member',
      content: 'RE-SPORTS doesn\'t just teach games - they focus on holistic development including nutrition, injury prevention, and mental wellness. Our children are more disciplined and physically active thanks to their programs.',
      rating: 5
    }
  ];

  const partners = [
    { name: 'St. Thomas English School', width: 'w-32' },
    { name: 'Junior College', width: 'w-28' },
    { name: 'Partner School 1', width: 'w-24' },
    { name: 'Partner School 2', width: 'w-28' },
    { name: 'Partner School 3', width: 'w-24' },
    { name: 'Partner School 4', width: 'w-32' }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-white rounded-full">
              <span className="text-[#0A2463]">Testimonials</span>
            </div>
            
            <h2 className="text-[#0A2463] mb-6">
              What Our Partners Say
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Hear from the coaches, institutions, and athletes who have experienced 
              the RE-SPORTS difference firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md bg-white">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-[#FF6B35] mb-6" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-[#0A2463] mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-[#0A2463] mb-8">
            Trusted by Leading Institutions
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`${partner.width} h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded flex items-center justify-center`}
              >
                <span className="text-xs text-white">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
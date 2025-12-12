import { ArrowUpRight } from 'lucide-react';
import pastExperience1 from "figma:asset/a71ebad14fdae5b4429665f7c173f8b9c6fb764a.png";
import eventPhoto1 from "figma:asset/dbfb0e2b0c8b57b1030300846871f92d5d855492.png";

export function PortfolioSection() {
  const projects = [
    {
      title: 'School Annual Day Celebrations',
      category: 'Event Management',
      image: eventPhoto1,
      stats: 'Multiple School Events Organized'
    },
    {
      title: 'St. Thomas English School Partnership',
      category: 'Institutional Partnership',
      image: eventPhoto1,
      stats: 'Long-term Collaboration'
    },
    {
      title: 'Sports Day Events',
      category: 'Tournament Organization',
      image: pastExperience1,
      stats: 'Award Ceremonies & Competitions'
    },
    {
      title: 'RE-SPORTS Past Experiences',
      category: 'Event Showcase',
      image: pastExperience1,
      stats: 'Comprehensive Sports Programs'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-[#F5F5F5] rounded-full">
            <span className="text-[#0A2463]">Our Impact</span>
          </div>
          
          <h2 className="text-[#0A2463] mb-6">
            Success Stories & Portfolio
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Discover how we've partnered with institutions and athletes to create 
            exceptional sporting programs and achieve remarkable results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-2 px-3 py-1 bg-[#FF6B35] text-white text-sm rounded-full inline-block w-fit">
                  {project.category}
                </div>
                
                <h3 className="text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.stats}
                </p>

                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
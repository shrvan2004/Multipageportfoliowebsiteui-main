import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';
import JobApplyModal from './JobApplyModal';

export function JobListingsSection() {
  const jobs = [
    {
      title: 'Certified Sports Coach',
      location: 'Mumbai',
      mode: 'Full-Time',
      experience: '5+ Years Exp',
      sport: 'Football',
      description: 'Lead our football academy program with comprehensive training for youth athletes.',
      tags: ['Leadership', 'Youth Development', 'UEFA Certified']
    },
    {
      title: 'Basketball Specialist',
      location: 'Bangalore',
      mode: 'Full-Time',
      experience: '3+ Years Exp',
      sport: 'Basketball',
      description: 'Develop and implement basketball training programs for competitive teams.',
      tags: ['Team Management', 'Strategy', 'Performance']
    },
    {
      title: 'Swimming Instructor',
      location: 'Delhi',
      mode: 'Part-Time',
      experience: '2+ Years Exp',
      sport: 'Swimming',
      description: 'Provide professional swimming instruction for students of all skill levels.',
      tags: ['Safety Certified', 'Technique', 'All Levels']
    },
    {
      title: 'Curriculum Specialist',
      location: 'Remote',
      mode: 'Full-Time',
      experience: '7+ Years Exp',
      sport: 'Multi-Sport',
      description: 'Design innovative sports education curricula aligned with educational standards.',
      tags: ['Curriculum Design', 'Education', 'Research']
    },
    {
      title: 'Tennis Coach',
      location: 'Pune',
      mode: 'Full-Time',
      experience: '4+ Years Exp',
      sport: 'Tennis',
      description: 'Train competitive tennis players with focus on technique and tournament preparation.',
      tags: ['ITF Certified', 'Tournament Prep', 'Technical']
    },
    {
      title: 'Athletic Director',
      location: 'Chennai',
      mode: 'Full-Time',
      experience: '10+ Years Exp',
      sport: 'Multi-Sport',
      description: 'Oversee comprehensive sports programs and manage coaching staff.',
      tags: ['Leadership', 'Management', 'Strategic Planning']
    }
  ];

  const [applyJob, setApplyJob] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block mb-4 px-4 py-1 bg-white/5 rounded-full border border-white/10">
            <span className="text-gray-300">Career Opportunities</span>
          </div>
          
          <h2 className="text-white mb-4">
            Careers in Sporting Education
          </h2>
          
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Join a dynamic team of passionate professionals dedicated to shaping the future 
            of sports education. We offer competitive compensation, professional development 
            opportunities, and a supportive work environment.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#FF6B35]/50 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-white">{job.title}</h3>
                    <Badge className="bg-[#FF6B35] text-white border-none">{job.sport}</Badge>
                  </div>

                  <p className="text-gray-400 mb-4">{job.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF6B35]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FF6B35]" />
                      <span>{job.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#FF6B35]" />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Right CTA */}
                <div className="lg:flex-shrink-0">
                  <Button
                    onClick={() => setApplyJob(index)}
                    className="bg-[#FF6B35] hover:bg-[#FF5722] text-white group-hover:gap-3 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <JobApplyModal open={applyJob !== null} onClose={() => setApplyJob(null)} jobTitle={applyJob !== null ? jobs[applyJob].title : undefined} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Don't see the right position? We're always looking for talented individuals.
          </p>
          <Button 
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Send General Application
          </Button>
        </div>
      </div>
    </section>
  );
}

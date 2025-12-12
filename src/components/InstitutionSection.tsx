import { useState } from 'react';
import { Check, Building2, Award, Users, TrendingUp, Calendar, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';

export function InstitutionSection() {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactName: '',
    email: '',
    phone: '',
    services: '',
    message: ''
  });

  const benefits = [
    {
      icon: Award,
      title: 'Expert Curriculum Access',
      description: 'World-class sports education programs designed by certified professionals'
    },
    {
      icon: Building2,
      title: 'Facility Management Support',
      description: 'Complete assistance in planning, setup, and ongoing facility operations'
    },
    {
      icon: Users,
      title: 'Professional Development',
      description: 'Continuous training and certification programs for your coaching staff'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Data-driven insights to track and improve student athletic performance'
    },
    {
      icon: Calendar,
      title: 'Event Organization',
      description: 'Support for tournaments, competitions, and sporting events'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Proven methodologies and best practices for sports education excellence'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Benefits */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-white/5 rounded-full border border-white/10">
              <span className="text-gray-300">Institutional Partnerships</span>
            </div>
            
            <h2 className="text-white mb-6">
              Partner with a Sporting Excellence Company
            </h2>
            
            <p className="text-gray-300 mb-10 leading-relaxed">
              Transform your institution's sports program with RE-SPORTS. We provide comprehensive 
              support, from curriculum development to facility management, ensuring your students 
              receive world-class sports education.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center group-hover:bg-[#FF6B35]/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl text-[#FF6B35] mb-1">50+</div>
                  <div className="text-sm text-gray-400">Partner Schools</div>
                </div>
                <div>
                  <div className="text-3xl text-[#FF6B35] mb-1">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl text-[#FF6B35] mb-1">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:sticky lg:top-24">
            <h3 className="text-white mb-2">
              Register Your Interest
            </h3>
            <p className="text-gray-400 mb-8">
              Fill out the form below and our team will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="institutionName" className="text-white mb-2 block">
                  Institution Name *
                </Label>
                <Input
                  id="institutionName"
                  placeholder="Enter institution name"
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contactName" className="text-white mb-2 block">
                  Primary Contact Name *
                </Label>
                <Input
                  id="contactName"
                  placeholder="Enter your full name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Contact Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@institution.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="services" className="text-white mb-2 block">
                  Service(s) of Interest *
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, services: value })}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select service(s)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curriculum">Curriculum Development</SelectItem>
                    <SelectItem value="coaching">Professional Coaching</SelectItem>
                    <SelectItem value="facility">Facility Management</SelectItem>
                    <SelectItem value="events">Tournament Organization</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-white mb-2 block">
                  Additional Information
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your institution and specific needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 min-h-[100px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white"
                size="lg"
              >
                <Check className="mr-2 h-5 w-5" />
                Register Interest
              </Button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

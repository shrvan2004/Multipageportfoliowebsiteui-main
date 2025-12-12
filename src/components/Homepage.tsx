import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { WhyChooseSection } from './WhyChooseSection';
import { PortfolioSection } from './PortfolioSection';
import { PartnershipsSection } from './PartnershipsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CTASection } from './CTASection';

export function Homepage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <PortfolioSection />
      <PartnershipsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
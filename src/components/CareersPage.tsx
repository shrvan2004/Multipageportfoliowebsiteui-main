import { CareersHero } from './CareersHero';
import { JobListingsSection } from './JobListingsSection';
import { InstitutionSection } from './InstitutionSection';

export function CareersPage() {
  return (
    <main className="bg-[#1A1A1A]">
      <CareersHero />
      <JobListingsSection />
      <InstitutionSection />
    </main>
  );
}

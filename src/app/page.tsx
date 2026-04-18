import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

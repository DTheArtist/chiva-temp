import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import CompanySection from '../../components/CompanySection';
import InvestorBanner from '../../components/InvestorBanner';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection
                pagetitle="What is Chi'Va™?"
                content="AI-Powered Platform for Behavioral Health Service Efficacy"
                // pass as array of tuples
                ctalinks={[
                  ["/pitch", "Product Pitch"],
                  ["/team", "Founding Team"],
                ]}
              />
        <AboutSection />
        <CompanySection />
        <InvestorBanner />
      </main>
      <Footer />
    </div>
  );
}

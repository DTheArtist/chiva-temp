import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import CompanySection from '../../components/CompanySection';
import InvestorBanner from '../../components/InvestorBanner';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CompanySection />
        <InvestorBanner />
      </main>
      <Footer />
    </>
  );
}

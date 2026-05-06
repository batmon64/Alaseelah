import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import ProcessSection from './components/ProcessSection'
import QualityShowcaseSection from './components/QualityShowcaseSection'
import ClientsSection from './components/ClientsSection'
import WhyChooseUs from './components/WhyChooseUs'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="font-rubik overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <QualityShowcaseSection />
      <ClientsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

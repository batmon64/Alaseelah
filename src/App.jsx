import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import ProcessSection from './components/ProcessSection'
import ClientsSection from './components/ClientsSection'
import WhyChooseUs from './components/WhyChooseUs'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="font-lexend overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <ClientsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

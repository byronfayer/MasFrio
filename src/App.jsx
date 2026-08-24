import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BusinessServices from "./components/BusinessServices";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BusinessServices />
        <WhyUs />
        <About />
        <Gallery />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

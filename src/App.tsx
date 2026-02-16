import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { Packages } from "@/components/Packages";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

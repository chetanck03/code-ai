import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
  );
}

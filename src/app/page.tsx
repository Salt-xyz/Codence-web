import { ContactForm } from "@/components/Contact";
import Features from "@/components/Features";
import {Footer} from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NewsletterSignup } from "@/components/Newsletter";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <ContactForm />
      <NewsletterSignup />
      <Footer />
    </>
  );
}

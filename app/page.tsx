"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeVisitCounter from "./components/HomeVisitCounter";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WhatsAppLink from "./components/WhatsAppLink";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppLink />
      <HomeVisitCounter />
    </div>
  );
}

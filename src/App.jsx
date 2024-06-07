import { useState, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Pictures from "./components/Pictures";
import Nav from "./components/Nav";

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const picturesRef = useRef(null);
  const reviewsRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToElement = (ref) => {
    if (ref.current) {
      const navbarHeight = 64; // Adjust this value to match your navbar's height
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToHero = () => scrollToElement(heroRef);
  const scrollToStats = () => scrollToElement(statsRef);
  const scrollToPictures = () => scrollToElement(picturesRef);
  const scrollToReviews = () => scrollToElement(reviewsRef);
  const scrollToFaq = () => scrollToElement(faqRef);
  const scrollToContact = () => scrollToElement(contactRef);

  return (
    <div>
      <div className="fixed z-50 w-full">
        <Nav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          scrollToHero={scrollToHero}
          scrollToStats={scrollToStats}
          scrollToPictures={scrollToPictures}
          scrollToReviews={scrollToReviews}
          scrollToFaq={scrollToFaq}
          scrollToContact={scrollToContact}
        />
      </div>
      <div className="py-20" ref={heroRef}>
        <Hero scrollToContact={scrollToContact} scrollToStats={scrollToStats} />
      </div>
      <div ref={statsRef}>
        <Stats />
      </div>
      <div ref={picturesRef}>
        <Pictures />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <div className="py-20" ref={faqRef}>
        <FAQ />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

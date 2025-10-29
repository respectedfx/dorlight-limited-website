import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import FeaturedProperties from "../components/FeaturedProperties/FeaturedProperties";
import StatsSection from "../components/StatsSection/StatsSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactSection from "../components/ContactSection/ContactSection";
// import NewsletterSection from "../components/NewsletterSection/NewsletterSection";

const Home = () => {
  useEffect(() => {
    // Check if there's a stored scroll target (set by Navbar)
    const scrollTarget = sessionStorage.getItem("scrollTarget");

    if (scrollTarget) {
      // Wait for the page to render all sections before scrolling
      const scrollToSection = () => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollTarget");
        } else {
          // Retry once if the element isn't ready yet
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProperties />
      <StatsSection />
      <ProjectsSection />
      <ContactSection />
      {/* <NewsletterSection /> */}
    </>
  );
};

export default Home;

import React from "react"; // Make sure to import React from the correct path
import HeroSection from "../Functionality/HeroSection";
import BestSellingCards from "../Functionality/Genres/BestSelling"; // Import the component correctly
import Footer from "../Functionality/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <HeroSection />
      <BestSellingCards />
      <Footer />
    </>
  );
}

export default Home;

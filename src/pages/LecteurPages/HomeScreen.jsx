import React from "react";
import NavBar from "../../component/NavBar.jsx";
import Hero from "../../component/Hero.jsx";
import Books from "../../component/Books.jsx";
import AboutUs from "../../component/AboutUs.jsx";
import Contact from "../../component/Contact.jsx";
function HomeScreen() {
  return (
    <>
      <NavBar />
      <div id="hero" className="section">
        <Hero />
      </div>
      <div id="books" className="section">
        <hr className="bg-darkBlue mt-32 h-1 mx-auto w-1/2" />
        <Books />
      </div>
      <div id="aboutus" className="section">
        <hr className="bg-darkBlue mt-32 h-1 mx-auto w-1/2" />
        <AboutUs />
      </div>
      <div id="contact" className="section">
        <hr className="bg-darkBlue mt-32 h-1 mx-auto w-1/2" />
        <Contact />
      </div>
    </>
  );
}

export default HomeScreen;

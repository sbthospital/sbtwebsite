import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Testimonial from "./components/Testimonial";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ContactUsForm from "./components/ContactUsForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="testimonial">
          <Testimonial />
        </div>
        <div id="contactUs">
          <ContactUsForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

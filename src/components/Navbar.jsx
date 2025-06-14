import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    console.log("Contact form opening...");
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div
          className="flex flex-row justify-between p-5 md:px-32 px-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          style={{ backgroundColor: "rgb(0, 150, 255)" }}
        >
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold">SBT Speciality Orthopaedic Hospital</h1>
            </Link>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">About Us</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Services</Link>
            <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Doctors</Link>
            <Link to="testimonial" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Testimonials</Link>

          </nav>

          <div className="hidden lg:flex">
            {/* Link the Contact Us button to the "contactUs" section */}
            <Link to="contactUs" spy={true} smooth={true} duration={500}>
              <Button title="Contact Us" />
            </Link>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          style={{ backgroundColor: "rgb(0, 150, 255)" }}
        >
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>About Us</Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>Services</Link>
          <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>Doctors</Link>
          <Link to="testimonial" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>Testimonials</Link>

          <div className="lg:hidden">
            <Link to="contactUs" spy={true} smooth={true} duration={500} >
              <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

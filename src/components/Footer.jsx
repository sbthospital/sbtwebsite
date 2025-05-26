import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[rgb(0,150,255)] text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">SBT Speciality Hospital</h1>
          <p className="text-sm">
          At SBT Speciality & Orthopaedic Hospital, we are dedicated to providing world-class orthopedic care to help our patients regain their mobility, alleviate pain, and improve their quality of life.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
            Sri Hari nagar 1st street, Minibypass road, opposite - TDP office, nellore
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
            sbthospitalsnellore@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +91 9876543210
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          © 2024 by
          <span className="text-hoverColor">SBT Speciality Hospital</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        At SBT Speciality & Orthopaedic Hospital, we are dedicated to providing world-class orthopedic care to help our patients regain their mobility, alleviate pain, and improve their quality of life.  
        </p>
        <p className="text-justify lg:text-start">
        Our team of experienced orthopedic specialists, surgeons, and compassionate healthcare professionals uses the latest in medical technology and evidence-based practices to offer personalized treatment plans for each patient.
        </p>
        <p className="text-justify lg:text-start">
        Whether you're dealing with a sports injury, arthritis, or a complex joint condition, 
        we're here to support you every step of the way on your journey to recovery. 
        Trust us to bring you back to health, mobility, and well-being.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;

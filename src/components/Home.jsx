import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 text-white bg-black bg-[url('assets/img/hero.jpg')] bg-no-repeat bg-cover bg-opacity-90" >
      <div className="w-full lg:w-4/5 space-y-5 mt-10 text-center lg:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
         SBT Speciality Orthopaedic Hospital
        </h1>
        <p className="text-sm md:text-base">
Regain your strength, mobility, and confidence with care you can trust. At SBT Speciality & Orthopaedic Hospital, we combine advanced treatments, compassionate professionals, and modern technology to deliver personalized care for every patient — from injury recovery to lifelong wellness.
        </p>
        
        <div className="flex justify-center lg:justify-start">
          <Button title="See Services" />
        </div>
      </div>
    </div>
  );
};

export default Home;

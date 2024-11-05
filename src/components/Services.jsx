import React from "react";
import Button from "../layouts/Button";
import { FaWalking, FaBone, FaUserMd } from "react-icons/fa"; // Using Font Awesome icons
import ServicesCard from "../layouts/ServicesCard";
import { RiMicroscopeLine } from "react-icons/ri"; // Icon for Lab Test
import { MdHealthAndSafety } from "react-icons/md"; // Icon for Health Check

const Services = () => {
  const icon1 = (
    <div className="bg-[rgb(240,255,255)] p-3 rounded-full">
      <FaWalking size={35} className="text-[rgb(31,81,255)]" />
    </div>
  );
  const icon2 = (
    <div className="bg-[rgb(240,255,255)] p-3 rounded-full">
      <FaBone size={35} className="text-[rgb(31,81,255)]" />
    </div>
  );
  const icon3 = (
    <div className="bg-[rgb(240,255,255)] p-3 rounded-full">
      <FaUserMd size={35} className="text-[rgb(31,81,255)]" />
    </div>
  );
  const labTestIcon = (
    <div className="bg-[rgb(240,255,255)] p-3 rounded-full">
      <RiMicroscopeLine size={35} className="text-[rgb(31,81,255)]" />
    </div>
  );
  const healthCheckIcon = (
    <div className="bg-[rgb(240,255,255)] p-3 rounded-full">
      <MdHealthAndSafety size={35} className="text-[rgb(31,81,255)]" />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Orthopedic Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Specialized care to help you move freely and live without pain.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-14">
        <ServicesCard 
          icon={icon1} 
          title="Joint Replacement" 
          description="Comprehensive joint replacement services to restore mobility and relieve pain in damaged joints." 
        />
        <ServicesCard 
          icon={icon2} 
          title="Bone Surgery" 
          description="Advanced bone surgery procedures for fractures, deformities, and skeletal issues to improve bone health." 
        />
        <ServicesCard 
          icon={icon3} 
          title="Orthopedic Consultation" 
          description="Expert orthopedic consultations to diagnose and treat musculoskeletal conditions effectively." 
        />
        <ServicesCard 
          icon={labTestIcon} 
          title="Lab Test" 
          description="Accurate diagnostic lab tests to assess and monitor orthopedic health and treatment progress." 
        />
        <ServicesCard 
          icon={healthCheckIcon} 
          title="Health Check" 
          description="Comprehensive health checks focused on musculoskeletal well-being to ensure a pain-free lifestyle." 
        />
      </div>
    </div>
  );
};

export default Services;

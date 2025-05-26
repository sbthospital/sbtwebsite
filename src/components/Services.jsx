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
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
           Specialized care to help you move freely, live without pain, and stay healthy.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-14">
         <ServicesCard 
          icon={icon3} 
          title="🦴 Orthopaedics & Trauma Care" 
          description="Comprehensive diagnosis and treatment of bone, joint, and musculoskeletal injuries. From fractures to arthritis, we deliver expert care to restore mobility and function." 
        />

         <ServicesCard 
          icon={icon3} 
          title="🧬 General Medicine" 
          description=" Primary care and chronic disease management, including diabetes, hypertension, infections, and respiratory conditions — ensuring your overall health is in expert hands." 
        />
        
        <ServicesCard 
          icon={icon1} 
          title="🩻 Joint Replacement" 
          description="Advanced joint replacement surgeries (knee, hip, shoulder) using modern techniques to relieve pain and restore your ability to move comfortably." 
        />
        <ServicesCard 
          icon={icon2} 
          title="🏅 Sports Injury Care" 
          description="Specialized care for athletes and active individuals, including treatment for ligament tears, sprains, dislocations, and rehabilitation programs to get you back in action." 
        />
                <ServicesCard 
          icon={healthCheckIcon} 
          title="🧸 Pediatric Services" 
          description="Compassionate care for infants, children, and adolescents — from vaccinations and checkups to treatment for common childhood illnesses and developmental monitoring." 
        />
                <ServicesCard 
          icon={healthCheckIcon} 
          title="🏥 General & Laparoscopic Surgery" 
          description="Minimally invasive and traditional surgeries for hernias, gallbladder issues, appendicitis, and more — performed with precision for quicker recovery." 
        />
       
        <ServicesCard 
          icon={healthCheckIcon} 
          title="🏃 Physiotherapy & Rehabilitation" 
          description="Customized rehabilitation programs to support recovery after injury or surgery — focused on improving mobility, strength, and long-term function." 
        />

        <ServicesCard 
          icon={labTestIcon} 
          title="Lab Test" 
          description="Accurate and reliable diagnostic testing, including blood work and imaging, to support timely diagnosis and personalized treatment planning." 
        />
        <ServicesCard 
          icon={healthCheckIcon} 
          title="Health Check" 
          description="Preventive health screenings and wellness packages designed to monitor vital parameters, detect issues early, and support long-term health." 
        />
        
      </div>
    </div>
  );
};

export default Services;

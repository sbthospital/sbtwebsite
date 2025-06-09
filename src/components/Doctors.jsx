import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "/src/assets/img/Dr.jpg",
      name: "Dr. Nawaz Shareef shaik",
      specialties: "MS(ORTHO), FIJR",
      role: "Lead Orthopedic Surgeon",
    },
    {
      img: "/src/assets/img/Madhu Lekha (1).jpg",
      name: "Dr. T. Madhu lekha",
      specialties: "M.B.B.S, MD General Medicine",
      role: "Consultant General Physician and Diabetologist",
    },
    {
      img: "/src/assets/img/Lakshmi Prasanna reddy.jpg",
      name: "Dr.M.Lakshmi prasanna reddy",
      specialties: "M.B.B.S , MD Paediatrics",
      role: "Consultant paediatrician",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Specialists
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Meet our team of expert orthopedic doctors dedicated to providing top-notch care for bone and joint health.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="h-[370px] text-black rounded-xl shadow-lg bg-white overflow-hidden transform transition-transform hover:scale-105 mb-4 cursor-pointer"
              key={index}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={e.img}
                  alt={e.name} // Updated for better accessibility
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5 text-center">
                <h1 className="font-semibold text-xl">{e.name}</h1>
                <h3 className="pt-2 text-gray-600">{e.specialties}</h3>
                {/* <p className="pt-1 text-gray-500">{e.role}</p> Displaying role */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;

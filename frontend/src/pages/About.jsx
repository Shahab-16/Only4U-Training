// src/pages/About.jsx
import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCar,
  FaMotorcycle,
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Import your images
import gallery1 from "../assets/Gallery1.jpeg";
import gallery2 from "../assets/Gallery2.jpeg";
import gallery3 from "../assets/Gallery3.jpeg";
import gallery4 from "../assets/Gallery4.jpeg";
import ProfilePic from "../assets/Profile_Image.jpeg";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const qualifications = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: "Diploma in Automobile Engineering",
      description: "Specialized technical knowledge in automotive systems and mechanics"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: "BBA in Marketing",
      description: "Comprehensive business education with focus on marketing strategies"
    }
  ];

  const experience = [
    {
      icon: <FaCar className="text-4xl text-blue-600" />,
      title: "Automotive Sales Specialist",
      description: "10+ years in car sales with top-performing records"
    },
    {
      icon: <FaMotorcycle className="text-4xl text-blue-600" />,
      title: "Two-Wheeler Sales Expert",
      description: "Specialized in motorcycle and scooter sales strategies"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Sales Trainer & Consultant",
      description: "5+ years training professionals in sales techniques"
    }
  ];

  const galleryImages = [
    { id: 1, src: gallery1, alt: "Training session" },
    { id: 2, src: gallery2, alt: "Workshop interaction" },
    { id: 3, src: gallery3, alt: "Team building" },
    { id: 4, src: gallery4, alt: "Presentation" },
  ];

  // Get current set of 3 images
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % galleryImages.length;
      visible.push(galleryImages[index]);
    }
    return visible;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">About Only4U Training</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in professional growth and business development
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative w-64 h-64 overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src={ProfilePic}
                  alt="Abdul Hamid - Founder & Lead Trainer"
                  className="w-full h-full object-center transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Abdul Hamid - Founder & Lead Trainer</h2>
              <p className="text-gray-700 mb-6">
                With over a decade of experience in the automotive industry and a passion for empowering professionals, Abdul Hamid brings a unique blend of technical expertise and business acumen to his training programs. His journey from automobile engineer to top-performing sales executive to sought-after trainer gives him unparalleled insights into the skills needed for success in today's competitive business environment.
              </p>
              
              <div className="flex items-center text-blue-700 font-bold">
                <FaHandshake className="mr-2" />
                <span>15+ Years of Professional Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Professional Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 flex">
                <div className="mr-6">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experience.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Training Philosophy</h2>
            <p className="mb-6 text-blue-100">
              At Only4U Training, we believe in practical, results-oriented learning. Our programs combine industry insights with hands-on exercises to ensure you can immediately apply what you've learned. We focus on building skills that deliver measurable results for both individuals and organizations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Practical Approach</h3>
                <p>Real-world scenarios and actionable strategies</p>
              </div>
              <div className="bg-blue-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Expert Guidance</h3>
                <p>Learn from industry practitioners, not just theorists</p>
              </div>
              <div className="bg-blue-700 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Results Focused</h3>
                <p>Skills that translate to measurable business outcomes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed 3-Image Gallery Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">My Gallery</h2>
          
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between mb-4">
              <button
                onClick={prevSlide}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                aria-label="Previous"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              
              <button
                onClick={nextSlide}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                aria-label="Next"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </div>

            {/* Static 3-Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {getVisibleImages().map((image) => (
                <div key={image.id} className="w-full">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
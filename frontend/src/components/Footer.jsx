// src/components/Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <div className="bg-white text-blue-700 w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-2">
                4U
              </div>
              ONLY4U TRAINING
            </h2>
            <p className="mb-4 text-blue-100">
              Empowering Minds. Elevating Business. Professional training programs designed to transform careers and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-blue-100 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-blue-100 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-100 hover:text-white"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-100 hover:text-white">Home</a></li>
              <li><a href="/courses" className="text-blue-100 hover:text-white">Courses</a></li>
              <li><a href="/about" className="text-blue-100 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-blue-100 hover:text-white">Soft Skills</a></li>
              <li><a href="/courses" className="text-blue-100 hover:text-white">Technical Skills</a></li>
              <li><a href="/courses" className="text-blue-100 hover:text-white">Standard Selling Process</a></li>
              <li><a href="/courses" className="text-blue-100 hover:text-white">Business Analysis</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-400" />
                <p className="text-blue-100">
                  Opp: Hajj House, Kadru Band Gait<br />
                  Ranchi, Jharkhand - 834002
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-yellow-400" />
                <a href="tel:8090009600" className="text-blue-100 hover:text-white">8090009600</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-yellow-400" />
                <a href="mailto:abdulhmdb5@gmail.com" className="text-blue-100 hover:text-white">abdulhmd05@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Only4U Training & Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
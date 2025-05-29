// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    course: '',
    message: 'I want to enroll in a training program'
  });

  // Extract course from URL query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const courseParam = queryParams.get('course');
    
    if (courseParam) {
      setFormData(prev => ({
        ...prev,
        course: decodeURIComponent(courseParam),
        message: `I want to enroll in the ${decodeURIComponent(courseParam)} course`
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp message format
    const whatsappMessage = `New Training Enquiry:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Address:* ${formData.address}%0A` +
      `*Pincode:* ${formData.pincode}%0A` +
      `*Course Interest:* ${formData.course}%0A` +
      `*Message:* ${formData.message}`;
    
    // Replace with your brother's WhatsApp number
    const whatsappNumber = '918090009600';
    
    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to enroll? Reach out to our team for more information.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Our Location</h3>
                    <p className="text-gray-600">
                      Opp: Hajj House, Kadru Band Gait<br />
                      Ranchi, Jharkhand - 834002
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:8090009600" className="hover:text-blue-700">8090009600</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:abdulhmdb5@gmail.com" className="hover:text-blue-700">abdulhmdb5@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Training Schedule</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-blue-800">Sunday Training Program</h4>
                        <p className="text-gray-700">Full Day Session</p>
                      </div>
                      <div className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold">
                        ₹5,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Enquiry Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
                    rows="3"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Course Interest</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
                  >
                    <option value="">Select a course</option>
                    <option value="Soft Skills">Soft Skills</option>
                    <option value="Technical Skills">Technical Skills</option>
                    <option value="Standard Selling Process">Standard Selling Process</option>
                    <option value="Business Analysis">Business Analysis</option>
                    <option value="Objection Handling">Objection Handling</option>
                    <option value="Marketing & Smart Goal Setting">Marketing & Smart Goal Setting</option>
                    <option value="Personal Grooming">Personal Grooming</option>
                    <option value="Time Management">Time Management</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
                    rows="4"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2" /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChalkboardTeacher, FaLaptopCode, FaHandshake, FaChartLine, FaBullseye, FaUserTie, FaClock } from 'react-icons/fa';

const Home = () => {
  const courses = [
    { id: 1, title: "Soft Skills", icon: <FaHandshake /> },
    { id: 2, title: "Technical Skills", icon: <FaLaptopCode /> },
    { id: 3, title: "Standard Selling Process", icon: <FaChartLine /> },
    { id: 4, title: "Business Analysis", icon: <FaChartLine /> },
    { id: 5, title: "Objection Handling", icon: <FaHandshake /> },
    { id: 6, title: "Marketing & Smart Goal Setting", icon: <FaBullseye /> },
    { id: 7, title: "Personal Grooming", icon: <FaUserTie /> },
    { id: 8, title: "Time Management", icon: <FaClock /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Minds. Elevating Business.
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Professional training programs designed to transform careers and businesses with practical skills and strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/courses" 
                className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center"
              >
                Explore Courses <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                Book Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Professional Development Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive training programs are designed to equip you with practical tools, fresh insights, and actionable strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-gray-50 rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{course.title}</h3>
                <Link 
                  to="/courses" 
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center mt-4"
                >
                  Learn more <FaArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Exclusive Business Training Program</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Transform your career with industry-leading training in sales, marketing, and business development
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-blue-800">Sunday Training Program</h3>
                  <p className="text-gray-600">Full Day Session</p>
                </div>
                <div className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold">
                  ₹5,000
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-4 md:mb-0">
                  <p className="text-gray-700">
                    <span className="font-semibold">Location:</span> Kadru Band Gait, Opp: Hajj House, Ranchi, Jharkhand - 834002
                  </p>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with our training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-yellow-400 mb-4">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The Soft Skills training completely transformed my approach to client meetings. I've increased my conversions by 40%!"
              </p>
              <div className="flex items-center">
                <div className="bg-blue-200 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                  RS
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Rahul Sharma</h4>
                  <p className="text-gray-600 text-sm">Sales Executive</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-yellow-400 mb-4">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Abdul's negotiation techniques helped me secure better deals with suppliers. Worth every rupee!"
              </p>
              <div className="flex items-center">
                <div className="bg-blue-200 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                  PP
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Priya Patel</h4>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-yellow-400 mb-4">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Practical, actionable advice that works immediately. Best sales training I've ever attended."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-200 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                  VS
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Vikram Singh</h4>
                  <p className="text-gray-600 text-sm">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
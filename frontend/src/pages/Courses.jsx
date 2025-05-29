// src/pages/Courses.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaHandshake,
  FaLaptopCode,
  FaChartLine,
  FaBullseye,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

const Courses = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      title: "Soft Skills",
      icon: <FaHandshake className="text-4xl text-blue-600" />,
      description:
        "Master communication, teamwork, and interpersonal skills to excel in any professional environment.",
      topics: [
        "Effective Communication",
        "Team Collaboration",
        "Emotional Intelligence",
        "Conflict Resolution",
      ],
    },
    {
      id: 2,
      title: "Technical Skills",
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      description:
        "Develop specialized technical expertise relevant to your industry and career advancement.",
      topics: [
        "Industry-specific Tools",
        "Technical Proficiency",
        "Problem Solving",
        "Technical Documentation",
      ],
    },
    {
      id: 3,
      title: "Standard Selling Process",
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      description:
        "Learn proven sales methodologies to increase conversions and build lasting client relationships.",
      topics: [
        "Sales Pipeline Management",
        "Client Engagement",
        "Relationship Building",
        "Sales Techniques",
      ],
    },
    {
      id: 4,
      title: "Business Analysis",
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      description:
        "Gain skills to evaluate business performance, identify opportunities, and drive growth.",
      topics: [
        "SWOT Analysis",
        "Market Research",
        "Performance Metrics",
        "Strategic Planning",
      ],
    },
    {
      id: 5,
      title: "Objection Handling",
      icon: <FaHandshake className="text-4xl text-blue-600" />,
      description:
        "Master techniques to overcome customer hesitations and turn objections into opportunities.",
      topics: [
        "Identifying Objections",
        "Effective Responses",
        "Closing Techniques",
        "Customer Psychology",
      ],
    },
    {
      id: 6,
      title: "Marketing & Smart Goal Setting",
      icon: <FaBullseye className="text-4xl text-blue-600" />,
      description:
        "Develop effective marketing strategies and SMART goals to drive business success.",
      topics: [
        "Digital Marketing",
        "Brand Positioning",
        "SMART Goals",
        "Marketing Analytics",
      ],
    },
    {
      id: 7,
      title: "Personal Grooming",
      icon: <FaUserTie className="text-4xl text-blue-600" />,
      description:
        "Enhance your professional image and personal branding for career advancement.",
      topics: [
        "Professional Appearance",
        "Etiquette",
        "Personal Branding",
        "Executive Presence",
      ],
    },
    {
      id: 8,
      title: "Time Management",
      icon: <FaClock className="text-4xl text-blue-600" />,
      description:
        "Learn strategies to maximize productivity, prioritize tasks, and achieve work-life balance.",
      topics: [
        "Prioritization Techniques",
        "Task Management",
        "Efficiency Strategies",
        "Work-Life Balance",
      ],
    },
  ];

  // Handle course enrollment - navigate to contact page with course pre-selected
  const handleEnrollClick = (courseTitle) => {
    navigate(`/contact?course=${encodeURIComponent(courseTitle)}`);
  };

  // Handle Sunday training booking - navigate to contact page
  const handleBookClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Professional Development Courses
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive training programs are designed to equip you with
            practical tools, fresh insights, and actionable strategies to
            elevate your business performance and unlock new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {course.icon}
                  <h2 className="text-xl font-bold text-blue-800 ml-4">
                    {course.title}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">{course.description}</p>

                <h3 className="font-semibold text-blue-700 mb-2">
                  Key Topics:
                </h3>
                <ul className="mb-6">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <div className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold">
                    ₹5,000
                  </div>
                  <button 
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center"
                    onClick={() => handleEnrollClick(course.title)}
                  >
                    Enroll Now <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-700 text-white rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Special Sunday Training Program
              </h2>
              <p className="text-blue-100">
                Full Day Session | Limited Seats Available
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="text-3xl font-bold mr-4">₹5,000</div>
                <button 
                  className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors mt-2 sm:mt-0"
                  onClick={handleBookClick}
                >
                  Book Your Seat
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-blue-100">
            <p>Kadru Band Gait, Opp: Hajj House, Ranchi, Jharkhand - 834002</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
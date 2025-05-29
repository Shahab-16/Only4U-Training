// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const links = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-white text-blue-700 w-10 h-10 rounded-lg flex items-center justify-center font-bold mr-3">
              4U
            </div>
            <div>
              <h1 className="text-xl font-bold">ONLY4U TRAINING</h1>
              <p className="text-xs text-blue-100">Empowering Minds. Elevating Business.</p>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={`${location.pathname === link.path ? "text-white font-bold border-b-2 border-yellow-400" : "text-blue-100 hover:text-white"} transition-colors py-2`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {links.map(link => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`${location.pathname === link.path ? "text-white font-bold bg-blue-800" : "text-blue-100 hover:text-white"} px-4 py-2 rounded transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
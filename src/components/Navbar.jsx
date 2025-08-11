import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation links object
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Success Stories', url: '/testimonials' },
    { name: 'Contact', url: '/contact' },
  ];

  // Mobile navigation links (can be different from desktop if needed)
  const mobileNavLinks = [
    { name: 'Home', url: '/' },
    { name: 'Companies', url: '/companies' },
    { name: 'Salary Guide', url: '/salary' },
    { name: 'Resources', url: '/resources' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                TF
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.url}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-green-600 border-b-2 border-green-600 pb-1'
                      : 'text-gray-700 hover:text-green-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-green-600 font-medium px-4 py-2 rounded-lg transition-colors"
              onClick={() => navigate('/sign-in')}
            >
              Sign In
            </button>
            <button
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              onClick={() => navigate('/sign-up')}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        >
          <div className="py-4 border-t border-gray-200">
            {/* Mobile Regular Links */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              {mobileNavLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.url}
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors ${
                      isActive
                        ? 'text-green-600 bg-green-50 border-l-4 border-green-600'
                        : 'text-gray-600 hover:text-green-600'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="px-4 space-y-3 border-t border-gray-200 pt-4">
              <button
                className="w-full text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
                onClick={() => navigate('/sign-in')}
              >
                Sign In
              </button>
              <button
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                onClick={() => navigate('/sign-up')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

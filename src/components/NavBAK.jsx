import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJobSeekerDropdownOpen, setIsJobSeekerDropdownOpen] = useState(false);
  const [isEmployerDropdownOpen, setIsEmployerDropdownOpen] = useState(false);

  const jobSeekerLinks = [
    { name: 'Browse Jobs', href: '#' },
    { name: 'Companies', href: '#' },
    { name: 'Salary Guide', href: '#' },
    { name: 'Resume Builder', href: '#' },
    { name: 'Career Advice', href: '#' },
  ];

  const employerLinks = [
    { name: 'Post a Job', href: '#' },
    { name: 'Browse Candidates', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Recruitment Solutions', href: '#' },
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
            {/* Job Seekers Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
                onMouseEnter={() => setIsJobSeekerDropdownOpen(true)}
                onMouseLeave={() => setIsJobSeekerDropdownOpen(false)}
              >
                <span>For Job Seekers</span>
                <svg
                  className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Job Seekers Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                  isJobSeekerDropdownOpen
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
                onMouseEnter={() => setIsJobSeekerDropdownOpen(true)}
                onMouseLeave={() => setIsJobSeekerDropdownOpen(false)}
              >
                <div className="py-2">
                  {jobSeekerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Employers Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsEmployerDropdownOpen(true)}
                onMouseLeave={() => setIsEmployerDropdownOpen(false)}
              >
                <span>For Employers</span>
                <svg
                  className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Employers Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                  isEmployerDropdownOpen
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
                onMouseEnter={() => setIsEmployerDropdownOpen(true)}
                onMouseLeave={() => setIsEmployerDropdownOpen(false)}
              >
                <div className="py-2">
                  {employerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Regular Navigation Links */}
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Companies
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Salary Guide
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Resources
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 font-medium px-4 py-2 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
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
          className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        >
          <div className="py-4 border-t border-gray-200">
            {/* Mobile Job Seekers Section */}
            <div className="mb-4">
              <div className="font-semibold text-gray-900 mb-2 px-4">For Job Seekers</div>
              {jobSeekerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-6 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Employers Section */}
            <div className="mb-4">
              <div className="font-semibold text-gray-900 mb-2 px-4">For Employers</div>
              {employerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-6 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Regular Links */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                Companies
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                Salary Guide
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                Resources
              </a>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="px-4 space-y-3 border-t border-gray-200 pt-4">
              <button className="w-full text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
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

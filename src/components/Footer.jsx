import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'For Job Seekers': [
      'Browse Jobs',
      'Companies',
      'Salary Guide',
      'Resume Builder',
      'Career Advice',
      'Job Alerts',
    ],
    'For Employers': [
      'Post a Job',
      'Browse Candidates',
      'Pricing Plans',
      'Recruitment Solutions',
      'Employer Branding',
      'Analytics',
    ],
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Success Stories', 'Contact'],
    Support: [
      'Help Center',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Security',
      'Sitemap',
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-12">
        <div className="container">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Job Opportunities
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get personalized job recommendations and career insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/80 mt-3">
              Join 50,000+ professionals. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    TF
                  </span>
                </h2>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Connecting talented professionals with amazing career opportunities. Your dream
                  job is just a click away.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">15K+</div>
                  <div className="text-sm text-gray-400">Active Jobs</div>
                </div>
                <div className="text-center bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Companies</div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 mb-4">Follow us:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:transform hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TF. All rights reserved. Made with ❤️ for job seekers worldwide.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Settings
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

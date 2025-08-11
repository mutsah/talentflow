import React from 'react';

const TopCompanies = () => {
  const companies = [
    { name: 'Google', logo: '🚀' },
    { name: 'Microsoft', logo: '🖥️' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Meta', logo: '👥' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Spotify', logo: '🎵' },
    { name: 'Airbnb', logo: '🏠' },
    { name: 'Uber', logo: '🚗' },
    { name: 'Twitter', logo: '🐦' },
    { name: 'LinkedIn', logo: '💼' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Trusted By{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Top Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join 500+ leading companies that trust us to find the best talent
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {company.logo}
              </div>
              <p className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                {company.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-green-600">500+</span> companies are actively hiring
            through our platform
          </p>
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;

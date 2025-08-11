import React from 'react';

const FeaturedJobs = () => {
  return (
    <div className="container py-14">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Featured{' '}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Opportunities
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover handpicked job opportunities from leading companies
        </p>
      </div>
    </div>
  );
};

export default FeaturedJobs;

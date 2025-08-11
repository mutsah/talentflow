import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Profile',
      description: 'Sign up and build your professional profile with your skills and experience',
      icon: '👤',
    },
    {
      id: 2,
      title: 'Browse Jobs',
      description: 'Explore thousands of job opportunities from top companies worldwide',
      icon: '🔍',
    },
    {
      id: 3,
      title: 'Apply Instantly',
      description: 'Apply to your dream job with one click using your saved profile',
      icon: '📋',
    },
    {
      id: 4,
      title: 'Get Hired',
      description: 'Connect with employers and land your next career opportunity',
      icon: '🎉',
    },
  ];
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your dream job in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

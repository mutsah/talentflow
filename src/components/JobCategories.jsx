import React from 'react';

const JobCategories = () => {
  const categories = [
    {
      name: 'Technology',
      jobs: '2,500+ jobs',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Design',
      jobs: '1,200+ jobs',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Marketing',
      jobs: '900+ jobs',
      icon: '📊',
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'Finance',
      jobs: '800+ jobs',
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Healthcare',
      jobs: '1,100+ jobs',
      icon: '🏥',
      color: 'from-red-500 to-rose-500',
    },
    {
      name: 'Education',
      jobs: '700+ jobs',
      icon: '📚',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Sales',
      jobs: '950+ jobs',
      icon: '🎯',
      color: 'from-emerald-500 to-green-500',
    },
    {
      name: 'Engineering',
      jobs: '1,800+ jobs',
      icon: '⚙️',
      color: 'from-slate-500 to-gray-500',
    },
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Browse By{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore opportunities across different industries and find your perfect fit
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.jobs}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;

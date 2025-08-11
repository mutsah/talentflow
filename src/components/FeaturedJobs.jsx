import React from 'react';

const FeaturedJobs = () => {
  // Sample job data - you can replace this with data from your API
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      logo: 'https://via.placeholder.com/60x60?text=TC',
      description:
        'Join our dynamic team to build cutting-edge web applications using React and modern technologies.',
      tags: ['React', 'JavaScript', 'TypeScript', 'CSS'],
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'DesignStudio',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $120k',
      logo: 'https://via.placeholder.com/60x60?text=DS',
      description:
        'Create beautiful and intuitive user experiences for our suite of digital products.',
      tags: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
      posted: '1 day ago',
    },
    {
      id: 3,
      title: 'Backend Engineer',
      company: 'DataFlow Systems',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $140k',
      logo: 'https://via.placeholder.com/60x60?text=DF',
      description:
        'Build scalable backend systems and APIs to support millions of users worldwide.',
      tags: ['Node.js', 'Python', 'AWS', 'MongoDB'],
      posted: '3 days ago',
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$130k - $160k',
      logo: 'https://via.placeholder.com/60x60?text=IL',
      description: 'Lead product strategy and roadmap for our next-generation SaaS platform.',
      tags: ['Strategy', 'Analytics', 'Agile', 'Leadership'],
      posted: '1 week ago',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Remote',
      type: 'Full-time',
      salary: '$115k - $145k',
      logo: 'https://via.placeholder.com/60x60?text=CT',
      description:
        'Manage cloud infrastructure and implement CI/CD pipelines for rapid deployment.',
      tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      posted: '5 days ago',
    },
    {
      id: 6,
      title: 'Data Scientist',
      company: 'AI Dynamics',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$125k - $155k',
      logo: 'https://via.placeholder.com/60x60?text=AD',
      description:
        'Apply machine learning and statistical analysis to solve complex business problems.',
      tags: ['Python', 'ML', 'TensorFlow', 'SQL'],
      posted: '4 days ago',
    },
  ];

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

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
          >
            {/* Card Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {job.company.charAt(0)}
                  </div> */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {job.type}
                </span>
              </div>

              {/* Location and Salary */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{job.location}</span>
                </div>
                <span className="font-semibold text-gray-700">{job.salary}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{job.posted}</span>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Jobs Button */}
      <div className="text-center mt-12">
        <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
          View All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

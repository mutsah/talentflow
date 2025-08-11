import React, { useState, useEffect } from 'react';
import {
  Search,
  MapPin,
  Users,
  Building,
  Star,
  ArrowRight,
  Briefcase,
  CheckCircle,
} from 'lucide-react';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    location: '',
  });

  const [animatedStats, setAnimatedStats] = useState({
    jobs: 0,
    companies: 0,
    users: 0,
    success: 0,
  });

  useEffect(() => {
    const targets = { jobs: 15000, companies: 500, users: 10000, success: 95 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const increments = {
      jobs: targets.jobs / steps,
      companies: targets.companies / steps,
      users: targets.users / steps,
      success: targets.success / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setAnimatedStats({
          jobs: Math.floor(increments.jobs * currentStep),
          companies: Math.floor(increments.companies * currentStep),
          users: Math.floor(increments.users * currentStep),
          success: Math.floor(increments.success * currentStep),
        });
        currentStep++;
      } else {
        setAnimatedStats(targets);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchData);
    alert(`Searching for "${searchData.jobTitle}" in "${searchData.location}"`);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString();
  };

  const stats = [
    {
      icon: Briefcase,
      number: formatNumber(animatedStats.jobs),
      label: 'Active Jobs',
      color: 'text-blue-400',
    },
    {
      icon: Building,
      number: formatNumber(animatedStats.companies),
      label: 'Companies',
      color: 'text-green-400',
    },
    {
      icon: Users,
      number: formatNumber(animatedStats.users),
      label: 'Happy Users',
      color: 'text-purple-400',
    },

    {
      icon: CheckCircle,
      number: `${animatedStats.success}%`,
      label: 'Success Rate',
      color: 'text-yellow-400',
    },
  ];

  return (
    <main className="relative min-h-[60vh] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 overflow-hiddenc py-20 md:py-5">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/assets/img/hero.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 w-full min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Find Jobs, Employment & Career Opportunities
              </h1>

              <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <Search
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      value={searchData.jobTitle}
                      onChange={(e) => setSearchData({ ...searchData, jobTitle: e.target.value })}
                      placeholder="Job title, keywords..."
                      className="w-full pl-12 pr-4 py-4 border-0 focus:outline-none text-gray-700 placeholder-gray-400 rounded-xl"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <MapPin
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      value={searchData.location}
                      onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                      placeholder="City or postcode..."
                      className="w-full pl-12 pr-4 py-4 border-0 focus:outline-none text-gray-700 placeholder-gray-400 rounded-xl"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="solid-btn flex items-center justify-center gap-3"
                  >
                    Find Jobs
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className={`${stat.color} w-8 h-8`} />
                      </div>
                      <div className="text-white text-2xl font-bold mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-white text-sm">
                    <span className="font-semibold">4.8/5</span> trusted by professionals
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-4 text-center"
                  >
                    <IconComponent className={`${stat.color} w-6 h-6 mx-auto mb-2`} />
                    <div className="text-white text-lg font-bold">{stat.number}</div>
                    <div className="text-gray-300 text-xs">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

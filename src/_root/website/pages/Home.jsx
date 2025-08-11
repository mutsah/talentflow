import React from 'react';
import Hero from '../../../components/Hero';
import HowItWorks from '../../../components/HowItWorks';
import JobCategories from '../../../components/JobCategories';
import FeaturedJobs from '../../../components/FeaturedJobs';
import TopCompanies from '../../../components/TopCompanies';
import Testimonials from '../../../components/Testimonials';

const Home = () => {
  return (
    <div>
      {/* hero */}
      <Hero></Hero>

      {/* how it works */}
      <HowItWorks></HowItWorks>

      {/* job categories */}
      <JobCategories></JobCategories>

      {/* featured jobs */}
      <FeaturedJobs></FeaturedJobs>

      {/* top companies */}
      <TopCompanies></TopCompanies>

      {/* testimonials */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

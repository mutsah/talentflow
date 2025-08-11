import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkLoggedStatus();
  }, []);

  const checkLoggedStatus = () => {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
      // navigate("/sign-in");
    }
  };

  const handleLogout = () => {
    // localStorage.removeItem("userToken");
    localStorage.clear();
    navigate('/sign-in');
  };

  return (
    <>
      {/* nav bar */}
      <nav className="w-full">
        <div className="container py-2 flex justify-between items-center">
          <h1 className="text-1xl md:text-2xl font-bold">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              TF
            </span>
            {/* <span className="">Flow</span> */}
          </h1>
          <button className="main-btn" onClick={() => handleLogout()}>
            Login
          </button>
        </div>
      </nav>
      {/* hero */}
      <Hero></Hero>

      {/* featured jobs */}
      <FeaturedJobs></FeaturedJobs>
    </>
  );
};
export default Home;

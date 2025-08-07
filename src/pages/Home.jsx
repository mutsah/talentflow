import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkLoggedStatus();
  }, []);

  const checkLoggedStatus = () => {
    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      navigate("/sign-in");
    }
  };

  const handleLogout = () => {
    // localStorage.removeItem("userToken");
    localStorage.clear();
    navigate("/sign-in");
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Home;

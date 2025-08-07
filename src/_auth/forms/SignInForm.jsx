import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../api/authAPI";
import LoadingSpinner from "../../components/LoadingSpinner";
import { toast } from "react-toastify";

const SignInForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signIn(user);

      if (response.success) {
        localStorage.setItem("userToken", response.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Error signing in:", error);
    }
  };
  return (
    <div className="p-6 w-full">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-3">Join for success</h1>
        <p className="pr-14 pl-14 mb-6 text-gray-700">
          Are you ready to take the next step towards a successful future? Look
          no further than Native Markets
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-4">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="appearance-none border rounded shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="appearance-none border rounded shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-[#02152c] hover:bg-[#02152c] text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          >
            {isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <span>Sign in</span>
            )}
          </button>
        </div>
        <div className="mt-2 flex justify-between">
          <Link to="/sign-in" className="text-sm">
            Change password?
          </Link>
          <Link to="/sign-in" className="text-sm">
            Forgot password?
          </Link>
        </div>
      </form>
      <div className="flex items-center py-3">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500 text-sm">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <button className="text-primary-500 text-small-semibold ml-1 w-full ">
        <div className="flex items-center justify-center gap-2 border rounded py-2">
          {/* <GoogleIcon size={20}></GoogleIcon> */}
          <p className="font-bold">Sign in with Google</p>
        </div>
      </button>

      <div>
        <p className="text-small-regular text-light-2 text-center mt-5 ">
          <span className="text-gray-700">Don't have an account?</span>
          <Link
            to="/sign-up"
            className="text-primary-500 text-small-semibold ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignInForm;

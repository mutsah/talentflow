import { useState } from "react";
import { verifyEmail } from "../../api/authAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/LoadingSpinner";

const VerifyCodeForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState({
    code: "",
  });

  const queryParams = new URLSearchParams(window.location.search);
  const encodedEmail = queryParams.get("code");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerificationCode((prevCode) => ({ ...prevCode, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await verifyEmail(encodedEmail, verificationCode.code);

      console.log(response);

      if (response.success) {
        toast.success("Email verified");
        navigate("/");
      } else {
        if (response.message == "User already verified") {
          navigate("/");
        }
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("Error adding user:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 w-full">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-3">Verify Email</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-4">
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Verification Code
          </label>
          <input
            type="number"
            id="code"
            name="code"
            value={verificationCode.code}
            onChange={handleChange}
            className="appearance-none border rounded shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Verification Code"
            required
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-[#02152c] hover:bg-[#02152c] text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          >
            {isLoading ? <LoadingSpinner></LoadingSpinner> : <>Submit</>}
          </button>
        </div>
      </form>
    </div>
  );
};
export default VerifyCodeForm;

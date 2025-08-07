import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Building2, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'jobseeker',
    company: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!signupData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!signupData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(signupData.email)) newErrors.email = 'Invalid email format';
    if (!signupData.password) newErrors.password = 'Password is required';
    else if (signupData.password.length < 8)
      newErrors.password = 'Password must be at least 8 characters';
    if (!signupData.confirmPassword) newErrors.confirmPassword = 'Please confirm password';
    else if (signupData.password !== signupData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (signupData.accountType === 'employer' && !signupData.company.trim())
      newErrors.company = 'Company name is required';
    if (!signupData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      console.log('Signup:', signupData);
      alert('Account created successfully!');
    }
  };
  return (
    <div className="h-screen flex">
      {/* Left Half - Image/Graphics */}
      <div className="w-3/5 p-4 bg-white">
        <div className=" h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center rounded-lg">
          <div className="text-center text-white p-8">
            <Briefcase className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Join TalentFlow</h1>
            <p className="text-xl mb-8">Start your career journey</p>

            <div className="space-y-6">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">50,000+</div>
                <div className="text-green-100">Active Users</div>
              </div>

              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-green-100">Job Opportunities</div>
              </div>

              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-green-100">Partner Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Signup Form */}
      <div className="w-2/5 bg-white flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-md p-8">
          <div className="my-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Join our platform today</p>
          </div>

          <div className="space-y-4">
            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`cursor-pointer rounded-lg border-2 p-3 relative ${
                    signupData.accountType === 'jobseeker'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="accountType"
                    value="jobseeker"
                    checked={signupData.accountType === 'jobseeker'}
                    onChange={handleSignupChange}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <User
                      className={`w-6 h-6 mx-auto mb-2 ${
                        signupData.accountType === 'jobseeker' ? 'text-green-600' : 'text-gray-400'
                      }`}
                    />
                    <div className="font-medium text-sm">Job Seeker</div>
                  </div>
                  {signupData.accountType === 'jobseeker' && (
                    <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-green-600" />
                  )}
                </label>

                <label
                  className={`cursor-pointer rounded-lg border-2 p-3 relative ${
                    signupData.accountType === 'employer'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="accountType"
                    value="employer"
                    checked={signupData.accountType === 'employer'}
                    onChange={handleSignupChange}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <Building2
                      className={`w-6 h-6 mx-auto mb-2 ${
                        signupData.accountType === 'employer' ? 'text-green-600' : 'text-gray-400'
                      }`}
                    />
                    <div className="font-medium text-sm">Employer</div>
                  </div>
                  {signupData.accountType === 'employer' && (
                    <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-green-600" />
                  )}
                </label>
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleSignupChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.firstName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleSignupChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.lastName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            {/* Company Field (Employers only) */}
            {signupData.accountType === 'employer' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    name="company"
                    value={signupData.company}
                    onChange={handleSignupChange}
                    className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.company ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Your Company Inc."
                  />
                </div>
                {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            {/* Password Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className={`w-full pl-9 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    className={`w-full pl-9 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Terms Agreement */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={signupData.agreeToTerms}
                  onChange={handleSignupChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <button className="text-green-600 hover:text-green-700 underline">Terms</button>{' '}
                  and{' '}
                  <button className="text-green-600 hover:text-green-700 underline">
                    Privacy Policy
                  </button>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-xs text-red-600">{errors.agreeToTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSignup}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-br from-green-500 to-blue-600  hover:bg-blue-700 hover:shadow-lg transition-all ease-in-out'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Login Link */}
            <div className="text-center pt-3 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/sign-in')}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

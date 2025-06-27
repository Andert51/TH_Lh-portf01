import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Login = () => {
  const [selectedType, setSelectedType] = useState("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const result = await login(formData.email, formData.password, selectedType);
      
      if (result.success) {
        if (selectedType === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fillAdminCredentials = () => {
    setFormData({
      email: "lhyan@gmail.com",
      password: "1234"
    });
    setSelectedType("admin");
  };

  return (
    <div className='bg-primary min-h-screen'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className='max-w-7xl mx-auto px-6 py-20 pt-32'>
          <motion.div variants={textVariant()} initial="hidden" animate="show">
            <p className={`${styles.sectionSubText}`}>Welcome Back</p>
            <h2 className={`${styles.sectionHeadText}`}>Log In.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            animate="show"
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Choose how you'd like to access the platform. Login as an admin to manage 
            characters and content, or as a user to explore and potentially commission artwork.
          </motion.p>
        </div>
      </div>

      <div className='max-w-2xl mx-auto px-6 py-12'>
        <motion.div
          variants={fadeIn("up", "", 0.3, 1)}
          initial="hidden"
          animate="show"
          className='bg-tertiary p-8 rounded-2xl'
        >
          {/* Login Type Selection */}
          <div className='mb-8'>
            <h3 className='text-white font-bold text-[20px] mb-4'>Select Login Type</h3>
            <div className='flex gap-4'>
              <button
                type="button"
                onClick={() => setSelectedType("user")}
                className={`flex-1 py-4 px-6 rounded-lg font-medium transition-colors ${
                  selectedType === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-black-200 text-secondary hover:text-white"
                }`}
              >
                <div className='text-center'>
                  <div className='text-lg font-bold'>User</div>
                  <div className='text-sm opacity-80'>Browse & Commission</div>
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => setSelectedType("admin")}
                className={`flex-1 py-4 px-6 rounded-lg font-medium transition-colors ${
                  selectedType === "admin"
                    ? "bg-purple-600 text-white"
                    : "bg-black-200 text-secondary hover:text-white"
                }`}
              >
                <div className='text-center'>
                  <div className='text-lg font-bold'>Admin</div>
                  <div className='text-sm opacity-80'>Manage Content</div>
                </div>
              </button>
            </div>
          </div>

          {/* Admin Quick Login */}
          {selectedType === "admin" && (
            <div className='mb-6'>
              <button
                type="button"
                onClick={fillAdminCredentials}
                className='w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors'
              >
                Fill Admin Credentials
              </button>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='text-white font-medium mb-2 block'>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
                placeholder={selectedType === "admin" ? "Admin email" : "Your email address"}
              />
            </div>

            <div>
              <label className='text-white font-medium mb-2 block'>
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className='w-full bg-black-200 py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary'
                placeholder={selectedType === "admin" ? "Admin password" : "Your password"}
              />
            </div>

            {/* Instructions */}
            <div className='bg-black-200 p-4 rounded-lg'>
              <div className='text-secondary text-sm'>
                {selectedType === "admin" ? (
                  <div>
                    <div className='font-medium text-white mb-2'>Admin Access:</div>
                    <div>• Email: lhyan@gmail.com</div>
                    <div>• Password: 1234</div>
                    <div className='mt-2'>Access character management and admin panel.</div>
                  </div>
                ) : (
                  <div>
                    <div className='font-medium text-white mb-2'>User Registration:</div>
                    <div>• Enter any email and password</div>
                    <div>• New accounts are created automatically</div>
                    <div>• Your info is saved for future commissions</div>
                  </div>
                )}
              </div>
            </div>

            {/* Message */}
            {message && (
              <div className={`p-3 rounded-lg ${message.includes("Invalid") || message.includes("error") ? "bg-red-600" : "bg-green-600"} text-white`}>
                {message}
              </div>
            )}

            {/* Submit Button */}
            <div className='flex justify-end gap-4'>
              <button
                type="button"
                onClick={() => navigate("/")}
                className='bg-black-200 py-3 px-8 rounded-lg text-secondary hover:text-white transition-colors'
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`py-3 px-8 rounded-lg text-white font-bold transition-colors disabled:opacity-50 ${
                  selectedType === "admin" 
                    ? "bg-purple-600 hover:bg-purple-700" 
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Logging in..." : `Log in as ${selectedType === "admin" ? "Admin" : "User"}`}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

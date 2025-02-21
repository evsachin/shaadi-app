import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Landing = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-black shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">MyBusiness</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#home" className="text-white hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="text-white hover:text-blue-600">
              Services
            </a>
            <a href="#reviews" className="text-white hover:text-blue-600">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-blue-600">
              Contact
            </a>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-blue-500 text-white text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold">Welcome to MyBusiness</h2>
          <p className="mt-4 text-lg">
            We provide top-notch services to make your life easier.
          </p>
          <button className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {["Web Development", "Graphic Design", "Digital Marketing"].map(
              (service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 shadow-md rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold">{service}</h3>
                  <p className="text-gray-600 mt-2">
                    We provide excellent {service} services for your business.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <motion.div
            className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg w-3/4 mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-700">
              "Amazing service! Highly recommended."
            </p>
            <h4 className="mt-4 font-bold">- John Doe</h4>
          </motion.div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <div className="mt-10 bg-white p-6 shadow-lg rounded-lg w-3/4 mx-auto">
            <form className="space-y-4">
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <FaUser className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full outline-none"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full outline-none"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <FaPhone className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full outline-none"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-lg"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

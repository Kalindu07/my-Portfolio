"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollAnimation direction="left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about
                technology and development.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-blue-100 dark:bg-green-900 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-800 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">kalindulakshanhh@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-green-100 dark:bg-emerald-900 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-green-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+9470-2017080</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-purple-100 dark:bg-lime-900 rounded-lg group-hover:bg-lime-100 dark:group-hover:bg-lime-800 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-lime-400 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            direction="right"
            delay={400}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-green-500 dark:group-focus-within:text-green-400 transition-colors duration-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-green-300 dark:hover:border-green-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-green-500 dark:group-focus-within:text-green-400 transition-colors duration-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-green-300 dark:hover:border-green-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-green-500 dark:group-focus-within:text-green-400 transition-colors duration-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-green-300 dark:hover:border-green-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 dark:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

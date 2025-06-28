import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import emailjs from 'emailjs-com';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = ["HTML5", "CSS3", "JavaScript", "Node.js", "React", "Git", "GitHub"];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Hello<span className="text-green-500">.</span>
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-0.5 bg-green-500"></div>
                <h2 className="text-2xl md:text-3xl text-gray-300">
                  I'm <span className="text-white font-semibold">Kalindu Lakshan</span>
                </h2>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">Software Developer</h3>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-600 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden"
              >
                <span className="relative z-10">Got a project?</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="/Kalindu Lakshan RavinayakaN.pdf"
                download
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="relative z-10">My resume</span>
                <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex space-x-6 transform transition-all duration-1000 delay-800 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <a
                href="https://github.com/Kalindu07"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
              >
                <Github className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/kalindulakshan/"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
              >
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
              </a>
              <a
                href="mailto:Kalindulakshanhh@gmail.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
              >
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-green-500 opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-green-500 opacity-50"></div>

              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 group hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-green-500/30 group-hover:border-green-500/50 transition-colors duration-500">
                    <img
                      src={require('../images/1727794637037.jpeg')}
                      alt="Kalindu Lakshan - Software Developer"
                      width="400"
                      height="400"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-green-500 rounded-full animate-float opacity-60"></div>
                <div
                  className="absolute bottom-1/4 -right-8 w-6 h-6 border-2 border-green-500 rounded-full animate-float opacity-40"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 -right-12 w-2 h-2 bg-green-400 rounded-full animate-float opacity-80"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack - Bottom */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-gray-400">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="hover:text-green-400 transition-colors duration-300 cursor-default font-medium"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ArrowDown className="w-6 h-6 text-gray-400 hover:text-green-400 transition-colors duration-300 cursor-pointer animate-bounce" />
        </div>
      </div>
    </section>
  );
}

import { Code, Palette, Zap } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions that combine beautiful
            design with powerful functionality.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Started as a curious student who loved solving problems with code, I've evolved into a full-stack
                developer who thrives on turning complex challenges into elegant solutions. My experience spans from
                startups to enterprise applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-500 dark:text-green-400 group-hover:animate-pulse">
                    50+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-500 dark:text-green-400 group-hover:animate-pulse">
                    5+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Years</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-500 dark:text-green-400 group-hover:animate-pulse">
                    100+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Commits</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={400} className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-green-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Code className="w-8 h-8 text-green-500 dark:text-green-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Writing maintainable, scalable code that follows best practices and industry standards.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-purple-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Palette className="w-8 h-8 text-purple-500 dark:text-purple-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Design Thinking</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating user-centered designs that are both beautiful and functional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-emerald-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Zap className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimizing applications for speed, accessibility, and user experience.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

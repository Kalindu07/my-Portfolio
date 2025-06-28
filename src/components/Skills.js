import ScrollAnimation from "./ScrollAnimation";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 60 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 94 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 80 },
        { name: "JAVA", level: 82 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 30 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimation
              key={categoryIndex}
              direction="up"
              delay={categoryIndex * 200}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/skill:text-green-500 dark:group-hover/skill:text-green-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-green-500 dark:bg-green-400 h-2 rounded-full transition-all duration-2000 ease-out hover:bg-green-600 dark:hover:bg-green-300 animate-skill-bar"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

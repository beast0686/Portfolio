import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Google',
      location: 'Mountain View, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications serving millions of users daily.',
      achievements: [
        'Architected and implemented microservices infrastructure reducing system latency by 40%',
        'Led a team of 5 developers in building next-generation user interfaces',
        'Optimized database queries resulting in 60% improvement in application performance',
        'Mentored junior developers and conducted technical interviews',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'GCP', 'Kubernetes', 'PostgreSQL'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Microsoft',
      location: 'Seattle, WA',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed enterprise-level applications and cloud solutions for business clients.',
      achievements: [
        'Built and deployed 15+ web applications using modern JavaScript frameworks',
        'Collaborated with cross-functional teams to deliver features on tight deadlines',
        'Implemented automated testing strategies improving code quality by 50%',
        'Contributed to open-source projects and internal developer tools',
      ],
      technologies: ['Vue.js', 'Azure', 'C#', '.NET Core', 'Docker', 'MongoDB'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Facebook (Meta)',
      location: 'Menlo Park, CA',
      period: 'Summer 2020',
      type: 'Internship',
      description: 'Worked on social media platform features and machine learning algorithms.',
      achievements: [
        'Developed recommendation algorithms improving user engagement by 25%',
        'Created data visualization dashboards for product analytics team',
        'Participated in code reviews and contributed to engineering best practices',
        'Presented final project to senior leadership team',
      ],
      technologies: ['Python', 'React', 'GraphQL', 'Machine Learning', 'AWS'],
    },
  ];

  return (
    <div className="py-20 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through challenging roles and impactful projects that have shaped my expertise in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white mr-4">
                          <Briefcase size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-3 flex items-center">
                        <ArrowRight size={16} className="mr-2 text-blue-500" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
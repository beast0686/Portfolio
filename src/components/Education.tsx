import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'BNM Institute of Technology',
      location: 'Bangalore, Karnataka, India',
      period: '2022 - Present',
      gpa: '8.91/10.0',
      highlights: [
        'Specialization in Machine Learning and AI',
        'I am a Part of BNMIT Super60 Program',
        'Treasurer at IEEE Computer Society',
        'I am a part of IAMPro-2025 (Internship and Mentorship Program from IEEE',
        'Secured First Place in  Enigma Redesigned hosted at Christ University',
      ],
    },
    {
      degree: 'Pre-University College',
      institution: 'Indian National PU College',
      location: 'Bangalore, Karnataka, India',
      period: '2020 - 2022',
      gpa: '8.6/10.0',
      highlights: [
        'First Class with Distinction',
        'KCET Rank - 13.5K',
        '100 on 100 in Mathematics in 12th Board Exam',
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic journey and qualifications that shaped my technical foundation and problem-solving approach.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Education Card */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white mr-4">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800">
                      <Award size={16} className="text-green-600 dark:text-green-400 mr-2" />
                      <span className="text-green-700 dark:text-green-300 font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
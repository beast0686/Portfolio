import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Shield, Award } from 'lucide-react';
import CertificationModal from './CertificationModal';

const Skills: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    {
      icon: Globe,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 78 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ];

  const certifications = [
    {
      id: '1',
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      link: 'https://aws.amazon.com/certification/',
      description: 'Validates expertise in developing and maintaining applications on the AWS platform. Demonstrates proficiency in AWS core services, uses, and basic AWS architecture best practices.',
      image: null,
    },
    {
      id: '2',
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: 'January 2024',
      link: 'https://cloud.google.com/certification',
      description: 'Demonstrates ability to design, develop, and manage robust, secure, scalable, and dynamic solutions to drive business objectives using Google Cloud technologies.',
      image: null,
    },
    {
      id: '3',
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'November 2023',
      link: 'https://university.mongodb.com/certification',
      description: 'Validates skills in MongoDB database development, including data modeling, indexing, aggregation, and application development best practices.',
      image: null,
    },
    {
      id: '4',
      name: 'React Advanced Certification',
      issuer: 'Meta (Facebook)',
      date: 'September 2023',
      link: 'https://developers.facebook.com/developercircles/',
      description: 'Advanced certification covering React ecosystem, including hooks, context, performance optimization, testing, and modern React patterns.',
      image: null,
    },
    {
      id: '5',
      name: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'July 2023',
      link: 'https://www.cncf.io/certification/cka/',
      description: 'Certified Kubernetes Administrator (CKA) validates skills in cluster administration, networking, security, and troubleshooting in Kubernetes environments.',
      image: null,
    },
  ];

  const handleCertificationClick = (certification: any) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  return (
    <div className="py-20 bg-white/50 dark:bg-gray-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about cutting-edge technologies and continuously expanding my skill set to deliver exceptional solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white mr-4">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20"
        >
          <div className="flex items-center justify-center mb-8">
            <Award className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Interactive Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCertificationClick(cert)}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20 cursor-pointer group"
              >
                <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full w-12 h-12 mx-auto mb-3 group-hover:from-green-500 group-hover:to-blue-600 transition-all duration-300">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {cert.date}
                </p>
                <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view details
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Skills;
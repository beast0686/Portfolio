import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Shield, Award } from 'lucide-react';
import CertificationModal from './CertificationModal';
import TiltCard from './effects/TiltCard';
import GlowingBorder from './effects/GlowingBorder';
import { useSoundEffects } from './effects/SoundProvider';
import { useStaggerAnimation } from './effects/GSAPAnimations';
import dataAnalysis from './files/Data_Analysis_with_Python_IBM.jpg';
import dataVisualization from './files/Data_Visualization_with_Python_IBM.jpg';
import pythonForDataScience from './files/Python_for_Data_Science_IBM.jpg';

const Skills: React.FC = () => {
    const [selectedCertification, setSelectedCertification] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { playClick, playHover } = useSoundEffects();

    // GSAP animations
    useStaggerAnimation('.skill-card', 0.2);
    useStaggerAnimation('.cert-card', 0.1);

    const skillCategories = [
        {
            icon: Code,
            title: 'Frontend Development',
            skills: [
                { name: 'HTML', level: 95 },
                { name: 'Javascript', level: 70 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'React/Next.js', level: 40 },
                { name: 'TypeScript', level: 40 },
                { name: 'Vue.js', level: 30 },
            ],
        },
        {
            icon: Database,
            title: 'Backend Development',
            skills: [
                { name: 'C', level: 80 },
                { name: 'Python', level: 85 },
                { name: 'Java', level: 75 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'MongoDB', level: 65 },
                { name: 'Node.js', level: 30 },
            ],
        },
        {
            icon: Globe,
            title: 'Cloud & DevOps',
            skills: [
                { name: 'AWS', level: 30 },
                { name: 'Docker', level: 30 },
                { name: 'Kubernetes', level: 10 },
            ],
        },
    ];

    const certifications = [
        {
            id: '1',
            name: 'Python for Data Science',
            issuer: 'International Business Machines Corporation (IBM)',
            date: 'May 2024',
            link: 'https://courses.cognitiveclass.ai/certificates/4d8b5dac44244a8295428c23f306579b',
            description: 'Python for Data Science',
            image: pythonForDataScience,
        },
        {
            id: '2',
            name: 'Data Visualization with Python',
            issuer: 'International Business Machines Corporation (IBM)',
            date: 'January 2025',
            link: 'https://courses.cognitiveclass.ai/certificates/de385f5549e54a9b8dfbecd49aebb228',
            description: '',
            image: dataVisualization,
        },
        {
            id: '3',
            name: 'Data Analysis with Python',
            issuer: 'International Business Machines Corporation (IBM)',
            date: 'January 2025',
            link: 'https://courses.cognitiveclass.ai/certificates/d2e3a90aea674587b6335468a16a4ea1',
            description: '',
            image: dataAnalysis,
        },
    ];

    const handleCertificationClick = (certification: any) => {
        playClick();
        setSelectedCertification(certification);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        playClick();
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
                        <TiltCard
                            key={category.title}
                            className="skill-card"
                            options={{ max: 10, scale: 1.02 }}
                        >
                            <GlowingBorder glowColor="blue">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    onHoverStart={playHover}
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
                            </GlowingBorder>
                        </TiltCard>
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
                            <TiltCard
                                key={cert.id}
                                className="cert-card"
                                options={{ max: 20, scale: 1.05 }}
                            >
                                <GlowingBorder glowColor="green">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleCertificationClick(cert)}
                                        onHoverStart={playHover}
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
                                </GlowingBorder>
                            </TiltCard>
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

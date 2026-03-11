import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {ExternalLink, Github, X, Code, Smartphone, Globe, Database, Music} from 'lucide-react';
import TiltCard from './effects/TiltCard';
import GlowingBorder from './effects/GlowingBorder';
import { useSoundEffects } from './effects/SoundProvider';
import { useStaggerAnimation } from './effects/GSAPAnimations';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  category: string;
  features: string[];
  icon: React.ElementType;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { playClick, playHover } = useSoundEffects();
  
  // GSAP animations
  useStaggerAnimation('.project-card', 0.2);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Mini Dio',
      description: 'Meeting Minutes Generator',
      longDescription: '',
      image: 'https://img.freepik.com/premium-vector/businessman-presenting-business-professional-office-teamwork-animation-colleague-seminar-meeting_40876-1575.jpg?w=2000',
      technologies: ['Python', 'Django', 'Google Cloud Speech-to-Text', 'Google GenAI', 'Tailwind CSS', 'Bootstrap', 'PostgreSQL'],
      githubUrl: 'https://github.com/beast0686/MiniDio',
      category: 'Web',
      icon: Globe,
      features: [
        'Prepared a system to generate comprehensive documentation for minutes of a meeting in markdown format.',
        'Multilingual support with Google Cloud Speech-to-Text and also deployed on Google Cloud.',
        'Generates minutes of meeting in a structured format with speaker diarization.',
      ],
    },
    {
      id: 2,
      title: 'Beat Frame',
      description: 'Music Video Generation Tool',
      longDescription: '',
      image: 'https://pictory.ai/wp-content/uploads/2024/03/Music-Video-Generator-1.png',
      technologies: ['Python', 'Streamlit', 'Librosa', 'OpenAI Whisper', 'GPT-4o', 'Stable Diffusion', 'MoviePy'],
      githubUrl: 'https://github.com/beast0686/Beat-Frame',
      category: 'Mobile',
      icon: Music,
      features: [
        'AI music-video generator that generates videos based on beat stamps.',
        'Uses OpenAI for descriptive prompts and Stable Diffusion for high quality image generation.',
        'Accurately generates high quality images resulting in quality content creation.',
      ],
    },
    {
      id: 3,
      title: 'Play Pulse',
      description: 'Data Analysis and Prediction of Custom PCs, Gaming Laptops and Consoles',
      longDescription: '',
      image: 'https://www.custompc.com/wp-content/sites/custompc/2023/05/Ferns.jpg',
      technologies: ['Python', 'Pandas', 'Numpy', 'Plotly Express', 'Plotly Graph Objects', 'Streamlit', 'Scikit-learn'],
      githubUrl: 'https://github.com/beast0686/Play-Pulse',
      category: '',
      icon: Database,
      features: [
        'PC, Consoles and Laptop Sales analysis and Prediction.',
        'Dataset for the project was collected from multiple shops and showrooms in Bangalore.',
        'Analyzed sales data contributed in the better inventory management.',
      ],
    },
    {
      id: 4,
      title: 'Meme Wizard',
      description: 'AI Meme Generation Platform',
      longDescription: '',
      image: 'https://i.ytimg.com/vi/q4u4gzNFIw0/maxresdefault.jpg',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Gemini API', 'Imgflip API'],
      githubUrl: 'https://github.com/beast0686/Meme-Wizard',
      category: '',
      icon: Globe,
      features: [
        'AI meme generator that generates memes based on sentiment analysis.',
        'Uses Gemini and Imgflip APIs to generate both AI and existing sentiment-based memes.',
        'Accurately captures real conversations, enabling targeted marketing and content creation.',
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
            Featured 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A collection of my best work showcasing different technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <TiltCard
                key={project.id}
                className="project-card"
                options={{ max: 15, scale: 1.02 }}
              >
                <GlowingBorder glowColor="blue">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => {
                      playClick();
                      setSelectedProject(project);
                    }}
                    onHoverStart={playHover}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200/20 dark:border-gray-700/20"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <project.icon className="text-white" size={24} />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            playClick();
                          }}
                          onHoverStart={playHover}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </GlowingBorder>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <GlowingBorder glowColor="pink">
                    <button
                      onClick={() => {
                        playClick();
                        setSelectedProject(null);
                      }}
                      onMouseEnter={playHover}
                      className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <X size={20} />
                    </button>
                  </GlowingBorder>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <selectedProject.icon className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <GlowingBorder glowColor="green">
                      <motion.a
                        href={selectedProject.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={playClick}
                        onHoverStart={playHover}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                    </GlowingBorder>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
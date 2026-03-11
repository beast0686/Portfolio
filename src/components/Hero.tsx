import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './effects/ParticleBackground';
import TiltCard from './effects/TiltCard';
import AnimatedText from './effects/AnimatedText';
import GlowingBorder from './effects/GlowingBorder';
import { useSoundEffects } from './effects/SoundProvider';
import { useScaleOnScroll } from './effects/GSAPAnimations';
import Resume from './files/Aman_Resume.pdf';
import Profile from './files/Profile.jpg';
import { saveAs } from 'file-saver';

const Hero: React.FC = () => {
  const { playClick, playHover } = useSoundEffects();
  
  // GSAP animations
  useScaleOnScroll('.hero-content');

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    playClick();
    saveAs(Resume, 'Aman_Resume.pdf'); // Trigger download with the imported PDF
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Particle Background */}
      <ParticleBackground className="z-0" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left hero-content"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            >
              <span className="text-blue-600 dark:text-blue-400 font-medium">Welcome</span>
            </motion.div>

            <AnimatedText
              text="Hi, I'm Aman"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              delay={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Passionate and detail-oriented Software Engineer with a strong foundation in programming, problem-solving, and system design. Adept at collaborating in team settings, with hands-on experience from academic projects. Passionate about learning new technologies and eager to contribute to innovative software solutions. Ready to apply theoretical knowledge in real-world applications and grow within a dynamic tech environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12"
            >
              <GlowingBorder glowColor="blue">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={playHover}
                  onClick={() => {
                    playClick();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </GlowingBorder>
              
              <GlowingBorder glowColor="purple">
                <motion.a
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={playHover}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </GlowingBorder>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-6 items-center justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/beast0686', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-soudagar/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:amansoudagar202@gmail.com', label: 'Email' },
              ].map((social) => (
                <GlowingBorder key={social.label} glowColor="cyan">
                  <motion.a
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={playHover}
                    className="p-3 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 block"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                </GlowingBorder>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <TiltCard 
              className="relative"
              options={{ max: 25, scale: 1.05, speed: 1000 }}
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 scale-110"
              />
              
              <GlowingBorder glowColor="purple" borderRadius="rounded-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-2 shadow-2xl z-10"
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-6xl">
                    <img src={Profile} alt="Profile Picture" className="w-full h-full object-cover rounded-full" />
                  </div>
                </motion.div>
              </GlowingBorder>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToSkills}
        onHoverStart={playHover}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-300 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Hero;
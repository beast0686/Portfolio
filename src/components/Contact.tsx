import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amansoudagar202@gmail.com',
      href: 'mailto:amansoudagar202@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+919019722243',
      href: 'tel:+919019722243',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: 'https://maps.app.goo.gl/tiPV9zog3SLMRdnQ9',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/beast0686/',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aman-soudagar/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/aman_soudagar',
      color: 'hover:text-blue-400',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/9019722243',
      color: 'hover:text-green-500',
    },
  ];

  return (
      <div className="py-20 bg-white/50 dark:bg-gray-900/50 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project or just want to chat? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="flex flex-col items-center max-w-2xl mx-auto">
            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Let's Connect
              </h3>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                    <motion.a
                        key={info.label}
                        href={info.href}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white mr-4">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{info.value}</p>
                      </div>
                    </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social) => (
                      <motion.a
                          key={social.label}
                          href={social.href}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                          aria-label={social.label}
                      >
                        <social.icon size={24} />
                      </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Award, Building } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
  description: string;
  image?: string;
}

interface CertificationModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
  certification,
  isOpen,
  onClose,
}) => {
  if (!certification) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200/20 dark:border-gray-700/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <X size={20} className="text-gray-500 dark:text-gray-400" />
              </button>
              
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {certification.name}
                  </h2>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                    <Building size={16} className="mr-2" />
                    <span>{certification.issuer}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Certificate Image */}
              <div className="mb-6">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                  {certification.image ? (
                    <img
                      src={certification.image}
                      alt={`${certification.name} Certificate`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-center">
                      <Award size={48} className="text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-500 dark:text-gray-400">Certificate Preview</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500">Image not available</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar size={20} className="mr-3 text-blue-500" />
                  <div>
                    <p className="font-medium">Issue Date</p>
                    <p className="text-sm">{certification.date}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {certification.description}
                  </p>
                </div>

                {certification.link && (
                  <motion.a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    Verify Certificate
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificationModal;
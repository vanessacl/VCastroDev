import React, { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projectsData, Project } from '../data/projectsData';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-[#f0eff4]"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            variants={itemVariants}
          >
            <span className="text-[#000000]">My</span>
            <span className="text-[#e0aaff]"> Projects</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {projectsData.map((project, index) => (
              <motion.div 
                key={index}
                className="group bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                <motion.div 
                  className="h-64 bg-[#000000]/5 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-[#000000]">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#000000]/80 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-[#e0aaff]/20 text-[#000000] text-sm py-1 px-3 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#30004d]/30 hover:bg-[#30004d]/80 transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 180,
                  boxShadow: "0 5px 15px rgba(224, 170, 255, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-[#ffffff] group-hover:text-[#000000]" />
              </motion.button>

              <div className="h-[300px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-[#000000]/80 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#000000] mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#e0aaff]/20 text-[#000000] py-1.5 px-4 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#000000] text-white py-2 px-6 rounded-lg hover:bg-[#e0aaff] hover:text-[#000000] transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(224, 170, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-[#000000] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#000000] hover:text-white transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { skillsData } from '../data/skillsData';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-[#000000]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#ffffff]">Technical</span>
            <span className="text-[#e0aaff]"> Stack</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#e0aaff]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
                
                <div className="relative bg-[#ffffff]/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-[#ffffff]/10 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e0aaff] via-[#ffffff] to-[#e0aaff]"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.2 }}
                  />
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-8 text-[#e0aaff]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
                  >
                    {category.category}
                  </motion.h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group/skill"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.4,
                          delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        <motion.div
                          className="relative bg-gradient-to-r from-[#ffffff]/10 to-[#ffffff]/5 px-4 py-2 rounded-xl text-[#ffffff] transition-all duration-300"
                          whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            backgroundColor: "rgba(224, 170, 255, 0.2)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10 text-sm font-medium">
                            {skill.name}
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#e0aaff]/20 via-[#ffffff]/10 to-[#e0aaff]/20 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
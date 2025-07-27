import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-[#f0eff4] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#000000]">About</span>
            <span className="text-[#e0aaff]"> Me</span>
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="relative z-10 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#e0aaff] to-[#ffffff] p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/social-media-pic.jpeg"
                  alt="Vanessa Castro" 
                  className="w-full rounded-[1.9rem] bg-[#f0eff4]"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-full h-full border-4 border-[#000000] rounded-[2rem] z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#e0aaff] rounded-[2rem] z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >              
              <motion.p 
                className="text-[#000000] mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I'm a dedicated Front-End Developer with over four years of hands-on experience building intuitive apps for global brands at GMR Marketing. I thrive on creating ADA-compliant web experiences that boost accessibility scores by up to 15%, drawing on my expertise in modern JavaScript frameworks like React.js and core UI/UX design principles. This allows me to bridge the gap between creative vision and technical execution, turning complex ideas into polished, functional realities—while leveraging my bilingual skills in English and Spanish to collaborate effectively on international projects.
              </motion.p>
              <motion.p 
                className="text-[#000000] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                What fuels my work is a commitment to writing clean, scalable code and developing responsive interfaces that shine across all devices. With a growth mindset, I'm actively refreshing JavaScript for enterprise roles and exploring AI-integrated UIs in 2025 trends. By fusing technical expertise with innovative problem-solving, I deliver user-focused solutions that exceed expectations and drive meaningful digital impact.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.a 
                  href="/VanessaCastro_FrontEndDev_Resume.pdf" 
                  download
                  className="flex items-center gap-2 bg-[#000000] text-[#ffffff] py-3 px-6 rounded-full hover:bg-[#e0aaff] hover:text-[#000000] transition-colors"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(224, 170, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="bg-transparent border-2 border-[#000000] text-[#000000] py-3 px-6 rounded-full hover:bg-[#000000] hover:text-[#ffffff]"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
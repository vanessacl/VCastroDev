import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 600);
    }

    if (button) {
      button.style.opacity = '0';
      button.style.transform = 'translateY(20px)';
      setTimeout(() => {
        button.style.transition = 'opacity 1s ease, transform 1s ease';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#000000] text-[#ffffff] overflow-hidden pt-16">
      <motion.div 
        className="absolute w-full h-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-0 right-0 w-2/3 h-full bg-[#e0aaff] opacity-10 transform rotate-45 translate-x-1/4 -translate-y-1/4"
          animate={{ 
            rotate: [45, 50, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-[#e0aaff] opacity-5 transform -rotate-45 -translate-x-1/4 translate-y-1/4 rounded-full"
          animate={{ 
            rotate: [-45, -40, -45],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="block bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#e0aaff] to-[#ffffff] animate-gradient bg-300% mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Front-End Developer
          </motion.span>
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#e0aaff] to-[#ffffff] animate-gradient bg-300% inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            & UI/UX Enthusiast
          </motion.span>
        </motion.h1>
        <motion.p 
          ref={subtitleRef}
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-[#f0eff4]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting beautiful, responsive, and user-friendly web experiences with modern technologies and creative solutions.
        </motion.p>
        <motion.a 
          ref={buttonRef}
          href="#projects" 
          className="inline-block bg-[#e0aaff] text-[#000000] font-medium py-3 px-8 rounded-full hover:bg-[#ffffff] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(224, 170, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
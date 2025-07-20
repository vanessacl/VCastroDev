import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-[#000000] text-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.p 
            className="text-[#ffffff]/80 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} VanessaCastro
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: Github, href: 'https://github.com/vanessacl', label: 'GitHub Profile' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vanessacastrol/', label: 'LinkedIn Profile' }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ffffff]/10 text-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#e0aaff] hover:text-[#000000] transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: "0 5px 15px rgba(224, 170, 255, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <span className="sr-only">{link.label}</span>
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
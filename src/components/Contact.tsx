import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  console.log('SERVICE ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('TEMPLATE ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log('PUBLIC KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Replace with your EmailJS public key
        }        
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-[#ffffff]"
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
            <span className="text-[#000000]">Get in</span>
            <span className="text-[#e0aaff]"> Touch</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div 
              className="lg:col-span-2 space-y-8"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-[#000000] mt-3 mb-10 leading-relaxed"
                variants={itemVariants}
              >
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </motion.h3>
              
              <motion.h3 
                className="text-2xl font-semibold text-[#000000] mb-6"
                variants={itemVariants}
              >
                Contact Information
              </motion.h3>
              
              {[
                { icon: Mail, title: 'Email', content: 'vanessa.castro.dev@gmail.com', href: 'mailto:vanessa.castro.dev@gmail.com' },
                { icon: Phone, title: 'Phone', content: '+1 (360) 936-0085', href: 'tel:+13609360085' },
                { icon: MapPin, title: 'Location', content: 'Vancouver, WA', href: null }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-[#e0aaff]/20 p-3 rounded-full text-[#e0aaff]">
                    <item.icon size={24} className="text-[#000000]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#000000] mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-[#000000]/70 hover:text-[#e0aaff] transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-[#000000]/70">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3 bg-[#f0eff4] p-8 rounded-lg"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold text-[#000000] mb-6"
                variants={itemVariants}
              >
                Send Me a Message
              </motion.h3>
              
              {submitStatus.type && (
                <motion.div 
                  className={`${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  } border rounded-lg p-4 mb-6`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              
              <motion.form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={containerVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'name', label: 'Name', type: 'text' },
                    { name: 'email', label: 'Email', type: 'email' }
                  ].map((field) => (
                    <motion.div 
                      key={field.name}
                      variants={itemVariants}
                    >
                      <label htmlFor={field.name} className="block text-sm font-medium text-[#000000] mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#ffffff] border border-[#000000]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0aaff]"
                      />
                    </motion.div>
                  ))}
                </div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#000000] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#ffffff] border border-[#000000]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0aaff]"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-[#000000] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#ffffff] border border-[#000000]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0aaff]"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#000000] text-[#ffffff] font-medium py-3 px-6 rounded-lg hover:bg-[#e0aaff] hover:text-[#000000] transition-colors"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(224, 170, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
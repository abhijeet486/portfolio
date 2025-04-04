// src/components/Portfolio/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Mail size={20} />, text: "sabhijeet652@gmail.com", href: "mailto:sabhijeet652@gmail.com" },
  { icon: <Github size={20} />, text: "GitHub", href: "https://github.com/abhijeet486" },
  { icon: <Linkedin size={20} />, text: "LinkedIn", href: "https://linkedin.com/in/abhijeet-singh-92202b212" }
];

export const Hero = () => {
  return (
    <div className="relative px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden bg-glass backdrop-blur-xl p-8"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white/90 mb-4">Abhijeet Singh Rajput</h1>
            <p className="text-xl text-white/70 mb-8">Full Stack Developer & ML Engineer</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon}
                  <span className="text-white/80">{link.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
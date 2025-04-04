import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, GitBranch, Calendar, ChevronDown } from 'lucide-react';
import { projects } from '../../data';

export const ProjectsTab = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Code className="text-blue-500" size={24} />
            Notable Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {projects.slice(0, showMore ? projects.length : 3).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <GitBranch className="text-blue-400" size={18} />
                <h3 className="text-xl font-semibold text-white/90">{project.title}</h3>
              </div>
              <p className="text-white/60 mb-2">{project.subtitle}</p>
              <p className="text-white/50 text-sm mb-4 flex items-center gap-2">
                <Calendar size={14} />
                {project.date}
              </p>
              <ul className="space-y-2 mb-4">
                {project.details.map((detail, i) => (
                  <li key={i} className="text-white/70">• {detail}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
          
          {!showMore && projects.length > 3 && (
            <button
              onClick={() => setShowMore(true)}
              className="w-full py-3 text-white/70 hover:text-white transition-colors flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10"
            >
              Show More Projects
              <ChevronDown className="animate-bounce" />
            </button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
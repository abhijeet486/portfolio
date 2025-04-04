import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, Building2, Calendar, Search } from 'lucide-react';
import { research } from '../../data';

export const ResearchTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <FlaskConical className="text-purple-500" size={24} />
            Research Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-semibold text-white/90 mb-2">{item.title}</h3>
              <div className="flex items-center gap-3 text-white/60 mb-4">
                <Building2 size={16} />
                <span>{item.institution}</span>
                <Calendar size={16} />
                <span>{item.period}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.areas.map((area) => (
                  <Badge key={area} variant="secondary">{area}</Badge>
                ))}
              </div>
              <ul className="space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Search size={16} className="mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};
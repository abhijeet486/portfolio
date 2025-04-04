import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

const courses = [
  'Software Development',
  'Operating Systems',
  'Data Structures',
  'Computer Vision',
  'NLP',
  'Machine Learning'
];

export const EducationTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <GraduationCap className="text-amber-500" size={24} />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-2xl bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-white/90 mb-2">IIIT-Delhi</h3>
            <p className="text-white/60 mb-2">
              B.Tech in Computer Science and Biosciences | CGPA: 8.21
            </p>
            <p className="text-white/60 mb-6">Jan 2021 - May 2024</p>
            <div>
              <h4 className="font-semibold text-white/80 mb-3">Key Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <Badge key={course} variant="secondary">{course}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
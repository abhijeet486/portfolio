// ExperienceTab.tsx
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export const ExperienceTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Building2 className="text-amber-500" size={24} />
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-semibold text-white/90 mb-2">
              Full Stack Developer
            </h3>
            <p className="text-white/60 mb-4">
              iHub Anubhuti-IIITD Foundation | Jun 2024 - Present
            </p>
            <ul className="space-y-3 text-white/70">
              <li>• Developed advanced chatbots using RAG chains and AgentTools</li>
              <li>• Implemented LLaMA3 Guard for robust input/output sanitization</li>
              <li>• Engineered MindLamp platform customization</li>
              <li>• Developed ACLF Dashboard for liver cancer mortality prediction</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
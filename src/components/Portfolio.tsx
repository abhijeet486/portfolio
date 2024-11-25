import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Calendar, Building2, GraduationCap, Code, GitBranch, Box, FlaskConical, Brain, Search } from 'lucide-react';

const Portfolio = () => {
  // Previous state and skills objects remain the same
  const [activeTab, setActiveTab] = useState('experience');

  const skills = {
    languages: ['Python', 'C/C++', 'JAVA', 'SQL'],
    frameworks: ['Django', 'Pytorch', 'OpenCV', 'JavaFX', 'Flask', 'Langchain', 'HF Transformers', 'TensorFlow', 'Scikit', 'Keras'],
    tools: ['GIT', 'MySQL', 'Android Studio', 'GDB', 'Jupyter Notebook', 'PostgreSQL', 'MATLAB', 'Nginx', 'Docker'],
    platforms: ['Web', 'Android', 'Linux'],
    softSkills: ['Collaborative Leadership', 'Agile Adaptability', 'Attention to Detail', 'Problem-Solving']
  };

  const research = [
    {
      title: "Robust OCR Detection for Flyers",
      institution: "MIDAS Lab, IIITD",
      role: "Undergraduate Researcher",
      period: "Aug 2023 - May 2024",
      areas: ["Computer Vision", "OCR", "Deep Learning"],
      achievements: [
        "Developed robust pipeline for extracting data from unstructured documents using computer vision and OCR libraries",
        "Fine-tuned Llava model for mathematical problem solving",
        "Optimized deep learning models for vehicle validation through license plate masking",
        "Created synthetic datasets for improving document layout detection accuracy"
      ]
    },
    {
      title: "Intelligent Prompt Engineering for Software Development",
      institution: "IIITD",
      role: "Independent Researcher",
      period: "Jan 2024 - May 2024",
      areas: ["NLP", "Prompt Engineering", "Software Engineering"],
      achievements: [
        "Researched various prompting techniques including Chain of Thought, Tree of Thought, and Graph of Thought",
        "Designed comprehensive guide for efficient information retrieval prompts",
        "Applied multiple prompting techniques to generate Software Requirements Specifications",
        "Validated outputs using Golden Chain of Thought and Tree of Thought techniques"
      ]
    },
    {
      title: "Runtime Systems",
      institution: "HiPEC Lab, IIITD",
      role: "Research Assistant",
      period: "May 2023 - July 2023",
      areas: ["Systems", "Performance Optimization", "Memory Profiling"],
      achievements: [
        "Instrumented executables at runtime using Intel PIN and custom pintools",
        "Identified and optimized memory bottlenecks in Caffe2 module of PyTorch",
        "Monitored memory accesses using Numaprof and ParCoreTools",
        "Increased performance by 20% through parallel code block optimization"
      ]
    }
  ];

  // Previous projects array remains the same

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section remains the same */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Abhijeet Singh</h1>
            <h2 className="text-xl text-gray-600 mb-4">Full Stack Developer & ML Engineer</h2>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:sabhijeet652@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Mail size={18} />
                <span>sabhijeet652@gmail.com</span>
              </a>
              <a href="https://github.com/abhijeet486" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <Github size={18} />
                <span>github.com/abhijeet486</span>
              </a>
              <a href="https://linkedin.com/in/abhijeet-singh-92202b212" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="experience" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Previous tabs remain the same */}

          {/* New Research Tab */}
          <TabsContent value="research">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical size={24} className="text-purple-500" />
                  Research Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {research.map((item) => (
                  <div key={item.title} className="border-l-4 border-purple-500 pl-4 hover:bg-gray-50 transition-colors p-4 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="text-purple-600" size={18} />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building2 size={16} />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.areas.map((area) => (
                        <Badge key={area} variant="secondary" className="bg-purple-100 text-purple-800">
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2 text-gray-700">
                          <Search size={16} className="mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tabs remain the same */}
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
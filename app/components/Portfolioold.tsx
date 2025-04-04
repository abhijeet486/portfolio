"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Calendar, Building2, FlaskConical, Brain, Search , GraduationCap, Code, GitBranch, ChevronDown} from 'lucide-react';
import { motion } from 'framer-motion';
const Portfolio = () => {
  // Previous state and skills objects remain the same
  const [activeTab, setActiveTab] = useState('experience');
  const [showMore, setShowMore] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };


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

  const projects = [
    {
      title: "BRAINTEASER",
      subtitle: "Novel Task Defying Common Sense (NLP)",
      date: "Apr 2024 - May 2024",
      tech: ["Python", "TensorFlow", "LLM", "Transformers"],
      details: [
        "Developed a model using Pre-trained Transformer-based Language Models for solving sentence-type brain teasers",
        "Implemented transformer architecture with attention mechanism for common sense reasoning",
        "Achieved 0.95 instance-based accuracy",
        "Added machine translation capabilities between English and German"
      ]
    },
    {
      title: "Fault-Tolerant Distributed Key-Value Store",
      subtitle: "Modified Raft Consensus Implementation",
      date: "Mar 2024",
      tech: ["Python", "gRPC", "Distributed Systems"],
      details: [
        "Implemented fault-tolerant and highly available distributed key-value store using Raft consensus",
        "Modified leader lease for strong consistency and linearizable reads",
        "Used gRPC for inter-node communication and client-server interactions",
        "Developed comprehensive test cases for leader election, log replication, and failure recovery"
      ]
    },
    {
      title: "Medical Leave Portal - IIITD",
      subtitle: "Full-Stack Web Application",
      date: "Sep 2023 - Nov 2023",
      tech: ["Django", "HTML/CSS/JavaScript", "Bootstrap", "Selenium", "PostgreSQL"],
      details: [
        "Built institutional medical leave management system",
        "Implemented secure user authentication and data storage",
        "Conducted thorough testing using Django's built-in system",
        "Performed automated testing using Selenium"
      ]
    },
    {
      title: "Personalised Multipurpose Recommendation Engine",
      subtitle: "Advanced Collaborative Filtering System",
      date: "Apr 2023 - May 2023",
      tech: ["Python", "Sklearn", "Keras", "TensorFlow"],
      details: [
        "Combined LFM (CF-based approach) with Knowledge Graphs",
        "Integrated GCN and CNN models for item recommendations",
        "Solved data sparsity and cold start problems",
        "Implemented hybrid recommendation approach"
      ]
    },
    {
      title: "Gardeneer",
      subtitle: "Android Development",
      date: "Mar 2023 - May 2023",
      tech: ["Android", "Java", "Room Database"],
      details: [
        "Developed Android app for home gardening assistance",
        "Implemented current and weekly growth tracking features",
        "Created plant care advice system",
        "Built efficient user data storage using Room Database"
      ]
    },
    {
      title: "XpressionSuite @ TavLabs",
      subtitle: "Web Development",
      date: "Jan 2023 - May 2023",
      tech: ["Django", "HTML/CSS/JavaScript", "Bootstrap", "Firebase"],
      details: [
        "Developed Analytics Section and User Database on Firebase",
        "Implemented OAuth 2.0 authentication and Session Management",
        "Enhanced server stability through optimized analysis routines",
        "Improved backend performance using Python Notebooks and Multithreading"
      ]
    }
  ];

  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    {/* Hero Section with Image */}
    <div className="relative h-[40vh] bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      <img 
        src="PXL_20241013_165210872copy.jpg" 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative h-full max-w-5xl mx-auto px-8 flex items-center">
        <div className="text-white space-y-4 animate-fade-in-up">
          <h1 className="text-5xl font-bold">Abhijeet Singh</h1>
          <p className="text-xl opacity-90">Full Stack Developer & ML Engineer</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="mailto:sabhijeet652@gmail.com" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2"
            >
              <Mail size={18} />
              <span>sabhijeet652@gmail.com</span>
            </a>
            <a 
              href="https://github.com/abhijeet486" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/abhijeet-singh-92202b212" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-12">
      <Tabs 
          defaultValue="experience" 
          className="space-y-4"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {['experience', 'research', 'education', 'projects', 'skills'].map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab}
                className="transition-all duration-300 hover:bg-blue-50"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Experience Tab - Same as before */}
          <TabsContent value="experience">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-gray-600" size={20} />
                    <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                  </div>
                  <p className="text-gray-600 mb-2">iHub Anubhuti-IIITD Foundation | Jun 2024 - Present</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Developed advanced chatbots using RAG chains and AgentTools on Anthropic&apos;s Claude and Gemini-1.5</li>
                    <li>Implemented LLaMA3 Guard for robust input/output sanitization</li>
                    <li>Engineered MindLamp platform customization using TypeScript/React Native</li>
                    <li>Developed ACLF Dashboard for liver cancer mortality prediction</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* New Research Tab */}
          <TabsContent value="research">
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
              <Card className="hover:shadow-lg transition-shadow">
            {/* <Card> */}
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
            </motion.div>
          </TabsContent>

          {/* Other tabs remain the same */}
          {/* Education Tab - Same as before */}
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="text-gray-600" size={20} />
                  <h3 className="text-xl font-semibold">IIIT-Delhi</h3>
                </div>
                <p className="text-gray-600 mb-2">B.Tech in Computer Science and Biosciences | CGPA: 8.21</p>
                <p className="text-gray-600">Jan 2021 - May 2024</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Software Development', 'Operating Systems', 'Data Structures', 'Computer Vision', 'NLP', 'Machine Learning'].map((course) => (
                      <Badge key={course} variant="secondary">{course}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Updated Projects Tab */}
          <TabsContent value="projects">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code size={24} className="text-blue-500" />
                  Notable Projects
                </CardTitle>
              </CardHeader>
                <CardContent className="space-y-8">
                  {projects.slice(0, showMore ? projects.length : 3).map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 transition-all duration-300 p-4 rounded group"
                    >
                  {/* <div key={project.title} className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 transition-colors p-4 rounded"> */}
                    <div className="flex items-center gap-2 mb-2">
                      <GitBranch className="text-gray-600" size={18} />
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{project.subtitle}</p>
                    <p className="text-gray-500 text-sm mb-3">
                      <Calendar size={14} className="inline mr-2" />
                      {project.date}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  {/* </div> */}
                  </motion.div>
                ))}
                {!showMore && projects.length > 3 && (
                    <button
                      onClick={() => setShowMore(true)}
                      className="w-full py-3 text-blue-600 hover:text-blue-800 transition-colors flex items-center justify-center gap-2"
                    >
                      Show More Projects
                      <ChevronDown className="animate-bounce" />
                    </button>
                )}
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* Skills Tab - Same as before */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
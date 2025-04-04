// src/components/Portfolio/data/index.ts
export const skills = {
    languages: ['Python', 'C/C++', 'JAVA', 'SQL'],
    frameworks: ['Django', 'Pytorch', 'OpenCV', 'JavaFX', 'Flask', 'Langchain', 'HF Transformers', 'TensorFlow', 'Scikit', 'Keras'],
    tools: ['GIT', 'MySQL', 'Android Studio', 'GDB', 'Jupyter Notebook', 'PostgreSQL', 'MATLAB', 'Nginx', 'Docker'],
    platforms: ['Web', 'Android', 'Linux'],
    softSkills: ['Collaborative Leadership', 'Agile Adaptability', 'Attention to Detail', 'Problem-Solving']
  };

  export const research = [
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

  export const projects = [
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

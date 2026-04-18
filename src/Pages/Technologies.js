import React, { useState, useEffect } from "react";

// Mock tech stack details - replace with your actual import
const techStackDetails = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  npm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  symfony: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  scikit: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  matplotlib: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  seaborn: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  hadoop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
  nlp: "https://cdn-icons-png.flaticon.com/512/3670/3670150.png", // Generic AI/Brain icon
  vision: "https://cdn-icons-png.flaticon.com/512/2814/2814088.png", // Generic Vision/Eye icon
};

function Technologies() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    python,
    php,
    laravel,
    symfony,
    mysql,
    mongodb,
    scikit,
    tensorflow,
    pandas,
    numpy,
    matplotlib,
    seaborn,
    hadoop,
    nlp,
    vision,
  } = techStackDetails;

  const machineLearning = [
    { img: scikit, title: "Scikit-learn", category: "Library" },
    { img: tensorflow, title: "TensorFlow", category: "Library" },
  ];

  const dataAnalysis = [
    { img: pandas, title: "Pandas", category: "Library" },
    { img: numpy, title: "NumPy", category: "Library" },
  ];

  const dataVisualization = [
    { img: matplotlib, title: "Matplotlib", category: "Library" },
    { img: seaborn, title: "Seaborn", category: "Library" },
  ];

  const aiDomains = [
    { img: nlp, title: "NLP", category: "Domain" },
    { img: vision, title: "Computer Vision", category: "Domain" },
  ];

  const bigData = [
    { img: hadoop, title: "Hadoop", category: "Framework" },
    { img: hadoop, title: "HDFS", category: "Storage" }, // Reusing Hadoop icon for HDFS as they are related
  ];

  const programmingLanguages = [
    { img: python, title: "Python", category: "Language" },
    { img: php, title: "PHP", category: "Language" },
    { img: js, title: "JavaScript", category: "Language" },
    { img: html, title: "HTML", category: "Markup" },
    { img: css, title: "CSS", category: "Style" },
  ];

  const frameworksLibraries = [
    { img: laravel, title: "Laravel", category: "Framework" },
    { img: react, title: "React.js", category: "Library" },
    { img: symfony, title: "Symfony", category: "Framework" },
    { img: tailwind, title: "Tailwind CSS", category: "Framework" },
    { img: bootstrap, title: "Bootstrap", category: "Framework" },
  ];

  const databases = [
    { img: mysql, title: "MySQL", category: "Database" },
    { img: mongodb, title: "MongoDB", category: "Database" },
  ];

  const tools = [
    { img: vscode, title: "VS Code", category: "Editor" },
    { img: git, title: "Git", category: "Version Control" },
    { img: github, title: "GitHub", category: "Platform" },
    { img: npm, title: "NPM", category: "Package Manager" },
    { img: postman, title: "Postman", category: "API Testing" },
    { img: figma, title: "Figma", category: "Design" },
  ];

  const TechCard = ({ img, title, category, index }) => (
    <div 
      className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-2 opacity-0 animate-fadeInUp"
      style={{ 
        animationDelay: `${index * 50}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
          <img src={img} alt={title} className="w-full h-full object-contain filter group-hover:drop-shadow-lg" />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-dark-heading dark:text-light-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs text-content opacity-75 mt-1 group-hover:opacity-100 transition-opacity duration-300">{category}</p>
        </div>
      </div>
      {/* Animated gradient background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );

  const SectionHeader = ({ title, gradient, delay }) => (
    <div 
      className="flex items-center gap-3 mb-6 opacity-0 animate-fadeInLeft"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className={`w-2 h-8 bg-gradient-to-b ${gradient} rounded-full animate-pulse`}></div>
      <h2 className="text-xl md:text-2xl font-bold text-dark-heading dark:text-light-heading">
        {title}
      </h2>
    </div>
  );

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideWidth {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }
        
        .animate-slideWidth {
          animation: slideWidth 0.8s ease-out forwards;
        }
      `}</style>
      {/* Header Section */}
      <section className="mb-12">
        <div className="relative">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-2 opacity-0 animate-fadeInDown" style={{ animationFillMode: 'forwards' }}>
            Tech Stack & Tools
          </h1>
          <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 animate-slideWidth" style={{ animationDelay: '300ms' }}></div>
        </div>
        <p className="text-content text-lg opacity-0 animate-fadeInUp" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          Technologies and tools I work with to build modern web applications
        </p>
      </section>

      {/* Programming Languages */}
      <section className="mb-16">
        <SectionHeader 
          title="Programming Languages" 
          gradient="from-blue-500 to-purple-600"
          delay={600}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {programmingLanguages.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* Machine Learning & AI */}
      <section className="mb-16">
        <SectionHeader 
          title="Machine Learning & AI" 
          gradient="from-indigo-500 to-blue-600"
          delay={650}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {machineLearning.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* Data Analysis */}
      <section className="mb-16">
        <SectionHeader 
          title="Data Analysis" 
          gradient="from-teal-500 to-green-600"
          delay={700}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {dataAnalysis.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* Data Visualization */}
      <section className="mb-16">
        <SectionHeader 
          title="Data Visualization" 
          gradient="from-yellow-500 to-orange-600"
          delay={750}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {dataVisualization.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* AI Domains */}
      <section className="mb-16">
        <SectionHeader 
          title="AI Domains" 
          gradient="from-pink-500 to-rose-600"
          delay={800}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {aiDomains.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* Big Data */}
      <section className="mb-16">
        <SectionHeader 
          title="Big Data" 
          gradient="from-cyan-500 to-blue-600"
          delay={850}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {bigData.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* Frameworks & Libraries */}
      <section className="mb-16">
        <SectionHeader 
          title="Frameworks & Libraries" 
          gradient="from-purple-500 to-pink-600"
          delay={900}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {frameworksLibraries.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* Databases */}
      <section className="mb-16">
        <SectionHeader 
          title="Databases" 
          gradient="from-green-500 to-emerald-600"
          delay={950}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {databases.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>

      {/* Development Tools */}
      <section>
        <SectionHeader 
          title="Development Tools" 
          gradient="from-orange-500 to-red-600"
          delay={1000}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Technologies;
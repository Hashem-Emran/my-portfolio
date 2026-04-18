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
  } = techStackDetails;

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

      {/* Frameworks & Libraries */}
      <section className="mb-16">
        <SectionHeader 
          title="Frameworks & Libraries" 
          gradient="from-purple-500 to-pink-600"
          delay={700}
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
          delay={800}
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
          delay={900}
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




import React, { useState } from "react";

// Your project data
const projectDetails = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart management, payment integration, and user authentication.",
    techstack: "React, Tailwind CSS, Laravel",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    ],
    previewLink: "",
    githubLink: "",
  },
  {
    title: "E-Commerce PHP",
    description:
      "Classic e-commerce solution built with pure PHP, featuring product management, shopping cart, and order processing.",
    techstack: "PHP, MySQL, JavaScript, CSS",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    ],
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Employee Management System",
    description:
      "Comprehensive employee management solution with attendance tracking, payroll, and performance evaluation features.",
    techstack: "Laravel, MySQL, Bootstrap",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    ],
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Football Fanatics",
    description:
      "Interactive football fan community platform with live scores, player stats, and fan engagement features.",
    techstack: "React, API Integration, CSS",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop",
    ],
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Project Management System",
    description:
      "Modern project management tool with task tracking, team collaboration, timeline visualization, and progress monitoring.",
    techstack: "React, Tailwind CSS, REST API",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    ],
    previewLink: "",
    githubLink: "",
  },
];

function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  if (!images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous Button */}
      {images.length > 1 && currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Previous image"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-5xl max-h-[90vh] animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          loading="lazy"
        />

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="text-center mt-4 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Next Button */}
      {images.length > 1 && currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Next image"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project, index = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <section>
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Some of my works and projects I've worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectDetails.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div
                className="relative h-40 overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                onClick={() => openLightbox(project, 0)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <span className="text-sm font-medium">View Gallery</span>
                  </div>
                </div>

                {/* Gallery Indicator */}
                {project.gallery && project.gallery.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.gallery.length}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {project.techstack.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium transition-transform duration-200 hover:scale-105"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.previewLink && (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentProject && (
        <Lightbox
          images={currentProject.gallery || [currentProject.image]}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}

export default Projects;












import React from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 px-4">
      {/* About Me Section */}
      <section className="mb-16">
        <div className="relative mb-6">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-2">
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
          <p className="text-content text-sm md:text-base leading-relaxed">{personalDetails.about}</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <div className="relative mb-6">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-2">
            Work Experience
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>
        
        <div className="space-y-5">
          {workDetails.map((work, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-blue-100 dark:border-slate-700"
            >
              {/* Gradient Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 group-hover:w-1.5 transition-all duration-300"></div>
              
              <div className="p-5 md:p-6 pl-6 md:pl-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-dark-heading dark:text-light-heading mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {work.Position}
                    </h3>
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-content font-semibold text-sm md:text-base">
                        {work.Company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-content text-xs md:text-sm opacity-75">
                        {work.Location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-row lg:flex-col items-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-medium shadow-sm">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {work.Type}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-slate-700 rounded-full">
                      <svg className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-content text-xs font-medium">
                        {work.Duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700">
                  <ul className="space-y-1.5 text-content text-xs md:text-sm">
                    {work.Description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="relative mb-6">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-2">
            Education
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>
        
        <div className="space-y-5">
          {eduDetails.map((edu, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-purple-100 dark:border-slate-700"
            >
              {/* Gradient Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 group-hover:w-1.5 transition-all duration-300"></div>
              
              <div className="p-5 md:p-6 pl-6 md:pl-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-dark-heading dark:text-light-heading mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {edu.Position}
                    </h3>
                    {edu.Company && (
                      <div className="flex items-center gap-2 mb-1.5">
                        <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <p className="text-content font-semibold text-sm md:text-base">
                          {edu.Company}
                        </p>
                      </div>
                    )}
                    {edu.Description && (
                      <p className="text-content text-xs md:text-sm opacity-75 mb-1.5">
                        {edu.Description}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-content text-xs md:text-sm opacity-75">
                        {edu.Location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-row lg:flex-col items-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-medium shadow-sm">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {edu.Type}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-slate-700 rounded-full">
                      <svg className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-content text-xs font-medium">
                        {edu.Duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
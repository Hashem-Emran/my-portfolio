import React, { useState } from "react";
import { projectDetails } from "../Details";

function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  if (!images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {images.length > 1 && currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1); }}
          className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 p-2"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          loading="lazy"
        />
        {images.length > 1 && (
          <div className="mt-4 px-4 py-1.5 bg-black/50 backdrop-blur rounded-full text-white/90 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {images.length > 1 && currentIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1); }}
          className="absolute right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

function ProjectCard({ project, index, openLightbox }) {
  return (
    <div
      className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-slate-700/50 hover:-translate-y-1 animate-slideUp flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="relative h-48 sm:h-56 overflow-hidden bg-slate-100 dark:bg-slate-700/50 cursor-pointer shrink-0"
        onClick={() => openLightbox(project, 0)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            <span className="text-sm font-medium">View Project</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-dark-heading dark:text-light-heading mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-content text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techstack.split(",").map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-[10px] sm:text-xs rounded-full font-medium border border-blue-100 dark:border-blue-900/30"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-dark-heading dark:text-light-heading hover:bg-slate-50 dark:hover:bg-slate-600 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              Code
            </a>
          )}
        </div>
      </div>
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

  const fullStackProjects = projectDetails.filter(p => !p.category || p.category === "Full-Stack");
  const dataScienceProjects = projectDetails.filter(p => p.category === "Data Science");

  return (
    <main className="container mx-auto max-width pt-10 pb-20 px-4">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold mb-4 tracking-tight">
          Projects
        </h1>
        <p className="text-content text-base md:text-lg">
          A showcase of my projects in Web Development and Data Science.
        </p>
      </section>

      {/* Full Stack Section */}
      {fullStackProjects.length > 0 && (
        <section className="mb-20">
          <div className="relative mb-8">
            <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl font-bold mb-2 tracking-tight">
              Full-Stack Development
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            {fullStackProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                openLightbox={openLightbox} 
              />
            ))}
          </div>
        </section>
      )}

      {/* Data Science Section */}
      {dataScienceProjects.length > 0 && (
        <section className="mb-10">
          <div className="relative mb-8">
            <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl font-bold mb-2 tracking-tight">
              Data Science
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            {dataScienceProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                openLightbox={openLightbox} 
              />
            ))}
          </div>
        </section>
      )}

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
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.5s ease-out forwards; opacity: 0; }
      `}</style>
    </main>
  );
}

export default Projects;

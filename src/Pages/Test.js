import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {tagline}
          </h2>
        </div>

        {/* Image Container */}
        <div className="flex-shrink-0">
          <img 
            ref={myimageref} 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-top rounded-full shadow-2xl ring-4 ring-gray-200 dark:ring-gray-700" 
            src={img} 
            alt="Hashem EMRAN" 
          />
        </div>
      </div>
    </main>
  );
}

export default Home;







import React from "react";

// Mock tech stack data
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
  const {
    html, css, js, react, tailwind, bootstrap, vscode, git, github,
    npm, postman, figma, python, php, laravel, symfony, mysql, mongodb,
  } = techStackDetails;

  const programmingLanguages = [
    { img: python, title: "Python", color: "from-blue-400 to-yellow-400" },
    { img: php, title: "PHP", color: "from-indigo-500 to-purple-500" },
    { img: js, title: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { img: html, title: "HTML", color: "from-orange-500 to-red-500" },
    { img: css, title: "CSS", color: "from-blue-500 to-blue-600" },
  ];

  const frameworksLibraries = [
    { img: laravel, title: "Laravel", color: "from-red-500 to-orange-500" },
    { img: react, title: "React.js", color: "from-cyan-400 to-blue-500" },
    { img: symfony, title: "Symfony", color: "from-gray-700 to-black" },
    { img: tailwind, title: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
    { img: bootstrap, title: "Bootstrap", color: "from-purple-600 to-indigo-600" },
  ];

  const databases = [
    { img: mysql, title: "MySQL", color: "from-blue-600 to-blue-700" },
    { img: mongodb, title: "MongoDB", color: "from-green-500 to-green-700" },
  ];

  const tools = [
    { img: vscode, title: "VS Code", color: "from-blue-500 to-blue-600" },
    { img: git, title: "Git", color: "from-orange-600 to-red-600" },
    { img: github, title: "GitHub", color: "from-gray-700 to-gray-900" },
    { img: npm, title: "NPM", color: "from-red-600 to-red-700" },
    { img: postman, title: "Postman", color: "from-orange-500 to-orange-600" },
    { img: figma, title: "Figma", color: "from-purple-500 to-pink-500" },
  ];

  const allTechs = [
    ...programmingLanguages,
    ...frameworksLibraries,
    ...databases,
    ...tools,
  ];

  const TechCard = ({ img, title, color }) => (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:-translate-y-2 overflow-hidden">
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>

      <div className="relative flex flex-col items-center gap-4">
        <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
          <img src={img} alt={title} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all">
          {title}
        </h3>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
    </div>
  );

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Hero Header */}
      <section className="text-center mb-10 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="inline-block mb-2">
          <span className="text-3xl md:text-4xl"></span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Tech Stack & Tools
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Cutting-edge technologies I use to craft exceptional digital experiences
        </p>
      </section>

      {/* Programming Languages */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Programming Languages
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {programmingLanguages.map((tech, index) => (
            <div 
              key={index} 
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <TechCard {...tech} />
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks & Libraries */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Frameworks & Libraries
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {frameworksLibraries.map((tech, index) => (
            <div 
              key={index} 
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <TechCard {...tech} />
            </div>
          ))}
        </div>
      </section>

      {/* Databases */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Databases
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {databases.map((tech, index) => (
            <div 
              key={index} 
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <TechCard {...tech} />
            </div>
          ))}
        </div>
      </section>

      {/* Development Tools */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Development Tools
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {tools.map((tech, index) => (
            <div 
              key={index} 
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <TechCard {...tech} />
            </div>
          ))}
        </div>
      </section>

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
      `}</style>
    </main>
  );
}

export default Technologies;








import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
     <div className="mt-5 md:mt-0">
  <img 
    ref={myimageref} 
    className="w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full md:ml-auto shadow-lg" 
    src={img} 
    alt="Hashem EMRAN" 
  />
</div>
    </main>
  );
}

export default Home;

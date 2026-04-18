// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile3.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import python from "./assets/techstack/python.png";
import php from "./assets/techstack/php.webp";

// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import laravel from "./assets/techstack/laravel4.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};


// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/hashem-emran-3411a9271",
  github: "https://github.com/Hashem-Emran",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

export const personalDetails = {
  name: "Hashem EMRAN",
  tagline: "Data Science | Full-Stack Developer",
  img: profile,
  about: `I am a Full-Stack Developer interested in Data Science, working on building practical web applications from front-end to back-end using React and Python, with experience handling databases such as MySQL and MongoDB.
I have a strong interest in data analysis and building machine learning models using Python and scikit-learn, focusing on understanding the problem and selecting the appropriate solution.
I enjoy working on real-world projects, writing clean code, and continuously developing my skills to build scalable solutions.`,
  // about: `I am a full-stack developer with expertise in building robust web applications using modern technologies. My experience spans across Python, PHP, JavaScript, and various frameworks including Laravel, React.js, and Symfony. I specialize in creating scalable e-commerce platforms and management systems, with a strong focus on both elegant front-end interfaces and efficient back-end architectures. I'm passionate about delivering high-quality solutions that combine technical excellence with user-centric design.`,
};


export const workDetails = [
  {
    Position: "E-Commerce Development Intern",
    Company: "FORBEST",
    Location: "Rabat, Morocco",
    Type: "Internship",
    Duration: "May 2024 - Aug 2024",
    Description: [
      "Assisted in developing and improving the e-commerce platform, focusing on user experience and backend functionality",
      "Implemented features to improve product management, order processing, and customer interaction",
      "Analyzed user feedback and performance metrics to suggest and implement improvements, resulting in increased user satisfaction and sales"
    ]
  },
  {
    Position: "Employee Management System Developer",
    Company: "AYTAMZ",
    Location: "Tetouan, Morocco",
    Type: "Internship",
    Duration: "May 2023 - June 2023",
    Description: [
      "Developed and implemented a comprehensive employee management system, which enhanced operational efficiency",
      "Contributed to the design of user-friendly interfaces and functions to track employee performance, attendance, and personal data",
      "Collaborated with a team to integrate system modules, streamlining HR processes and improving data accuracy"
    ]
  },
];

export const eduDetails = [
  {
    Position: "Master’s Degree in Data Science",
    Company: "University",
    Location: "Morocco",
    Type: "Master's",
    Duration: "2024 - Present",
    Description: "Specializing in Advanced Data Analytics and Machine Learning",
  },
  {
    Position: "Professional License LDW",
    Company: "ENS Tetouan",
    Description: "Specialized in Software and Web Development",
    Location: "Tetouan, Morocco",
    Type: "License",
    Duration: "2023 - 2024",
  },
  {
    Position: "Specialized Development Technician",
    Company: "Institute Specializing In Offshoring Professions",
    Description: "Web Digital Option Full-stack",
    Location: "Tetouan, Morocco",
    Type: "Diploma",
    Duration: "2022 - 2023",
  },
  {
    Position: "Specialized Development Technician",
    Company: "Yacoub El Mansour Digital Institute Of Applied Technology",
    Description: "",
    Location: "Rabat, Morocco",
    Type: "Diploma",
    Duration: "2021 - 2022",
  },
  {
    Position: "International Baccalaureate in Experimental Sciences",
    Company: "Yacoub Al-Mansour High School",
    Description: "Science option (SVT)",
    Location: "Rabat, Morocco",
    Type: "Baccalaureate",
    Duration: "2020 - 2021",
  },
];


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  python: python,
  php: php,
  laravel: laravel,
};

// Enter your Project Details here
export const projectDetails = [
  // Full Stack Projects
  {
    title: "E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    description:
      "A full-featured online shopping platform with cart management, payment integration, and user authentication.",
    techstack: "React, Tailwind CSS, Laravel",
    previewLink: "",
    githubLink: "",
    category: "Full-Stack",
  },
  {
    title: "E-Commerce PHP",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description:
      "Classic e-commerce solution built with pure PHP, featuring product management, shopping cart, and order processing.",
    techstack: "PHP, MySQL, JavaScript, CSS",
    previewLink: "",
    githubLink: "",
    category: "Full-Stack",
  },
  {
    title: "Employee Management System",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    description:
      "Comprehensive employee management solution with attendance tracking, payroll, and performance evaluation features.",
    techstack: "Laravel, MySQL, Bootstrap",
    previewLink: "",
    githubLink: "",
    category: "Full-Stack",
  },
  {
    title: "Football Fanatics",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
    description:
      "Interactive football fan community platform with live scores, player stats, and fan engagement features.",
    techstack: "React, API Integration, CSS",
    previewLink: "",
    githubLink: "",
    category: "Full-Stack",
  },
  {
    title: "Project Management System",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description:
      "Modern project management tool with task tracking, team collaboration, timeline visualization, and progress monitoring.",
    techstack: "React, Tailwind CSS, REST API",
    previewLink: "",
    githubLink: "",
    category: "Full-Stack",
  },

  // Data Science Projects
  {
    title: "Handwritten Algorithm Recognition and Python Translation",
    image: projectImage1,
    description: "Developed an ML-based application to recognize handwritten algorithms and translate them into Python code. Worked on preprocessing, feature extraction, and model training for handwritten logic understanding.",
    techstack: "Machine Learning, Python, Logic Understanding",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Data Science",
  },
  {
    title: "Tree Species Classification",
    image: projectImage2,
    description: "Implemented and compared multiple methods for tree species classification using 3D point cloud data and multi-view image representations. Explored classical ML, CNN-based approaches, transfer learning, and direct 3D deep learning models such as PointNet and DGCNN, with extensive evaluation using accuracy, F1-score, and balanced accuracy.",
    techstack: "Point Clouds, Multi-view Learning, CNN, PointNet, DGCNN",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Data Science",
  },
  {
    title: "Gradient Descent Application",
    image: projectImage3,
    description: "Implemented gradient descent from scratch and visualized convergence behavior. Focused on optimization concepts used in machine learning training.",
    techstack: "Python, Optimization Algorithms",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Data Science",
  },
  {
    title: "Image Classification",
    image: projectImage4,
    description: "Built an image classification model with training and evaluation on labeled data. Included dataset preprocessing and performance analysis.",
    techstack: "Python, Image Processing, Supervised Learning",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Data Science",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hachememran@gmail.com",
  phone: "+212 666 274 610",
};

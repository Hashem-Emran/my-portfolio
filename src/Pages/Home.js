import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const buttonref = useRef();

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
      "<",
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
        "<",
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
        "<",
      )
      .from(
        buttonref.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
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
        "<",
      );
  }, []);

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = "/path/to/your/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_" + name.replace(/\s+/g, "_") + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="container mx-auto max-width section">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 px-4 sm:px-6 md:px-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading sm:text-3xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent sm:text-3xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-xl text-dark-heading dark:text-light-heading sm:text-2xl md:text-3xl xl:text-4xl xl:leading-tight font-bold mt-2"
          >
            {tagline}
          </h2>

          <button
            ref={buttonref}
            onClick={handleDownloadCV}
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-sm sm:text-base md:text-lg"
          >
            Download CV
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            ref={myimageref}
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover object-top rounded-full shadow-2xl"
            src={img}
            alt={name}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;

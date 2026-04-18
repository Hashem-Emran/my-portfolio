import React from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 px-4">
      {/* About Me Section */}
      <section className="mb-10">
        <div className="relative mb-4">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-2 tracking-tight">
            About Me
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>
        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl p-5 md:p-6 border border-white/20 dark:border-slate-700 transition-all duration-300">
          <p className="text-content text-sm md:text-base leading-relaxed font-light">{personalDetails.about}</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-10">
        <div className="relative mb-6">
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-2 tracking-tight">
            Work Experience
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>
        
        <div className="grid gap-4">
          {workDetails.map((work, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 p-5 md:p-6 flex flex-col md:flex-row gap-4 hover:-translate-y-1"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 group-hover:w-1.5 transition-all duration-300"></div>
              
              <div className="flex-1">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-dark-heading dark:text-light-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                        {work.Position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-base font-semibold text-content">{work.Company}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{work.Location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs font-medium">
                      <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                        {work.Type}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {work.Duration}
                      </span>
                    </div>
                 </div>

                 <div className="border-t border-slate-100 dark:border-slate-700/50 pt-3">
                    <ul className="space-y-1.5">
                      {work.Description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-content text-xs md:text-sm">
                          <span className="text-blue-500 mt-1 text-[10px]">●</span>
                          <span className="leading-relaxed opacity-90">{desc}</span>
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
          <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl font-bold mb-2 tracking-tight">
            Education
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>
        
        <div className="grid gap-4">
          {eduDetails.map((edu, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 p-5 md:p-6 flex flex-col md:flex-row gap-4 hover:-translate-y-1"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 group-hover:w-1.5 transition-all duration-300"></div>
              
              <div className="flex-1">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-dark-heading dark:text-light-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all duration-300">
                        {edu.Position}
                      </h3>
                      {edu.Company && (
                         <div className="flex items-center gap-2 mt-1">
                           <span className="text-base font-semibold text-content">{edu.Company}</span>
                           <span className="text-slate-400">•</span>
                           <span className="text-xs text-slate-500 dark:text-slate-400">{edu.Location}</span>
                         </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs font-medium">
                      <span className="px-2.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
                        {edu.Type}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {edu.Duration}
                      </span>
                    </div>
                 </div>

                 {edu.Description && (
                   <p className="mt-2 text-content text-sm leading-relaxed opacity-90 border-t border-slate-100 dark:border-slate-700/50 pt-2">
                     {edu.Description}
                   </p>
                 )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
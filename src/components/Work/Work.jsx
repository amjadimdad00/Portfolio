import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Flex Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            style={{ flex: "1 1 300px", maxWidth: "400px" }}
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 sm:p-4">
          {/* Container - Only changes for lg+ */}
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-lg lg:w-full lg:max-w-4xl overflow-hidden relative">
            {/* Close Button (unchanged on all screens) */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Content - Flex column by default, row only on lg+ */}
            <div className="flex flex-col lg:flex-row">
              {/* Image Section - Full width below lg, 50% on lg+ */}
              <div className="w-full lg:w-1/2 flex justify-center bg-gray-900 px-4 py-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] lg:w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Text Content - Full width below lg, 50% on lg+ */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8">
                {/* Title (unchanged) */}
                <h3 className="text-md lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                {/* Description (unchanged) */}
                <p className="text-gray-400 mb-6 text-xs lg:text-base">
                  {selectedProject.description}
                </p>

                {/* Tags (unchanged) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons (unchanged layout) */}
                <div className="flex justify-start gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-2 py-1 lg:px-6 lg:py-2 rounded-xl text-sm lg:text-xl font-semibold text-center"
                  >
                    View Code
                  </a>
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-2 py-1 lg:px-6 lg:py-2 rounded-xl text-sm lg:text-xl font-semibold text-center"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;

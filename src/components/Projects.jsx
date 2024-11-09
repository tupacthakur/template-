import React from 'react';

const Projects = () => {
  const works = [
    {
      title: 'Computational Identification of Lung Cancer Biomarkers',
      description: 'Research project focused on identifying and validating novel biomarkers for lung cancer detection using computational methods. Presented at Stanford BioHacks',
      code: 'https://github.com/tupacthakur/Stanford-BioHacks-24-',
      live: 'https://github.com/tupacthakur/Stanford-BioHacks-24-',
      stack: 'Python, Computational Biology',
    },
    {
      title: 'CTR Model Data Clean Room',
      description: 'Developed a secure Data Clean Room using Microsoft Azure Confidential VMs with Intel® TDX and SGX technology. Implemented advanced security features including Trusted Execution Environment (TEE), virtual Trusted Platform Modules (vTPM), and Docker containerization. Enhanced data protection through Azure storage encryption and secure FTPS transfer protocols.',
      code: '',
      live: 'https://github.com/tupacthakur/UCLA-Hackathon',
      stack: 'Microsoft Azure, Intel TDX and SGX, Docker',
    },
    {
      title: 'Multi-tool Webapp for Developers',
      description: 'A comprehensive web application providing essential development tools and utilities for developers.',
      code: 'https://github.com/tupacthakur/FOSS-HACKATHON-24',
      live: 'https://github.com/tupacthakur/FOSS-HACKATHON-24',
      stack: 'React, Tailwind CSS',
    },
  ];

  return (
    <div id="projects" className="flex flex-col items-start mt-20 space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-12 mt-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="p-4 space-y-5 border border-white group lg:gap-x-0 lg:gap-y-5 hover:border-zinc-200 rounded-2xl"
          >
            <div className="flex flex-col items-start space-y-3">
              {/* Project Title */}
              <h2 className="text-xl font-semibold">{work.title}</h2>
              {/* Project Description */}
              <p>{work.description}</p>
              {/* Stack (optional) */}
              {work.stack && <p className="text-sm text-gray-600 dark:text-gray-400">{work.stack}</p>}
              <div className="flex flex-row items-center w-full space-x-3">
                {/* Live Demo Link */}
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Live{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-devices"
                    width="12"
                    height="10"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                    <path d="M16 9h2"></path>
                  </svg>
                </a>
                {/* Source Code Link */}
                {work.code && (
                  <a
                    href={work.code}
                    target="_blank"
                    rel="noreferrer"
                    className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg hover:bg-zinc-900 hover:text-white"
                  >
                    Source Code{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 icon icon-tabler icon-tabler-code"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 8l-4 4l4 4"></path>
                      <path d="M17 8l4 4l-4 4"></path>
                      <path d="M14 4l-4 16"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

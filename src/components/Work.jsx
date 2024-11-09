import React from 'react';

const Work = () => {
  return (
    <section id="work" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Work</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl font-semibold mb-2">Data Analyst & Tech Consultant</h3>
            <p className="text-gray-500 dark:text-gray-400">Dream Skrin</p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Worked as a Data Analyst and Tech Consultant, analyzing and visualizing data to provide business insights, as well as offering technical consultancy for software development projects.
            </p>
            <a
              href="https://www.linkedin.com/company/dreamskrin/posts/?feedView=all"
              className="text-blue-500 hover:underline mt-4 block"
              target="_blank"
              rel="noreferrer"
            >
              Visit Dream Skrin on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;



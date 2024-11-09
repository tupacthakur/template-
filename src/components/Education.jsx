import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl font-semibold mb-2">B.Tech. Computer Science and Engineering</h3>
            <p className="text-gray-500 dark:text-gray-400">SIT, Pune</p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Pursued B.Tech. in Computer Science and Engineering at SIT, Pune, with a strong focus on software development and data analytics.
            </p>
            <a
              href="https://www.linkedin.com/school/sitpune.edu.in/"
              className="text-blue-500 hover:underline mt-4 block"
              target="_blank"
              rel="noreferrer"
            >
              Visit SIT, Pune on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

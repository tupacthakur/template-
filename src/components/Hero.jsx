// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
      <h1 className="text-4xl font-semibold">
        Hey, I'm Aarian Thakur. <br />{' '}
      </h1>
      <h2 className="text-3xl">
        I am a Data Analyst at a budding startup - DreamSkrin.
      </h2>
      <p className="text-xl">
        I'm a Data Analyst building @DreamSkrin. <br /> Find me on{' '}
        <a
          href="https://github.com/tupacthakur"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
        ,{' '}
        <a
          href="https://www.linkedin.com/in/aarian-thakur/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
        .
      </p>
      <div className="flex w-full items-center md:flex-row md:justify-start md:space-x-5 md:space-y-0">
        <a
          href="https://www.linkedin.com/in/aarian-thakur/"
          className="border border-zinc-900 bg-zinc-900 text-white px-6 py-2 rounded-full"
        >
          Let's Connect!
        </a>
        <a
          href="#projects"
          className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full ms-3"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Hero;


// Sidebar.js
import React from 'react';
import GitHubLogo from '../icons/GitHubLogo';
import FacebookLogo from '../icons/FacebookLogo';
import LinkedInLogo from '../icons/LinkedInLogo';
import AboutMeIcon from '../icons/AboutMeIcon';
import TechnologiesIcon from '../icons/TechnologiesIcon';
import ProjectsIcon from '../icons/ProjectsIcon';
import profilePicture from '../assets/IMG_4157_t.jpg';
import HobbiesIcon from '../icons/HobbiesIcon';

const Sidebar = () => {
  return (
    <aside className="hidden border-r bg-gradient-to-r from-green-100 to-blue-100 lg:block dark:bg-gradient-to-r dark:from-green-800 dark:to-blue-800">
      <div className="flex h-full max-h-screen flex-col gap-2 items-center">
        <div className="flex flex-col h-[200px] items-center border-b px-6 py-4">
          <img
            src={profilePicture}
            width="100"
            height="100"
            className="rounded-full"
            alt="Profile Picture"
            style={{ aspectRatio: '100/100', objectFit: 'cover' }}
          />
          <a className="flex items-center gap-2 font-semibold mt-2" href="#" rel="ugc">
            <span className="">Тихомир Гърменлиев</span>
          </a>
          <div className="flex gap-2 mt-2">
            <a href="https://www.facebook.com/tgarmenliev/" target="_blank" rel="noreferrer">
              <FacebookLogo />
            </a>
            <a href="https://github.com/tgarmenliev" target="_blank" rel="noreferrer">
              <GitHubLogo />
            </a>
            <a href="https://www.linkedin.com/in/tgarmenliev/" target="_blank" rel="noreferrer">
              <LinkedInLogo />
            </a>
          </div>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 dark:text-gray-400 dark:hover:text-green-50"
              href="#"
              rel="ugc"
            >
              <AboutMeIcon />
              За мен
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 dark:text-gray-400 dark:hover:text-green-50"
              href="#"
              rel="ugc"
            >
              <HobbiesIcon />
              Моята страст
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 dark:text-gray-400 dark:hover:text-green-50"
              href="#"
              rel="ugc"
            >
              <TechnologiesIcon />
              Технологии
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 dark:text-gray-400 dark:hover:text-green-50"
              href="#"
              rel="ugc"
            >
              <ProjectsIcon />
              Проекти
            </a>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
// App.js
import React from 'react';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Hobbies from './components/Hobbies';

const App = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />

      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <AboutMe />

          <Hobbies />

          <Technologies />

          <Projects />
        </main>

        <footer className="flex justify-center items-center h-20 bg-green-100 dark:bg-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 animate-pulse">
              <path d="M2 17 17 2"></path>
              <path d="m2 14 8 8"></path>
              <path d="m5 11 8 8"></path>
              <path d="m8 8 8 8"></path>
              <path d="m11 5 8 8"></path>
              <path d="m14 2 8 8"></path>
              <path d="M7 22 22 7"></path>
          </svg>
          <p className="text-gray-500 mt-2 text-sm">&copy; 2024 Всички права запазени.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

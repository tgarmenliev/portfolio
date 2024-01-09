// Technologies.js
import React from 'react';
import Technology from './Technology';

const Technologies = () => {
  return (
    <section>
      <header className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl text-green-800 mb-4">Технологии</h1>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <Technology icon="python" name="Python" />
        <Technology icon="javascript" name="JavaScript" />
        <Technology icon="kotlin" name="Kotlin" />
        <Technology icon="java" name="Java" />
        <Technology icon="sql" name="SQL" />
        <Technology icon="cpp" name="C++" />
        <Technology icon="docker" name="Docker" />
      </div>
    </section>
  );
};

export default Technologies;

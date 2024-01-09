// Projects.js
import React from 'react';
import Project from './Project';
import eludo from '../assets/IMG_4625.jpg';
import supa from '../assets/image0.jpg'
import trainney from '../assets/trainney.png'
import notey from '../assets/notey.jpg'
import stepquest from '../assets/steps.png'

const Projects = () => {
  const projectData = [
    {
      title: 'ELUDO',
      imageUrl: eludo,
      description: 'Модерната версия на "Не се сърди, човече". ELUDO е иновативно устройство, което изцяло дигитализира популярната игра. Спечели първа награда на Computer Space 2023 в категорията "Иновативни проекти".',
      link: 'https://computerspace.org/bg/project/eludoenbg/',
    },
    {
      title: 'Trainney',
      imageUrl: trainney,
      description: 'В процес на разработка. Дипломна работа. Мобилно приложение, което да направи пътвуането с влак в България по-лесно и по-приятно. Всичко необходимо за пътуването на едно място.',
      link: '#',
    },
    {
      title: 'Стъпки за отстъпки',
      imageUrl: stepquest,
      description: 'Стъпки за отстъпки е един иновативен проект, който има за цел да накара хората да се движат повече и да се забавляват докато го правят. Осноовната идея зад мобилното приложение е колкото повече стъпки правиш, толкова повече отстъпки да получаваш. Идеята спечели награда за "Най-добра идея за социална иновация" на Уикенда на идеите на Тийноватор през 2023.',
      link: 'https://linktr.ee/stepquest',
    },
    {
      title: 'Notey',
      imageUrl: notey,
      description: 'Мобилно проложение за водене на бележки. Разработено за Android на летните стажове за 11 клас през 2023.',
      link: 'https://github.com/tgarmenliev/Notes_app',
    },
    {
      title: 'S.U.P.A.',
      imageUrl: supa,
      description: 'Устройство за сглобяване на сандвичи. Разработено за участие в ТУЕС Фест 2023 и по предмета ВМКС.',
      link: 'https://tuesfest.bg/projects/426',
    },
  ];

  return (
    <section>
      <header className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl text-green-800 mb-4">Проекти</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

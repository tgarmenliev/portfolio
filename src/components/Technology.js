// Technology.js
import React from 'react';

import JavaLogo from '../icons/JavaIcon';
import JavaScriptLogo from '../icons/JavaScriptIcon';
import KotlinLogo from '../icons/KotlinIcon';
import PythonLogo from '../icons/PythonIcon';
import SQLLogo from '../icons/SQLIcon';
import CppLogo from '../icons/CppIcon';
import DockerLogo from '../icons/DockerIcon';

const Technology = ({ icon, name, width = 50, height = 50 }) => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case 'java':
        return <JavaLogo width={width} height={height} />;
      case 'javascript':
        return <JavaScriptLogo width={width} height={height} />;
      case 'kotlin':
        return <KotlinLogo width={width} height={height} />;
      case 'python':
        return <PythonLogo width={width} height={height} />;
      case 'sql':
        return <SQLLogo width={width} height={height} />;
      case 'cpp':
        return <CppLogo width={width} height={height} />;
      case 'docker':
        return <DockerLogo width={width} height={height} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {getIconComponent(icon)}
      <span className="mt-2">{name}</span>
    </div>
  );
};

export default Technology;

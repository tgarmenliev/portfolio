// Project.js
import React from 'react';

const Project = ({ title, imageUrl, description, link }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
      </div>
      <div className="p-6">
        <img src={imageUrl} width="200" height="200" alt={title} className="aspect-square rounded-md object-cover" />
        <p className="mt-2">{description}</p>
      </div>
      <div className="flex items-center p-6">
        <a className="underline text-green-800" href={link} rel="ugc">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;

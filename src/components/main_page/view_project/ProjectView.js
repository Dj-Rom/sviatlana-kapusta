import React from 'react';

const ProjectView = ({ url, img, projectName, className }) => {
  return (
    <section className={className}>
      <a href={url}>
        <img src={img} alt={projectName} />
        <h2>{projectName}</h2>
      </a>
    </section>
  );
};

export default ProjectView;

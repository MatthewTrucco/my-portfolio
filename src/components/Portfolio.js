import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'Find Your Next Game',
      imageUrl: 'https://i.imgur.com/aVLR5Ww.png',
      liveUrl: 'https://video-game-recommendation-039abd955b95.herokuapp.com/',
      repoUrl: 'http://githubrepo.com'
    },
    // Add more projects here
    {
      title: 'Project 2',
      imageUrl: 'path_to_image.jpg',
      liveUrl: 'http://liveprojecturl.com',
      repoUrl: 'http://githubrepo.com'
    },
    {
      title: 'Project 3',
      imageUrl: 'path_to_image.jpg',
      liveUrl: 'http://liveprojecturl.com',
      repoUrl: 'http://githubrepo.com'
    },
    {
      title: 'Project 4',
      imageUrl: 'path_to_image.jpg',
      liveUrl: 'http://liveprojecturl.com',
      repoUrl: 'http://githubrepo.com'
    },
    
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} />
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Project</a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

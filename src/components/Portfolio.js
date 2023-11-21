import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'Find Your Next Game',
      imageUrl: 'https://i.imgur.com/aVLR5Ww.png',
      liveUrl: 'https://video-game-recommendation-039abd955b95.herokuapp.com/',
      repoUrl: 'https://github.com/MatthewTrucco/Video-Game-Recommender'
    },
    // Add more projects here
    {
      title: 'Just Another Text Editor',
      imageUrl: 'https://i.imgur.com/rpN4Qaz.png',
      liveUrl: 'https://jate-trucco-12214f5ced98.herokuapp.com/',
      repoUrl: 'https://github.com/MatthewTrucco/JAST-Trucco'
    },
    {
      title: 'Password Generator',
      imageUrl: 'https://i.imgur.com/GMlGo6U.png',
      liveUrl: 'https://matthewtrucco.github.io/Password-Gen/',
      repoUrl: 'https://github.com/MatthewTrucco/Password-Gen'
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
        <div key={index} className="portfolio-item">
          <div className="image-container">
            <img src={project.imageUrl} alt={project.title} />
            <div className="overlay">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Project</a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

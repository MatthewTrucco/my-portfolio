import React from 'react';

function Resume() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <div>
      <h2>Resume</h2>
      <a href="path_to_your_resume.pdf" download>Download My Resume</a>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;

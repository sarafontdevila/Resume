import data from '../../data/data'
import './Projects.css'

const template = () => {
  return `
  <section class="projects" id="projects">
    <h1>My Projects</h1>
    <h2> Some ideas of projects I have done</h2>
    <ul>
      ${data.projects
        .map(
          (project) => `
      <li class="card">
       
        <img src=${project.preview} alt=${project.title}/>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </li>
      `
        )
        .join('')}
    </ul>
  </section>
  `
}

const Projects = () => {
  return template()
}

export default Projects

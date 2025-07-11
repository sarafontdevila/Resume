import data from '../../data/data'
import './Projects.css'
import ProjectCard from './ProjectCard'

const template = () => {
  return `
  <section class="projects" id="projects">
    <h1>My Projects</h1>
    <h2>Some of my projects</h2>
    <ul>
      ${data.projects.map(ProjectCard).join('')}
    </ul>
  </section>
  `
}

const Projects = () => {
  return template()
}

export default Projects
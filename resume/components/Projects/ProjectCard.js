const ProjectCard = (project) => {
  return `
    <li class="card">
      <a href="${project.link}" target="_blank">
        <img src="${project.preview}" alt="${project.title}" />
      </a>
      <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
      <p>${project.description}</p>
    </li>
  `
}

export default ProjectCard
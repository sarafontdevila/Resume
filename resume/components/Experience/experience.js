import data from '../../data/data'
import './Experience.css'

const template = () => {
  return `
  <section class="experience" id="experience">
    <ul>
      ${data.workExperience
        .map(
          (item) => `
      <li>
        
        <h2>${item.position}</h2>
        <h4>${item.company}</h4>
        <h5>${item.startDate} - ${item.endDate}</h5>
        <p>${item.description}</p>
      </li>
      `
        )
        .join('')}
    </ul>
  </section>`
}

const Experience = () => {
  return template()
}

export default Experience

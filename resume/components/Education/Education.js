import data from '../../data/data'
import './Education.css'

const template = () => {
  return `
    <section class="education" id="education">
      <h2>${data.education.degree}</h2>
      <h5>${data.education.university}</h5>
      <h2 class="tituloRelevant">Relevant Courses</h2>
      <ul id="relevantcourses">
      ${data.education.relevantCourses
        .map(
          (course) => `<li>
        <p>${course}</p>
      </li>
      `
        )
        .join('')}
      </ul>
    </section>
  `
}

const Education = () => {
  return template()
}

export default Education

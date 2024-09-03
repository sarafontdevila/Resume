import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

let show = 'Experience'

const template = () => {
  return `
  <main>
    ${AboutMe()}
    <div id="content">
    <div id="section-content">
          <div id="buttons">
            <button id="experienceBtn">Experience</button>
            <button id="educationBtn">Education</button>
          </div>
          <div id="display-content">
      ${Experience()}
    </div>
    ${Projects()}
  </main>
  `
}
export const addMainListeners = () => {
  const experienceBtn = document.querySelector('#experienceBtn')
  const educationBtn = document.querySelector('#educationBtn')
  const displayContent = document.querySelector('#display-content')

  experienceBtn.addEventListener('click', () => {
    displayContent.innerHTML = `${Experience()}`
  })

  educationBtn.addEventListener('click', () => {
    displayContent.innerHTML = `${Education()}`
  })
}

export const Main = () => {
  return template()
}

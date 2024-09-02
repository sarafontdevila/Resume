import data from '../../data/data'
import './AboutMe.css'

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h1>About me</h1>
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      <ul>
      ${data.skills
        .map(
          (skill) => `<li>
      <p>${skill}</p>
      </li>`
        )
        .join('')}
    </ul>
      <p>${data.aboutMe}</p>
      <a href=${`mailto:${data.email}>Contact me: sfontdevila@gmail.com</a>`}
    </section>
  `
}

export const AboutMe = () => {
  return template()
}

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')
}

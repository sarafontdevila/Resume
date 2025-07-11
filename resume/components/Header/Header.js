import './Header.css'

const template = () => {
  return `
  <header>
    <h1>Sara Fontdevila</h1>
    <nav>
    <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
      <ul class="nav-links" id="nav-links">
        <li>
          <a class = "nav-link" href="#aboutme">About me</a>
        </li>
        <li>
          <a class= "nav-link" href="#education">Education</a>
        </li>
        <li>
          <a class= "nav-link" href="#experience">Experience</a>
        </li>
        <li>
          <a class= "nav-link" href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const addEventListeners = () => {
  const hamburger = document.getElementById('hamburger')
  const navLinks = document.getElementById('nav-links')
  const links = document.querySelectorAll('.nav-link')

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
  })

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const targetId = link.getAttribute('href')
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' })
      navLinks.classList.remove('open')
    })
  })
}

const Header = () => {
  return template()
}

export { Header as default, addEventListeners }

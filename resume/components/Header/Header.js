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
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const Header = () => {
  return template()
}

export default Header

import React from 'react'

import Logo from '../logo/logo.component'

const NavBar = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 bg-light border-bottom shadow-sm">
    <Logo/>
    <nav className="nav my-2 my-md-0 mr-md-3 justify-content-end">   
      <a 
        className="nav-link fa fa-github text-dark p-4 nav-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tinashe-88"
        style={{fontSize:30}}
      >
      </a>
      <a 
        className="nav-link fa fa-instagram text-dark p-4 nav-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/tinashe88/"
        style={{fontSize:30}}
      >
      </a>
      <a 
        className="nav-link fa fa-twitter text-dark p-4 nav-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/tinashe_88"
        style={{fontSize:30}}
      >
      </a>
    </nav>
  </div>
)

export default NavBar
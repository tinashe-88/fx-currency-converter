import React from 'react'

const NavBar = () => (
    <div className="bg-secondary border-bottom shadow-sm">
        <nav className="nav justify-content-end pt-2 my-1 my-md-0 mr-md-5">   
            <a 
                className="nav-link fa fa-github text-light p-4" 
                href="/"
                style={{fontSize:30}}
            >
            </a>
        
        
            <a 
                className="nav-link fa fa-instagram text-light p-4" 
                href="/"
                style={{fontSize:30}}
            >
            </a>
        
            <a 
                className="nav-link fa fa-twitter text-light p-4" 
                href="/"
                style={{fontSize:30}}
            >
            </a>
        </nav>
    </div>
)

export default NavBar
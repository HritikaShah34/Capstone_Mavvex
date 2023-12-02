import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-light fixed-top bg-light shadow-sm">
        <div className="container-lg">
          <div className='container mr-5'>
          <a className="navbar-brand text-danger fw-bold fs-4" href="#">Mavvex</a>
          </div>
        <div className="dropdown">
            <button type="button" id="dropdownMenuButton" className="btn btn-danger btn-secondary px-3" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-bars"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#home">Home</a></li>
              <li><a className="dropdown-item" href="#about">About Us</a></li>
              <li><a className="dropdown-item" href="#services">Services</a></li>
              <li><a className="dropdown-item" href="#portfolio">Portfolio</a></li>
              <li><a className="dropdown-item" href="#testimonials">Testinomial</a></li>
              <li><a className="dropdown-item" href="#contacts">Contact Us</a></li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

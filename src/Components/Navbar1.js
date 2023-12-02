import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light shadow-sm bg-custom-2">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold fs-4" href="#">Mavvex</a>

    <button className="navbar-toggler btn-secondary px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            UserCases
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link className='dropdown-item text-clr fs-6' to="/another">Deep Tech product Development </Link></li>
            <li> <Link className='dropdown-item text-clr fs-6' to="/another">Enabling Data Provacy In Machine Learning </Link></li>
            <li> <Link className='dropdown-item text-clr fs-6' to="/another">Better language Transcription and Translation Service </Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Healthcare </Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Retail</Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Agriculturet </Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Conversational AI </Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Security and Privacy In AI </Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fs-5" href="#">Customers</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Research
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Publications </Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Research Team</Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">About us </Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Contact us </Link></li>
          <li> <Link className='dropdown-item text-clr fs-6' to="/another">Careers </Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar1
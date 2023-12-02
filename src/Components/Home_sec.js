import React, { useEffect } from 'react'
import image from '../Resources/home.jpg'
import './Navbar.css'

export default function Home_sec() {
  return (
    <section className="home" id="home">
        <div className="container-lg mb-2">
            <div className="row min-vh-95 mt-5 align-items-center align-content-center">
                <div className="col-md-6 mt-5">
                    <div className="home-img text-center">  
                        <img src={image} className="img-thumbnail mw-100" alt="profile img"/>
                    </div>
                </div>
                <div className="col-md-6 order-md-first mt-5">
                    <div className="home-text">
                        <p className="text-muted mb-1">We are Mavvex</p>
                        <h1 className="text-clr text-uppercase fs-1 fw-bold">Leading AI based consultancy</h1>
                        <h2 className="fs-4">Unfold the power of AI</h2>
                        <p className="mt-3 text-muted">Our company is committed to staying at the forefront of AI advancements, constantly researching and implementing the latest breakthroughs in the field. By harnessing the power of AI, we empower organizations across various sectors, including finance, healthcare, retail, and manufacturing, to unlock new opportunities, optimize efficiency, and gain a competitive edge in the digital age.</p>
                        <a href="#portfolio" className="btn bg-custom-2 text-white px-3 mt-3">Our Work</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

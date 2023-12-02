import React from 'react'
import './Navbar.css'

export default function Services() {
  return (
    <section className="services" id="services">
        <div className="container-lg py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h2 className="fw-bold mb-5">Services We Provide</h2>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="service-item shadow-sm p-4 rounded bg-white">
                        <div className="icon my-3 text-clr fs-2">
                            <i className="fas fa-code fa-bounce fa-lg"></i>
                        </div>
                        <h3 className="fs-5 py-2">Tech Development</h3>
                        <p className="text-muted">Deep Tech Product Development</p>

                    </div>
                </div>
            
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                    <div className="icon my-3 text-clr fs-2">
                    <i class="fas fa-regular fa-laptop-code fa-bounce fa-lg"></i>
                    </div>
                    <h3 className="fs-5 py-2">Creative AI solutions</h3>
                    <p className="text-muted">We provide creative AI based solution</p>

                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                    <div className="icon my-3 text-clr fs-2">
                    <i className="fas fa-solid fa-database fa-bounce fa-lg"></i>
                    </div>
                    <h3 className="fs-5 py-2">Data Privacy</h3>
                    <p className="text-muted">Provides abstract data solution</p>

                </div>
            </div>
            </div>
        </div>
        
    </section>
  )
}

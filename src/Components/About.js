import React from 'react'
import './Navbar.css'

export default function About() {
  return (
    <section className="about  py-3" id="about">
        <div className="container-lg py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h2 className="fw-bold mb-5">About Us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-5 mt-md-0 mb-4">
                    <div className="about-text">
                       <h3 className="fs-4 mb-3"> Unlock new opportunities</h3> 
                       <p className="text-muted">Whether it's developing intelligent virtual assistants, improving customer experience through personalized recommendations, or automating complex workflows, AI Tech Solutions is dedicated to helping businesses harness the transformative potential of artificial intelligence to drive success in the ever-evolving technological landscape.</p>
                    </div>
                    <div className="row text-center text-uppercase my-3">
                        <div className="col-sm-4">
                            <div className="fact-item">
                                <h4 className="fs-1 fw-bold">100</h4>
                                <p className="text-muted">Projects Complited</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="fact-item">
                                <h4 className="fs-1 fw-bold">90</h4>
                                <p className="text-muted">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="fact-item">
                                <h4 className="fs-1 fw-bold">95</h4>
                                <p className="text-muted">Positive reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                        <div className="skill-item mb-4"> 
                        <h3 className="fs-6">AI Driven Projects</h3>
               
                            <div className="progress" >
                                <div className="progress-bar bg-custom-2" style={{width: 450}} role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                      
                        </div>
                        <div className="skill-item mb-4"> 
                            <h3 className="fs-6">Data Privacy</h3>
                            <div className="progress" >
                                <div className="progress-bar bg-custom-2" style={{width: 350}} role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </div>
                        <div className="skill-item mb-4"> 
                            <h3 className="fs-6">Conversational AI</h3>
                            <div className="progress" >
                                <div className="progress-bar bg-custom-2" style={{width: 400}} role="progressbar"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </div>
                        <div className="skill-item mb-4"> 
                            <h3 className="fs-6">AI based App</h3>
                            <div className="progress">
                                <div className="progress-bar bg-custom-2" style={{width: 380}} role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </div>
                        
                    </div>
                    <div className='container-lg text-center'>
                    <div>
                        <div>
                            <a href="#" className="btn px-3 bg-custom-2 me-5 text-white">Show our Work</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </section>
    
  )
}

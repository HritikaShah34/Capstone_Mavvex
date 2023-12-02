import React from 'react'
import image from "../Resources/1.jpeg";
import './Navbar.css'

function Testinomial() {
  return (
    <section className="testimonials py-5" id="testimonials">
        <div className="container-lg py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h2 className="fw-bold mb-5">Testimonials</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8  col-xl-7">
                    <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" className="active bg-custom-2" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" className="bg-custom-2" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" className="bg-custom-2" aria-label="Slide 3"></button>
                        </div>
                    <div className="carousel-inner p-1">
                    <div className="testi-item carousel-item active bg-white shadow-sm rounded p-4 mb-5">
                        <div className="testi-auto-info d-flex align-item-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle profile" 
  alt="Avatar" />
                            <div className="author mt-3 ms-3">
                                <h3 className="fs-6 mb-1">Raj Himachal</h3>
                                <p className="text-muted m-0">AI Consultant</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3">I recently had the opportunity to utilize an AI solution provided by AI Tech Solutions for my business, and I must say it exceeded my expectations in every way. This advanced AI system has revolutionized our operations and has become an invaluable asset to our organization.</p>
                        <div className="rating text-clr">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="testi-item carousel-item bg-white shadow-sm rounded p-4 mb-5">
                        <div className="testi-auto-info d-flex align-item-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle profile" 
  alt="Avatar" />
                            <div className="author mt-3 ms-3">
                                <h3 className="fs-6 mb-1">Raj Himachal</h3>
                                <p className="text-muted m-0">AI Consultant</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3">I recently had the opportunity to utilize an AI solution provided by AI Tech Solutions for my business, and I must say it exceeded my expectations in every way. This advanced AI system has revolutionized our operations and has become an invaluable asset to our organization.</p>
                        <div className="rating text-clr">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="testi-item carousel-item bg-white shadow-sm rounded p-4 mb-5">
                        <div className="testi-auto-info d-flex align-item-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle profile" 
  alt="Avatar" />
                            <div className="author mt-3 ms-3">
                                <h3 className="fs-6 mb-1">Raj Himachal</h3>
                                <p className="text-muted m-0">AI Consultant</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3">I recently had the opportunity to utilize an AI solution provided by AI Tech Solutions for my business, and I must say it exceeded my expectations in every way. This advanced AI system has revolutionized our operations and has become an invaluable asset to our organization.</p>
                        <div className="rating text-clr">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>

  )
}

export default Testinomial
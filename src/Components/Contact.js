import React from 'react'
import './Navbar.css'

function Contact() {
  return (
    <section className="contact py-5" id="contacts">
        <div className="container-lg py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h2 className="fw-bold mb-5">Contact Us</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                    <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <input type="text" placeholder="Your Name" className="form-control form-control-lg fs-6 border-0 shadow-sm"/>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <input type="text" placeholder="Your Email" className="form-control form-control-lg fs-6 border-0 shadow-sm"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mb-4">
                                    <input type="text" placeholder="Subject" className="form-control form-control-lg fs-6 border-0 shadow-sm"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mb-4">
                                    <textarea rows="5" placeholder="Your Message" className="form-control form-control-lg fs-6 border-0 shadow-sm"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="Submit" className="btn bg-custom-2 text-white px-3">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
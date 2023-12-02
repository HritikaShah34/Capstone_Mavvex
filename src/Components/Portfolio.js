import React from 'react'
import './Portfolio.css'
import image from '../Resources/agri.jpg'
import image1 from '../Resources/sec.png'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <div className="container-lg py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center">
                        <h2 className="fw-bold mb-5">Industries</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-6 mb-3">
                <div class="box">
                
                <img src="https://i.pinimg.com/564x/18/09/aa/1809aadd8b5554064cf10b16c7d9577a.jpg"/>
                <div class="box-content">
                    <h3 class="title">Healthcare</h3>
                    <span class="post">We provide best healthcare AI solutions</span>
                </div>
            </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-3">
                <div class="box1">
                
                <img src={image}/>
                <div class="box1-content">
                    <h3 class="title">Agriculture</h3>
                    <span class="post">We provide best Agriculture AI solutions</span>
                </div>
</div>
                </div>
                <div className="col-md-6 col-lg-6 mb-3">
                <div class="box2">
                
                <img src={image1}/>
                <div class="box2-content">
                    <h3 class="title">Security</h3>
                    <span class="post">We provide best security AI solutions</span>
                </div>
</div>
                </div>
                <div className="col-md-6 col-lg-6 mb-3">
                <div class="box4">
                
                <img src="https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
                <div class="box4-content">
                    <h3 class="title">Conversational AI</h3>
                    <span class="post">We provide best Conversational AI solutions</span>
                </div>
</div>
                </div>
                
               
            </div>
        </div>
    </section>
  )
}

export default Portfolio
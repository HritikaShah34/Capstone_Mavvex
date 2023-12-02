import React from 'react'
import './Navbar.css'

function Footer() {
  return (
    <footer className="footer border-top py-4">
        {/* <div className="container-lg">
            <div className="row">
                <div className="col-lg-12">
                    <p className="m-0 text-center text-muted">&copy; 2021 The Webshala</p>
                </div>
            </div>
        </div> */}
<footer class="text-center text-lg-start bg-custom-2 text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block text-white">
      <span>Get connected with us on social networks:</span>
    </div>

    <div class="text-white">
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="text-white">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Mavvex
          </h6>
          <p>
          Our company is committed to staying at the forefront of AI advancements, constantly researching and implementing the latest breakthroughs in the field. By harnessing the power of AI.


          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            UserCases
          </h6>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Tech Product Dev</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Data Privacy
</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Language Transcription</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Language Translation</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Industries
          </h6>
          <p>
            <a href="#about" class="text-reset text-decoration-none">Healthcare</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Retail</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Agriculture</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Conversational AI</a>
          </p>
          <p>
            <a href="#!" class="text-reset text-decoration-none">Security and Privacy In AI</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> 1197 Sainik Colony Sector 49, Faridabad HR 121001 India
</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            admin@mavvexlabs.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  
  <div class="text-center p-4 text-white">
    © 2023 : 
    <a class="text-reset text-decoration-none ml-2" href="https://mdbootstrap.com/">Mavvex</a>
  </div>
</footer>
    </footer>
  )
}

export default Footer
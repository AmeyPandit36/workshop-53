import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
 
     {/* <footer className="text-center bg-body-tertiary">
  <div className="container pt-4">
    <section className="mb-4">
      <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f" /></a>
      <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
      <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google" /></a>
      <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram" /></a>
      <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
      <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
    </section>
  </div>
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2020 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer> */}


<footer className="text-center text-lg-start bg-light text-muted">
  {/* Social Media Section */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Connect with KisaanTrade on social networks:</span>
    </div>
    <div>
      <Link href="#" className="me-4 text-reset"><i className="fab fa-facebook-f" /></Link>
      <a href="#" className="me-4 text-reset"><i className="fab fa-twitter" /></a>
      <a href="#" className="me-4 text-reset"><i className="fab fa-instagram" /></a>
      <a href="#" className="me-4 text-reset"><i className="fab fa-linkedin" /></a>
      <a href="#" className="me-4 text-reset"><i className="fab fa-github" /></a>
    </div>
  </section>

  {/* Footer Links */}
  <section>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        
        {/* About */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-leaf me-3" /> KisaanTrade
          </h6>
          <p>
            KisaanTrade is a digital B2B marketplace that connects farmers and retailers directly. 
            Our mission is to empower farmers with fair prices while helping retailers access 
            fresh produce at competitive rates.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
          <p><Link to="/about" className="text-reset">About Us</Link></p>
          <p><Link to="/services" className="text-reset">Services</Link></p>
          <p><a href="#features" className="text-reset">Features</a></p>
          <p><a href="#contact" className="text-reset">Contact</a></p>
        </div>

        {/* Resources */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
          <p><a href="#faq" className="text-reset">FAQs</a></p>
          <p><a href="#help" className="text-reset">Help Center</a></p>
          <p><a href="#pricing" className="text-reset">Pricing</a></p>
          <p><a href="#feedback" className="text-reset">Feedback</a></p>
        </div>

        {/* Contact */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> Pune, Maharashtra, India</p>
          <p><i className="fas fa-envelope me-3" /> support@kisantrade.com</p>
          <p><i className="fas fa-phone me-3" /> +91 98765 43210</p>
        </div>
      </div>
    </div>
  </section>

  {/* Copyright */}
  <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    © {new Date().getFullYear()} KisaanTrade. All Rights Reserved.
  </div>
</footer>






    </div>
  )
}

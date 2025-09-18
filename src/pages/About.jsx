import React from 'react'

function About() {
  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6 mb-md-0'>
          <img src="/imgs/about.png" alt="About Image" className='image-fluid'/>
        </div>

        <div className='col-md-6'>
          <h2 className='mb-3'>About KisanTrade</h2>
          <p className='text-muted'>
            Welcome to <strong>KisanTrade</strong>, your trusted digital
            marketplace for farmers, traders, and consumers. We bridge the gap
            between agriculture and technology, helping farmers sell their
            produce directly to buyers at fair prices.
          </p>
          <p className="text-muted">
            Our platform enables farmers to connect with wider markets, while
            giving traders and customers access to fresh, high-quality produce
            with transparency and convenience.
          </p>
          <p className='text-muted'>
            At KisanTrade, we are committed to empowering rural communities by
            promoting fair trade, reducing middlemen, and driving sustainable
            agricultural growth.
          </p>
        </div>
      </div> 

      <div className="row mt-4">
  <div className="col-md-4 mb-4">
    <div className="card shadow h-100 border-0 text-center p-3">
      <div className="card-body">
        <h4 className="card-title fw-bold">Our Mission</h4>
        <p className="card-text text-muted">
          To empower farmers by providing direct access to markets,
          ensuring fair value for their hard work.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card shadow h-100 border-0 text-center p-3">
      <div className="card-body">
        <h4 className="card-title fw-bold">Our Vision</h4>
        <p className="card-text text-muted">
          To become India's leading agri-tech marketplace, driving digital
          transformation in the agricultural sector.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card shadow h-100 border-0 text-center p-3">
      <div className="card-body">
        <h4 className="card-title fw-bold">Our Values</h4>
        <p className="card-text text-muted">
          We stand for transparency, sustainability, and trust — building a
          better future for farmers and consumers alike.
        </p>
      </div>
    </div>
  </div>
</div>




      </div>
  )
}

export default About

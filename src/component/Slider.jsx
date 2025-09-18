import React from 'react'

function Slider() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-wrap="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/imgs/hero1.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Empowering Farmers with Fair Prices</h5>
        <p>Farmers can directly list their produce and connect with retailers, eliminating middlemen and ensuring fair income for their hard work.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/imgs/hero6.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Fresh Produce at Competitive Rates</h5>
        <p>Retailers get access to high-quality, fresh agricultural products directly from farmers at transparent and affordable prices.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/imgs/hero3.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Simple, Transparent, and Digital</h5>
        <p>KisaanTrade makes trading easy with a clean and user-friendly platform, designed for farmers and retailers to trade confidently.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Slider

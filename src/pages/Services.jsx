import React from 'react';

function Services() {
  return (
    <div className='container my-5'>
      {/* TOP SECTION: IMAGE AND INTRO TEXT (UNCHANGED) */}
      <div className='row align-items-center'>
        <div className='col-lg-6 mb-4 mb-lg-0'>
          <img src="/imgs/services.webp" alt="Farmer using technology in a field" className='img-fluid rounded shadow-sm'/>
        </div>

        <div className='col-lg-6'>
          <h2 className='mb-3 fw-bold'>Our Services</h2>
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

      {/* BOTTOM SECTION: SERVICE CARDS WITH IMAGES */}
      <div className="row mt-5">
        
        {/* Card 1: Empowering Farmers */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 text-center"> 
            {/* Using your image name: ser1.png */}
            <img src="/imgs/ser1.png" className="service-card-img" alt="Illustration of empowered farmers using technology" />
            <div className="card-body p-4">
              <h4 className="card-title fw-bold">Empowering Farmers</h4>
              <p className="card-text text-muted">
                We provide a direct digital platform for you to list your produce, connect with a wider network of buyers, and secure fair, transparent pricing for your hard work. Sell your crops efficiently and get paid on time.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Quality for Buyers & Traders */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 text-center"> 
            {/* Using your image name: ser2.png */}
            <img src="/imgs/ser2.png" className="service-card-img" alt="Illustration of quality assurance for buyers and traders" />
            <div className="card-body p-4">
              <h4 className="card-title fw-bold">Quality for Buyers & Traders</h4>
              <p className="card-text text-muted">
                Source fresh, high-quality produce directly from verified farms across the country. Our platform ensures transparent sourcing, streamlined procurement, and a reliable supply chain to meet your business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Smart Technology & Logistics */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 text-center"> 
            {/* Using your image name: ser3.png */}
            <img src="/imgs/ser3.png" className="service-card-img" alt="Illustration of smart technology and logistics" />
            <div className="card-body p-4">
              <h4 className="card-title fw-bold">Smart Technology & Logistics</h4>
              <p className="card-text text-muted">
                Our easy-to-use platform provides real-time market data and insights. We back it up with robust logistics support to ensure that produce is transported from the farm to the market safely and efficiently.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Services;
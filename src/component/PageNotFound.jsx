import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you're using React Router

function PageNotFound() {
  return (
    // This container fills the entire viewport and centers its content
    <div className="d-flex align-items-center justify-content-center min-vh-100 text-center">
      
      <div> {/* This inner div groups your content */}
        <img
          src="/imgs/error.png"
          alt="Page not found"
          className="img-fluid" // Ensures the image is responsive
          style={{ maxWidth: '400px' }} // Prevents the image from being too large on big screens
        />
        <p className="fs-3 mt-5">
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead">
          The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="btn btn-success">
          Go Home
        </Link>
      </div>

    </div>
  );
}

export default PageNotFound;
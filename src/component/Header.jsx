
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container-fluid mb-1">
          <a className="navbar-brand fw-bold" href="#" style={{ color: "#2e7d32" }}>
            🌾 KisaanTrade
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark fw-semibold" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-semibold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-semibold" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-semibold" to="/contact">Contact Us</Link>
              </li>
            </ul>

            <form className="d-flex flex-column flex-lg-row mt-2 mt-lg-0" role="search">
              <button className="btn btn-outline-success me-2" onClick={handleLogin}>Login</button>
              <button className="btn btn-outline-success mt-2 mt-lg-0" onClick={handleRegister}>Register</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;

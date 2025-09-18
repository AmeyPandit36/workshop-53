import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  // A single state object to hold all form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  // A single handler function to update the state object
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  // Function to handle the registration submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Start of Validation ---
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreedToTerms) {
      alert("You must agree to the terms and conditions to register.");
      return;
    }
    // --- End of Validation ---

    // In a real app, you would send this data to your server to create a new user
    console.log('Registering with the following data:', formData);
    alert('Registration successful! (See console for data)');

    // Optional: Clear form after successful registration
    setFormData({
      fullName: '', email: '', mobile: '', password: '', confirmPassword: '', agreedToTerms: false,
    });
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center shadow-lg p-3 mb-5 bg-white rounded">

          {/* Left Column: Image */}
          <div className="col-md-6 p-0">
            <img
              src="/imgs/registerfarmer2.png"
              className="img-fluid rounded-start"
              alt="Registration illustration"
            />
          </div>

          {/* Right Column: Registration Form */}
          <div className="col-md-6 p-5">
            <h2 className="fw-bold mb-4">Create an Account</h2>
            <form onSubmit={handleSubmit}>

              {/* Full Name Input */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
              </div>

              {/* Mobile Number Input */}
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobile" placeholder="Enter 10-digit mobile number" value={formData.mobile} onChange={handleChange} required />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Create a strong password" value={formData.password} onChange={handleChange} required />
              </div>

              {/* Confirm Password Input */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
              </div>
              
              {/* Terms and Conditions Checkbox */}
              <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="agreedToTerms">I agree to the <a href="#!">Terms and Conditions</a></label>
              </div>

              {/* Register Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success btn-lg">Register</button>
              </div>

            </form>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-muted">
                Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Login here</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

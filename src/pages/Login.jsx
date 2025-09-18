import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // State to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would add your authentication logic here
    console.log('Logging in with:', { email, password });
    alert('Login button clicked! (See console for data)');
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center shadow-lg p-3 mb-5 bg-white rounded">
          
          {/* Left Column: Image */}
          <div className="col-md-6 p-0">
            <img
              src="/imgs/loginfarmer.png" // ** IMPORTANT: Replace with your image path **
              className="img-fluid rounded-start"
              alt="Login illustration"
            />
          </div>

          {/* Right Column: Login Form */}
          <div className="col-md-6 p-5">
            <h2 className="fw-bold mb-4">Login to Your Account</h2>
            <form onSubmit={handleLogin}>
              
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-end mb-4">
                <a href="#!" className="text-decoration-none">Forgot Password?</a>
              </div>

              {/* Login Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success btn-lg">
                  Login
                </button>
              </div>

            </form>

            {/* Registration Link */}
            <div className="text-center mt-4">
              <p className="text-muted">
                Not a user? <Link to="/register" className="text-decoration-none fw-bold">Register here</Link>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
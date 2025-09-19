import React, { useState } from 'react';
// Step 1: Import the useNavigate hook from react-router-dom
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  // Step 2: Initialize the navigate function
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for loading and errors
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // --- Form Validation ---
  const validateForm = () => {
    if (!email || !password) {
      setError('Both email and password are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  // --- Handle Form Submission with a real API call ---
  const handleLogin = async (e) => { // Mark the function as async
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // --- This is the real API call ---
      // Replace with your actual backend API endpoint
      const response = await fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Use the error message from the server if it exists
        throw new Error(data.message || 'Invalid credentials. Please try again.');
      }

      // --- On SUCCESS ---
      console.log('Login successful:', data);
      // Optional: Save the authentication token from the response
      // localStorage.setItem('authToken', data.token);

      // Step 3: Redirect to another page (e.g., a user dashboard)
      navigate('/dashboard'); 

    } catch (err) {
      // Handle errors from the API call (e.g., network issues, bad credentials)
      setError(err.message);
    } finally {
      // This runs regardless of success or failure to stop the loading spinner
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center shadow-lg p-3 mb-5 bg-white rounded">
          
          {/* Left Column: Image */}
          <div className="col-md-6 p-0">
            <img
              src="/imgs/loginfarmer.png"
              className="img-fluid rounded-start"
              loading="lazy"
              alt="Login illustration"
            />
          </div>

          {/* Right Column: Login Form */}
          <div className="col-md-6 p-5">
            <h2 className="fw-bold mb-4">Login to Your Account</h2>
            <form onSubmit={handleLogin} noValidate>
              
              {/* --- Display General Error Message --- */}
              {error && <div className="alert alert-danger">{error}</div>}

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-end mb-4">
                <a href="#!" className="text-decoration-none">Forgot Password?</a>
              </div>

              {/* Login Button with Loading State */}
              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn btn-success btn-lg" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {' '}Loading...
                    </>
                  ) : (
                    'Login'
                  )}
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
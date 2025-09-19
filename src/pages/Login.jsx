import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for loading and errors
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // A single error message for the form

  // --- Form Validation ---
  const validateForm = () => {
    if (!email || !password) {
      setError('Both email and password are required.');
      return false;
    }
    // Simple regex for email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError(''); // Clear previous errors
    return true;
  };

  // --- Handle Form Submission ---
  const handleLogin = (e) => {
    e.preventDefault();

    // Don't submit if validation fails
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');

    // --- Simulate an API call ---
    console.log('Logging in with:', { email, password });
    setTimeout(() => {
      // ** In a real app, you would handle the response from your server here **
      
      // Example of a failed login
      if (password === 'wrong') {
        setError('Invalid email or password. Please try again.');
      } else {
        // Example of a successful login
        alert('Login successful! Redirecting...');
        // you would typically redirect the user here, e.g., using useNavigate()
      }
      
      setIsLoading(false); // End loading state
    }, 1500); // 1.5-second delay
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center shadow-lg p-3 mb-5 bg-white rounded">
          
          {/* Left Column: Image */}
          <div className="col-md-6 p-0">
            {/* Make sure the 'imgs' folder is in your 'public' directory */}
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
            <form onSubmit={handleLogin} noValidate> {/* noValidate prevents default browser validation */}
              
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
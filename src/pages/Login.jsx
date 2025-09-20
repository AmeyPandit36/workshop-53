// import React, { useState } from 'react';
// // Step 1: Import the useNavigate hook from react-router-dom
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   // Step 2: Initialize the navigate function
//   const navigate = useNavigate();

//   // State for form inputs
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // State for loading and errors
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   // --- Form Validation ---
//   const validateForm = () => {
//     if (!email || !password) {
//       setError('Both email and password are required.');
//       return false;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Please enter a valid email address.');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   // --- Handle Form Submission with a real API call ---
//   const handleLogin = async (e) => { // Mark the function as async
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       // --- This is the real API call ---
//       // Replace with your actual backend API endpoint
//       const response = await fetch('https://your-api-endpoint.com/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // Use the error message from the server if it exists
//         throw new Error(data.message || 'Invalid credentials. Please try again.');
//       }

//       // --- On SUCCESS ---
//       console.log('Login successful:', data);
//       // Optional: Save the authentication token from the response
//       // localStorage.setItem('authToken', data.token);

//       // Step 3: Redirect to another page (e.g., a user dashboard)
//       navigate('/dashboard'); 

//     } catch (err) {
//       // Handle errors from the API call (e.g., network issues, bad credentials)
//       setError(err.message);
//     } finally {
//       // This runs regardless of success or failure to stop the loading spinner
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="container my-5">
//         <div className="row align-items-center shadow-lg p-3 mb-5 bg-white rounded">
          
//           {/* Left Column: Image */}
//           <div className="col-md-6 p-0">
//             <img
//               src="/imgs/loginfarmer.png"
//               className="img-fluid rounded-start"
//               loading="lazy"
//               alt="Login illustration"
//             />
//           </div>

//           {/* Right Column: Login Form */}
//           <div className="col-md-6 p-5">
//             <h2 className="fw-bold mb-4">Login to Your Account</h2>
//             <form onSubmit={handleLogin} noValidate>
              
//               {/* --- Display General Error Message --- */}
//               {error && <div className="alert alert-danger">{error}</div>}

//               {/* Email Input */}
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter your email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Enter your password"
//                   autoComplete="current-password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <div className="text-end mb-4">
//                 <a href="#!" className="text-decoration-none">Forgot Password?</a>
//               </div>

//               {/* Login Button with Loading State */}
//               <div className="d-grid">
//                 <button 
//                   type="submit" 
//                   className="btn btn-success btn-lg" 
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                       {' '}Loading...
//                     </>
//                   ) : (
//                     'Login'
//                   )}
//                 </button>
//               </div>
//             </form>

//             {/* Registration Link */}
//             <div className="text-center mt-4">
//               <p className="text-muted">
//                 Not a user? <Link to="/register" className="text-decoration-none fw-bold">Register here</Link>
//               </p>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Login() {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Validate the form inputs
  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If no errors, proceed with login logic
      setErrors({});
      console.log('Form Submitted:', formData);
      alert('Login successful!');
      // In a real app, you would handle API calls and redirection here
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-md-10 col-lg-9">
            {/* Card with shadow */}
            <div className="card shadow-lg border-0">
                <div className="card-body p-0">
                    <div className="row g-0">
                        {/* Left Column: Image */}
                        <div className="col-lg-6 d-none d-lg-block p-5" style={{ background: '#f8f9fa' }}>
                            {/* Make sure your image is in the public/imgs folder */}
                            <img
                                src="/imgs/loginfarmer.png" // IMPORTANT: Replace with your image path
                                className="img-fluid"
                                alt="Farmer with a basket of vegetables"
                            />
                        </div>

                        {/* Right Column: Login Form */}
                        <div className="col-lg-6 p-5">
                            <h2 className="fw-bold mb-4">Login to Your Account</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                {/* Email Input */}
                                <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                {/* Password Input */}
                                <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>

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
        </div>
      </div>
    </div>
  );
}

export default Login;
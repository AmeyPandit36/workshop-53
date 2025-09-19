import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  // State for validation errors and loading status
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
    // Clear the error for the field being edited
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: null }));
    }
  };

  // --- A dedicated function for all validation logic ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If validation fails, stop the submission
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    console.log("Registering with data:", formData);

    // Simulate API call
    setTimeout(() => {
      alert("Registration successful! (See console for data)");
      setIsLoading(false);
      // Optional: Clear form
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        agreedToTerms: false,
      });
    }, 1500);
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center shadow-lg p-3 mb-5 bg-white rounded">
          <div className="col-md-6 p-0">
            <img
              src="/imgs/registerfarmer2.png"
              className="img-fluid rounded-start"
              alt="Registration illustration"
            />
          </div>
          <div className="col-md-6 p-5">
            <h2 className="fw-bold mb-4">Create an Account</h2>
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.fullName ? "is-invalid" : ""
                  }`}
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <div className="invalid-feedback">{errors.fullName}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Mobile Number */}
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && (
                  <div className="invalid-feedback">{errors.mobile}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className={`form-check-input ${
                    errors.agreedToTerms ? "is-invalid" : ""
                  }`}
                  id="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="agreedToTerms">
                  I agree to the <a href="#!">Terms and Conditions</a>
                </label>
                {errors.agreedToTerms && (
                  <div className="invalid-feedback d-block">
                    {errors.agreedToTerms}
                  </div>
                )}
              </div>

              {/* Register Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <p className="text-muted">
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none fw-bold">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

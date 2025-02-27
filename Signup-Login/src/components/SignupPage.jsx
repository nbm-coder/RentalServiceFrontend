import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/index.css'
// import SocialLogin from './SocialLogin';
 

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [emailExists, setEmailExists] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  // Validate form fields
  const validateForm = async () => {
    const errors = {};

    // Name Validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    }

    // Email Validation
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        errors.email = 'Enter a valid email.';
      } else {
        // Simulating an API call to check if email exists
        const isUnique = await checkEmailUnique(formData.email);
        if (!isUnique) {
          errors.email = 'Email already in use.';
          setEmailExists(true);
        } else {
          setEmailExists(false);
        }
      }
    }

    // Password Validation
    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    // Phone Number Validation
    if (!formData.phone) {
      errors.phone = 'Phone number is required.';
    } else {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(formData.phone)) {
        errors.phone = 'Enter a valid 10-digit phone number.';
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Simulating API Call for Email Uniqueness Check
  const checkEmailUnique = async (email) => {
    // Here, replace this with an actual API call.
    const existingEmails = ['test@example.com', 'user@domain.com'];
    return !existingEmails.includes(email);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validateForm()) {
      console.log('Signing up with:', formData);
      alert('Signup successful!');
      // Reset form after successful submission
      setFormData({ name: '', email: '', password: '', phone: '', address: '' });
    }

  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="form-title">Signup</h2>


        <div className="form-group">

          <div className='input-wrapper'>
            <i className="material-symbols-outlined">person</i>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input-field"
              value={formData.name}
              required
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
        </div>

        <div className="form-group">
          <div className='input-wrapper'>
            <i className="material-symbols-outlined">mail</i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input-field"
              value={formData.email}
              required
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-group">
          <div className='input-wrapper'>
            <i className="material-symbols-outlined">lock</i>
            <input
              type={isPasswordShown ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input-field"
              value={formData.password}
              required
              onChange={handleChange}
            />
            <i
              onClick={() => setIsPasswordShown((prevState) => !prevState)}
              className="material-symbols-outlined eye-icon"
              style={{ cursor: 'pointer' }}
            >
              {isPasswordShown ? 'visibility' : 'visibility_off'}
            </i>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
        </div>

        <div className="form-group">
          <div className='input-wrapper'>
            <i className="material-symbols-outlined">call</i>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="input-field"
              value={formData.phone}
              required
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <div className='input-wrapper'>
            <i className="material-symbols-outlined">home</i>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              className="input-field"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        

        <button type="submit" className="login-button">
          Sign Up
        </button>
      </form>
      <p className="signup-prompt">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default SignupPage;

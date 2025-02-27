import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/index.css'
import SocialLogin from "./SocialLogin";
// import InputField from "./InputField";

const LoginPage = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Hook to programmatically navigate

    const validateForm = async () => {
        const errors = {};
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
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Logging in with:', formData);
            // Add login logic here
        }
    };

    return (
        // <div className="login-container">
        //     <h2 className="form-title">Log in with</h2>
        //     <SocialLogin />
        //     <p className="separator"><span>or</span></p>
        //     <form action="#" className="login-form">
        //         <InputField type="email" placeholder="Email address" icon="mail" required/>
        //         <InputField type="password" placeholder="Password" icon="lock" required />
        //         <a href="#" className="forgot-password-link">Forgot password?</a>
        //         <button type="submit" className="login-button">Log In</button>
        //     </form>
        //     <p className="signup-prompt">
        //         Don&apos;t have an account? <Link to="/signup">Signup</Link>
        //     </p>
        // </div>

        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit} noValidate>
                <h2 className="form-title">Login</h2>
                <SocialLogin />
                <p className="separator"><span>or</span></p>
                <div className="form-group">
                    {/* <InputField type="email" placeholder="Email address" icon="mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/> */}

                    <div className='input-wrapper'>

                        <i className="material-symbols-outlined">mail</i>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="input-field"
                            value={formData.email}
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <div className='input-wrapper'>
                        <i className="material-symbols-outlined">lock</i>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input-field"
                            value={formData.password}
                            required
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                </div>

                <button type="submit" className="login-button">Log In</button>

                <p className="signup-prompt">
                    Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}
export default LoginPage;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from "./SocialLogin";
import InputField from "./InputField";

const LoginPage = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Hook to programmatically navigate

    const validateForm = () => {
        const errors = {};
        if (!formData.email) errors.email = 'Email is required.';
        if (!formData.password) errors.password = 'Password is required.';
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
          <div className="login-container">
            <h2 className="form-title">Log in with</h2>
            <SocialLogin />
            <p className="separator"><span>or</span></p>
            <form action="#" className="login-form">
              <InputField type="email" placeholder="Email address" icon="mail" />
              <InputField type="password" placeholder="Password" icon="lock" />
              <a href="#" className="forgot-password-link">Forgot password?</a>
              <button type="submit" className="login-button">Log In</button>
            </form>
            <p className="signup-prompt">
              Don&apos;t have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>

        // <div className="login-container">
        //     <form className="login-form" onSubmit={handleSubmit}>
        //         <h2>Login</h2>

        //         <div className="form-group">
        //         <InputField type="email" placeholder="Email address" icon="mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>

        //             {/* <label>Email</label>
        //             <input
        //                 type="text"
        //                 name="email"
        //                 placeholder="Enter your email"
        //                 value={formData.email}
        //                 icon="mail" */}
        //                 {/* onChange={(e) => setFormData({ ...formData, email: e.target.value })} */}
        //             {/* /> */}
        //             {errors.email && <span className="error">{errors.email}</span>}
        //         </div>

        //         <div className="form-group">
        //             <label>Password</label>
        //             <input
        //                 type="password"
        //                 name="password"
        //                 placeholder="Enter your password"
        //                 value={formData.password}
        //                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        //             />
        //             {errors.password && <span className="error">{errors.password}</span>}
        //         </div>

        //         <button type="submit" className="login-button">Log In</button>

        //         <p className="redirect-text">
        //         Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        //         </p>
        //     </form>
        // </div>
    );
}
export default LoginPage;
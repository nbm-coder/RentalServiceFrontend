// import React from 'react'
import { Link } from 'react-router-dom';
import InputField from "./InputField";
import '../styles/SignupPage.css'
import '../styles/index.css'
const SignupPage = () => {
    return (

        <div className="login-container">
            <h2 className="form-title">Signup</h2>
            <form action="#" className="login-form">
                <InputField type="username" placeholder="Name" icon="person" />
                <InputField type="email" placeholder="Email address" icon="mail" />
                <InputField type="Phone" placeholder="Phone Number" icon="call" />               
                <InputField type="password" placeholder="Password" icon="lock" />
                <InputField type="address" placeholder="Address" icon="home" />

                <button type="submit" className="login-button">Signup</button>
            </form>
            <p className="signup-prompt">
                Already have an account? <Link to="/login">Log In</Link>
            </p>
        </div>


    )
}

export default SignupPage


// import  { useState } from 'react';
// import '../SignupPage.css';
// import '../index.css'

// function SignupPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [emailExists, setEmailExists] = useState(false);

//   // Validate form fields
//   const validateForm = async () => {
//     const errors = {};

//     // Name Validation
//     if (!formData.name.trim()) {
//       errors.name = 'Name is required.';
//     }

//     // Email Validation
//     if (!formData.email) {
//       errors.email = 'Email is required.';
//     } else {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(formData.email)) {
//         errors.email = 'Enter a valid email.';
//       } else {
//         // Simulating an API call to check if email exists
//         const isUnique = await checkEmailUnique(formData.email);
//         if (!isUnique) {
//           errors.email = 'Email already in use.';
//           setEmailExists(true);
//         } else {
//           setEmailExists(false);
//         }
//       }
//     }

//     // Password Validation
//     if (!formData.password) {
//       errors.password = 'Password is required.';
//     } else if (formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters.';
//     }

//     // Phone Number Validation
//     if (!formData.phone) {
//       errors.phone = 'Phone number is required.';
//     } else {
//       const phonePattern = /^[0-9]{10}$/;
//       if (!phonePattern.test(formData.phone)) {
//         errors.phone = 'Enter a valid 10-digit phone number.';
//       }
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Simulating API Call for Email Uniqueness Check
//   const checkEmailUnique = async (email) => {
//     // Here, replace this with an actual API call.
//     const existingEmails = ['test@example.com', 'user@domain.com'];
//     return !existingEmails.includes(email);
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (await validateForm()) {
//       console.log('Signing up with:', formData);
//       alert('Signup successful!');
//       // Reset form after successful submission
//       setFormData({ name: '', email: '', password: '', phone: '', address: '' });
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="signup-form" onSubmit={handleSubmit} noValidate>
//         <h2 className="form-title">Sign Up</h2>

//         <div className="input-wrapper">
//         <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//         </div>

//         <div className="login-container">
//         <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>

//         <div className="login-container">
//         <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>

//         <div className="login-container">
//         <label htmlFor="phone">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           {errors.phone && <span className="error">{errors.phone}</span>}
//         </div>

//         <div className="login-container">
//         <label htmlFor="address">Address (Optional)</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             placeholder="Enter your address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="login-button">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default SignupPage;

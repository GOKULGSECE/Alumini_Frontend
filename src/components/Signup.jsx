import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css'; 

function Signup() {
  return (
    <div className="signup-container">
      <h2>Registration Form</h2>
      <form>
        <div className="form-group">
          <label>First Name <span className="required">*</span></label>
          <input type="text" name="firstName" placeholder="Enter your first name" required />
        </div>
        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input type="text" name="lastName" placeholder="Enter your last name" required />
        </div>
        <div className="form-group">
          <label>Email <span className="required">*</span></label>
          <input type="email" name="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-group">
          <label>Password <span className="required">*</span></label>
          <input type="password" name="password" placeholder="Enter your password" required />
        </div>
        <div className="form-group">
          <label>Enrollment Number <span className="required">*</span></label>
          <input type="text" name="enrollNo" placeholder="Enter your enrollment number" required />
        </div>
        <div className="form-group">
          <label>Graduation Year <span className="required">*</span></label>
          <input type="number" name="graduationYear" placeholder="Enter your graduation year" required />
        </div>
        <div className="form-group">
          <label>Department <span className="required">*</span></label>
          <input type="text" name="department" placeholder="Enter your department" required />
        </div>
        <div className="form-group">
          <label>Date of Birth <span className="required">*</span></label>
          <input type="date" name="dob" placeholder="Enter your date of birth" required />
        </div>
        <div className="form-group">
          <label>Phone Number <span className="required">*</span></label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label>Address <span className="required">*</span></label>
          <textarea name="address" placeholder="Enter your address" rows="4" required></textarea>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Go back to Login</Link>
      </p>
    </div>
  );
}

export default Signup;

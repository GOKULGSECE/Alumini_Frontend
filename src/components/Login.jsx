import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handlenavi = ()=>{
    navigate('/home');
  }

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <p>Login and stay connected to your alumni community</p>
      <button className="social-login linkedin">Login with LinkedIn</button>
      <button className="social-login google">Login with Google</button>
      <div className="separator">
        <span>or</span>
      </div>
      <form>
        <div className="form-group">
          <label>Email Id *</label>
          <input type="text" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <div className="password-container">
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              placeholder="Enter your password" 
              required 
            />
            <i 
              className={`show-password-icon ${showPassword ? 'show' : 'hide'}`} 
              onClick={togglePasswordVisibility}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </i>
          </div>
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit" className="submit-btn" onClick={handlenavi}>Submit</button>
      </form>
      <div className="signup-link">
        <p>Not registered yet? <Link to="/signup">Click here to Signup Now!</Link></p>
      </div>
      <div className="home-link">
        <p>Want to go back? <Link to="/home">Go to Home</Link></p>
      </div>
    </div>
  );
}

export default Login;

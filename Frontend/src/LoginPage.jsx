import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const dummyUsers = [
    { email: 'dev1@codereviewer.com', password: 'Dev123!' },
    { email: 'savitha@codereviewer.com', password: 'savi@123' },
    { email: 'dev3@codereviewer.com', password: 'Dev789!' },
    { email: 'admin@codereviewer.com', password: 'Admin123!' },
    { email: 'test@codereviewer.com', password: 'Test123!' }
  ];

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = dummyUsers.find(
      u => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setError('');
      toast.success('🚀 Login successful! Welcome back!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => navigate('/home')
      });
    } else {
      setError('Invalid email or password');
      toast.error('❌ Invalid credentials. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="floating-elements">
        <div className="float-item">&lt;/&gt;</div>
        <div className="float-item">{`{}`}</div>
        <div className="float-item">#</div>
        <div className="float-item">( )</div>
        <div className="float-item">&lt;/&gt;</div>
      </div>
      
      <div className="login-box">
        <div className="platform-logo">
          <div className="code-icon">&lt;/&gt;</div>
        </div>
        <h1>Code Review Platform</h1>
        <p className="welcome-text">Next-Generation Code Intelligence</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-wrapper">
              <i className="fas fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Developer Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-button">
            <span>Access Platform</span>
          </button>
        </form>

        <div className="additional-links">
          <a href="/forgot-password" className="forgot-link">Reset Password</a>
          <a href="/register" className="register-link">New Developer?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
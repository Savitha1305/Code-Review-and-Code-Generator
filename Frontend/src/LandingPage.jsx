import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes, FaCheck, FaEnvelope, FaPhone, FaMapMarkerAlt, 
         FaBolt, FaShieldAlt, FaChartLine, FaClock, FaUsers, FaArrowRight, 
         FaRocket, FaMagic } from 'react-icons/fa';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const features = [
    {
      icon: <FaMagic />,
      title: "AI-Powered Generation",
      description: "Transform your ideas into production-ready code with advanced AI algorithms"
    },
    {
      icon: <FaBolt />,
      title: "Real-time Analysis",
      description: "Get instant feedback on code quality and performance metrics"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "Automatic vulnerability detection and security risk assessment"
    },
    {
      icon: <FaChartLine />,
      title: "Performance Insights",
      description: "Deep analysis of code performance and optimization suggestions"
    },
    {
      icon: <FaClock />,
      title: "Time Optimization",
      description: "Reduce development time by up to 60% with smart automation"
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Seamless integration with your existing development workflow"
    }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#" className="logo">
            <FaCode />
            <span>CodeCraft AI</span>
          </a>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <Link to="/review-code" className="nav-link">
              <FaCode /> Review Your Code
            </Link>
            <Link to="/generate-code" className="nav-link">
              <FaCode /> Generate Your Code
            </Link>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isOpen && (
          <div className="mobile-menu glass-card">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#review-code" className="nav-link" onClick={() => setIsOpen(false)}>Review Your Code</a>
            <a href="#generate-code" className="nav-link" onClick={() => setIsOpen(false)}>Generate Your Code</a>
            <a href="#pricing" className="nav-link" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="animate-float">Next-Generation Code Intelligence</h1>
          <p>Transform your development workflow with AI-powered code review and generation.
             Build better software, faster than ever before.</p>
          {/* <div className="button-group">
            <button className="btn btn-primary animate-glow">
              Get Started <FaRocket className="ml-2" />
            </button>
            <button className="btn btn-secondary">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div> */}
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title animate-float">Powerful Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-float">
              <h3>1M+</h3>
              <p>Lines of Code Reviewed</p>
            </div>
            <div className="stat-item animate-float">
              <h3>50K+</h3>
              <p>Active Developers</p>
            </div>
            <div className="stat-item animate-float">
              <h3>99%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-item animate-float">
              <h3>24/7</h3>
              <p>Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="pricing-grid">
          <div className="pricing-card glass-card">
            <h3>Starter</h3>
            <div className="price">$49<span>/month</span></div>
            <ul className="feature-list">
              <li><FaCheck /> Up to 5 team members</li>
              <li><FaCheck /> Basic code review</li>
              <li><FaCheck /> Standard support</li>
              <li><FaCheck /> Community access</li>
            </ul>
            <button className="btn btn-secondary">Get Started</button>
          </div>
          <div className="pricing-card recommended glass-card animate-float">
            <span className="recommended-badge">Most Popular</span>
            <h3>Professional</h3>
            <div className="price">$99<span>/month</span></div>
            <ul className="feature-list">
              <li><FaCheck /> Up to 15 team members</li>
              <li><FaCheck /> Advanced code review</li>
              <li><FaCheck /> Priority support</li>
              <li><FaCheck /> Custom integrations</li>
              <li><FaCheck /> Advanced analytics</li>
            </ul>
            <button className="btn btn-primary animate-glow">Get Started</button>
          </div>
          <div className="pricing-card glass-card">
            <h3>Enterprise</h3>
            <div className="price">$199<span>/month</span></div>
            <ul className="feature-list">
              <li><FaCheck /> Unlimited team members</li>
              <li><FaCheck /> Premium code review</li>
              <li><FaCheck /> 24/7 dedicated support</li>
              <li><FaCheck /> Custom features</li>
              <li><FaCheck /> Advanced security</li>
            </ul>
            <button className="btn btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info glass-card">
            <div className="contact-item animate-float">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>contact@codecraft.ai</p>
              </div>
            </div>
            <div className="contact-item animate-float">
              <FaPhone />
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item animate-float">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>123 Innovation Drive, Tech Valley</p>
              </div>
            </div>
          </div>
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              className="form-input"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary animate-glow">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer glass-card">
        <p>© 2025 CodeCraft AI by Savitha. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;
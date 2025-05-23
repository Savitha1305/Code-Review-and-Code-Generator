import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import axios from 'axios';
import './CodeReview.css';
import { FaCode, FaArrowLeft, FaMagic } from 'react-icons/fa';

function CodeReview() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  async function reviewCode() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      setError('Failed to review code. Please try again.');
      console.error('Error reviewing code:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="code-review-container">
      <nav className="code-review-nav">
        <div className="nav-content">
          <Link to="/home" className="back-button">
            <FaArrowLeft /> Back
          </Link>
          <div className="nav-title">
            <FaCode className="nav-icon" />
            <h1>Code Review</h1>
          </div>
        </div>
      </nav>

      <main className="code-review-main">
        <div className="editor-section">
          <div className="editor-header">
            <h2>Your Code</h2>
          </div>
          <div className="code-editor-container">
            <div className="code-editor">
              <textarea
                value={code}
                onChange={handleCodeChange}
                className="code-textarea"
                spellCheck="false"
              />
            </div>
          </div>
          <div className="button-container">
            <button 
              onClick={reviewCode} 
              className={`review-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Analyzing...
                </>
              ) : (
                <>
                  <FaMagic /> Review Code
                </>
              )}
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
        
        <div className="review-section">
          <div className="review-header">
            <h2>Review Results</h2>
          </div>
          <div className="review-content">
            {review ? (
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review}
              </Markdown>
            ) : (
              <div className="placeholder-text">
                <FaCode size={24} />
                <p>Your code review results will appear here</p>
                <span className="placeholder-hint">Click "Review Code" to start analysis</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CodeReview;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "prismjs/themes/prism.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import axios from 'axios';
import './GenerateCode.css';
import { FaCode, FaArrowLeft, FaMagic } from 'react-icons/fa';

function GenerateCode() {
  const [code, setCode] = useState(``);
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);



async function generateCode() {
  setIsLoading(true);
  setError(null);
  try {
    const response = await axios.post('http://localhost:8000/ai/generate-code', { code });

    setReview(response.data);
  } catch (error) {
    setError('Failed to generate code. Please try again.');
    console.error('Error generating code:', error);
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
            <FaMagic className="nav-icon" />
            <h1>Generate Code</h1>
          </div>
        </div>
      </nav>

      <main className="code-review-main">
        <div className="editor-section">
          <div className="editor-header">
            <h2>Your Prompt</h2>
          </div>
          <div className="code-editor-container">
            <div className="code-editor">
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => Prism.highlight(code, Prism.languages.plaintext, "plaintext")}
                padding={20}
                placeholder="Enter your prompt here..."
                className="editor-textarea"
                style={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: 16,
                  lineHeight: '1.6',
                  minHeight: '100%',
                  width: '100%',
                  position: 'relative',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>
          <div className="button-container">
            <button 
              onClick={generateCode} 
              className={`review-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Generating...
                </>
              ) : (
                <>
                  <FaMagic /> Generate Code
                </>
              )}
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
        
        <div className="review-section">
          <div className="review-header">
            <h2>Generated Code</h2>
          </div>
          <div className="review-content">
            {review ? (
              <div className="markdown-body">
                <Markdown rehypePlugins={[rehypeHighlight]}>
                  {String(review)}
                </Markdown>
              </div>
            ) : (
              <div className="placeholder-text">
                <FaMagic size={24} />
                <p>Your generated code will appear here</p>
                <span className="placeholder-hint">Click "Generate Code" to start</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default GenerateCode;
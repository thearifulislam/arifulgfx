import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { protectCode } from './lib/codeProtection'
import { protectAllImages } from './lib/imageProtection'

// Initialize protections
protectCode();
protectAllImages();

// Re-apply image protection when DOM changes
const observer = new MutationObserver(() => {
  protectAllImages();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

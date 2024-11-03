import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';
import 'modern-normalize';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
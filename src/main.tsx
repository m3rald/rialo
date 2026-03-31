import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// Polyfill global for libraries that expect it
if (typeof window !== 'undefined' && typeof global === 'undefined') {
  (window as any).global = window;
}

import App from './App.tsx';
import './index.css';
import { Web3Provider } from './providers/Web3Provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </StrictMode>,
);

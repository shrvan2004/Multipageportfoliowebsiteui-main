
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import App from './src/App';
  import './index.css';

  const container = document.getElementById('root');
  if (!container) throw new Error('Root element not found');

  const root = createRoot(container);
  // Suppress noisy React Router future-flag warnings in development only
  if ((import.meta as any).env?.DEV) {
    const originalWarn = console.warn.bind(console);
    console.warn = (...args: any[]) => {
      try {
        const text = args.join(' ');
        if (
          text.includes('React Router Future Flag Warning') ||
          text.includes('v7_startTransition') ||
          text.includes('v7_relativeSplatPath') ||
          text.includes('React Router will begin wrapping state updates')
        ) {
          return;
        }
      } catch (e) {
        // ignore
      }
      originalWarn(...args);
    };
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
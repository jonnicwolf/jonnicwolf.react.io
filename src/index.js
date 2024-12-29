import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkmodeProvider } from './Darkmode';
import './index.css';
import ContextApp from './App.tsx';
import Footer from './components/atoms/Footer.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkmodeProvider>
      <BrowserRouter>
          <QueryClientProvider client={new QueryClient()}>
            <ContextApp />
            <Footer />
          </QueryClientProvider>
      </BrowserRouter>
    </DarkmodeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
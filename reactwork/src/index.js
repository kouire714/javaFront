import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// index.html의 root를 App.js로 재해석해서 랜더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
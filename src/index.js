
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import './index.css'; // Подключение стилей для всего приложения
import App from './App'; // Основной компонент приложения
import reportWebVitals from './reportWebVitals'; // Функция для измерения производительности


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

reportWebVitals();

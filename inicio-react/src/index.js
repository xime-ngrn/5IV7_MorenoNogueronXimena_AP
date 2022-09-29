import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* Aquí solamente se carga el componente de App, en App.js es donde se puede editar todo lo relacionado a dicho componente. Lo más apropiado sería contar con una carpeta "Components" que almacene todos los componentes */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();

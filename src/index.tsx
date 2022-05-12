import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Imported Pages
import App from './App';
import Mining from './routes/mining';
import Ships from './routes/ships';
import Wrecks from './routes/wrecks';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='mining' element={<Mining />} />
          <Route path='ships' element={<Ships />} />
          <Route path='wreck-sites' element={<Wrecks />} />
          <Route
            path='*'
            element={
              <section className='flex justify-center items-center'>
                <h1>404 - Quantum Drive out of alignment! </h1>
              </section>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

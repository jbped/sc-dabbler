import React from 'react';
import './App.css';

import { Outlet } from 'react-router-dom';

// components
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <main className='min-h-screen bg-slate-900'>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;

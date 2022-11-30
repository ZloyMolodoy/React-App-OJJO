import React, { useState } from 'react';
import './App.css';
import {NavLink, Route, Routes, } from 'react-router-dom';

import { Main } from './components/pages/main';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
  );
}

export default App;

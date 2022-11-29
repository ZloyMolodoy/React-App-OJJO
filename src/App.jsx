import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, } from 'react-router-dom';

import { Main } from './components/pages/main';

function App() {
  return (
    <BrowserRouter>
      <Route to="/" element={<Main />}/>
    </BrowserRouter>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, } from 'react-router-dom';

import { Main } from './components/pages/main';
import {contacts} from './components/contacts';

function App() {
  return (
    <BrowserRouter>
      <Route to="/" element={<Main />}/>
      {/* <Route to="/contacts" element={<contacts />} /> */}
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import {NavLink, Route, Routes, } from 'react-router-dom';

import { Main } from './components/pages/main.jsx';
import {Contacts} from './components/pages/contacts.jsx'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contacts' element={ <Contacts />} />
      </Routes>
  );
}

export default App;

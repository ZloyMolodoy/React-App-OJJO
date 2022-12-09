import React, { useState } from 'react';
import './App.css';
import {NavLink, Route, Routes, } from 'react-router-dom';

import { Main } from './components/pages/main.jsx';
import {Contacts} from './components/pages/contacts.jsx';
import {Login} from './components/pages/login.jsx';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contacts' element={ <Contacts />} />
        <Route path='/login' element={ <Login />} />
      </Routes>
  );
}

export default App;

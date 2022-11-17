import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, } from 'react-router-dom';
import Main from './components/Main';
import Catalog from './components/Catalog';

import logo from './components/images/logo.png'
import search from './components/images/nav-search.png';
import cocoLogo from './components/images/Cocofine-Jewelry-icon.png'
function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <div className='head'>
          <div className='container'>
            <div className='nav'>
              <div className='nav-links'>
                <NavLink to="/contagents" className={"nav-links__item"}>Контрагентам</NavLink>
                <NavLink to="/designers" className={"nav-links__item"}>Дизайнерам</NavLink>
                <NavLink to="/jobs" className={"nav-links__item"}>Вакансии</NavLink>
              </div>
              <img src={logo} className={"nav-logo"} alt="logo"></img>
              <div className='nav-links'>
                <NavLink to="/search" className={"nav-links__item"}><img alt='search' className='nav-links__search-icon' src={search}></img>Поиск</NavLink>
                <NavLink to="/loginRegister" className={"nav-links__item"}>Вход/Регистрация</NavLink>
                <NavLink to="/favorites" className={"nav-links__item"}>Избранное</NavLink>
              </div>
            </div>
            <div className='nav-bottom'>
              <p className='nav-bottom__title'>Долго, дорого, богато!</p>
              <NavLink to='/catalog' className={'nav-bottom__link'}>КАТАЛОГ ИЗДЕЛИЙ</NavLink>
            </div>
          </div>
          <div className='nav-representatives'>
            <div className='container'>
              <div className='nav-representatives__content'>
                <img className='nav-representatives__item nav-representatives__line' alt='cocoLogo' src={cocoLogo} />
                <img className='nav-representatives__item nav-representatives__line'  alt='cocoLogo' src={cocoLogo} />
                <img className='nav-representatives__item nav-representatives__line' alt='cocoLogo' src={cocoLogo} />
                <img className='nav-representatives__item nav-representatives__line' alt='cocoLogo' src={cocoLogo} />
                <img className='nav-representatives__item nav-representatives__line' alt='cocoLogo' src={cocoLogo} />
                <img className='nav-representatives__item ' alt='cocoLogo' src={cocoLogo} />
              </div>
            </div>
          </div>
        </div>
        <div className='catalog'>
          <div className='container'>
            <div className='catalog-content'>
              <p>К мероприятиям</p>
              <p>Настоящая красота здесь!</p>
              <div>
                <button>СВАДЬБА</button>
                <button>МУЖУ</button>
                <button>ЖЕНЕ</button>
                <button>ПАРТНЕРУ</button>
                <button>КОЛЛЕКЦИИ</button>
                <button>Редкость</button>
              </div>
              <div>
                <div>
                  <NavLink to='/catalog'><div><p>КОЛЬЦА</p></div></NavLink>
                  <NavLink to='/catalog'><div><p>СЕРЬГИ</p></div></NavLink>
                  <NavLink to='/catalog'><div><p>ПОДВЕСКИ</p></div></NavLink>
                </div>
                <div>
                  <NavLink to='/catalog'><div><p>ЗАПОНКИ</p></div></NavLink>
                  <NavLink to='/catalog'><div><p>БРАСЛЕТЫ</p></div></NavLink>
                  <NavLink to='/catalog'><div><p>ЧАСЫ</p></div></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

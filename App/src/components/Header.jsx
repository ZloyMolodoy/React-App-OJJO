import React from 'react'
import header from './styles/header/header.module.css'

import { NavLink } from 'react-router-dom';

import logo from './images/logo.png'
import search from './images/nav-search.png';

const Header = () => {
    return (<div className={header.head}>
        <div className='nav-links'>
            <NavLink to="/contacts" className={"nav-links__item"}>Карта</NavLink>
            <NavLink to="/designers" className={"nav-links__item"}>Дизайнерам</NavLink>
            <NavLink to="/jobs" className={"nav-links__item"}>Вакансии</NavLink>
        </div>
        <img src={logo} className={"nav-logo"} alt="logo"></img>
        <div className='nav-links'>
            <NavLink to="/search" className={"nav-links__item"}><img alt='search' className='nav-links__search-icon' src={search}></img>Поиск</NavLink>
            <NavLink to="/loginRegister" className={"nav-links__item"}>Вход/Регистрация</NavLink>
            <NavLink to="/favorites" className={"nav-links__item"}>Избранное</NavLink>
        </div>

    </div>);


};



export default Header;
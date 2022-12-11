import React from 'react';
import login from '../styles/logRegAcc/login.module.css';

import { Link } from 'react-router-dom';

import logo from '../images/logo.png'

export function Login() {

    return (<div className={login.login}>
        <div className={login.loginUpper}>
            <Link className={login.loginUpperLink}>Зарегистрироваться</Link>
            <Link to='/'><img alt='logo'  src={logo} /></Link>
        </div>
        <div className={login.loginCase}>
            <p className={login.loginCaseTitle}>Вход</p>
            <p className={login.loginCaseEmail}>Email</p>
            <input className={login.loginCaseInput} />
            <div>
            <p className={login.loginCasePassword}>Пароль</p>
            <Link>Забыли пароль?</Link>
            </div>
            <input className={login.loginCaseInput} />
            <button>Войти</button>
        </div>
        <Link>Правила сервера</Link>
    </div>)
}
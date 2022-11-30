import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import Footer from '../Footer';

import logo from '../images/logo.png'
import search from '../images/nav-search.png';
import cocoLogo from '../images/Cocofine-Jewelry-icon.png'

export function Main() {

  return (
    <div className='App'>
      <div className='head'>
        <div className='container'>
          <div className='nav'>
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
              <img className='nav-representatives__item nav-representatives__line' alt='cocoLogo' src={cocoLogo} />
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
            <p className='catalog-text-pack__subtitle'>К мероприятиям</p>
            <p className='catalog-text-pack__title'>Настоящая красота здесь!</p>
            <div className='catalog-button-pack'>
              <button id='btn0' className='catalog-button-pack__item catalog-button-pack__active'>СВАДЬБА</button>
              <button id='btn1' className='catalog-button-pack__item' >МУЖУ</button>
              <button id='btn2' className='catalog-button-pack__item'>ЖЕНЕ</button>
              <button id='btn3' className='catalog-button-pack__item'>ПАРТНЕРУ</button>
              <button id='btn4' className='catalog-button-pack__item'>КОЛЛЕКЦИИ</button>
              <button id='btn5' className='catalog-button-pack__item'>РЕДКОСТЬ</button>
            </div>
            <div className='catalog-cataloge-pack__content'>
              <div className='catalog-cataloge-pack'>
                <NavLink className='catalog-cataloge-pack-navlink' to='/catalog'><div className='catalog-cataloge-pack__first'><p className='catalog-cataloge-pack__text'>КОЛЬЦА</p></div></NavLink>
                <NavLink className='catalog-cataloge-pack-navlink' to='/catalog'><div className='catalog-cataloge-pack__second'><p className='catalog-cataloge-pack__text'>СЕРЬГИ</p></div></NavLink>
                <NavLink className='catalog-cataloge-pack-navlink' to='/catalog'><div className='catalog-cataloge-pack__third'><p className='catalog-cataloge-pack__text'>ПОДВЕСКИ</p></div></NavLink>
              </div>
              <div className='catalog-cataloge-pack'>
                <NavLink className='catalog-cataloge-pack-navlink' to='/catalog'><div className='catalog-cataloge-pack__fourth'><p className='catalog-cataloge-pack__text'>ЗАПОНКИ</p></div></NavLink>
                <NavLink className='catalog-cataloge-pack-navlink' to='/catalog'><div className='catalog-cataloge-pack__fiveth'><p className='catalog-cataloge-pack__text'>БРАСЛЕТЫ</p></div></NavLink>
                <NavLink className='catalog-cataloge-pack-navlink' to='/catalog'><div className='catalog-cataloge-pack__sixth'><p className='catalog-cataloge-pack__text'>ЧАСЫ</p></div></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='map'>
        <div className='container'>
          <div className='map-text-pack'>
            <p className='map-text-pack__up-title'>Не знаете, что выбрать?</p>
            <p className='map-text-pack__title'>Посетите наши салоны в Москве</p>
            <p className='map-text-pack__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</p>
            <NavLink className='map-text-pack__button' to='/map'>НАШИ САЛОНЫ</NavLink>
          </div>
        </div>
      </div>
      <div className='blog'>
        <div className='container'>
          <div className='blog-text-pack'>
            <p className='blog-text-pack__subtitle'>Полезные статьи</p>
            <p className='blog-text-pack__title'>Лучшие советы по подбору дорогих подарков</p>
            <div className='blog-image-pack'>
              <NavLink className="blog-image-pack__custom-link"><div className='blog-image-pack__first'><span className='blog-text-pack__card'>Как выбрать часы для своей будущей жены</span></div></NavLink>
              <NavLink className="blog-image-pack__custom-link"><div className='blog-image-pack__second'><span className='blog-text-pack__card'>Запонки для мужа: <br />7 ключевых правил покупки аксессуара</span></div></NavLink>
              <NavLink className="blog-image-pack__custom-link"><div className='blog-image-pack__third'><span className='blog-text-pack__card'>Как выбрать обручальные кольца молодоженам</span></div></NavLink>
            </div>
            <div className='blog-text-pack__link-container'><NavLink className='blog-text-pack__link' to='/blog'>ЧИТАТЬ НАШ БЛОГ</NavLink></div>
          </div>
        </div>
      </div>
      <div className='social'>
        <div className='container'>
          <p className='social-text-pack__subtitle'>#ojjo_jewerly</p>
          <p className='social-text-pack__title'>Мы в социальных сетях</p>
          <div className='social-content'>
            <div className='social-content__first'></div>
            <div className='social-content__second'></div>
            <div className='social-content__third'></div>
            <div className='social-content__fourth'></div>
            <div className='social-content__fifth'></div>
            <div className='social-content__sixth'></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
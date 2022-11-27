import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';
import footer from './styles/footer/footer.module.css'

import sublink from '../components/images/subscribe_icon.png'


const Footer = () => {


    return (
        <div className={footer.footer}>
            <div className={footer.footerMain}>
                <div className='container'>
                    <div className={footer.footerTextPack}>
                        <p className={footer.footerTextPackSubtitle}>Полезные советы и персональный предложения</p>
                        <p className={footer.footerTextPackTitle}>Эксклюзивная рассылка</p>
                        <div className={footer.footerEmail}>
                            <div className={footer.footerEmailLeft}>
                                <BrowserRouter>
                                    <NavLink className={footer.footerEmailLeftLink}><img alt='sublink' src={sublink}/> <span>Личный менеджер</span></NavLink>
                                    <NavLink className={footer.footerEmailLeftLink}><img alt='sublink' src={sublink}/> <span>Доставка и оформление</span></NavLink>
                                    <NavLink className={footer.footerEmailLeftLink}><img alt='sublink' src={sublink} /> <span>Индивидуальный дизайн</span></NavLink>
                                </BrowserRouter>
                            </div>
                            <div>
                                <input></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);


};



export default Footer;
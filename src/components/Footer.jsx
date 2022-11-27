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
                                    <NavLink className={footer.footerEmailLeftLink}><img className={footer.footerEmailLeftLinkItemLink} alt='sublink' src={sublink} /> <span>Личный менеджер</span></NavLink>
                                    <NavLink className={footer.footerEmailLeftLink}><img className={footer.footerEmailLeftLinkItemLink} alt='sublink' src={sublink} /> <span>Доставка и оформление</span></NavLink>
                                    <NavLink className={footer.footerEmailLeftLink}><img className={footer.footerEmailLeftLinkItemLink} alt='sublink' src={sublink} /> <span>Индивидуальный дизайн</span></NavLink>
                                </BrowserRouter>
                            </div>
                            <div className={footer.footerEmailRight}>
                                <div className={footer.footerEmailRightBorder}>
                                    <input className={footer.footerEmailRightInput} placeholder='ВАШ E-MAIL'></input>
                                    <button className={footer.footerEmailRightButton}>ОТПРАВИТЬ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footer.footerBottom}>
                <div className='container'>
                    <div className={footer.footerBottomCards}>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>Полезные ссылки</span>
                            <div className={footer.footerBottomCardsLine}></div>
                            <BrowserRouter>
                                <div className={footer.footerBottomTextPack}>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/delivery">Доставка</NavLink>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/Payment">Оплата</NavLink>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/Stoc">Акции</NavLink>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/PrivacyPolicy">Политика конфиденциальности</NavLink>
                                </div>
                            </BrowserRouter>
                        </div>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>оплата</span>
                            <div className={footer.footerBottomCardsLine}></div>
                        </div>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>контакты</span>
                            <div className={footer.footerBottomCardsLine}></div>
                        </div>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>социальные сети</span>
                            <div className={footer.footerBottomCardsLine}></div>
                        </div>
                    </div>
                    <div className={footer.footerBottomCardsLine}></div>
                </div>
            </div>
        </div>);


};



export default Footer;
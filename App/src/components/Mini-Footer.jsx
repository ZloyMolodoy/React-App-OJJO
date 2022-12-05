import React from 'react'
import {NavLink } from 'react-router-dom';
import footer from './styles/footer/footer.module.css'


import visa from '../components/images/footer/visa.png';
import mastercard from '../components/images/footer/mastercard.png';

import phone from '../components/images/footer/phone-icon.png';
import mail from '../components/images/footer/mail-icon.png';

//social image
import youtube from '../components/images/footer/youtube-icon.png';
import vk from '../components/images/footer/vk-icon.png';
import facebook from '../components/images/footer/facebook-icon.png';
import telegram from '../components/images/footer/telegram-icon.png';


const MiniFooter = () => {


    return (
        <div className={footer.footer}>
            <div className={footer.footerBottom}>
                <div className='container'>
                    <div className={footer.footerBottomCards}>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>Полезные ссылки</span>
                            <div className={footer.footerBottomCardsLine}></div>
                                <div className={footer.footerBottomTextPack}>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/delivery">Доставка</NavLink>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/Payment">Оплата</NavLink>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/Stoc">Акции</NavLink>
                                    <NavLink className={footer.footerBottomTextPackLink} to="/PrivacyPolicy">Политика конфиденциальности</NavLink>
                                </div>
                        </div>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>оплата</span>
                            <div className={footer.footerBottomCardsLine}></div>
                            <div className={footer.footerBottomTextPack}>
                                <span className={footer.footerBottomTextPackLink}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</span>
                                <div className={footer.footerBottomImagePack}>
                                    <img className={footer.footerBottomImagePackCard} src={visa} alt='visa' />
                                    <img className={footer.footerBottomImagePackCard} src={mastercard} alt='mastercard' />
                                </div>
                            </div>
                        </div>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>контакты</span>
                            <div className={footer.footerBottomCardsLine}></div>
                            <div className={footer.footerBottomTextPack}>
                                <div className={footer.footerBottomTextPackNumberPack}><img src={phone} alt='phone' /><a className={footer.footerBottomTextPackNumber} href='tel:88122345655'>8 (812) 234-56-55</a></div>
                                <div className={footer.footerBottomTextPackNumberPack}><img src={phone} alt='phone' /><a className={footer.footerBottomTextPackNumber} href='tel:88122345655'>8 (812) 234-56-55</a></div>
                                <div className={footer.footerBottomTextPackNumberPack}><img src={mail} alt='mail' /><a className={footer.footerBottomTextPackNumber} href='mailto:ojjo@ojjo.ru'>ojjo@ojjo.ru</a></div>
                            </div>
                        </div>
                        <div className={footer.footerBottomCardsItem}>
                            <span className={footer.footerBottomTextPackTitle}>социальные сети</span>
                            <div className={footer.footerBottomCardsLine}></div>
                            <div className={footer.footerBottomTextPack} >
                                <span className={footer.footerBottomTextPackSocial}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</span>
                                <div>
                                    <img className={footer.footerBottomImagePackSocial} alt='youtube' src={youtube}/>
                                    <img className={footer.footerBottomImagePackSocial} alt='vk' src={vk}/>
                                    <img className={footer.footerBottomImagePackSocial} alt='facebook' src={facebook}/>
                                    <img className={footer.footerBottomImagePackSocial} alt='telegram' src={telegram}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={footer.footerBottomCardsLine}></div>
                    <div className={footer.footerWarning}>
                            <span className={footer.footerWarningTextPackLink}>(c) 2022 OJJO jewelry</span>
                            <NavLink to='/' className={footer.footerWarningTextPackLink}>Договор публичной офферты</NavLink>
                            <NavLink to='/contagents'className={footer.footerWarningTextPackLink}>Контрагентам</NavLink>
                    </div>
                </div>
            </div>
        </div>);


};



export default MiniFooter;
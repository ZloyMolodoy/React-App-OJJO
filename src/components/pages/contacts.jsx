import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import MiniFooter from '../Mini-Footer';
import contacts from '../styles/contacts/contacts.module.css'

//Images
import location from '../images/contacts/location-icon.png'
import phone from '../images/contacts/phone-icon.png'
import message from '../images/contacts/mail-icon.png'

//GoogleMaps
import Map from '../map/map.jsx'

export function Contacts() {

    return (<div>
        <Header />
        <div className={contacts.contactsBreadcrumbs}>
            <Link className={contacts.contactsBreadcrumbsItem} to='/'>Главная</Link><span className={contacts.contactsBreadcrumbsItem}>/</span><span className={contacts.contactsBreadcrumbsItem}>Контакты</span>
        </div>
        <div className={contacts.contactscontent}>
            <p className={contacts.contactscontentTextPackTitle}>КОНТАКТЫ</p>
            <div className='container'>
                <div className={contacts.contactscontentTextPack}>
                    <div className={contacts.contactscontentCard}>
                        <p className={contacts.contactscontentCardTitle}>Главный офис</p>
                        <span className={contacts.contactscontentCardSubtitle}><img className={contacts.contactscontentCardImage} src={location} />Невский 140, офис 1-5</span>
                        <span className={contacts.contactscontentCardSubtitle}>Невский 140, офис 1-5</span>
                    </div>
                    <div className={contacts.contactscontentCard}>
                        <p className={contacts.contactscontentCardTitle}>Телефоны</p>
                        <span className={contacts.contactscontentCardSubtitle}><img className={contacts.contactscontentCardImage} src={phone} /> 8 (812) 458-56-45</span>
                        <span className={contacts.contactscontentCardSubtitle}>8 (812) 458-56-45</span>
                    </div>
                    <div className={contacts.contactscontentCard}>
                        <p className={contacts.contactscontentCardTitle}>E-mail</p>
                        <span className={contacts.contactscontentCardSubtitle}><img className={contacts.contactscontentCardImage} src={message} />office@ojjo.com</span>
                        <span className={contacts.contactscontentCardSubtitle}>sales@ojjo.com</span>
                    </div>
                    <div className={contacts.contactscontentCard}>
                        <p className={contacts.contactscontentCardTitle}>Доп.Адреса</p>
                        <span className={contacts.contactscontentCardSubtitle}><img className={contacts.contactscontentCardImage} src={location} /> Невский 142, офис 1-5</span>
                        <span className={contacts.contactscontentCardSubtitle}> Невский 142, офис 1-5</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={contacts.map}>
            <div className='container'>
                <Map />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.1245169777294!2d30.36778661227902!3d59.93007598480467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631bb92b2b7f5%3A0xfc6c3540c8fb3df8!2z0J3QtdCy0YHQutC40Lkg0L_RgC4sIDE0MCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MTAzNg!5e0!3m2!1sru!2sru!4v1669831772465!5m2!1sru!2sru" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
            </div>
        </div>
        <MiniFooter />
    </div>)
}
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import footer from "./styles/footer/footer.module.css";

import sublink from "../components/images/subscribe_icon.png";

import visa from "../components/images/footer/visa.png";
import mastercard from "../components/images/footer/mastercard.png";

import phone from "../components/images/footer/phone-icon.png";
import mail from "../components/images/footer/mail-icon.png";

//social image
import youtube from "../components/images/footer/youtube-icon.png";
import vk from "../components/images/footer/vk-icon.png";
import facebook from "../components/images/footer/facebook-icon.png";
import telegram from "../components/images/footer/telegram-icon.png";

const MiniFooter = () => {
  render(
    <div className={footer.footer}>
      <div className={footer.footerMain}>
        <div className="container">
          <div className={footer.footerTextPack}>
            <p className={footer.footerTextPackSubtitle}>
              Полезные советы и персональный предложения
            </p>
            <p className={footer.footerTextPackTitle}>Эксклюзивная рассылка</p>
            <div className={footer.footerEmail}>
              <div className={footer.footerEmailLeft}>
                <BrowserRouter>
                  <NavLink className={footer.footerEmailLeftLink}>
                    <img
                      className={footer.footerEmailLeftLinkItemLink}
                      alt="sublink"
                      src={sublink}
                    />{" "}
                    <span>Личный менеджер</span>
                  </NavLink>
                  <NavLink className={footer.footerEmailLeftLink}>
                    <img
                      className={footer.footerEmailLeftLinkItemLink}
                      alt="sublink"
                      src={sublink}
                    />{" "}
                    <span>Доставка и оформление</span>
                  </NavLink>
                  <NavLink className={footer.footerEmailLeftLink}>
                    <img
                      className={footer.footerEmailLeftLinkItemLink}
                      alt="sublink"
                      src={sublink}
                    />{" "}
                    <span>Индивидуальный дизайн</span>
                  </NavLink>
                </BrowserRouter>
              </div>
              <div className={footer.footerEmailRight}>
                <div className={footer.footerEmailRightBorder}>
                  <input
                    className={footer.footerEmailRightInput}
                    placeholder="ВАШ E-MAIL"
                  ></input>
                  <button className={footer.footerEmailRightButton}>
                    ОТПРАВИТЬ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={footer.footerBottom}>
        <div className="container">
          <div className={footer.footerBottomCards}>
            <div className={footer.footerBottomCardsItem}>
              <span className={footer.footerBottomTextPackTitle}>
                Полезные ссылки
              </span>
              <div className={footer.footerBottomCardsLine}></div>
              <BrowserRouter>
                <div className={footer.footerBottomTextPack}>
                  <NavLink
                    className={footer.footerBottomTextPackLink}
                    to="/delivery"
                  >
                    Доставка
                  </NavLink>
                  <NavLink
                    className={footer.footerBottomTextPackLink}
                    to="/Payment"
                  >
                    Оплата
                  </NavLink>
                  <NavLink
                    className={footer.footerBottomTextPackLink}
                    to="/Stoc"
                  >
                    Акции
                  </NavLink>
                  <NavLink
                    className={footer.footerBottomTextPackLink}
                    to="/PrivacyPolicy"
                  >
                    Политика конфиденциальности
                  </NavLink>
                </div>
              </BrowserRouter>
            </div>
            <div className={footer.footerBottomCardsItem}>
              <span className={footer.footerBottomTextPackTitle}>оплата</span>
              <div className={footer.footerBottomCardsLine}></div>
              <div className={footer.footerBottomTextPack}>
                <span className={footer.footerBottomTextPackLink}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper justo, nec, pellentesque.
                </span>
                <div className={footer.footerBottomImagePack}>
                  <img
                    className={footer.footerBottomImagePackCard}
                    src={visa}
                    alt="visa"
                  />
                  <img
                    className={footer.footerBottomImagePackCard}
                    src={mastercard}
                    alt="mastercard"
                  />
                </div>
              </div>
            </div>
            <div className={footer.footerBottomCardsItem}>
              <span className={footer.footerBottomTextPackTitle}>контакты</span>
              <div className={footer.footerBottomCardsLine}></div>
              <div className={footer.footerBottomTextPack}>
                <div className={footer.footerBottomTextPackNumberPack}>
                  <img src={phone} alt="phone" />
                  <a
                    className={footer.footerBottomTextPackNumber}
                    href="tel:88122345655"
                  >
                    8 (812) 234-56-55
                  </a>
                </div>
                <div className={footer.footerBottomTextPackNumberPack}>
                  <img src={phone} alt="phone" />
                  <a
                    className={footer.footerBottomTextPackNumber}
                    href="tel:88122345655"
                  >
                    8 (812) 234-56-55
                  </a>
                </div>
                <div className={footer.footerBottomTextPackNumberPack}>
                  <img src={mail} alt="mail" />
                  <a
                    className={footer.footerBottomTextPackNumber}
                    href="mailto:ojjo@ojjo.ru"
                  >
                    ojjo@ojjo.ru
                  </a>
                </div>
              </div>
            </div>
            <div className={footer.footerBottomCardsItem}>
              <span className={footer.footerBottomTextPackTitle}>
                социальные сети
              </span>
              <div className={footer.footerBottomCardsLine}></div>
              <div className={footer.footerBottomTextPack}>
                <span className={footer.footerBottomTextPackSocial}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper justo, nec, pellentesque.
                </span>
                <div>
                  <img
                    className={footer.footerBottomImagePackSocial}
                    alt="youtube"
                    src={youtube}
                  />
                  <img
                    className={footer.footerBottomImagePackSocial}
                    alt="vk"
                    src={vk}
                  />
                  <img
                    className={footer.footerBottomImagePackSocial}
                    alt="facebook"
                    src={facebook}
                  />
                  <img
                    className={footer.footerBottomImagePackSocial}
                    alt="telegram"
                    src={telegram}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={footer.footerBottomCardsLine}></div>
          <div className={footer.footerWarning}>
            <BrowserRouter>
              <span className={footer.footerWarningTextPackLink}>
                (c) 2022 OJJO jewelry
              </span>
              <NavLink to="/" className={footer.footerWarningTextPackLink}>
                Договор публичной офферты
              </NavLink>
              <NavLink
                to="/contagents"
                className={footer.footerWarningTextPackLink}
              >
                Контрагентам
              </NavLink>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;

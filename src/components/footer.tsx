import React, { useState } from 'react';
import Logo from "../img/logo.svg";
import X from "../img/x.svg";
import Tg from "../img/tg.svg";

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footer__content">
                    <img className="footer__logo" src={Logo} alt="" />
                    <div className="footer__links">
                    <a href="#" className="footer__wp">
                        Whitepaper
                    </a>
                    <a href="#" className="footer__link">
                        <img src={Tg} alt="tg" />
                    </a>
                    <a href="#" className="footer__link">
                        <img src={X} alt="x" />
                    </a>
                    </div>
                </div>
                <div className="footer__text">
                    Copyright 2024. Bubble Coin. All Rights Reserved.
                </div>
            </div>
        </>
    )
}

export default Footer;
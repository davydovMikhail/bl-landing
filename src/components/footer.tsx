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
                    <a target='_blank' href="https://bubbledocs.gitbook.io/bubble/" className="footer__wp">
                        Whitepaper
                    </a>
                    <a target='_blank' href="https://t.me/BubbleOnEth" className="footer__link">
                        <img src={Tg} alt="tg" />
                    </a>
                    <a target='_blank' href="https://twitter.com/BubbleOnETH" className="footer__link">
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
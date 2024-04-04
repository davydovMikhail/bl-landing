import React from 'react';
import x from "../img/x.svg";
import tg from "../img/tg.svg";

const About = () => {

    return (
        <>
            <a id="about" className="anchor" href=""></a>
            <div className="about">
                <div className="about__title">
                    <div className="about__text">
                        About
                    </div>
                    <div className="about__links">
                        <a className="about__linkwp" href="http://google.com">
                            Whitepaper
                        </a>
                        <a className="about__link" href="http://google.com">
                            <img src={tg} alt="" />
                        </a>
                        <a className="about__link" href="http://google.com">
                            <img src={x} alt="" />
                        </a>
                    </div>
                </div>
                <div className="about__info">
                    Introducing the revolutionary Bubble Coin platform, where staking your coins has never been easier. Unlike traditional staking models that require freezing your coins on a contract, with Bubble Coin, all you need to do is keep your <span className="about__info_span">$BUBBLE</span> coins in your wallet balance to receive new coins.
                </div>
            </div>  
        </>
    )
}

export default About;
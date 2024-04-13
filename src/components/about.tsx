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
                        <a target='_blank' className="about__linkwp" href="https://bubbledocs.gitbook.io/bubble/">
                            Whitepaper
                        </a>
                        <a target='_blank' className="about__link" href="https://t.me/BubbleOnEth">
                            <img src={tg} alt="" />
                        </a>
                        <a target='_blank' className="about__link" href="https://twitter.com/BubbleOnETH">
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
import React from 'react';
import ext from "../img/ext.svg";
import x from "../img/x.svg";
import tg from "../img/tg.svg";

const About = () => {

    return (
        <>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor a maiores, fuga recusandae quos fugit, cumque et magni consequatur velit? Ipsam, voluptas modi exercitationem magnam voluptate iusto dolor natus. <span className="about__info_span">$BUBBLE</span>.
                </div>
            </div>  
        </>
    )
}

export default About;
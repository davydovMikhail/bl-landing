import React from 'react';
import bank from "../img/bank.svg";
import earn from "../img/earn.svg";
import speed from "../img/speed.svg";

const Features = () => {

    return (
        <>
            <div className="features">
          <div className="features__title">
            Features
          </div>
          <div className="features__items">
            <div className="features__item">
              <img src={earn} alt="earn" />
              <div className="features__content">
                <div className="features__titletext">
                  Earn Tokens
                </div>
                <div className="features__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem veritatis porro delectus consequatur repellat debitis enim pariatur rem officiis.
                </div>
              </div>
            </div>

            <div className="features__item">
              <img src={bank} alt="bank" />
              <div className="features__content">
                <div className="features__titletext">
                  Upgrade Bank
                </div>
                <div className="features__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem veritatis porro delectus consequatur repellat debitis enim pariatur rem officiis.
                </div>
              </div>
            </div>

            <div className="features__item">
              <img src={speed} alt="speed" />
              <div className="features__content">
                <div className="features__titletext">
                  Boost Recovery
                </div>
                <div className="features__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus autem veritatis porro delectus consequatur repellat debitis enim pariatur rem officiis.
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Features;
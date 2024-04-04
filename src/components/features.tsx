import React from 'react';
import bank from "../img/bank.svg";
import earn from "../img/earn.svg";
import speed from "../img/speed.svg";

const Features = () => {

    return (
        <>
          <a id="features" className="anchor" href=""></a>
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
                The Bubble Coin platform provides its most active users with a profitable opportunity to earn money by actively participating in the distribution of the product.
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
                  Don't miss the opportunity to spend your $BUBBLE coins to increase the size of the pot to collect even more $BUBBLE coins.
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
                  Boosting the recovery rate not only accelerates your earnings but also significantly reduces the waiting time for your bank to accumulate.
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Features;
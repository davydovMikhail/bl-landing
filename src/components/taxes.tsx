import React from 'react';

const Taxes = () => {

    return (
        <>
        <a id="taxes" className="anchor" href=""></a>
         <div className="taxes">
          <div className="taxes__title">
            Taxes
          </div>
          <div className="taxes__items">
            <div className="taxes__item">
              <div className="taxes__img taxes__img_buy">
                <div className="taxes__blur"></div>
              </div>
              <div className="taxes__text taxes__buy">
                5%
              </div>
              <div className="taxes__text">
                Buy
              </div>
            </div>
            <div className="taxes__item">
              <div className="taxes__img taxes__img_sell">
                <div className="taxes__blur"></div>
              </div>
              <div className="taxes__text taxes__sell">
                5%
              </div>
              <div className="taxes__text">
                Sell
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Taxes;
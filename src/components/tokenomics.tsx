import React from 'react';

const Tokenomics = () => {

    return (
        <>
           <div className="tokenomics">
          <div className="tokenomics__title">
            Tokenomics
          </div>
          <div className="tokenomics__blocks">
            <div className="tokenomics__block1"></div>
            <div className="tokenomics__block2"></div>
            <div className="tokenomics__block3"></div>
            <div className="tokenomics__percents">
              <div className="tokenomics__percent">
                <div className="tokenomics__percent_value">
                  84%
                </div>
                <div className="tokenomics__percent_name">
                Liquidity
                </div>
              </div>
              <div className="tokenomics__percent">
                <div className="tokenomics__percent_value">
                  10%
                </div>
                <div className="tokenomics__percent_name">
                Bank
                </div>
              </div>
              <div className="tokenomics__percent">
                <div className="tokenomics__percent_value">
                  6%
                </div>
                <div className="tokenomics__percent_name">
                  Team
                </div>
              </div>
            </div>
          </div>

        </div> 
        </>
    )
}

export default Tokenomics;
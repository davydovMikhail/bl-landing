import React from 'react';

const Tokenomics = () => {

    return (
        <>
        <a id="tokenomics" className="anchor" href=""></a>
        <div className="tokenomics">
            <div className="tokenomics__title">
                Tokenomics
            </div>
            <div className="tokenomics__blocks">
                <div className="tokenomics__block_liq"></div>
                <div className="tokenomics__block_bank"></div>
                <div className="tokenomics__block_team"></div>
                <div className="tokenomics__percents">
                    <div className="tokenomics__percent">
                        <div className="tokenomics__percent_value">
                        75%
                        </div>
                        <div className="tokenomics__percent_name">
                        Liquidity
                        </div>
                    </div>
                    <div className="tokenomics__percent">
                        <div className="tokenomics__percent_value">
                        20%
                        </div>
                        <div className="tokenomics__percent_name">
                        Bank
                        </div>
                    </div>
                    <div className="tokenomics__percent">
                        <div className="tokenomics__percent_value">
                        5%
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
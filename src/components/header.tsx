import React, { useState } from 'react';
import Logo from "../img/logo.svg";
import Ext from "../img/ext.svg";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {

    var styles = {
        bmBurgerButton: {
          position: 'relative',
          width: '36px',
          height: '30px',
        },
        bmBurgerBars: {
          background: '#fff',
          borderRadius: '1px'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '50px',
          width: '50px'
        },
        bmCross: {
          background: '#fff'
        },
        bmMenuWrap: {
          top: '0',
          position: 'fixed',
          height: '100vh',
          width: '70%'
          
        },
        bmMenu: {
            background: 'var(--1234213, linear-gradient(180deg, #000 0%, #15111B 100%))',
          padding: '2.5em 1.5em 0',
          fontSize: '10px',
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
            color: '#fff',
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '30px',
        },
        bmItem: {
          display: 'inline-block',
          color: '#fff',
          marginBottom: '60px',
          fontSize: '18px',
          fontFamily: "Cy Grotesk"
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

    const [isOpen, setOpen] = useState(false)
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="header-wrapper">
                  <div className="header__left">
                    <img src={Logo} className="header__logo" />
                    <div className="header__bar">
                        <a href="#intro" className="header__tab">About</a>
                        <a href="#tokenomics" className="header__tab">Features</a>
                        <a href="#taxes" className="header__tab">Tokenomics</a>
                        <a href="#taxes" className="header__tab">The Dapp</a>
                        <a href="#taxes" className="header__tab">Taxes</a>
                    </div>
                  </div>
                  <div className="header__right">
                    <a href="https://platform.coinbubble.xyz/" target='_blank' className="start__button">Start DApp</a>
                    <a href="https://app.uniswap.org/swap?inputCurrency=ETH" target='_blank' className="buy__button">Buy Tokens</a>
                  </div>
                <div className='mob-menu'>
                    <Menu
                        isOpen={isOpen}
                        onOpen={handleIsOpen}
                        onClose={handleIsOpen}
                        styles={styles} right>
                        <a onClick={closeSideBar} className="menu-item" href="#intro">About</a>
                        <a onClick={closeSideBar} className="menu-item" href="#tokenomics">Features</a>
                        <a onClick={closeSideBar} className="menu-item" href="#taxes">Tokenomics</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="#">The Dapp</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="#">Taxes</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://platform.coinbubble.xyz/">Start DApp</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://app.uniswap.org/swap?inputCurrency=ETH">Buy Tokens</a>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default Header;
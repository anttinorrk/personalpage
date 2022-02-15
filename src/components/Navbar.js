import './Navbar.scss'
import {NavItems} from './Navitems'
import React, {useEffect, useState} from 'react'
import { Somelinks } from './parts/Somelinks'
import { Link } from 'react-router-dom'

const Navbar = ({black, pathCallback}) => {
//Saa propseina landingsectionin korkeuden
    //Määrittävät mobiilinavigaation muotoilua
    const [scrolled, setScrolled] = useState(false)
    const [opened, setOpened] = useState(false)
    const [transparent, setTransparent] = useState(true)
    

    useEffect(() => {
            window.addEventListener('scroll', () =>
                setScrolled(window.pageYOffset >= 80)
            );
    })

    const handleBurger = () => {
        if (opened === false) {
            setOpened(true)
        } else {
            setOpened(false)
        }
    }
    const handleMobile = () => {
        if (opened === true) {
            setOpened(false)
        }
        pathCallback()
    }
    //logo on ensin läpinäkyvä
    useEffect(() => {
        setTimeout(() => {
            setTransparent(false)
        }, 2000)
    }, [])

    return (
        <>
            <div className ={`background-dark ${opened ? 'opened' : ''}`} onClick={handleBurger}>
            </div>

            <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
                <div className={`navlogo-container${transparent ? ' transparent' : ''}`}>
                    <a className='logo-link' href='/'>
                        <svg className={`an-vector${black ? ' black' : ''}`} width="219" height="246" viewBox="0 0 219 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M56.9955 245.75L0.327271 146.837L110.011 177.892L100.348 190.261L91.816 187.615L62.1165 225.629L66.6589 233.381L56.9955 245.75ZM54.7551 213.299L77.983 183.569L28.2418 168.646L54.7551 213.299ZM116.79 144.657C118.091 142.992 119.789 142.066 121.886 141.877C123.967 141.553 125.839 142.041 127.503 143.341C129.168 144.641 130.132 146.37 130.397 148.526C130.645 150.547 130.119 152.39 128.819 154.054C127.518 155.718 125.828 156.712 123.748 157.036C121.651 157.225 119.77 156.67 118.106 155.369C116.441 154.069 115.485 152.408 115.237 150.387C114.972 148.231 115.49 146.321 116.79 144.657ZM104.139 77.817L156.677 118.865L147.723 130.326L62.9579 64.1002L169.32 60.5812L106.456 11.4662L115.41 0.00537109L198.7 65.0783L190.011 76.199L104.139 77.817ZM205.186 31.5154C206.486 29.8512 208.185 28.9245 210.282 28.7354C212.362 28.4116 214.234 28.8998 215.899 30.2001C217.563 31.5003 218.528 33.2285 218.792 35.3845C219.04 37.4058 218.514 39.2486 217.214 40.9129C215.914 42.5772 214.224 43.5712 212.143 43.8951C210.046 44.0841 208.166 43.5285 206.501 42.2283C204.837 40.928 203.881 39.2672 203.633 37.2459C203.368 35.0899 203.886 33.1797 205.186 31.5154Z" fill="#fcfcfc"/>
                        </svg>
                    </a>
                </div>
                <div className={`menuicon-container ${opened ? 'opened' : ''}`} onClick={handleBurger}>
                    <div className={`burger${black ? ' black' : ''}`}></div>
                </div>
                <div className={`navlinks-wrapper ${opened ? 'opened' : ''}`}>
                    <ul className={`navlinks ${scrolled ? 'scrolled' : ''}`}>
                        {
                            NavItems.map((item, index) => {
                                return (
                                    <li className={`nav-link${black ? ' black' : ''}`} key={index}>
                                        <Link to={item.url} onClick={handleMobile}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }    
                    </ul>
                    <Somelinks />
                </div>
            </div>
        </>
    )
}

export default Navbar
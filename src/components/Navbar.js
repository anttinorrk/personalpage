import './Navbar.css'
import {NavItems} from './Navitems'
import anvector from './media/an-vector.svg'
import React, {useEffect, useState} from 'react'
import { Somelinks } from './parts/Somelinks'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () =>
                setScrolled(window.pageYOffset > 80)
            );
        }
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
    }

    return (
        <>
            <div className ={`background-dark ${opened ? 'opened' : ''}`} onClick={handleBurger}>
            </div>

            <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
                <div className='navlogo-container'>
                    <a href='/'>
                        <img id='logo' src={anvector} />
                    </a>
                </div>
                <div className={`menuicon-container ${opened ? 'opened' : ''}`} onClick={handleBurger}>
                    <div className='burger'></div>
                </div>
                <div className={`navlinks-wrapper ${opened ? 'opened' : ''}`}>
                    <ul className={`navlinks ${scrolled ? 'scrolled' : ''}`}>
                        {
                            NavItems.map((item, index) => {
                                return (
                                    <li className={item.cName} key={index}>
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
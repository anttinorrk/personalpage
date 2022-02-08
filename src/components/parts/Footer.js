import React from 'react'
import { Somelinks } from './Somelinks'
import './Footer.scss'

const Footer = () => {
    return (
        <section className='footer-section'>
                <Somelinks />
                <h6>© Antti Norrkniivilä 2022</h6>
            </section>
    )
}

export default Footer
import React from 'react'
import './Contact.css'
import Skimba from '../media/skimbatauko.jpg'

const Contact = () => {
    return (
        <div>
            <section className='title-section'>
                <div className='title-container'>
                    <h1>CONTACT</h1>
                </div>
            </section>
            <section className='contact-section'>
                <div className='contact-container'>
                    <h2>ANYTHING ON YOUR MIND?</h2>
                    <p>Hit me up in any of my social media profiles linked below and let's see if I'm the right fit for your project or company right now or sometime in future!</p>
                </div>
                <div className='skimbaimg-container'>
                    <img id='skimba-img' src={Skimba} />
                </div>
            </section>
        </div>
    )
}

export default Contact
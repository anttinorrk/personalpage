import React, {useEffect} from 'react'
import './Contact.scss'
import Skimba from '../media/skimbatauko1080-min.jpg'
import Portrait from '../media/monaco-pic.jpg'

const Contact = ({pathCallback}) => {
    useEffect(() => {
        pathCallback()
    }, [])
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
                <div className='contactimg-container'>
                    <img id='contact-img' src={Portrait} alt='' />
                </div>
            </section>
        </div>
    )
}

export default Contact
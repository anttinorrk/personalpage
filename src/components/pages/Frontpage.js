import './Frontpage.scss'
import {Skill} from '../parts/Skill'
import { SkillList } from '../parts/Skilllist'
import Portrait from '../media/portrait-min.png'
import Mountain from '../media/mountain-try.jpg'
import anvector from '../media/an-vector.svg'
import Aos from 'aos'
import "aos/dist/aos.css"
import React, { useEffect, useState } from 'react'

const Frontpage = () => {
    const [loadingClass, setLoadingClass] = useState('')
    useEffect(() => {
        Aos.init({duration: 1000, once: true})
    })
    useEffect(() => {
        setTimeout(() => {
            setLoadingClass(' moving')
        }, 1000)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setLoadingClass(' hidden')
        }, 2000)
    }, [])
    return (
        <>
            <section className='landing-section'>
                    <div 
                        className='header-wrapper'>
                        <div className='header-container'>
                            <h1>HOMEPAGE</h1>
                            <h2>ANTTI NORRKNIIVILA</h2>
                        </div>
                        <div className='introduction-container'>
                            <p>Hi! I'm a frontend developer from Espoo and a student of Information Networks in Aalto University.
                                My main tool in development is React, and I also have experience from fullstack technologies such as REST APIs and Node.js.
                                My goal is to create systems that look and feel professional, with the end user being in the centre of all my designs.
                            </p>
                            </div>
                    </div>
                    <div 
                        className='portrait-container'>
                        <img id='portrait-img' src={Portrait} alt='portrait' />
                    </div>
                    <img id='mountain-img' src={Mountain} alt='' />
            </section>
            
            <section className='skills-section'>
                    <h2>SKILLS</h2>
                    <div className='skillflex-wrapper'>
                        <div className='skills-container' data-aos='fade-up'>
                            {
                                SkillList.map((item, index) => {
                                    return (
                                        <Skill skillName={item.name} content={item.content} key={index} />
                                    )
                                })
                            }
                        </div>
                        <div className='keywords-container' data-aos='zoom-in'>
                            <h5>Interested in collaborating? Hit me up!</h5>
                        </div>
                    </div>
                
            </section>
            <div className={`loading-screen${loadingClass}`}>
                <img className={`loading-img${loadingClass}`} src={anvector} alt='' />
            </div>
            
            
        </>
    )
}

export default Frontpage
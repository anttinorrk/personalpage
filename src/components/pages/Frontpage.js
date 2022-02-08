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
                        <p>React web developer and programmer with a keen eye for usability and design.
                            Student of Information Networks in Aalto University. Always looking forwards
                            to create systems that stand the test of time.
                        </p>
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
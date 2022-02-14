import './Frontpage.scss'
import {Skill} from '../parts/Skill'
import { SkillList } from '../parts/Skilllist'
import Mountainsky from '../media/mountain-sky.png'
import Mountainmid from '../media/mountain-mid.png'
import Mountainfront from '../media/mountain-front.png'
import Portrait from '../media/portrait500blur.png'
import anvector from '../media/an-vector.svg'
import Aos from 'aos'
import "aos/dist/aos.css"
import React, { useEffect, useState, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Typewriter from 'typewriter-effect'


const Frontpage = ({appCallback, pathCallback}) => {
    //Loading screen
    const [loadingClass, setLoadingClass] = useState('')


    useEffect(() => {
        Aos.init({duration: 1000, once: true})
    })
    //Loading screen
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
   
    
    


    //Hakee landingsectionin korkeuden ja passaa sen propsina parentille
    const landingRef = useRef();
    useEffect(() => {
            const newHeight = landingRef.current.clientHeight
            console.log('new height is :', newHeight)
            appCallback(newHeight)
    }, [])
    //getLandingHeightiä kutsutaan, kun oltu resizaamatta 200ms
    //let time
    //useEffect(() => {
    //    window.addEventListener('resize', () => {
    //        clearTimeout(time)
    //        time = setTimeout(getLandingHeight, 200)
    //    })
    //})
    //lähettää pathin parentille
    useEffect(() => {
        pathCallback()
    }, [])

    
    return (
        <>
            <section className='landing-section' ref={landingRef}>
                    
                        <div className='header-container'>
                            <div className='h1-container'>
                                <h1 className='black-text'>ANTTI NORRKNIIVILA</h1>
                            </div>
                            <div className='h3-container'>
                                <h3 className='black-text'>
                                    <Typewriter loop={true}
                                        onInit={(tw) => {
                                            tw
                                            .pauseFor(2000)
                                            .typeString('FRONTEND DEVELOPER')
                                            .start();
                                        }}
                                    />
                                    </h3>
                            </div>
                        </div>
                    
                    
                    <div className='mountainimg-container'>
                        <img id='mountain-sky' src={Mountainsky} alt='' />
                            <img id='mountain-mid' src={Mountainmid} alt='' />
                        <img id='mountain-front' src={Mountainfront} alt='' />
                        <div className='white-overlay'></div>
                    </div>
            </section>
            <section className='introduction-section'>
                <div className='introductionflex-wrapper'>
                    <img id='portrait-img' src={Portrait} alt='portrait' />
                    <div className='gradient-bar'></div>
                    <div className='introduction-container'>
                    <Parallax translateX={[80, -20]}>
                        <h1>Hi!</h1>
                        </Parallax>
                        <p>I'm a frontend developer from Espoo and a student of Information Networks in Aalto University.
                            My main tool in development is React, and I also have experience from fullstack technologies such as REST APIs and Node.js.
                            I aim to create systems that both look and feel unique and professional, with the end user being in the centre of all my designs.
                        </p>
                    </div>
                </div>
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
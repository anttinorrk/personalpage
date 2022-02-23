import './Frontpage.scss'
import {Skill} from '../parts/Skill'
import { SkillList } from '../parts/Skilllist'
import Mountainsky from '../media/mountain-try.jpg'
//import Mountainmid from '../media/mountain-mid.png'
//import Mountainfront from '../media/mountain-front.png'
import Portrait from '../media/portrait500blur.png'
import anvector from '../media/an-vector.svg'
import React, { useEffect, useState, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Typewriter from 'typewriter-effect'


const Frontpage = ({appCallback, pathCallback}) => {
    //Loading screen
    const [loadingClass, setLoadingClass] = useState('')


    
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
                                    <Typewriter options={{loop: true}}
                                        onInit={(tw) => {
                                            tw
                                            .pauseFor(2000)
                                            .typeString('FRONTEND DEVELOPMENT')
                                            .pauseFor(1500)
                                            .deleteAll()
                                            .typeString('DATABASES')
                                            .pauseFor(1500)
                                            .deleteAll()
                                            .typeString('GROWTH HACKING')
                                            .pauseFor(1500)
                                            .start();
                                        }}
                                    />
                                    </h3>
                            </div>
                        </div>
                    
                    
                        <div className='mountainimg-container'>
                            <img id='mountain-sky' src={Mountainsky} alt='' />
                            {/*<img id='mountain-mid' src={Mountainmid} alt='' />
                            <img id='mountain-front' src={Mountainfront} alt='' />*/}
                            <div className='white-overlay'></div>
                        </div>
                    
            </section>
            <section className='introduction-section'>
                <div className='introductionflex-wrapper'>
                    <Parallax opacity={[-0.3, 2]}>
                        <img id='portrait-img' src={Portrait} alt='portrait' />
                    </Parallax>
                    <div className='gradient-bar'></div>
                    <div className='introduction-container'>
                         <Parallax translateX={[100, -20]}>
                            <h1>Hi!</h1>
                        </Parallax>
                        <p>I’m a frontend-oriented developer from Espoo and a student of Information Networks in Aalto University.</p>
                        <p>For me, technology is a way to help businesses grow by making operations smoother and creating lasting first impressions. Therefore, I don’t settle to the same old routines, but constantly stay up to date with the latest technologies and trends, giving your company the edge over others.</p>
                        <p>From this page you can learn more about my skills and experience to see if I’m the right fit for your project or company. Don’t be afraid to drop me a message in social media!</p>
                        <p style={{fontStyle: "italic"}}>- Antti Norrkniivilä</p>
                    </div>
                </div>
            </section>
            <section className='skills-section'>
                    <h2>SKILLS</h2>
                        <div className='skillflex-wrapper'>
                            <div className='skills-container'>
                                {
                                    SkillList.map((item, index) => {
                                        return (
                                            <Skill skillName={item.name} content={item.content} key={index} />
                                        )
                                    })
                                }
                            </div>
                            <div className='keywords-container'>
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
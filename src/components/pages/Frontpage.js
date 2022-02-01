import './Frontpage.css'
import {Skill} from '../parts/Skill'
import { SkillList } from '../parts/Skilllist'
import Portrait from '../media/portrait-min.png'
import Mountain from '../media/mountain-try.jpg'


const Frontpage = () => {
    return (
        <>
            <section className='landing-section'>
                    <div className='header-wrapper'>
                        <div className='header-container'>
                            <h1>HOMEPAGE</h1>
                            <h2>ANTTI NORRKNIIVILA</h2> 
                        </div>
                        <p>React web developer and programmer with a keen eye for usability and design.
                            Student of Information Networks in Aalto University. Always looking forwards
                            to create systems that stand the test of time.
                        </p>
                    </div>
                    <div className='portrait-container'>
                        <img id='portrait-img' src={Portrait} alt='portrait' />
                    </div>
                    <img id='mountain-img' src={Mountain} alt='' />
            </section>
            
            <section className='skills-section'>
                    <h2>SKILLS</h2>
                    <div className='skillflex-wrapper' data-aos='flip-left'>
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
            
            
        </>
    )
}

export default Frontpage
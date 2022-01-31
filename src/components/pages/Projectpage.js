import React, {useState} from 'react'
import { Projectcard } from '../parts/Projectcard'
import './Projectpage.css'
import SSWeather from '../media/ssweather-min.jpg'
import SSPortfolio from '../media/ssportfolio-min.jpg'
import SSSuurempaa from '../media/sssuurempaa-min.jpg'
import SSDatabase from '../media/ssdatabase-min.jpg'
import { ProjectList } from '../parts/Projectlist'
import { Projectdetails } from '../parts/Projectdetails'

const Projectpage = () => {

    const [detailkey, setDetailkey] = useState('3')

    const updateKey = (a) => {
        console.log(a)
    }

    return (
        <>
        <section className='title-section'>
            <div className='title-container'>
                <h1>PROJECTS</h1>
                <p>My recent projects.</p>
            </div>
        </section>
        <section className='projects-section'>
            <div className='projects-container'>
                {
                    ProjectList.map((item, index) => {
                        console.log(item.image)
                        return (
                        <Projectcard key={index}
                            image={item.image}
                            title={item.title}
                            tag={item.tag}
                            url={item.url}
                            text={item.text}
                        />
                        )
                    })
                }
            </div>
            
        </section>
        
        
            
        </>
    )
}

export default Projectpage
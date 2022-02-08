import React from 'react'
import { Projectcard } from '../parts/Projectcard'
import './Projectpage.scss'
import { ProjectList } from '../parts/Projectlist'

const Projectpage = () => {

    

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
                            flip={item.flip}
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
import React, {useState} from 'react'
import './Projectcard.css'

export const Projectcard = (props) => {
    const [detailsVisible, setDetailsVisible] = useState(false)

    const handleDetails = () => {
        if (detailsVisible) {
            setDetailsVisible(false)
        } else {
            setDetailsVisible(true)
        }
    }

    return (
        <>
        <div className='card-wrapper'>
            <img className='project-img' src={props.image} alt='' />
            <div className='project-text'  onClick={handleDetails}>
                <h2 className='project-title'>{props.title}</h2>
                <div className='tag-container'>
                    <h3>{props.tag}</h3>
                </div>
            </div>
            <div className={`projectdetails-wrapper${detailsVisible ? ' visible' : ''}`} onClick={handleDetails}>
                <h2>{props.title}</h2>
                <div className='tag-container'>
                    <h3>{props.tag}</h3>
                    
                </div>
                <p>{props.text}</p>
                <a className='projectdetails-link' href={props.url} target='_blank' rel='noreferrer noopener'>{'Visit page >>>'}</a>
                <div className='projectdetails-gradient1'></div>
                <div className='projectdetails-gradient2'></div>
                <div className='projectdetails-gradient3'></div>
            </div>
        </div>
        
        </>
    )
}

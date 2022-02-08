import './Skill.scss'
import { useState } from 'react'

export const Skill = (props) => {
    const [dropped, setDropped] = useState(false)

    const handleDropped = () => {
        if(!dropped) {
            setDropped(true)
        } else {
            setDropped(false)
        }
    }

    return (
        <>
            <div className='skill-wrapper'>
                
                <div className='title-wrapper'>
                    <div className='gradient-border'>
                        <div className='skill-container' onClick={handleDropped}>
                            <h3>{props.skillName}</h3>
                            <div className={`plus-icon ${dropped ? 'close' : ''}`}>
                                <div className='plus-icon__horizontal'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`text-container ${dropped ? 'dropped' : ''}`}>
                    <p>{props.content}</p>
                </div>
                
            </div>
        </>
    )
}

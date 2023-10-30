import React from 'react'
import "../assets/scss/components/stateCard.scss"
import { Card } from 'react-bootstrap'


const StatsCard = ({ number, icon, text }) => {
    return (
        <Card className='stats-card'>
            <Card.Body>
                <div className='state-card-top'>
                    <div className='stats-text'>{text}</div>
                    <div className='stats-icon'>{icon}</div>
                </div>
                <div className='stats-number'>{number}</div>
            </Card.Body>
        </Card>
    )
}

export default StatsCard
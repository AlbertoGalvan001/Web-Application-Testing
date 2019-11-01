import React from 'react';

export default function Display(props) {
    return (
        <div className='display'>
            <h1>At Bat</h1>
            <div className='count-display'>
                <div className='count'>
                    <h3>Balls</h3>
                    <div className='num-display'>{props.balls}</div>
                </div>
                <div className='count'>
                    <h3>Strikes</h3>
                    <div className='num-display'>{props.strikes}</div>
                </div>
            </div>
        </div>
    )
}
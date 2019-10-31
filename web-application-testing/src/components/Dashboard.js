import React from 'react';

export default function Dashboard(props) {

    const handleStrike = () => {
        props.setStrikes(props.strikes + 1);
    };

    const handleBall = () => {
        props.setBalls(props.balls + 1);
    };

    const handleFoul = () => {
        if (props.setStrikes < 2) {
            props.setStrikes(props.strikes + 1);
        }
    };

    const handleHit = () => {
        props.setBalls(0);
        props.setStrikes(0);
        alert('Batter Up');
    };

    return (
        <div className="button-container">
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    );
}
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
function Home() {

    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/orderpizza');
    };

    return (
        <div className="home-container">
            <div className="banner">
                <h1 className="titleH">Teknolojik Yemekler</h1>
                <h3 className="opportunity-text">Fırsatı Kaçırma</h3>
                <h2 className="subtitleH">KOD ACIKTIRIR</h2>
                <h3 className="subtitleH">PIZZA, DOYURUR</h3>
                <button className="cta-button" onClick={handleButtonClick}>ACIKTIM</button>
            </div>
        </div>
    );
}

export default Home;
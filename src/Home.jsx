import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'; // Stil dosyası

function Home() {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/orderpizza'); // Butona tıklandığında '/app' rotasına yönlendirme
    };

    return (
        <div className="home-container">
            <div className="banner">
                <h1>Teknolojik Yemekler</h1>
                <h2>KOD ACIKTIRIR</h2>
                <h3>PİZZA, DOYURUR</h3>
                <button className="cta-button" onClick={handleButtonClick}>ACIKTIM</button>
            </div>
        </div>
    );
}

export default Home;
import React from 'react'
import { useHistory } from 'react-router-dom';

import './App.css'
import Pizza from './components/pizza'
import Features from './components/features'
import Details from './components/details'
'./assets/mile2-aseets/pictures/form-banner.png'


function OrderPizza(props) {

    const { selectedSize, setSelectedSize, selectedType, setSelectedType, selectedToppings, setSelectedToppings, quantity, setQuantity } = props

    const history = useHistory();

    const handleOrder = () => {
        history.push('/');
    };

    return (<>

        <div className="App">
            <header className="header">
                <div className="title">
                    <h1 className="restaurant-titleO" >Teknolojik Yemekler</h1>
                </div>

            </header>
            <img src='./assets/mile2-aseets/pictures/form-banner.png' alt="Form Banner" className="form-bannerO" />
            <div className="menu-buttons">
                <button className="home-buttonO" onClick={handleOrder}>Anasayfa</button>
                <span>-</span>
                <button className="order-buttonO" >Sipariş Oluştur</button>
            </div>

        </div>
        <div className='container'>

            <Pizza></Pizza>
            <Features selectedSize={selectedSize} setSelectedSize={setSelectedSize} selectedType={selectedType} setSelectedType={setSelectedType} selectedToppings={selectedToppings} setSelectedToppings={setSelectedToppings}></Features>
            <Details selectedSize={selectedSize} selectedType={selectedType} selectedToppings={selectedToppings} quantity={quantity} setQuantity={setQuantity}></Details>
        </div>
    </>)
}

export default OrderPizza

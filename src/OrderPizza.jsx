import React from 'react'
import './App.css'
import Pizza from './components/pizza'
import Features from './components/features'
import Details from './components/details'
import Footer from './components/footer'
'./assets/mile2-aseets/pictures/form-banner.png'


function OrderPizza({ propsObj }) {

    return (<>
        <div className="App">
            <header className="header">
                <div className="title">
                    <h1 className="restaurant-titleO" >Teknolojik Yemekler</h1>
                </div>
            </header>
        </div>
        <div >
            <Pizza></Pizza>
            <Features {...propsObj}></Features>
            <Details {...propsObj}></Details>
            <Footer></Footer>
        </div>
    </>)
}

export default OrderPizza

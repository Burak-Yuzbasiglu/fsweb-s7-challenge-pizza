import React from 'react'
import { useState } from 'react'

import './App.css'
import Pizza from './components/pizza'
import Features from './components/features'
import Details from './components/details'



function OrderPizza() {




    return (<>



        <div className="App">
            <header className="header">
                <div className="title">
                    <h1>Teknolojik Yemekler</h1>
                </div>
                <div className="menu-buttons">
                    <button>Anasayfa</button>
                    <span>-</span>
                    <button>Seçenekler</button>
                    <span>-</span>
                    <button>Sipariş Oluştur</button>
                </div>
            </header>
        </div>
        <div className='container'>

            <Pizza></Pizza>
            <Features></Features>
            <Details></Details>
        </div>
    </>)
}

export default OrderPizza

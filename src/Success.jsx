import React from 'react';
import './Success.css'

function Success(props) {

    const { selectedSize, selectedType, selectedToppings, quantity } = props

    const toppingsString = selectedToppings.length < 1 ? "Seçilmedi" : selectedToppings.join(', ');
    const totalSelectedToppings = selectedToppings.length * 5;

    return (
        <div className="containerf">
            <h1 className="titlef">Teknolojik Yemekler</h1>
            <p className="subtitlef">lezzetin yolda</p>
            <p className="order-statusf">SİPARİŞ ALINDI</p>
            <hr className="linef" />
            <div className="infoTittlef">Position Absolute Acı Pizza</div>
            <div className='info-containerf'>

                <div className="infof">Boyut: <span className="infof-bold">{selectedSize}</span></div>
                <div className="infof">Hamur: <span className="infof-bold">{selectedType}</span></div>
                <div className="infof">Ek Malzemeler: <span className="infof-bold">{toppingsString}</span></div>
            </div>
            <br />
            <div className="order-summaryf">
                <div className="summary-itemf">Sipariş Toplamı</div>
                <div className="summary-item2f">Seçimler  <span className="summary-itemf">{totalSelectedToppings * quantity}₺</span></div>
                <div className="summary-item2f">Toplam  <span className="summary-item3f">{(100 + totalSelectedToppings) * quantity}₺</span></div>
            </div>
        </div>
    );
}

export default Success;
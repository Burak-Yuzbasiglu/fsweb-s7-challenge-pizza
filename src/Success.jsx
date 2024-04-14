import React from 'react';
import './Success.css'

function Success() {
    return (
        <div className="containerf">
            <h1 className="titlef">Teknolojik Yemekler</h1>
            <p className="subtitlef">lezzetin yolda</p>
            <p className="order-statusf">SİPARİŞ ALINDI</p>
            <hr className="linef" />
            <div className="infoTittlef">Position Absolute Acı Pizza</div>
            <div className='info-containerf'>

                <div className="infof">Boyut: <span className="infof-bold">L</span></div>
                <div className="infof">Hamur: <span className="infof-bold">Süper İnce</span></div>
                <div className="infof">Ek Malzemeler: <span className="infof-bold">Pepperoni, Sosis, Mısır, Ananas, Jalepeno</span></div>
            </div>
            <br />
            <div className="order-summaryf">
                <div className="summary-itemf">Sipariş Toplamı</div>
                <div className="summary-item2f">Seçimler  <span className="summary-itemf">25.00₺</span></div>
                <div className="summary-item2f">Toplam  <span className="summary-item3f">110.50₺</span></div>
            </div>
        </div>
    );
}

export default Success;
import React from 'react'
import { useState } from 'react'
import './pizza.css'
import { useHistory } from 'react-router-dom';
const selectedToppings = ["Domates", "Biber", "Sosis", "mısır", "sucuk"]




function Details() {

    const [orderNote, setOrderNote] = useState("");
    const [quantity, setQuantity] = useState(1);
    const history = useHistory();

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calculateTotalPrice = () => {
        const toppingPrice = selectedToppings.length * 5;
        const totalPrice = 100 + toppingPrice;
        return totalPrice;
    };


    const handleOrder = () => {
        history.push('/success'); // Butona tıklandığında '/app' rotasına yönlendirme
    };

    return (
        <>
            <div >
                <div className="order-note">
                    <h4>Sipariş Notu</h4>
                    <textarea
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        value={orderNote}
                        onChange={(e) => setOrderNote(e.target.value)}
                    />
                </div>
                <hr />
                <div className='detailing'>
                    <div className="counter">
                        <button className="leftButton" onClick={handleDecrement}>-</button>
                        <span>{quantity}</span>
                        <button className="rightButton" onClick={handleIncrement}>+</button>
                    </div>
                    <div className="order-summary">
                        <div className='text'>
                            <h4>Sipariş Toplamı</h4>
                            <p>Seçimler {selectedToppings.length * 5}₺</p>
                            <p className='total'>Toplam {calculateTotalPrice()}₺</p>
                        </div>
                        <button onClick={handleOrder}>SİPARİŞ VER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details

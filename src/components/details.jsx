import React from 'react'
import { useState } from 'react'
import './pizza.css'
import { useHistory } from 'react-router-dom';

function Details(props) {

    const { selectedSize, selectedType, selectedToppings, quantity, setQuantity } = props

    const [orderNote, setOrderNote] = useState("");
    //const [quantity, setQuantity] = useState(1);
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
        const totalPrice = (85.50 + toppingPrice) * quantity;
        return totalPrice;
    };


    const handleOrder = () => {
        if (selectedSize == null) {
            alert("Pizza Boyutu alanı boş bırakılamaz!!!")
            return;
        }
        if (selectedType === "") {
            alert("Hamur Tipi alanı boş bırakılamaz!!!")
            return;
        }
        history.push('/success');
    };

    return (
        <>
            <div className='container' >
                <div className="order-note">
                    <h4 className='orderTittleNote'>Sipariş Notu</h4>
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
                            <h4 className='orderTotal'>Sipariş Toplamı</h4>
                            <p>Seçimler   {(selectedToppings.length * 5) * quantity}₺</p>
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

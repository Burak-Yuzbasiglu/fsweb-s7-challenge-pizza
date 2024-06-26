import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './pizza.css'

function Pizza() {

    const [title, setTitle] = useState("Position Absolute Acı Pizza")
    const [price, setPrice] = useState(85.50)
    const [rate, setRate] = useState(4.9)
    const [rateCount, setRateCount] = useState(200)
    const [description, setDescription] = useState("Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.")

    const history = useHistory();

    const handleOrder = () => {
        history.push('/');
    };

    return (
        <>
            <div className='pizzaCont'>
                <div className='container'>
                    <img src='./assets/mile2-aseets/pictures/form-banner.png' alt="Form Banner" className="form-bannerO" />
                    <div className="menu-buttons">
                        <button className="home-buttonO" onClick={handleOrder}>Anasayfa</button>
                        <span>-</span>
                        <button className="order-buttonO" >Sipariş Oluştur</button>
                    </div>
                    <div class="row">
                        <div class="col" >
                            <h4 className='pizzaTittle '>{title}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8" >
                            <h2 className='priceTittle'>{price}₺</h2>
                        </div>
                        <div class="col-2" >
                            <h6 className='rate'>{rate}</h6>
                        </div>
                        <div class="col-2" >
                            <h6 className='rateCount' >({rateCount})</h6>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col">
                            <p className='description'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>











        </>
    )
}

export default Pizza

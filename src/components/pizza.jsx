import { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import './pizza.css'

function Pizza() {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("Position Absolute Acı Pizza")
    const [price, setPrice] = useState(85.50)
    const [rate, setRate] = useState(4.9)
    const [rateCount, setRateCount] = useState(200)
    const [description, setDescription] = useState("Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.")


    return (
        <>
            <div style={{ backgroundColor: "white" }}>
                <div class="row">
                    <div class="col" style={{ textAlign: "left" }}>
                        <h4 className='pizzaTittle '>{title}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8" style={{ textAlign: "left" }}>
                        <h2 className='priceTittle'>{price}₺</h2>
                    </div>
                    <div class="col-2" >
                        <h6 className='rate'>{rate}</h6>
                    </div>
                    <div class="col-2" style={{ textAlign: "right" }}>
                        <h6 className='rateCount' >({rateCount})</h6>
                    </div>
                </div>
                <div class="row" style={{ textAlign: "left" }}>
                    <div class="col">
                        <p className='description'>{description}</p>
                    </div>
                </div>
            </div>











        </>
    )
}

export default Pizza

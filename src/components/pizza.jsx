import { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import './pizza.css'

function Pizza() {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("burak")
    const [price, setPrice] = useState(17)
    const [rate, setRate] = useState(4.7)
    const [rateCount, setRateCount] = useState(200)
    const [description, setDescription] = useState("Margarita pizza (İtalyanca: Pizza Margherita), domates, mozarella, fesleğen, zeytinyağı ve tuzla yapılan Napoli pizzasıdır.")


    return (
        <>
            <div class="container text-center" style={{ backgroundColor: "white" }}>
                <div class="row">
                    <div class="col" style={{ textAlign: "left" }}>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8" style={{ textAlign: "left" }}>
                        <h2>Fiyat {price} TL</h2>
                    </div>
                    <div class="col-2" style={{}}>
                        <h3>{rate}</h3>
                    </div>
                    <div class="col-2" style={{}}>
                        <h4>{rateCount}</h4>
                    </div>
                </div>
                <div class="row" style={{ textAlign: "left" }}>
                    <div class="col">
                        <h5>{description}</h5>
                    </div>
                </div>
            </div>











        </>
    )
}

export default Pizza

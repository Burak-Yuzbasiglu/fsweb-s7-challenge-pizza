import { useState } from 'react'
import './pizza.css'



const pizzaTypes = ["İnce Hamur", "Normal Hamur", "Kalın Hamur"]
const sizes = ["Küçük", "Orta", "Büyük"]
const malzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "mısır", "sucuk", "Kanada Jambonu", "Mantar", "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak", "Soğan", "Sarımsak"]


function Features() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedType, setSelectedType] = useState("");

    const [selectedToppings, setSelectedToppings] = useState([]);



    const handleChangeSize = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleChangeType = (e) => {
        setSelectedType(e.target.value);

    };

    const handleChangeToppings = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedToppings([...selectedToppings, value]);
        } else {
            setSelectedToppings(selectedToppings.filter(item => item !== value));
        }
    };

    return (
        <>
            <div class="container text-center" style={{ background: "white" }}>
                <div class="row">
                    <div class="col" style={{ textAlign: "left" }}>
                        <h2>Boyut Seç</h2>
                        {sizes.map((size, index) => (
                            <label key={index} className="radioLabel">
                                <input
                                    type="radio"
                                    onChange={handleChangeSize}
                                    name='boyut'
                                    value={size}
                                    checked={selectedSize === size}
                                    className="radioInput"
                                />
                                {size}
                            </label>
                        ))}

                    </div>
                    <div class="col" style={{ textAlign: "left" }}>
                        <h3>Hamur Seç</h3>
                        <select onChange={handleChangeType} value={selectedType}>
                            <option value="">Hamur Kalınlığı</option>
                            {pizzaTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                    </div>
                </div>



                <div class="row">
                    <div class="col" style={{ textAlign: "left" }}>
                        <h5>Ek Malzemeler</h5>
                        <h6>En Fazla 10 malzeme seçebilirsiniz. 5₺</h6>
                        <div className="toppings-container">
                            {malzemeler.map((malzeme, index) => (

                                <label key={index} className="checkboxLabel">
                                    <input
                                        type="checkbox"
                                        value={malzeme}
                                        onChange={handleChangeToppings}
                                        checked={selectedToppings.includes(malzeme)}
                                        className='checkboxInput'
                                    />
                                    {malzeme}
                                </label>

                            ))}
                        </div>
                        <p>Seçilen Malzemeler: {selectedToppings.join(', ')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features

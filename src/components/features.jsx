import './pizza.css'

const pizzaTypes = ["Ekstra İnce Hamur", "İnce Hamur", "Normal Hamur", "Kalın Hamur", "Ekstra Kalın Hamur"]
const sizes = ["Küçük", "Orta", "Büyük"]
const malzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "mısır", "sucuk", "Jambon", "Mantar", "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak", "Soğan", "Sarımsak"]


function Features(props) {

    const { selectedSize, setSelectedSize, selectedType, setSelectedType, selectedToppings, setSelectedToppings } = props

    //const [selectedSize, setSelectedSize] = useState(null);  
    //const [selectedType, setSelectedType] = useState("");
    //const [selectedToppings, setSelectedToppings] = useState([]);

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
            return;
        }
        setSelectedToppings(selectedToppings.filter(item => item !== value));
    };

    return (
        <>
            <div className='container'>
                <div class="row">
                    <div class="col" style={{ textAlign: "left" }}>
                        <h4 className='sizeType'>Boyut Seç</h4>
                        {sizes.map((size, index) => (
                            <label key={index} className="radioLabel">
                                <input required
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
                        <h4 className='sizeType'>Hamur Seç</h4>
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
                        <h4 className='h4gp'>Ek Malzemeler</h4>
                        <h7 className="h7gp">En Fazla 10 malzeme seçebilirsiniz. 5₺</h7>
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

                    </div>
                </div>
            </div>
        </>
    )
}

export default Features

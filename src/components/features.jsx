import './pizza.css'
import { ButtonGroup, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import React, { useState } from 'react';

const pizzaTypes = ["Ekstra İnce Hamur", "İnce Hamur", "Normal Hamur", "Kalın Hamur", "Ekstra Kalın Hamur"]
const sizes = ["S", "M", "L"]
const malzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "mısır", "sucuk", "Jambon", "Mantar", "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak", "Soğan", "Sarımsak"]


function Features(props) {

    const { selectedSize, setSelectedSize, selectedType, setSelectedType, selectedToppings, setSelectedToppings } = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    //const [selectedSize, setSelectedSize] = useState(null);  
    //const [selectedType, setSelectedType] = useState("");
    //const [selectedToppings, setSelectedToppings] = useState([]);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
                        <ButtonGroup style={{ gap: '20px' }}>
                            {sizes.map((size, index) => (
                                <Button
                                    key={index}
                                    style={{
                                        backgroundColor: selectedSize === size ? '#FFEECC' : '#FAF7F2',
                                        color: '#5F5F5F',
                                        border: "none",
                                        borderRadius: "50%",
                                        fontSize: "16px",
                                        fontFamily: "Barlow",
                                        width: "56px",
                                        height: "56px",
                                        fontWeight: "500"
                                    }}
                                    color="primary"
                                    outline
                                    onClick={() => setSelectedSize(size)}
                                    active={selectedSize === size}
                                >
                                    {size}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>
                    <div class="col" style={{ textAlign: "left" }}>
                        <h4 className='sizeType'>Hamur Seç</h4>
                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown} className='DropDown'>
                            <DropdownToggle caret color="primary" outline style={{ fontSize: '18px', height: "56px", width: "283px", border: "none", color: '#5F5F5F', fontWeight: "500", fontFamily: "Barlow" }}>
                                {selectedType ? selectedType : "--Hamur Kalınlığı Seç--"}
                            </DropdownToggle>
                            <DropdownMenu  >
                                <DropdownItem disabled>--Hamur Kalınlığı Seç--</DropdownItem>
                                {pizzaTypes.map((type, index) => (
                                    <DropdownItem
                                        key={index}
                                        style={{ color: "#5F5F5F" }}
                                        onClick={() => setSelectedType(type)}
                                        active={selectedType === type}
                                    >
                                        {type}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </ButtonDropdown>
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
            </div >
        </>
    )
}

export default Features

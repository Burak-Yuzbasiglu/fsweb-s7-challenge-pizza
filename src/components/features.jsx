import { useState } from 'react'
import {
    Form, FormGroup, Input, Label, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonGroup,
    Button
} from 'reactstrap'



const pizzaTypes = ["ince hamur", "kalın hamur"]
const sizes = ["küçük", "orta", "büyük"]
const malzemeler = ["zeytin", "mısır", "biber", "jambon", "sucuk", "mantar"]


function Features() {
    const [size, setSize] = useState(null)
    const [type, setType] = useState(null)
    const [malzemeler, setMalzemeler] = useState([])
    const [rSelected, setRSelected] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const changeValue = (e) => { setType(e.currentTarget.textContent) }

    return (
        <>
            <div class="container text-center" style={{ background: "red" }}>
                <div class="row">
                    <div class="col" style={{ textAlign: "left" }}>
                        <h2>Boyut Seç</h2>
                        <ButtonGroup>
                            {sizes.map((s, i) => <Button
                                color="primary"
                                outline
                                onClick={() => { setRSelected(i); setSize(s) }}
                                active={rSelected === i}
                            >
                                {s}
                            </Button>)}
                        </ButtonGroup>

                    </div>
                    <div class="col" style={{}}>
                        <h3>Hamur Seç</h3>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
                            <DropdownToggle caret>{type ? type : "Hamur Kalınlığı"} </DropdownToggle>
                            <DropdownMenu>
                                {pizzaTypes.map(pT => <DropdownItem onClick={changeValue} >{pT}</DropdownItem>)}

                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>



                <div class="row">
                    <div class="col">
                        <h5>Ek Malzemeler Seç</h5>
                        <Form>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Some input
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Some other input
                                </Label>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features

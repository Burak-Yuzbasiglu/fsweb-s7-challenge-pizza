import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx'
import OrderPizza from './OrderPizza.jsx'
import Success from './Success.jsx';

function App() {

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (<>
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/orderpizza" exact>
          <OrderPizza selectedSize={selectedSize} setSelectedSize={setSelectedSize} selectedType={selectedType} setSelectedType={setSelectedType} selectedToppings={selectedToppings} setSelectedToppings={setSelectedToppings} quantity={quantity} setQuantity={setQuantity} />
        </Route>
        <Route path="/success" exact>
          <Success selectedSize={selectedSize} selectedType={selectedType} selectedToppings={selectedToppings} quantity={quantity} />
        </Route>
      </Switch>
    </div>
  </>)
}

export default App

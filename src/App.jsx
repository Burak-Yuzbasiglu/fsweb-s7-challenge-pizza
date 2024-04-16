import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx'
import OrderPizza from './OrderPizza.jsx'
import Success from './Success.jsx';
import Footer from './components/footer.jsx';

function App() {

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const propsObj = {
    selectedSize,
    setSelectedSize,
    selectedType,
    setSelectedType,
    selectedToppings,
    setSelectedToppings,
    quantity,
    setQuantity
  };

  return (<>
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>
        <Route path="/orderpizza" exact>
          <OrderPizza propsObj={propsObj} />
        </Route>
        <Route path="/success" exact>
          <Success {...propsObj} />
        </Route>
      </Switch>
    </div>
  </>)
}

export default App

import { useState, useEffect } from 'react'

import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx'
import OrderPizza from './OrderPizza.jsx'
import Success from './Success.jsx';

function App() {

  useEffect(() => {

  })


  return (<>
    <div>


      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/orderpizza" exact>
          <OrderPizza />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>





    </div>
  </>)
}

export default App

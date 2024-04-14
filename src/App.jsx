import { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Pizza from './components/pizza'
import Features from './components/features'
import Details from './components/details'

function App() {
  const [count, setCount] = useState(0)



  return (<div>
    <Pizza></Pizza>
    <Features></Features>
    <Details></Details>
  </div>)
}

export default App

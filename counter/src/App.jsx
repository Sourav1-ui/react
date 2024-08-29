import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Props'

function App() {
  let [counter, setCount] = useState(0)
  

  const addValue = () => {
    // console.log(counter)
    // counter=counter+1;
    if (counter < 20) {
      setCount(counter + 1);
    }
    else
      setCount(0);
  }


  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCount(counter)
    }
    else
      setCount(0)
  }

  let user={
    name:"Apple",
    address:"Kolkata"
  }

  let myArr=[1,2,3]

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <br />
      <Props username="Sourav" User={user.name} arr={myArr[1]}/>
      <Props username="Rima"  User={user.address} />
    </>
  )
}

export default App

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")
  const redButton=()=>{
    // console.log("red")
  }

  return (
    <>
      <div className='flex justify-center items-center min-h-screen border ' >
        <div className='border border-blue-600 p-2 rounded-lg'>
          <button onClick={redButton} className='bg-red-600 w-20 h-10 rounded-lg text-xl font-bold text-white mr-5'>Red</button>
          <button className='bg-green-600 w-20 h-10 rounded-lg text-xl font-bold text-white mr-5'>Green</button>
          <button className='bg-blue-600 w-20 h-10 rounded-lg text-xl font-bold text-white mr-5'>Blue</button>
          <button className='bg-yellow-600 w-20 h-10 rounded-lg text-xl font-bold text-white '>Yellow</button>

        </div>

      </div>

    </>
  )
}

export default App

*/



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }} >
      <div className=' fixed bottom-12 px-12 flex justify-center flex-wrap inset-x-0 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2'>
          <button onClick={() => setColor("red")} className='px-4 py-1 rounded-full text-white shadow-lg bg-red-600'>Red</button>
          <button onClick={() => setColor("blue")} className='px-4 py-1 rounded-full text-white shadow-lg bg-blue-600'>Blue</button>
          <button onClick={() => setColor("green")} className='px-4 py-1 rounded-full text-white shadow-lg bg-green-600'>Green</button>
          <button onClick={() => setColor("yellow")} className='px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600'>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App

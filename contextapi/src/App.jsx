import { useState } from 'react'
import './App.css'
import UserContextProvider from './userContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserContextProvider>
      <Login/>
      <Profile/>

     </UserContextProvider>
    </>
  )
}

export default App

import React, {useState, useContext} from 'react'
import userContext from '../userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
// fetch variable or data from global store(userContext)
    const {setUser} = useContext(userContext)
    const {setPass} = useContext(userContext)
    // console.log({setUser})

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        setPass({password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login


/**
 -> When the user types something in the input fields in the Login component, the values are stored in local state variables (username and password) using useState.

-> When the user submits the form (clicks "Submit"), those values are sent to the context using the setUser function. This context is managed by the UserContextProvider component.

-> The context holds the user information (like username and password) and shares it with other components like Profile.

-> What is the Role of {children}?
{children} only determines where to show the components that are wrapped inside UserContextProvider.
It does not store any data like the username or password.
In simple words:

The user’s input is stored in state and shared through context.
{children} just tells React where to display the components (like Login and Profile) in the app.
 */
import React from "react";
import userContext from "./userContext";

const UserContextProvider = ({children}) => {
    // console.log(children)
    const [user, setUser] = React.useState(null)
    const [pass, setPass] = React.useState(null)

    return(
        <userContext.Provider value={{user, setUser,pass,setPass}}>
        {children}
        </userContext.Provider>
    )
}

export default UserContextProvider
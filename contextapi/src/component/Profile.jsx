import React, {useContext} from 'react'
import userContext from '../userContext'

function Profile() {
    const {user} = useContext(userContext)
    const {pass} = useContext(userContext)
    
    if (!user) return <div>please login</div>
    return <div>Welcome {user.username} {pass.password}</div>
}

export default Profile
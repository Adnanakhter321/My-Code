import React, { useContext} from 'react'
import { GlobalContext } from '../context/context'


const Users = () => {
    
    const { state } = useContext(GlobalContext)
   
    return (
        state.users.map((el, keys) => {
            return (
                <div key={keys}>
                    <h1>Username : {el.userName}</h1>
                </div>
            )
        })
    )
}
export default Users;


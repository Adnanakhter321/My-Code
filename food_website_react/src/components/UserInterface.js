import React from 'react'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth, signOut } from "../configs/Firebase";
import { useHistory } from 'react-router';

const UserInterface = () => {
    let history = useHistory()
    let Logout = () => {
        signOut(auth).then(() => {
           history.push('/signin')
        })
    }
    return (
        <div>
            <h1>Hello User</h1>
            <Button onClick={Logout} variant='contained' startIcon={<LogoutIcon />}>Logout</Button>
        </div>
    )
}

export default UserInterface

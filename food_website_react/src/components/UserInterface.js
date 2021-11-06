import { Input } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import UploadIcon from '@mui/icons-material/Upload';
import { Button } from '@mui/material';
import { useState } from 'react';
import { storage, ref, uploadBytes } from '../configs/Firebase'
const UserInterface = () => {
    let history = useHistory()
    const location = useLocation();
    let currentUser = useSelector((State) => State.todoReducer.user)
    useEffect(() => {
        if (currentUser[0] === 'nouser' && location.pathname === '/userinterface') {
            history.push('/Signin')
        }
    }, [currentUser, history, location.pathname])
    const [File, setFile] = useState("")
    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
        setFile(file)
        event.target.parentNode.parentNode.childNodes[1].nodeValue = file.name
    }
    const Upload = (ev) => {
        ev.target.style.cursor ='not-allowed'
        ev.target.innerText = 'Uploading.....'
        ev.target.disabled = true;
        let storageRef = ref(storage, `userimages/${File.name}`)
        uploadBytes(storageRef, File).then((snapshot) => {
            ev.target.innerText = 'Uploaded'
            setTimeout(() => {
                setFile('')
                ev.target.disabled = false;
                ev.target.innerText = 'Upload'
                ev.target.style.cursor ='pointer'
            }, 2000);
        });
    }
    return (
        <div>
            <h1 style={{cursor:''}}>Hello User</h1>
            <label htmlFor='file'> <Button startIcon={<UploadIcon />}>
                No File Selected
            <Input type='file' id='file' onChange={fileChangedHandler}/>
            </Button>
            </label>
            <Button startIcon={<UploadIcon />} onClick={Upload} variant='contained'>
                Upload
            </Button>
        </div>
    )
}

export default UserInterface

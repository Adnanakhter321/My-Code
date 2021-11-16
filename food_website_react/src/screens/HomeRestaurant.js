import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { uploadBytes, ref, storage, getDownloadURL, setDoc, doc, db } from '../configs/Firebase';
export default function BasicTextFields() {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [File, setFile] = useState("")
    const [Itemname, setitemname] = useState('')
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const currentUser = useSelector((State) => State.todoReducer.user)
    const addDish = (ev) => {
        ev.target.innerText = 'Adding Dish....'
        ev.target.disabled = true;
        let dish = {
            Itemname,
            Price: values.weight + 'PKR',
            uid: new Date().getTime().toString(),
            RestaurantName: currentUser[1].RestaurantName,
            quantity: 1,
        }
        let storageRef = ref(storage, `dishimages/${dish.uid}/${File.name}`)
        if (File !== '' && Itemname !== '' && values.weight !== '') {
            uploadBytes(storageRef, File).then(() => {
                setTimeout(() => {
                    setFile('')
                }, 2000);
                getDownloadURL(ref(storage, `dishimages/${dish.uid}/${File?.name}`)).then((url) => {
                    dish[`imageurl`] = url
                    setDoc(doc(db, "restuarantDishes", dish.uid), dish).then(() => {
                        ev.target.innerText = 'Add Dish'
                        setFile('')
                        setitemname('')
                        setValues({ ...values, weight: ''})
                        ev.target.disabled = false;
                    }).catch((er) => {
                        ev.target.disabled = false;
                        ev.target.innerText = 'Add Dish'
                        alert(er.message)
                    })
                })
            }).catch((er) => {
                ev.target.disabled = false;
                ev.target.innerText = 'Add Dish'
                alert(er.message)
            })
        }
        else{
            ev.target.disabled = false;
            ev.target.innerText = 'Add Dish'
            alert('Fill All Fields And Try Again')
        }
    }
    return (

        <div>
            <div style={{ marginTop: 90 }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: "#e5e5e5",
                        padding: "1rem 1rem 1rem 1rem",
                        borderRadius: '2rem',
                        margin: '0 auto',
                        width: 300
                    }}
                    noValidate
                    autoComplete="off">

                    <h1 style={{ maxWidth: 300, paddingBottom: 10 }}>Add Dishes In Your <center>Restaurant</center></h1>
                    <TextField id="standard-basic" value={currentUser[1].RestaurantName + ' Restaurant'} disabled variant="standard" />
                    <TextField id="standard-basic" value={Itemname} onChange={(ev) => setitemname(ev.target.value)} label="Item-Name" variant="standard" />
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            value={values.weight}
                            onChange={handleChange('weight')}
                            endAdornment={<InputAdornment position="end">PKR</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'Price',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Price</FormHelperText>
                    </FormControl>
                    <Input type='file' onChange={(event) => {
                        const file = event.target.files[0]
                        setFile(file)
                    }} />
                    <Button variant="contained" onClick={addDish}>Add Dish</Button>
                </Box>
            </div>
        </div>
    );
}

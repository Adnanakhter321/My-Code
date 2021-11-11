import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, setDoc, db, auth, signOut } from "../configs/Firebase"
import { useSelector } from 'react-redux';
import { Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { uploadBytes, ref, storage, getDownloadURL, createUserWithEmailAndPassword } from '../configs/Firebase';
const theme = createTheme();
export default function SignUp() {
    const location = useLocation()
    const history = useHistory()
    const currentUser = useSelector((State) => State.todoReducer.user)
    useEffect(() => {
        if (currentUser[0] === 'userExists' && location.pathname !== '/userinterface') {
            history.push('/userinterface')
        }
    }, [currentUser, history, location.pathname])
    const [RestaurantName, setRestaurantName] = useState('')
    const [Description, setDescription] = useState('')
    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [File, setFile] = useState("")
    const [deliveryfee, setdeliveryFee] = React.useState('');
    const handleChange = (event) => {
        setdeliveryFee(event.target.value);
    };
    const handleSubmit = (ev) => {
        let storageRef = ref(storage, `userimages/${File.name}`)
        let User = {
            RestaurantName,
            Email,
            password,
            Description,
            deliveryfee,
            uid: new Date().getTime().toString()
        }
        if (File !== '' && RestaurantName !== '' && Email !== '' && password !== '' && Description !== '' && deliveryfee !== '') {
            ev.target.innerText = 'Signing Up...'
            createUserWithEmailAndPassword(auth, User.Email, User.password).then(()=>{
                uploadBytes(storageRef, File).then(() => {
                    setTimeout(() => {
                        setFile('')
                    }, 2000);
                    getDownloadURL(ref(storage, `userimages/${File.name}`)).then(async(url) => {
                        User[`urlimage`] = url
                        await setDoc(doc(db, "restaurantsData", User.uid), User).then(()=>{
                            alert('You Have Succesfully Registered, Redirecting To Restaurant Login Page')
                            setTimeout(() => ev.target.innerText = 'SIGN UP', 1000)
                            history.push('/restaurantsignin')
                            signOut(auth).then(()=>history.push('/restaurantsignin'))
                        }).catch((er)=>{
                            alert(er.message)
                            setTimeout(() => ev.target.innerText = 'SIGN UP', 1000)
                        })
                    })
                });
            }).catch((er)=>{
                setTimeout(() => ev.target.innerText = 'SIGN UP', 1000)
                alert(er.message)
            })
            // uploadBytes(storageRef, File).then(() => {
                //     setTimeout(() => {
                    //         setFile('')
                    //     }, 2000);
                    //     getDownloadURL(ref(storage, `userimages/${File.name}`)).then((url) => {
                        //         User[`urlimage`] = url
                        //         createUserWithEmailAndPassword(auth, User.Email, User.password)
                        //             .then(async () => {
                            //                 await setDoc(doc(db, "restaurantsData", User.uid), User).then(() => history.push('/restaurantsignin'), alert('You Have Succesfully Registered, Redirecting To Restaurant Login Page'), setTimeout(() => ev.target.innerText = 'SIGN UP', 1000), signOut(auth));
                            //             }).catch((er) => alert(er.message), setTimeout(() => ev.target.innerText = 'SIGN UP', 1000))
                            //     })
            // });
        }
        else {
            alert('Please Fill All fields And try again')
        }
        setTimeout(() => ev.target.innerText = 'SIGN UP', 1000)
    };
    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
        setFile(file)
        console.log(File);
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: "#f9f9f9",
                        padding: "1rem 1rem 1rem 1rem",
                        borderRadius: '2rem',
                    }}
                >

                    <div>
                        <img style={{ width: 100 }} src="https://mydeliveryappadnan.web.app/images/logo2.png" alt="F" />
                    </div>
                    <Typography component="h1" variant="h5">
                        <center>  Restaurant Sign up For FooDHuB</center>
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="RestaurantName"
                                    required
                                    fullWidth
                                    id="RestaurantName"
                                    label="Restaurant Name"
                                    autoFocus
                                    value={RestaurantName}
                                    onChange={(ev) => setRestaurantName(ev.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={Email}
                                    onChange={(ev) => setEmail(ev.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(ev) => setpassword(ev.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="Description"
                                    required
                                    fullWidth
                                    id="DescriptionRestaurant"
                                    label="Description of Restaurant"
                                    autoFocus
                                    value={Description}
                                    onChange={(ev) => setDescription(ev.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">DeliveryFee</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={deliveryfee}
                                        label="Delivery Fee"
                                        onChange={handleChange}
                                        style={{ width: 150 }}
                                    >
                                        <MenuItem value={'50PKR'}>50PKR</MenuItem>
                                        <MenuItem value={'Free'}>Free</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Restaurant Image: 
                                </Typography>
                                <Input type='file' id='file' onChange={fileChangedHandler} />
                            </Grid>

                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link style={{ cursor: 'pointer' }} onClick={() => history.push('/restaurantsignin')} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
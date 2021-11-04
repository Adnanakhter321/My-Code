import * as React  from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Redirect } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { logRoles } from '@testing-library/dom';
import {  doc, setDoc, db} from "../configs/Firebase"
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit">
                FooDHuB
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    let history = useHistory()
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmit = (ev) => {
        ev.target.innerText = 'Signing Up...!'
      const  User = {
            firstName,
            lastName,
            Email,
            password,
        }
        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth, User.Email, User.password)
          .then( async (userCredential) => {
            const user = userCredential.user.uid;
            User.uid = user;
            await setDoc(doc(db, "Users", User.uid), User).then(()=>history.push('/signin') , alert('You Have Succesfully Registered, Redirecting To Login Page'), setTimeout(()=>ev.target.innerText = 'SIGN UP',1000));
        }).catch((er)=>alert(er.message), setTimeout(()=>ev.target.innerText = 'SIGN UP',1000))
    };
    

return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
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
                    Sign up For FooDHuB
                </Typography>
                <Box component="form" noValidate  sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={firstName}
                                onChange={(ev) => setfirstName(ev.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                value={lastName}
                                onChange={(ev) => setlastName(ev.target.value) }
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
                                onChange={(ev) => setEmail(ev.target.value) }
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
                                onChange={(ev) => setpassword(ev.target.value) }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
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
                            <Redirect to='/signin'>
                                <Link variant="body2">
                                    Already have an account? Sign in
                                </Link></Redirect>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
);
}
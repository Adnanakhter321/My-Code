import * as React from 'react';
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
import { auth, signInWithEmailAndPassword } from "../configs/Firebase";
import { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        FoodHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export default function SignIn() {
  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const history = useHistory()
  const location = useLocation();
  const currentUser = useSelector((State) => State.todoReducer.user)
//   useEffect(() => {
//     if(currentUser[0] === 'userExists' && location.pathname !== '/userinterface'){
//         history.push('/userinterface')
//     }
// }, [currentUser, history, location.pathname])
  const SignIN = (event) => {
    event.target.innerText = 'Signing In...'
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        event.target.innerText = 'SIGN In'
        history.push('/userinterface')
        // setTimeout(() => {
        // }, 1000);
      })
      .catch((error) =>alert(error.message),setTimeout(()=>event.target.innerText = 'SIGN In',1000));
  };

  return (
      <ThemeProvider theme={theme} >
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
              <img style={{ width: 100 }} src="https://mydeliveryappadnan.web.app/images/logo2.png" alt="F" />
            <Typography component="h1" variant="h5">
              Sign in For FooDHuB
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={Email}
                onChange={(ev) => setEmail(ev.target.value) }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(ev) => setpassword(ev.target.value) }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={SignIN}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                    <Link onClick={()=> history.push('/')} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, signInWithEmailAndPassword } from "../configs/Firebase";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { onSnapshot, onAuthStateChanged, query, collection, db } from "../configs/Firebase";
import { CheckUser } from "../Actions/Actions";
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
  const q2 = query(collection(db, "restaurantsData"));
  const currentUser = useSelector((State) => State.todoReducer.user)
  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  let dispatch = useDispatch()
  const history = useHistory()
  const SignIN = (event) => {
    event.target.innerText = 'Signing In...'
    signInWithEmailAndPassword(auth, Email, password)
    .then(() => {
      event.target.innerText = 'SIGN IN'
      alert("succes")
        history.push('/restauranthome')
        if(currentUser !== 'userRestaurant'){
          onAuthStateChanged(auth, (user) => {
            if (user) {
              onSnapshot(q2, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                  if (change.type === "added") {
                    if (change.doc.data().Email === user.email) {
                      dispatch(CheckUser("userRestaurant", change.doc.data()))
  
                    }
                  }
                });
              });
            }
  
          });
        }
      })
      .catch((error) => alert(error.message), setTimeout(() => event.target.innerText = 'SIGN IN', 1000));
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
            <center>
              Restaurant Sign in For FooDHuB
            </center>
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
              onChange={(ev) => setEmail(ev.target.value)}
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
              onChange={(ev) => setpassword(ev.target.value)}
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
                <Link onClick={() => history.push('/restaurantsignup')} variant="body2">
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
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CheckUser, CartNull } from '../Actions/Actions';
import { auth, signOut } from '../configs/Firebase';
import PublishIcon from '@mui/icons-material/Publish';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));
export default function PrimarySearchAppBar() {
    let okbynull = () => {
        currentUser[0] === 'userExists' ? history.push('/userinterface') : history.push('/signin')
    }
    let dispatch = useDispatch();
    let history = useHistory()
    let Logout = () => {
        signOut(auth).then(() => {
            dispatch(CartNull())
            if (currentUser[0] === 'userRestaurant') {
                history.push('/restaurantlogin')
                dispatch(CheckUser('nouser', 'null'))
            }
            else if (currentUser[0] === 'userExists') {
                history.push('/signin')
                dispatch(CheckUser('nouser', 'null'))
            }
        })
    }
    let currentUser = useSelector((State) => State.todoReducer.user)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const goHome = () => {
        if (currentUser[0] === 'userExists') {
            history.push('/userinterface')
        }
        else if (currentUser[0] === 'userRestaurant') {
            history.push('/restauranthome')
        }
        else {
            history.push('/signin')
        }
    }
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {currentUser[0] === 'userExists' ?
                <div>

                    <MenuItem>
                        <Button style={{ marginRight: '1rem' }} b={4} startIcon={<HomeIcon />} variant='outlined' onClick={okbynull} size="medium">Home</Button>
                        <Button b={4} startIcon={<LogoutIcon />} variant='outlined' onClick={Logout} size="medium">Logout</Button>
                    </MenuItem>
                </div>
                :
                currentUser[0] === 'userRestaurant' ?
                    <div>
                        <Grid>
                            <Button startIcon={<PublishIcon />} style={{ marginRight: '1rem' }} onClick={() => {
                                history.push('/orders')
                            }} variant="outlined" size="medium" >Orders</Button>
                            <Button startIcon={<HomeIcon />} style={{ marginRight: '1rem' }} onClick={goHome} variant="outlined" size="medium" >Home</Button>
                            <Button onClick={Logout} variant="outlined" size="medium" startIcon={<LoginIcon />}>Logout</Button>
                        </Grid>
                    </div>

                    : currentUser[0] === 'nouser' ?
                        <div>
                            <MenuItem>

                                <Button variant='contained' onClick={() => history.push("/signin")} size="small">Login</Button>
                            </MenuItem>

                            <MenuItem>
                                <Button onClick={() => history.push("/")} variant='outlined' size="small">Register</Button>
                            </MenuItem>
                        </div> : <Button style={{ marginRight: '1rem' }} b={4} startIcon={<HomeIcon />} variant='outlined' onClick={okbynull} size="medium">Home</Button>
            }
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        FooDHuB
                    </Typography>
                    <Search>
                        {/* <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{maxWidth:170}}
                        /> */}
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {currentUser[0] === 'userExists' ?
                            <div>
                                <Button startIcon={<HomeIcon />} style={{ marginRight: '1rem' }} onClick={goHome} variant="contained" size="medium" >Home</Button>
                                <Button onClick={Logout} variant="contained" size="medium" startIcon={<LoginIcon />}>Logout</Button>
                            </div> : currentUser[0] === 'userRestaurant' ?
                                <div>
                                    <Button startIcon={<PublishIcon />} style={{ marginRight: '1rem' }} onClick={() => {
                                        history.push('/orders')
                                    }} variant="contained" size="medium" >Orders</Button>
                                    <Button startIcon={<HomeIcon />} style={{ marginRight: '1rem' }} onClick={goHome} variant="contained" size="medium" >Home</Button>
                                    <Button onClick={Logout} variant="contained" size="medium" startIcon={<LoginIcon />}>Logout</Button>
                                </div>
                                : currentUser[0] === 'nouser' ?
                                    <div>
                                        <Button onClick={() => history.push("/signin")} style={{ outline: 'none', marginRight: 10 }} variant="contained" size="medium" startIcon={<LoginIcon />}>Login</Button>


                                        <Button onClick={() => history.push("/")} variant="contained" size="medium" startIcon={<LoginIcon />}>Register</Button>
                                        <Button onClick={() => history.push("/restaurantsignup")} variant="contained" size="medium" startIcon={<LoginIcon />}>Restaurant Signup</Button>
                                        <Button onClick={() => history.push("/restaurantlogin")} variant="contained" size="medium" startIcon={<LoginIcon />}>Restaurant Login</Button>
                                    </div>
                                    : null
                        }


                    </Box>


                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}

import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import Dishes2 from '../components/Dishes'
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
const Dishes = () => {
    let history = useHistory()
    const currentUser = useSelector((State) => State.todoReducer.Dishes)
    const { nameRestaurant } = useParams()
    
    return (

        <>
        <MenuItem>
                <Button variant='outlined' onClick={()=> history.push('/userinterface')}>GoBacK</Button>
        </MenuItem>
            {currentUser.map((el, index) => {
                if (el.RestaurantName === nameRestaurant) {
                    return (
                        <Dishes2 key={index} restaurantName={nameRestaurant} Itemname={el.Itemname} Price={el.Price} imageurl={el.imageurl} uid={el.uid} quantity={el.quantity} />
                        )
                    }
                    return null;
                })
            }
        </>
    )
}

export default Dishes

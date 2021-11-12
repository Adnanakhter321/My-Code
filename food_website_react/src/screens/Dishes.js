import React from 'react'
import {  useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Dishes2 from '../components/Dishes'
const Dishes = () => {
    const currentUser = useSelector((State) => State.todoReducer.Dishes)
    const { nameRestaurant } = useParams()
   
    return (
        <>
            {currentUser.map((el, index) => {
                if (el.RestaurantName === nameRestaurant) {
                   return(
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

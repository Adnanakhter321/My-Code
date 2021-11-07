// import { Input } from '@mui/material';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory, useLocation } from 'react-router';
// import UploadIcon from '@mui/icons-material/Upload';
// import { Button } from '@mui/material';
// import { useState } from 'react';
// import { storage, ref, uploadBytes } from '../configs/Firebase'
import React from 'react'
import { useSelector } from 'react-redux';
import MuiRestaurants from '../components/muiRestaurants';
const UserInterface = () => {
    const currentUser = useSelector((State) => State.todoReducer.AllRestaurants)
    return(
       <>
       {currentUser.map((el, index)=>{
           return(
            <MuiRestaurants key={index} description='Choose From Amazing Deals Of Premium Beef And Chicken Burgers, Fries, Wings And More. Delivered Hot & Fresh. Fast Delivery. Neighborhoods: DHA, SMCHS, Gulshan, North Nazimabad.
            ' restaurantName={el.RestaurantName}  urlimage ={el.urlimage} uid = {el.uid} />
           )
       })}
       </>
    )
}
export default UserInterface;
import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, db } from "../configs/Firebase";
import { useSelector } from 'react-redux';
import CheckOrd from '../components/CheckOrd'
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router';
const CheckOrders = () => {
    let history = useHistory()
    const [userOrder, setuserOrder] = useState([])
    const currentUser = useSelector((State) => State.todoReducer.user)
    let Orders = []
    const q = query(collection(db, "UserOrders"));
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    if (currentUser[1].RestaurantName === change.doc.data().RestaurantName) {
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        Orders = [
                            ...Orders,
                            change.doc.data(),
                        ]
                    }
                }
            });
            setuserOrder(Orders)
        });

    }, [])
    return (
        <>
            <MenuItem>
                <Button variant='outlined' onClick={() => history.push('/restauranthome')}>GoBacK</Button>
            </MenuItem>
            {
                userOrder[0] ? userOrder.map((ev) => {
                    return (
                        <CheckOrd {...ev} key={ev.uid} />
                    )

                }) : <h1>No orders</h1>
            }
        </>
    )
}

export default CheckOrders
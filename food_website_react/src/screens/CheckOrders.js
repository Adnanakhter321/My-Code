import React, { useEffect} from 'react'
import { collection, query, onSnapshot, db } from "../configs/Firebase";
import CheckOrd from '../components/CheckOrd'
import { useSelector } from 'react-redux';
const CheckOrders = () => {
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
            console.log(Orders);
        });
    }, [])
    return (
        // Orders.map((el)=>{
        //     <CheckOrd {...Orders} BuyerAddress={el.BuyerAddress}  BuyerName={el.BuyerName}
        //     CartBill={el.CartBill}
        //     Address = {el.FlatUnit}
        //     RestaurantName = {el.RestaurantName}
        //     TotalBill = {el.TotalBill}
        //     deliveryfee={el.deliveryfee}

        //     />
        //     return null;
        // })
        <h1>Orders Work pending </h1>
    )
}

export default CheckOrders
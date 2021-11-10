import React, { useEffect, useState } from 'react'
import './cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CartItems from '../components/CartItems';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {db,  doc, setDoc } from "../configs/Firebase"; 
import {CartNull} from '../Actions/Actions'
import { useDispatch } from 'react-redux';
let info;
const Cart = () => {
    let history = useHistory()
    let dispatch = useDispatch()
    const [style, setstyle] = useState({display :'inline'})
    const [style2, setstyle2] = useState({display :'none'})
    const [flatUnit, setflatUnit] = useState('')
    const [Address, setAddress] = useState('')
    const cartIn = useSelector((State) => State.todoReducer.Cart)
    const User = useSelector((State) => State.todoReducer.user)
    const ResData = useSelector((State) => State.todoReducer.AllRestaurants)
    const placeOrder = async () => {
        info[`Flat/Unit`] = flatUnit
        info[`BuyerAddress`] = Address
        const Ref = doc(db, "UserOrders", info.uid)
        await setDoc(Ref, info).then(()=> alert('Your Order Has Been Placed'), dispatch(CartNull()) , history.push('/userinterface'))
    }
    const submitCart = (ev) => {
        let num = 1
        let CartBill = ev.target.previousSibling.innerText.split(' ')[3]
        if(cartIn[0]){
            info = {
                CartBill,
                BuyerName: User[1].firstName + ' ' + User[1].lastName,
                RestaurantName: cartIn[0].RestaurantName,
                uid: new Date().getTime().toString(),
                useruid: User[1].uid
            };
            ResData.map((ev) => {
                if (cartIn[0].RestaurantName === ev.RestaurantName) {
                    info['deliveryfee'] = ev.deliveryfee
                }
                return null
            })
            const Total = parseFloat(info.deliveryfee.split('PKR')[0]) + parseFloat(info.CartBill.split('PKR')[0]) + 'PKR'
            info[`TotalBill`] = info.deliveryfee === 'Free' ? CartBill : Total
            cartIn.map((el) => {
                info[`item${num}`] = el.Itemname + ' x ' + el.quantity + ' x ' + el.Price
                num++;
                return null
            })
            setstyle({display:'none'})
            setstyle2({display:'inline'})
        }
        else{
            alert("Cart is Empty")
        }
    }
    const [cartTotal, setcartTotal] = useState(0)
    const [cartTotalitems, setcartTotalitems] = useState(0)
    const currentUser = useSelector((State) => State.todoReducer.Cart)
    useEffect(() => {
        setcartTotalitems(currentUser.length)
    }, [currentUser])
    useEffect(() => {
        let value = 0
        let numvalue = 0
        currentUser.map((el) => {
            value = numvalue + (parseFloat(el.Price.split('PKR')[0]) * el.quantity)
            numvalue = value
            return null;
        })
        setcartTotal(value)
    }, [currentUser])
    return (
        <>
            <div style={style}><header>
                <div className="continue-shopping">
                    <img style={{ cursor: 'pointer' }} onClick={() => history.goBack()} src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3 style={{ fontSize: 18 }}>continue shopping</h3>
                </div>
            </header>
                <div style={{ fontSize: '20%' }}>
                    <section className="main-cart-section">
                        <h1 style={{ fontSize: 30 }}>shopping Cart</h1>
                        <p style={{ fontSize: 20 }} className="total-items">you have <span className="total-items-count">{cartTotalitems}</span> items in shopping cart</p>

                        <div style={{ fontSize: 10 }} className="cart-items">

                            <div className="cart-items-container">
                                <Scrollbars >

                                    {
                                        currentUser.map((curItem, index) => {
                                            return <CartItems key={index} {...curItem} />
                                        })
                                    }


                                </Scrollbars>
                            </div>
                        </div>

                        <div style={{ fontSize: 10 }} className="card-total">
                            <h3 style={{ fontSize: 20 }}>Cart Total : <span style={{ fontSize: 20 }}>{cartTotal}PKR</span></h3>
                            <button onClick={submitCart} style={{ fontSize: 20 }}>Review Address</button>
                        </div>
                    </section>
                </div>
            </div>
            <div style={style2}>
            <div style={{ backgroundColor: '#f5f5f5', margin: '0 auto', width: '80%', marginTop: '6rem', borderRadius: '19px', paddingBottom: '4rem', boxShadow: '2px 2px #adadad',  }}>
                <div style={{padding:8}} onClick={()=>{
                     setstyle({display:'inline'})
                     setstyle2({display:'none'})
                }}><Button variant='outlined'>Go Back</Button></div>
                <div style={{ justifyContent: 'center', display: 'flex', color: '#3c3cff' }}>
                    <h1>Delivery Details</h1>
                </div>
                <div style={{ justifyContent: 'center', display: 'flex', color: '#0000ff', flexDirection: 'column' }}>
                    <center style={{ color: '#4b4bd9' }}>
                        <h2>Flat/Unit NO: </h2>

                        <FormControl sx={{ width: '25ch' }}>
                            <OutlinedInput value={flatUnit} onChange={(ev) => setflatUnit(ev.target.value)} placeholder="Enter Flat/Unit No" />
                        </FormControl>

                        <h2>Enter Address: </h2>
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Enter Your Full Address"
                            style={{ height: '42px', fontSize: 16 }}
                            value={Address}
                            onChange={(ev) => setAddress(ev.target.value)}
                        />
                       <div> <Button  variant="contained" size="large" onClick={placeOrder}>
                            Place Order
                        </Button></div>
                    </center>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cart

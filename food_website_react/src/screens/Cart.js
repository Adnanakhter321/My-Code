import React, { useEffect, useState } from 'react'
import './cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CartItems from '../components/CartItems';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const Cart = () => {
    let history = useHistory()
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
        <><header>
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
                        <button style={{ fontSize: 20 }}>checkout</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cart

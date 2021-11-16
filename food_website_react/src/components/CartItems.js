import React from 'react'
import './input.css'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCartMinize, UpdateCartSelected, cartDeleteSelected } from '../Actions/Actions';
const CartItems = ({ Itemname, Price, RestaurantName, imageurl, quantity, uid }) => {
    let dispatch = useDispatch()
    const currentUser = useSelector((State) => State.todoReducer.Cart)
    return (
        <>
            {
                currentUser[0] ?
                    <>
                        <div id={uid} className="items-info" style={{ fontSize: '20%' }}>

                            <div className="product-img">
                                <img src={imageurl} alt="iamge" />
                            </div>

                            <div className="title">
                                <h2 style={{ fontSize: 15 }}>{Itemname}</h2>
                            </div>

                            <div className="add-minus-quantity">
                                <i id={uid} style={{ fontSize: 15 }} className="fas fa-minus minus" onClick={(ev) => {
                                    dispatch(UpdateCartMinize(ev.target.id))
                                }}></i>
                                <input type="text" className='noselect' onChange={() => console.log('')} value={quantity} />
                                <i onClick={(ev) => {
                                    dispatch(UpdateCartSelected(ev.target.id))
                                }} id={uid} style={{ fontSize: 15 }} className="fas fa-plus add" ></i>
                            </div>

                            <div className="price">
                                <h3 style={{ fontSize: 15 }}>{ parseFloat(Price.split("PKR")[0]) * quantity}PKR</h3>
                            </div>

                            <div className="remove-item">
                                <i id={uid} onClick={(ev)=>{
                                    dispatch(cartDeleteSelected(ev.target.id))
                                }} className="fas fa-trash-alt remove"></i>
                            </div>

                        </div>

                        <hr />
                    </>
                    :!currentUser[0]?
                    console.log('hi'): null
                }
        </>
    )
}

export default CartItems

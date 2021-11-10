import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem, UpdateCartSelected, cartDeleteSelected, UpdateCartMinize } from '../Actions/Actions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useHistory } from 'react-router-dom'
import { CartNull } from '../Actions/Actions';
const Dishes = ({ restaurantName, uid, Price, Itemname, imageurl }) => {
  let history = useHistory();
  const [uidElement, setuidElement] = useState(null);
  const dispatch = useDispatch();
  const [cartAdd, setcartAdd] = useState(1);
  const [styleIT, setstyleIT] = useState({ display: 'none' })
  const [styleIT2, setstyleIT2] = useState({ display: 'inline-block' })
  const currentUser = useSelector((State) => State.todoReducer.Dishes)
  const currentUser2 = useSelector((State) => State.todoReducer.Cart)
  const AddtoCart = (ev) => {
    let currentElementRes;
    let doit = true;
    const uid = ev.target.parentNode.parentNode.parentNode.id;
    setuidElement(uid)
    currentUser.map((el) => {
      if (el.uid === uid) {
        currentElementRes = el.RestaurantName;
      }
      return null
    })
    currentUser2.map((el) => {
      if (el.uid === uid) {
        doit = false;
        alert('This Dish is Already in Cart')
        setcartAdd(el.quantity)
        setstyleIT({ display: 'inline-block' })
        setstyleIT2({ display: 'none' })
      }

      if (el.RestaurantName !== currentElementRes) {
        alert('Since You have Added New Restaurant Dish your Previous Cart Of Previous Restaurant Has Been Cleared')
        dispatch(CartNull());
      }
      return null
    })

    if (doit === true) {
      currentUser.map((el) => {
        if (uid === el.uid) {
          dispatch(AddItem(el))
        }
        return null
      })

      setstyleIT({ display: 'inline-block' })
      setstyleIT2({ display: 'none' })
    }
  }
  const Addit = () => {
    setcartAdd(cartAdd + 1)
    dispatch(UpdateCartSelected(uidElement))
  }
  const Subit = () => {
    if (cartAdd === 1) {
      dispatch(cartDeleteSelected(uidElement))
      setstyleIT({ display: 'none' })
      setstyleIT2({ display: 'inline-block' })
    }
    else {
      setcartAdd(cartAdd - 1)
      dispatch(UpdateCartMinize(uidElement))
    }
  }
  return (
    <div style={{ marginLeft: '2rem', marginTop: '2rem', display: 'inline-block' }}>
      <Card id={uid} sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageurl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {restaurantName} Restaurant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Itemname: {Itemname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {Price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Delivery Fee: 50PKR
          </Button>
        </CardActions>
        <CardActions>
          <div style={styleIT2}>
            <Button size="small" color="primary" variant='contained' onClick={AddtoCart}>
              Add To Cart
            </Button>
          </div>
          <div style={styleIT} >
            <Button size='large' onClick={Subit} startIcon={<RemoveCircleIcon />} />
            <h3 style={{
              display: 'inline-block', margin: 0,
              position: 'relative', top: 2, right: 5
            }}>{cartAdd}</h3>

            <div style={{ display: 'inline-block' }} onClick={Addit}>
              <Button size='large' startIcon={<AddCircleIcon />} />
            </div>
          </div>
          <Button onClick={() => history.push('/cart')} startIcon={<ShoppingCartIcon />}></Button>
        </CardActions>
      </Card>
    </div>

  )
}

export default Dishes;
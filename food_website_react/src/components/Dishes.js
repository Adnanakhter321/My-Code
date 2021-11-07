import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Dishes = ({ restaurantName, uid, Price, Itemname, imageurl }) => {
  const AddtoCart = (ev) => {
    console.log(ev.target.parentNode.parentNode.children[1]);
    ev.target.parentNode.parentNode.children[1].style.display = 'inline-block'
    ev.target.remove();
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
              {restaurantName}
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
          <div>
            <Button size="small" color="primary" variant='contained' onClick={AddtoCart}>
              Add To Cart
            </Button>
          </div>
          <div style={{display:'none'}}> <Button startIcon={<RemoveCircleIcon />} />
            1
            <Button startIcon={<AddCircleIcon />} />
          </div>
        </CardActions>
      </Card>
    </div>

  )
}

export default Dishes;
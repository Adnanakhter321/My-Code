import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CheckOrders = ({RestaurantName}) => {
    console.log(RestaurantName);
    return (
        <h1>
            hi
        </h1>
    //     <div style={{ marginLeft: '2rem', marginTop: '2rem', display: 'inline-block' }}>
    //     <Card id='hi' sx={{ maxWidth: 300 }}>
    //       <CardActionArea>
    //         <CardMedia
    //           component="img"
    //           height="140"
    //           image='{imageurl}'
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="div">
    //            Restaurant
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             Itemname: 
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             Price:
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //           Delivery Fee: 50PKR
    //         </Button>
    //       </CardActions>
    //       <CardActions>
    //         <div>
    //           <Button size="small" color="primary" variant='contained' >
    //             Add To Cart
    //           </Button>
    //         </div>
    //         <div >
    //           <Button size='large' startIcon={<RemoveCircleIcon />} />
    //           <h3 style={{
    //             display: 'inline-block', margin: 0,
    //             position: 'relative', top: 2, right: 5
    //           }}>'hi'</h3>
  
    //           <div style={{ display: 'inline-block' }} >
    //             <Button size='large' startIcon={<AddCircleIcon />} />
    //           </div>
    //         </div>
    //         <Button  startIcon={<ShoppingCartIcon />}></Button>
    //       </CardActions>
    //     </Card>
    //   </div>
  
    )
}

export default CheckOrders
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Dishes = ({restaurantName, uid, Price, Itemname, imageurl}) => {
    return(
        <div  style={{marginLeft:'2rem', marginTop:'2rem' ,display:'inline-block'}}>
            <Card id={uid} sx={{ maxWidth: 300}}>
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
          <Button size="small" color="primary" variant='contained' >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
        </div>
        
    )
}

export default Dishes;
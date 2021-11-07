import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router';

const MuiRestaurants = ({restaurantName , description,urlimage, uid }) => {
    let history = useHistory()
    return(
        <div  style={{marginLeft:'2rem', marginTop:'2rem' ,display:'inline-block'}}>
            <Card id={uid} sx={{ maxWidth: 300}}>
        <CardActionArea onClick={() => history.push('/dishes')}>
          <CardMedia
            component="img"
            height="140"
            image={urlimage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {restaurantName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant='contained' onClick={() => history.push('/dishes')}>
            Check Dishes
          </Button>
        </CardActions>
      </Card>
        </div>
        
    )
}

export default MuiRestaurants
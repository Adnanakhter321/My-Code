import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CheckOrders = (props) => {
    const [items2, setitems2] = useState([])
    let items = []
    const obj = Object.entries(props).sort()
    const [flatUnit, setflatUnit] = useState('')
    let num = 1;
    useEffect(() => {
        obj.map((ev) => {
            if (ev[0].substring(0, 4) === 'Flat') {
                setflatUnit(ev[1])
            }
            if (ev[0] === `item${num}`) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                items = [
                    ...items,
                    ev[1]
                ]
                num++;
            }
            setitems2(items)
            return null
        })
    }, [])
    return (
        <div style={{ marginLeft: '2rem', marginTop: '2rem', display: 'inline-block' }}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.RestaurantName} Restaurant
                        </Typography>
                        <center>  <Typography style={{ marginBottom: 11 }} variant="subtitle2" component="div">
                            OrderID: {props.uid}
                        </Typography> </center>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            BuyerName: {props.BuyerName}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            CartBill: {props.CartBill}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Flat/Unit: {flatUnit + ' ' + props.BuyerAddress}
                        </Typography>
                        {
                            items2.map((ev, index) => {
                                return (
                                    <h3 key={index}> ITEM : {ev}</h3>
                                    )
                            })
                        }
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Deliveryfee: {props.deliveryfee}
                        </Typography>

                        <Typography variant="h5" component="div">
                            TotalBill: {props.TotalBill}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    )
}

export default CheckOrders
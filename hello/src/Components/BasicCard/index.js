import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 1500 }}>
      <CardMedia
        sx={{ height: 800 }}
        image="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT8rg4N9wi27ONLCXiKg7i2BPTD-PXuZ1IZqQwQcfdC4ixBWFuIdvxtwvxH4wXo1Aairg-jnSwvJUEBmqw"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
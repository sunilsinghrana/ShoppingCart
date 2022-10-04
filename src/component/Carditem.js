import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Carditem = (props) => {
  const { element, product, addProduct } = props;
  return (
    <Card sx={{ maxWidth: 345, maxHeight:'initial' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          // image="/static/images/cards/contemplative-reptile.jpg"
          image={element.image}
          alt="green iguana"
        />
        <CardContent sx={{textAlign: 'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {element.title.substring(0,12)}...
          </Typography>
        <Typography component="h2" variant="h5" color="text.primary">
          ${element.price}
        </Typography>
          <Typography variant="body2" color="text.secondary">
            Catergory: {element.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button fullWidth variant="outlined" color="success" onClick={()=> addProduct(product)} >Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default Carditem;

import { Button, CardMedia, Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import {addCart} from '../store/cartSlice';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();
    const addProduct = (product) => {
      // product store in redux store 
      dispatch(addCart(product));
    };

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    if (componentMounted) {
      setProduct(await response.json());
      setLoading(false);
    }
    return () => {
      componentMounted = false;
    };
  };

  const Loading = () => {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Skeleton height={350} />
          {/* </div> */}
          {/* <div> */}
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={150} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    let updateProduct = product.filter((x) => x.category === cat);
    setProduct(updateProduct);
  };

  const ShowProducts = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0.5rem 0",
            flexWrap: 'wrap'
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ m: 1 }}
            onClick={() => setProduct(product)}
          >
            All
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ m: 1 }}
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ m: 1 }}
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothing
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ m: 1 }}
            onClick={() => filterProduct("jewelery")}
          >
            Jwellery
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ m: 1 }}
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </Button>
        </div>
        <Grid container spacing={3} mt={2}>
          {product.map((element) => (
            <Grid item key={element.id} xs={12} sm={4}>
              {/* <Carditem element={element} product={product} addProduct={addProduct} /> */}

              <Card sx={{ maxWidth: 355, maxHeight: "initial" }} >
                <CardActionArea sx={{padding: 4}} >
                  <CardMedia
                    component="img"
                    height="250px"
                    // width='inherit'
                    image={element.image}
                    alt={element.id}
                    sx={{}}
                  />
                  {/* <img src={element.image} alt={element.title} width='inherit' height='400' /> */}
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.title.substring(0, 12)}...
                    </Typography>
                    <Typography
                      component="h2"
                      variant="h5"
                      color="text.primary"
                    >
                      ${element.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Catergory: {element.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    onClick={()=> addProduct(element)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <>
      <Container maxWidth="lg">
        <Typography my={3} variant="h4" sx={{ textAlign: "center" }}>
          {" "}
          <strong>Latest Product</strong>
        </Typography>
        <hr />
        {loading ? <Loading /> : <ShowProducts />}
      </Container>
    </>
  );
};

export default Products;

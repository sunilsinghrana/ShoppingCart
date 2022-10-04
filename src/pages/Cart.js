import { Alert, Box, Button, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../store/cartSlice";
import { getTotals } from "../store/cartSlice";
import { decreaseCart } from "../store/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRem = (productID) => {
    dispatch(removeCart(productID));
  };

const handleDecrease =(products)=>{
  dispatch(decreaseCart(products));
}

const handleIncrease = (products)=>{
  dispatch(addCart(products));
}

  useEffect(()=>{
    dispatch(getTotals());
  },[products, dispatch]);

  return (
    <>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" m={2}>
            {" "}
            <strong> Shopping Cart </strong>
          </Typography>
          <Typography variant="h5" m={2}>
            {products.cartItems.length} item
          </Typography>
        </Box>

        <Divider />

        {products.cartItems.length === 0 ? (
          <Box component='div'>
          <Alert severity="info">The cart is empty Now!! Please add some product to your cart</Alert>
          </Box>
        ) : (       
          

<Box sx={{display: 'flex', justifyContent: 'center'}} >

        {/* // show cart products */}
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {products.cartItems &&
          products.cartItems.map((item) => (
              <Box
                component="div"
                my={2}
                width="100vh"
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 3,
                  borderBottom: "2px solid grey",
                }}
              >
                <Box component="div">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="100px"
                    height="100px"
                  />
                </Box>
                <Box component="div" p={2}>
                  <Typography variant="body1"> {item.category} </Typography>
                  <Typography variant="h6">
                    {" "}
                    {item.title.substring(0, 12)}{" "}
                  </Typography>
                </Box>
                <Box component="div" sx={{ display: "flex" }}>
                  <IconButton onClick={()=>handleDecrease(item)}>
                    {" "}
                    <RemoveIcon />{" "}
                  </IconButton>
                  <p> {item.cartTotalQuantity} </p>
                  <IconButton onClick={()=> handleIncrease(item)}>
                    {" "}
                    <AddIcon />{" "}
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="h5" my={1}>
                    {" "}
                    ${item.cartTotalQuantity * item.price}{" "}
                  </Typography>
                </Box>
                <IconButton onClick={() => handleRem(item)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
          ))}
          <Divider />
        </Box>
        
       {/* show order summary with total amount */}
        <Box component="div" mx={2} sx={{bgcolor: '#E6E6E6', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}} mt={4} p={4} width={300} height={400} >
          <Box>
            <Typography variant="h6">Order Summary</Typography>
          </Box>
          <Divider />
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Items {products.length}</Typography>
            <Typography>${products.cartTotalAmount}</Typography>
          </Box>
          <Box component="div" className="for_shipping">
            <Typography>Shipping</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label" width={325} sx={{bgcolor: 'inherit'}} >Shipping</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              >
              <MenuItem >Free</MenuItem>
              <MenuItem >Doesn't work</MenuItem>
              <MenuItem >work</MenuItem>
            </Select>
                </FormControl>
          </Box>
          <Divider/>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Total Amount</Typography>
            <Typography>${products.cartTotalAmount}</Typography>
          </Box>
          <Button variant="contained" color="secondary" >CHECKOUT</Button>
        </Box>

        </Box>
                   )}
    </>
  );
};

export default Cart;

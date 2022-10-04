import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState={
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const carSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item)=>item.id === action.payload.id
            );
            if(itemIndex >= 0){
                state.cartItems[itemIndex] = {
                  ...state.cartItems[itemIndex],
                  cartTotalQuantity: state.cartItems[itemIndex].cartTotalQuantity + 1,
                };
                toast.info('Increse Quantity by 1', {
                    position: 'top-right'
                })

            }else{
                const tempProduct = {...action.payload,cartTotalQuantity: 1 };
                state.cartItems.push(tempProduct)
                toast.success('Added product successfully', {
                    position: 'top-right'
                })
            }
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.cartItems[itemIndex].cartTotalQuantity > 1) {
              state.cartItems[itemIndex].cartTotalQuantity -= 1;
      
              toast.info("Decreased product quantity", {
                position: "top-right",
              });
            } else if (state.cartItems[itemIndex].cartTotalQuantity === 1) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
              );
      
              state.cartItems = nextCartItems;
      
              toast.error("Product removed from cart", {
                position: "top-right",
              });
            }
                },

        removeCart(state, action){
            state.cartItems.map((cartitem)=>{
                if(cartitem.id === action.payload.id){
                    const nextCartItem = state.cartItems.filter(
                        (item)=> item.id !== action.payload.id
                        )
                        state.cartItems = nextCartItem;

                        toast.error('removed product successfully', {
                            position: 'top-right'
                        })
                }
                return state
            })
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
              (cartTotal, cartItem) => {
                const { price, cartTotalQuantity } = cartItem;
                const itemTotal = price * cartTotalQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartTotalQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
          },
    }
})

export const {addCart, removeCart, getTotals, decreaseCart} = carSlice.actions;
export default carSlice.reducer;
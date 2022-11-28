import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  removeCart,
  getTotals,
  decreaseCart,
} from "../store/cartSlice";

const Cart = () => {
  const Products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRem = (productID) => {
    dispatch(removeCart(productID));
  };

  const handleDecrease = (products) => {
    dispatch(decreaseCart(products));
  };

  const handleIncrease = (products) => {
    dispatch(addCart(products));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [Products, dispatch]);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 sm:w-4/5 md:4/5">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">
              {Products.cartItems.length} Items
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {Products.cartItems &&
            Products.cartItems.map((element) => (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 border border-red-600">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24 lg:h-26 md:h-16 sm:h-10" src={element.image} alt="product" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{element.title}</span>
                    <span className="text-red-500 text-xs">
                      {element.category}
                    </span>
                    <a
                      href="!#"
                      className="font-semibold hover:text-red-500 text-red-500 text-xs"
                      onClick={() => handleRem(element)}
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                    onClick={() => handleDecrease(element)}
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 border text-center text-white w-8"
                    type="text"
                    value={element.cartTotalQuantity}
                  />

                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                    onClick={() => handleIncrease(element)}
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${element.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${element.cartTotalQuantity * element.price}
                </span>
              </div>
            ))}

          <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {Products.cartItems.length}
            </span>
            <span className="font-semibold text-sm">
              {Products.cartTotalAmount}$
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-white w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${Products.cartTotalAmount + 20}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

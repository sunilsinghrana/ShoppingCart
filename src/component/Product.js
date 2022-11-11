import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice";
import Carditem from "./Carditem";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Product = () => {
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
          <Skeleton height={30}/>
          <Skeleton height={30}/>
          <Skeleton height={30}/>
          <Skeleton height={30}/>
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    let updateProduct = product.filter((x) => x.category === cat);
    setProduct(updateProduct);
  };
  return (
    <div className="w-full">
      <div className="flex justify-around p-2 my-4">
        <button className="m-1" onClick={() => setProduct(product)}>
          All
        </button>
        <button className="m-1" onClick={() => filterProduct("men's clothing")}>
          Men's clothing
        </button>
        <button
          className="m-1"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's clothing
        </button>
        <button className="m-1" onClick={() => filterProduct("jewelery")}>
          Jwellery
        </button>
        <button className="m-1" onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {loading ? <Loading/> : product.map((element) => (
          <Carditem element={element} addProduct={addProduct}/>
        ))}
      </div>
    </div>
  );
};

export default Product;

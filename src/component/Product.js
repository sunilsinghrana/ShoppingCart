import React, { useEffect, useState } from "react";
import { addCart } from "../store/cartSlice";
import Carditem from "./Carditem";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = (product) => {
    // product store in redux store
    dispatch(addCart(product));
  };

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
    if (componentMounted) {
      setProduct(data);
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
    <div className="w-full bg-slate-600 py-4">
      <div className="flex justify-around p-2 flex-wrap">
        <button className="m-2 btn btn-active btn-ghost text-white" onClick={() => setProduct(product)}>
          All
        </button>
        <button disabled className="m-2 btn btn-active btn-ghost text-white" onClick={() => filterProduct("men's clothing")}>
          Men's clothing
        </button>
        <button
        disabled
          className="m-2 btn btn-active btn-ghost text-white"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's clothing
        </button>
        <button disabled className="m-2 btn btn-active btn-ghost text-white" onClick={() => filterProduct("jewelery")}>
          Jwellery
        </button>
        <button disabled className="m-2 btn btn-active btn-ghost text-white" onClick={() => filterProduct("electronics")}>
          Electronics
        </button>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {loading ? <Loading/> : product.map((element, idx) => (
          <Carditem element={element} idx={idx} addProduct={addProduct}/>
        ))}
      </div>
    </div>
  );
};

export default Product;

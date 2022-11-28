import React from "react";
const Carditem = (props) => {
  const { element, addProduct, idx } = props;
  return (
    <>
<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-2" key={idx}>
      <img src={element.image} alt="Product" className="h-96 w-96 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{element.category}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{element.title}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">${element.price}</p>
          <div className="ml-auto">
          <button class="btn btn-sm btn-outline btn-success" onClick={()=> addProduct(element)}>Add To Cart</button>
            </div>
        </div>
      </div>
  </div>
    </>
  );
};

export default Carditem;

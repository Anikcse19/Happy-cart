import { addToCart } from "@/Redux/features/cartSlice";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

const ProductBox = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div id="product-box">
      <div className="img-container">
        <img className="img" src={product.img} alt="" />
      </div>
      <div className="product-body">
        <h1 className="title">{product.title}</h1>
        <div className="product-footer">
          <span className="footer-item">&#2547; {product.price}</span>
          <span
            onClick={() => {
              dispatch(addToCart(product));
              toast.success("Added to cart", {
                id: "anik",
                duration: 900,
              });
            }}
            title="Click here to add cart"
            className="footer-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
          <Toaster />
        </div>
        <Toaster position="bottom-right" />
      </div>
      <div className="product-toper">
        <span className="footer-item">&#2547; {product.price}</span>
        <span
          onClick={() => {
            dispatch(addToCart(product));
            toast.success("Added to cart", {
              id: "anik",
              duration: 500,
            });
          }}
          title="Click here to add cart"
          className="footer-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </span>
      </div>
      <Toaster />
      <div className="product-details">
        <b>Specification:</b>
        <p>
          <b>COLOR: </b>
          {product.properties.color}
        </p>
        <p>
          <b>ROM: </b>
          {product.properties.rom}
        </p>
        <p>
          <b>RAM: </b>
          {product.properties.ram}
        </p>
      </div>
    </div>
  );
};

export default ProductBox;

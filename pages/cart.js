import {
  addToCart,
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
  setDefaultCart,
} from "@/Redux/features/cartSlice";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const cartPage = () => {
  // const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.carts
  );

  // console.log("cart", cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDefaultCart([]));
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setCartProducts(cartItems);

    cartItems?.map((item) => {
      dispatch(addToCart(item));
    });
  }, []);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const uniqueItems = Array.from(new Set(cart.map((item) => item.id)));

  return (
    <>
      <Navbar />
      <div id="cart">
        <div id="cart-left">
          <h1>Your Cart</h1>
          {cart.length > 0 ? (
            <div id="cart-items">
              {uniqueItems.map((id) => {
                const item = cart.find((element) => element.id === id);
                console.log(item);
                return (
                  <div className="cart-item">
                    <div className="cart-item-first-col">
                      <div className="cart-img-container">
                        <img className="cart-img" src={item?.img} />
                      </div>
                      <span id="item-title">{item?.title}</span>
                    </div>
                    <div className="cart-item-second-col">
                      <span>&#2547; {item?.price}</span>
                    </div>
                    <div className="cart-item-third-col">
                      <span
                        onClick={() => {
                          dispatch(decreaseItemQuantity(item?.id));
                          const filteredItem = cart.filter(
                            (element) => element.id != item.id
                          );
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(filteredItem)
                          );
                        }}
                        className="dec-icon">
                        -
                      </span>
                      <span>{item?.quantity}</span>
                      <span
                        onClick={() => dispatch(increaseItemQuantity(item?.id))}
                        className="inc-icon">
                        +
                      </span>
                    </div>
                    <div className="cart-item-fourth-col">
                      <span
                        onClick={() => {
                          dispatch(removeItem(item?.id));
                          const filteredItem = cart.filter(
                            (element) => element.id != item.id
                          );
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(filteredItem)
                          );
                          toast.success("Successfully Removed Item", {
                            id: "anik",
                            duration: 500,
                          });
                        }}>
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </span>
                      <Toaster />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-msg">No Product Added</div>
          )}
        </div>
        {cart?.length > 0 && (
          <div id="cart-right">
            <h1>Order Summary</h1>
            <div className="total-quantity">
              <span>Total Quantity: </span>
              <span>{totalQuantity}</span>
            </div>
            <div className="total-price">
              <span>Total Amount: </span>
              <span>&#2547; {totalPrice}</span>
            </div>
            <div className="continue-button">Continue to Payment</div>
          </div>
        )}
      </div>
    </>
  );
};

export default cartPage;

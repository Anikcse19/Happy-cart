import { addToCart, setDefaultCart } from "@/Redux/features/cartSlice";
import Navbar from "@/components/Navbar";
import ProductBox from "@/components/ProductBox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import products from "@/dummyProducts";

export default function Home() {
  const { products, cart } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const [cartState, setCartState] = useState(null);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    dispatch(setDefaultCart([]));
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    // setCartProducts(cartItems);

    cartItems?.map((item) => {
      dispatch(addToCart(item));
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // ls.setItem("cart", "[]");
      // if (cart.lentgh > 0) {
      ls.setItem("cart", JSON.stringify(cart));
      // }
    }, 200);
  }, [cart]);

  return (
    <>
      <Navbar />

      <div id="prodcuts-wrapper">
        {products.map((product) => (
          <ProductBox
            key={product.id}
            cartState={cartState}
            setCartState={setCartState}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

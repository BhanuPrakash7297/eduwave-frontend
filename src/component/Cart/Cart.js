import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/UserContext";
import "../../styles/CartStyle.css";
import { useCart } from "../../context/cartContext.js";

const Cart = () => {
  const [cart, setCart] = useCart();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log("cart", cart);

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        return (total = total + item.price);
      });

      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
      toast("item removed from cart..");
    } catch (error) {
      console.log(error);
    }
  };

  //handle payments

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Prepare cart data
      const cartItems = cart.map((item) => ({
        _id: item._id,
        quantity: 1, // Assuming each item is purchased once; adjust if necessary
      }));

      // Send request to your backend to create a checkout session
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/purchase/checkout/multiple-courses`,
        {
          userId: user?.email, // Adjust according to your user data
          courseIds: cartItems,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);

      if (response.data.url) {
        // Redirect user to Stripe Checkout
        window.location.href = response.data.url;
      } else {
        toast.error("Failed to create checkout session.");
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong with the payment.");
      setLoading(false);
    }
  };

  return (
    <div className=" cart-page">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center bg-light p-2 mb-1">
            {user ? "Hello Guest" : `Hello  ${user?.email} `}
            <p className="text-center">
              {cart?.length
                ? `You Have ${cart.length} items in your cart ${
                    user?.email ? "" : "please login to checkout !"
                  }`
                : " Your Cart Is Empty"}
            </p>
          </h1>
        </div>
      </div>

      <div className="container ">
        <div className="row ">
          <div className="col-md-7  p-0 m-0">
            {cart?.map((p) => {
              console.log(p);
              return (
                <div className="row card flex-row" key={p._id}>
                  <div className="col-md-4">
                    <img
                      src={`${process.env.REACT_APP_API}${p?.imageUrl}`}
                      alt=""
                      className="w-100 radius-small"
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p?.title}</p>
                    <p>{p?.description?.substring(0, 30)}</p>
                    <p>Price : {p?.price}</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p?._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-5 cart-summary ">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total : {totalPrice()} </h4>
            <button
              className="btn btn-primary"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing ...." : "Make Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails/BillDetails";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state.product);
  const total = cart.reduce(
    (total, item) => total + +item.price * item.quantity,
    0
  );

  let content;

  if (cart.length === 0) {
    content = <h2 className="text-center">Cart is empty</h2>;
  }

  if (cart.length > 0) {
    content = cart.map((item) => <CartItem item={item} />);
  }
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          {/* <!-- Cart Item --> */}
          <div class="space-y-6">{content}</div>
          {/* <!-- Bill Details --> */}
          <div>
            <BillDetails total={total} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;

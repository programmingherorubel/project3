import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  deleteItemCart,
  incrementQuantity,
} from "../../../redux/action/product/actionCreator";
const CartItem = ({
  item: { name, category, image, price, quantity, id },
  setNewTotal,
}) => {
  const dispatch = useDispatch();

  return (
    <div class="cartCard">
      <div class="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img class="lws-cartImage" src={image} alt="product" />
        {/* <!-- cart item info --> */}
        <div class="space-y-2">
          <h4 class="lws-cartName">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
          </h4>
          <p class="lws-cartCategory">Men's clothing</p>
          <p>
            BDT <span class="lws-cartPrice">{quantity * price}</span>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div class="flex items-center space-x-4">
          <button
            onClick={() => dispatch(incrementQuantity(id))}
            class="lws-incrementQuantity"
          >
            <i class="text-lg fa-solid fa-plus"></i>
          </button>
          <span class="lws-cartQuantity">{quantity}</span>
          <button
            onClick={() => dispatch(decrementQuantity(id))}
            class="lws-decrementQuantity"
          >
            <i class="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p class="text-lg font-bold">
          BDT <span class="lws-calculatedPrice">{quantity * price}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => dispatch(deleteItemCart(id))}
          class="lws-removeFromCart"
        >
          <i class="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

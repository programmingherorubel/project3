import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/action/product/actionCreator";
import { v4 as uuidv4 } from "uuid";

const ProductItem = ({ product }) => {
  const { name, category, image, price, quantity } = product;
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    const data = {
      id: uuidv4(),
      name: item.name,
      category: item.category,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
    };
    dispatch(addToCart(data));
  };
  return (
    <div class="lws-productCard">
      <img
        class="lws-productImage"
        src={image}
        // {image}
        alt="product"
      />
      <div class="p-4 space-y-2">
        <h4 class="lws-productName">{name}</h4>
        <p class="lws-productCategory">{category}</p>
        <div class="flex items-center justify-between pb-2">
          <p class="productPrice">
            BDT <span class="lws-price">{price}</span>
          </p>
          <p class="productQuantity">
            QTY <span class="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={quantity === 0}
          onClick={() => addToCartHandler(product)}
          class="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

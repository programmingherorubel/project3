import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/action/product/actionCreator";

const AddProduct = () => {
  const { products } = useSelector((state) => state.product);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handler = (e) => {
    e.preventDefault();
    const data = {
      id: products.length,
      name,
      category,
      image,
      price,
      quantity: Number(quantity),
    };
    dispatch(createProduct(data));
  };

  return (
    <div class="formContainer">
      <h4 class="formTitle">Add New Product</h4>
      <form
        onSubmit={handler}
        class="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div class="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            class="addProductInput"
            id="lws-inputName"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div class="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            class="addProductInput"
            id="lws-inputCategory"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div class="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            class="addProductInput"
            id="lws-inputImage"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div class="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div class="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              class="addProductInput"
              type="number"
              id="lws-inputPrice"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div class="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              class="addProductInput"
              type="number"
              id="lws-inputQuantity"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" class="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

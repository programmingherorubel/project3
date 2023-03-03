import {
  ADD_TO_CART,
  CREATE_PRODUCT,
  DECREMENT,
  DELETE_CART,
  INCREMENT,
} from "../action/product/actionType";

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  const existItem = state.cart.find((item) => item.id === action.payload.id);
  console.log(state.cart.map((item) => item.quantity === 0));
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case ADD_TO_CART:
      if (existItem) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          cart: [
            ...state.cart,
            { ...existItem, quantity: existItem.quantity + 1 },
          ],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          products: state.products.map((item) =>
            item.id !== action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }

    case INCREMENT:
      if (state.cart.map((item) => item.quantity === 0)) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => item.id === action.payload && item),
        };
      }

    case DECREMENT:
      if (state.cart.map((item) => item.quantity === 0)) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => item.id === action.payload && item),
        };
      }
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productReducer;

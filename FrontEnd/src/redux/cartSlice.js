import { createSlice } from "@reduxjs/toolkit";

const exampleProduct = {
  id: 1000,
  img: "url",
  productName: "White T-shirt men",
  tags: ["MEN'S CLOTHING", "T-shirt"],
  oldprice: 200,
  newprice: 109.95,
  currency: "vnd",
  quantity: 5,
  size: 37.5,
  color: "black",
  description:
    "A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves.",
};

const initialState = {
  products: [exampleProduct],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart: (state, action) => {
      if (!isInCart(state.products, action.payload)) {
        state.cartNumber++;
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

const isInCart = (cart, item) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) return true;
  }
  return false;
};

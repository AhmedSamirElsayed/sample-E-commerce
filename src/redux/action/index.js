export const ADD_TO_CART = "ADDTOCART";
export const DELETE_FROM_CART = "DELETEFROMCART";

// Add item to cart
export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// Delete item from cart
export const delItem = (product) => {
  return {
    type: DELETE_FROM_CART,
    payload: product,
  };
};

import { ADD_TO_CART, DELETE_FROM_CART } from "../action/index";
const inticart = [];

const handleCart = (state = inticart, action) => {
  const product = action.payload;

  if (action.type == ADD_TO_CART) {
    const isExist = state?.find((p) => p.id === product?.id);
    if (isExist) {
      // If the product exists, increase its quantity.
      return state.map((x) =>
        x.id === product?.id ? { ...x, qty: x.qty + 1 } : x
      );
    } else {
      // If the product does not exist, add it to the cart with qty=1.
      return [...state, { ...product, qty: 1 }];
    }
  } else if (action.type == DELETE_FROM_CART) {
    const isExist = state?.find((p) => p.id === product?.id);

    if (isExist) {
      if (isExist.qty === 1) {
        // If the product exists with qty==1, remove it
        return state.filter((x) => x.id !== isExist.id);
      } else {
        // If the product exists with qty > 1, decrease qty
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    } else {
      return state; // Always return the current state if product doesn't exist
    }
  }

  return state; // Default return for any other action type
};

export default handleCart;

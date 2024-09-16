import { useSelector, useDispatch } from "react-redux";
import { delItem, addCart } from "../redux/action/index.js";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  // console.log(state?.length);

  const dispatch = useDispatch();

  const handleClose = (item) => {
    item.qty = 1;
    dispatch(delItem(item));
  };
  const handlePlusQty = (item) => {
    dispatch(addCart(item));
  };
  const handleMinusQty = (item) => {
    if (item.qty > 1) {
      dispatch(delItem(item));
    }
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
              <div className="d-flex justify-content-around lead fw-bold bg-success text-center">
                <span
                  className="plus lead fw-bold  "
                  onClick={() => handlePlusQty(cartItem)}
                >
                  +
                </span>
                {cartItem.qty}
                <span
                  className="minus lead fw-bold "
                  onClick={() => handleMinusQty(cartItem)}
                >
                  -
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <p className="text-capitalize text-center">your cart is empty</p>
            <h3 className="text-capitalize text-center text-warning  pt-5">
              you do not have any product in your cart
            </h3>
            <p className="text-capitalize text-center pt-5">
              go to add product{" "}
            </p>
          </div>
        </div>
      </div>
    );
  };
  const button = () => {
    return (
      <div className="container ">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };
  const totalPrice = () => {
    const total = state.reduce((acc, item) => acc + item.price * item.qty, 0);
    return (
      <h3 className="text-center  bg-light mb-5">
        <span className="text-info-emphasis">Total Price:</span> $
        <span className="text-warning">{total.toFixed(2)}</span>
      </h3>
    );
  };

  return (
    <>
      {state?.length === 0 && emptyCart()}
      {state?.length !== 0 && state.map(cartItems)}
      {state?.length !== 0 && totalPrice()}
      {state?.length !== 0 && button()}
    </>
  );
};

export default Cart;

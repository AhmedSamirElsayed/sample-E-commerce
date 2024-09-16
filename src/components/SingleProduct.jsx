import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/index.js";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    // console.log("done", product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch this product");
        }

        const product = await res.json();
        // console.log(product);

        setSingleProduct(product);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const LoadingCopm = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6 " style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const showProduct = () => {
    return (
      <>
        <div className="col-md-6  d-flex align-items-center">
          <img
            src={singleProduct.image}
            className="card-img-top"
            alt={singleProduct.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 ">
          <h4 className="text-uppercase text-black-50">
            {singleProduct.category}
          </h4>
          <h1 className="display-5">{singleProduct.title}</h1>
          <p className=" lead  fw-bold text-bg-success  ps-3">
            Rating {singleProduct?.rating?.rate + " "}
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${singleProduct.price}</h3>
          <p className="lead">{singleProduct.description}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-dark"
              onClick={() => addProduct(singleProduct)}
            >
              Add To Cart
            </button>
            <NavLink to="/cart" className="btn btn-outline-dark">
              Go To Cart
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container  py-5">
        <div className="row  py-5 ">
          {loading ? <LoadingCopm /> : <> {showProduct()}</>}
        </div>
      </div>

      {error && (
        <div className=" display-6 fw-bold text-center text-danger">
          Error: {error}
        </div>
      )}
    </>
  );
};

export default SingleProduct;

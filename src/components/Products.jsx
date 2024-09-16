/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import LoadingCopm from "./LoadingCopm";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const products_data = await res.json();
        setData(products_data);
        setFilter(products_data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const filterProduct = (category) => {
    const filtered_Product = data.filter(
      (product) => product.category === category
    );
    setFilter(filtered_Product);
    setActiveCategory(category);
  };

  const showProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className={`btn btn-outline-dark me-2 ${
              activeCategory === "All" ? "activeCategory-btn" : ""
            }`}
            onClick={() => {
              setFilter(data);
              setActiveCategory("All");
            }}
          >
            All
          </button>
          <button
            className={`btn btn-outline-dark me-2 ${
              activeCategory === "men's clothing" ? "activeCategory-btn" : ""
            }`}
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothes
          </button>
          <button
            className={`btn btn-outline-dark me-2 ${
              activeCategory === "women's clothing" ? "activeCategory-btn" : ""
            }`}
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Wonen's Clothes
          </button>
          <button
            className={`btn btn-outline-dark me-2 ${
              activeCategory === "jewelery" ? "activeCategory-btn" : ""
            }`}
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelerys
          </button>
          <button
            className={`btn btn-outline-dark me-2 ${
              activeCategory === "electronics" ? "activeCategory-btn" : ""
            }`}
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="pro-card card h-100 text-center p-4">
                <NavLink to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                </NavLink>
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now!
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className=" display-6 fw-bold text-center">
                Latest Products
              </h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? (
              <LoadingCopm />
            ) : (
              <>{data.length > 0 ? showProducts() : <div>No Products</div>}</>
            )}
          </div>
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

export default Products;

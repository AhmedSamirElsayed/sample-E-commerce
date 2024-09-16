import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="card-img"
          alt="background"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 text-uppercase fw-bold mb-0">
              new season arrival
            </h5>
            <p className="card-text text-uppercase fs-2 shadow-sm">
              check out all trends
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;

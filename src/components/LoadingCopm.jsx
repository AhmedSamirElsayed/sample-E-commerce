import Skeleton from "react-loading-skeleton";

const LoadingCopm = () => {
  return (
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} width={150} />
        <h1>Loading....</h1>
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>

      <div className="col-md-3">
        <Skeleton height={350} width={50} />
      </div>
    </>
  );
};

export default LoadingCopm;

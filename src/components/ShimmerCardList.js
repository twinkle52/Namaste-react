import Shimmer from "./Shimmer";

const ShimmerCardList = () => {
  return (
    <div className="shimmer-card-list">
      {Array.from({ length: 8 }).map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
};

export default ShimmerCardList;

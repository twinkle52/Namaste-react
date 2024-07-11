// Named import
import { CDN_URL } from "../utils/constants";

const RestuarantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  console.log("Getting updated");
  const style = {
    background: "#f0f0f0",
  };
  return (
    <div className="res-cards" style={style}>
      <img
        className="food-logo"
        alt="Meghna Biryani"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="food-details">
        <div className="food-title">{name}</div>
        <div className="food-subTitle"> {cuisines.join(", ")}</div>
        <div className="food-Rating">Rating {avgRating}</div>
        <div className="delivery-Time"> {sla.slaString}</div>
        <div className="cost4Two">{costForTwo}</div>
      </div>
    </div>
  );
};

export default RestuarantCards;

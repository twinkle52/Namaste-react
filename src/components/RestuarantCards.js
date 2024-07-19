// Named import
import { CDN_URL } from "../utils/constants";

const RestuarantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="res-cards p-4 m-4 w-[250px] h-[27rem] bg-transparent rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        className="food-logo w-full h-48 object-cover rounded-t-lg"
        alt="Meghna Biryani"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="food-title font-bold py-4">{name}</h3>
      <h4 className="food-subTitle"> {cuisines.join(", ")}</h4>
      <h4 className="food-Rating">Rating {avgRating}</h4>
      <h4 className="delivery-Time"> {sla.slaString}</h4>
      <h4 className="cost4Two">{costForTwo}</h4>
    </div>
  );
};

export default RestuarantCards;

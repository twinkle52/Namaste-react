// Named import
import { CDN_URL } from "../utils/constants";

const RestuarantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="res-cards relative p-4 m-4 w-[250px] h-[27rem] bg-transparent rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
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

// Higher Order component => takes the input as compinent and return the component
// Higher Order component is used to enhance the output component may be with props or labels or ui. but they donot modify the input component
// here input will be resturantCrad and outut will be restaurantCradOffers

// withOffersLabel is a higher order component(a arrow function), which takes the restarantsCrads as a input component and return a component(functional compnent) which is at
// the end of the day is function and the function/ component returns the jsx.
export const WithOpenLabels = (RestuarantCards) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-lg z-10">
          {resData.info.aggregatedDiscountInfoV3.header +
            " " +
            resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestuarantCards {...props} />
      </div>
    );
  };
};

export default RestuarantCards;

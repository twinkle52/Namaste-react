import { useParams } from "react-router-dom";
import ShimmerCardList from "./ShimmerCardList";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantAccordian from "./ResturantAccordian";
import { CDN_URL } from "../utils/constants";

// Single responsibilty should be given to all the components, so for the restrantsMenu we will give a single responsibilty to only show the restInfo
// it should not worry about how to fetch that info, so we will create a custom hook.
const ResturantsMenu = () => {
  const { resId } = useParams();
  const restInfo = useResturantMenu(resId);
  console.log(resId);

  // Return shimmer card list while restInfo is null
  if (restInfo === null) {
    return <ShimmerCardList />;
  }

  // Destructure properties only when restInfo is not null
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = restInfo.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card["card"]["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);
  return (
    <div className="menu text-center px-20">
      <div className="border border-solid max-w-lg mx-96 h-40 border-gray-200 rounded-xl shadow-lg my-4 content-center">
        <h1 className="resName font-bold my-6 text-2xl ">{name}</h1>
        <h2 className="resCuisines font-serif text-orange-500">
          {cuisines?.join(", ")}
        </h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{"⭐️ " + avgRatingString}</h3>
      </div>
      {
        // for each category(recommended, ricepot... we have to build a accordian)
        categories.map((category) => (
          <ResturantAccordian
            key={category?.card?.card.title}
            data={category.card.card}
          />
        ))
      }
    </div>
  );
};

export default ResturantsMenu;

import { useParams } from "react-router-dom";
import ShimmerCardList from "./ShimmerCardList";
import useResturantMenu from "../utils/useResturantMenu";

// Single responsibilty should be given to all the components, so for the restrantsMenu we will give a single responsibilty to only show the restInfo
// it should not worry about how to fetch that info, so we will create a custom hook.
const ResturantsMenu = () => {
  const { resId } = useParams();
  const restInfo = useResturantMenu(resId);

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

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRatingString}</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."}
              {item.card.info.price || item.card.info.defaultPrice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantsMenu;

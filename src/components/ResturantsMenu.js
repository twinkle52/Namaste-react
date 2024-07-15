import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerCardList from "./ShimmerCardList";
import { MENU_URL } from "../utils/constants";

const ResturantsMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  // see we get a object with resId as the is via a below code
  //   const params = useParams();
  //   console.log(params);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const jsonData = await data.json();
      setRestInfo(jsonData.data);
    } catch (error) {
      console.error("Error fetching Menu:", error);
    }
  };

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

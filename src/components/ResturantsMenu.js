import { useParams } from "react-router-dom";
import { useState } from "react";
import ShimmerCardList from "./ShimmerCardList";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantAccordian from "./ResturantAccordian";

const ResturantsMenu = () => {
  const { resId } = useParams();
  const restInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) {
    return <ShimmerCardList />;
  }

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
        categories.map((category, index) => (
          <ResturantAccordian
            log={console.log(index, category?.card?.card.title)} // can se log in the dev tools by this
            logIndex={console.log(showIndex)}
            key={category?.card?.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false} // index 0 hai to usko kholdo baki ko band showItems={index === showIndex && true}
            // as soon as accordian is clicked setShowIndex function will be caaledback
            setShowIndexItems={
              () => setShowIndex(index === showIndex ? null : index) // check if the same indexAccordian is clicked then se the showIndex as null
              //so when the component will be rendered the showIndex will be null and so it will be false for showItems
            }
          />
        ))
      }
    </div>
  );
};

export default ResturantsMenu;
// Each accordianHeader div has its own onClick handler that captures the correct index via closure.
// When a header is clicked, it calls setShowIndex(index) with the appropriate index.

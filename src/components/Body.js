import RestuarantCards from "./RestuarantCards";
import ShimmerCardList from "./ShimmerCardList";
import { TOP_RATED_REST_BUTTON } from "../utils/constants";
import { useEffect, useState } from "react";
const Body = () => {
  //local State variable
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  // Normal State Variable in JS
  //  const listOfRestuarants;

  useEffect(() => {
    console.log("calling useeffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9031568&lng=77.6482253&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const result = await response.json();
      console.log(result);
      setListOfRestuarants(
        result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // This is conditional rendering
  if (listOfRestuarants.length === 0) {
    return <ShimmerCardList />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-Rated-Res-Btn"
          onClick={() => {
            filteredTopRatedList = listOfRestuarants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredTopRatedList);
            setListOfRestuarants(filteredTopRatedList);
          }}
        >
          {TOP_RATED_REST_BUTTON}
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarants.map((restuarant) => (
          <RestuarantCards
            className="card"
            key={restuarant.info.id}
            resData={restuarant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

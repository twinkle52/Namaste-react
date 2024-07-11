import RestuarantCards from "./RestuarantCards";
import ShimmerCardList from "./ShimmerCardList";
import { TOP_RATED_REST_BUTTON } from "../utils/constants";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  console.log("listOfRestuarants", listOfRestuarants);
  const [filteredRest, setFilteredRest] = useState([]);
  console.log("filteredRest", filteredRest);
  const [searchText, setSearchText] = useState("");

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
      setFilteredRest(
        result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // when we are typing anything in the search text box the body component is rerendering all the time.
  // when everever there is change in the state/local variable , there will be render of the component, reconciliation cycle.
  // e.target.value takes the value we enter in the text box, setSearchText takes the value and make the chanegs in the searchText
  // and then the body is getting rerendered. useState if  you see is a const then how the value of the searchText is getting changed?
  // its getting changed because the function setSearchText when takes the changed value it rerender the component and now the value
  // of searchText is all new, all body is rendered but only that part of changes will be changed in UI, diff method is getting used
  // recat is finding the difference between the older virtual DOM and new virtual DOM.
  // Virtual DOM is a object representation of the jsx the actual DOM.
  return listOfRestuarants.length === 0 ? (
    <ShimmerCardList />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
          ></input>
          <button
            className="searchButton"
            onClick={() => {
              const filteredRest = listOfRestuarants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log("searched", filteredRest);
              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-Rated-Res-Btn"
          onClick={() => {
            console.log("");
            let filteredTopRatedList = listOfRestuarants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRest(filteredTopRatedList);
          }}
        >
          {TOP_RATED_REST_BUTTON}
        </button>
      </div>
      <div className="res-container">
        {filteredRest.map((restuarant) => (
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

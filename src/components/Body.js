import RestuarantCards, { WithOpenLabels } from "./RestuarantCards";
import ShimmerCardList from "./ShimmerCardList";
import {
  TOP_RATED_REST_BUTTON,
  SWIGGY_RESTURANTS_URL,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  // withOffersLabel higher order component taking input RestuarantCards componet and returning the component with offers
  const WithOpenLabelsResturants = WithOpenLabels(RestuarantCards);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_RESTURANTS_URL);
      const result = await response.json();

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return "NO internet connection";
  }

  return listOfRestuarants.length === 0 ? (
    <ShimmerCardList />
  ) : (
    <div className="body flex flex-wrap">
      <div className="filter flex">
        <div className="Search m-4 p-4 space-x-2 justify-center items-center flex ">
          <input
            className="search-box border border-solid border-black placeholder-gray-500 placeholder-opacity-40 w-72 p-2 bg-white text-black focus:outline-none focus:border-black"
            type="text"
            placeholder="search for restaurants and foods"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="searchButton px-3 py-1 bg-green-100 shadow-lg hover:bg-green-200"
            onClick={() => {
              const filteredRest = listOfRestuarants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated-btn-div m-4 p-4 items-center flex">
          <button
            className="top-Rated-Res-Btn px-3 py-1 bg-gray-100 hover:bg-gray-200"
            onClick={() => {
              let filteredTopRatedList = listOfRestuarants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRest(filteredTopRatedList);
            }}
          >
            {TOP_RATED_REST_BUTTON}
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center space-x-3 px-30">
        {filteredRest.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/resturants/" + restuarant.info.id}
          >
            {restuarant.info.aggregatedDiscountInfoV3 ? (
              <WithOpenLabelsResturants resData={restuarant} />
            ) : (
              <RestuarantCards
                className="card"
                resData={restuarant}
                label={restuarant.info.aggregatedDiscountInfoV3}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

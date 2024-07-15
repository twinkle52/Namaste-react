import RestuarantCards from "./RestuarantCards";
import ShimmerCardList from "./ShimmerCardList";
import { TOP_RATED_REST_BUTTON } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
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
              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-Rated-Res-Btn"
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
      <div className="res-container">
        {filteredRest.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/resturants/" + restuarant.info.id}
          >
            <RestuarantCards className="card" resData={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

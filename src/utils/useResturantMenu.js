import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

// hook is nothing but a util/ helping function which will take resId as parameter and return restInfo to ResturantsMenu.
const useResturantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
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
  return restInfo;
};

export default useResturantMenu;

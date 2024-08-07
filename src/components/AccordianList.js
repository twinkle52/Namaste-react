import { CDN_URL, DEFAULT_FOOD_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordianList = ({ itemCards, addButton }) => {
  const dispatch = useDispatch(); // this will dispatch action for the added items

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // here as the add button is clicked the action addItem is dispatched with the reducer function having para as action.payload.
    // here pizza is action payload
  };

  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="singleItemdiv p-3 m-3 border-b-2 border-gray-200 w-7/12 mx-auto text-left flex justify-between"
        >
          <div className="itemNamePriceDes w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
            </div>
            <div>
              <span className="font-bold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="itemDescription text-gray-500 text-xs m-1">
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="itemImageAdd relative">
            <img
              className="w-40 h-40"
              src={
                CDN_URL && item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : DEFAULT_FOOD_URL
              }
            />
            {addButton ? (
              <div className="addButton absolute bottom-[-16px] left-0 right-0 flex justify-center">
                <button
                  className="px-4 py-2 bg-white text-green-600 font-serif font-bold shadow-lg w-20 rounded-md border border-green-600"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default AccordianList;

import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const SearchBar = () => {
  const { dispatch } = useContext(AppContext);
  const [filterItems, setFilterItems] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    setFilterItems(searchValue);

    if (!searchValue) {
      dispatch({
        type: "RESET_FILTER",
      });
    } else {
      dispatch({
        type: "FILTER_SEARCH",
        payload: searchValue,
      });
    }
  };

  return (
    <div className="!mt-4">
      <form>
        <input
          className="w-full p-2 border rounded text-black"
          type="text"
          placeholder="search expenses"
          value={filterItems}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};
export default SearchBar;

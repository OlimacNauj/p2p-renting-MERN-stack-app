import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  function handleChange(event) {
    setSearchItem(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    onSearch(searchItem);
  }

  return (
    <>
      <div>
        <form>
          <input
            value={searchItem}
            onChange={handleChange}
            name="SearchBar"
            type="text"
          ></input>
          <button type="submit" onSubmit={handleOnSubmit}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;

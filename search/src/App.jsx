import { useState } from "react";
import countryData from "../src/resources/countryData.json";
import "../src/App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setSuggestion(true);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setSuggestion(false);
      console.log("Escape");
    }
  };

  const handleSearch = () => {
    console.log("Search query:", search);
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  const datalist = countryData.filter((el) =>
    el.name.toUpperCase().startsWith(search.toUpperCase())
  );

  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        name=""
        id="searchBox"
        list="suggestion"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleButtonClick}>Search</button>
      <datalist id="suggestion" className="dataList">
        {suggestion &&
          datalist.map((el, i) => <option key={i}>{el.name}</option>)}
      </datalist>
    </>
  );
};

export default App;

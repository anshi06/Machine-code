import { useEffect, useState } from "react";
import HomeButton from "./HomeButton";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

    useEffect(() => {
      //Debouncing
      const s = setTimeout(() => {
        console.log("Fetching Data", searchText)
        // fetchData();
      }, 300);
      return () => {
        console.log("Clearing timeout", searchText)
        clearTimeout(s);
      }
    }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await data.json();
      console.log(json[1]);
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    }
  };

  return (
    <>
      <div className="flex bg-blue-950 justify-between items-baseline flex-col">
        <div className="mx-auto">
          <HomeButton />
        </div>
        <h1 className="text-yellow-200 mx-auto font-bold text-3xl mb-6">
          AutoComplete And SearchBar Like Google
        </h1>
      </div>
      <div className="flex my-10">
        <div className="mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s"
            alt="Google logo"
          />
          <input
            type="text"
            className=" border border-black p-2 w-96 shadow-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setIsResultVisible(true)}
            onBlur={() => setIsResultVisible(false)}
          />
          {searchResults.length > 1 && isResultVisible && (
            <ul className="p-2 border border-black w-96 shadow-lg">
              {searchResults.map((r) => (
                <li className="hover:bg-gray-200 cursor-pointer" key={r}>
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchUi;

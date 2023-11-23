import { useState, useContext } from "react";
import { DriverContext } from "./contexts/driver-context";

const SearchDriverForm: React.FC = () => {
  const [searchType, setSearchType] = useState<"id" | "name">("id");
  const [searchValue, setSearchValue] = useState<string | number>("");

  const context = useContext(DriverContext);

  if (!context) {
    return null;
  }

  const { searchDriver, resetSearch } = context;

  const handleReset = () => {
    setSearchType("id");
    setSearchValue("");
    resetSearch();
  };

  const handleSearch = async () => {
    searchDriver(searchValue, searchType);
  };

  return (
    <section>
      <h3>Search driver:</h3>
      <div className="bg-slate-900 gap-2 flex flex-wrap items-center">
        <label className="mr-2">
          Search by:
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as "id" | "name")}
            className="bg-slate-500 rounded p-1"
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
          </select>
        </label>
        <label>
          {searchType === "id" ? "ID:" : "Name:"}
          <input
            className="bg-slate-500 rounded p-1"
            type={searchType === "id" ? "number" : "text"}
            value={searchValue}
            onChange={(e) =>
              setSearchValue(
                searchType === "id" ? e.target.value : e.target.value
              )
            }
          />
        </label>
        <button className="rounded-md bg-red-500 p-2" onClick={handleReset}>
          Reset
        </button>
        <button className="rounded-md bg-purple-500 p-2" onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchDriverForm;

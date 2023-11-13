import { useState } from "react";
import DriverService from "../../services/DriverService";
import DriverItem from "../driver-item";

const SearchDriverForm: React.FC = () => {
  const [searchType, setSearchType] = useState<"id" | "name">("id");
  const [searchValue, setSearchValue] = useState<string | number>("");
  const [driver, setDriver] = useState<{ [key: string]: string }>({}); // FIX TYPE ERROR
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (searchValue) {
      try {
        console.log("Search Value:", searchValue);

        let fetchedDriver;

        if (searchType === "id") {
          fetchedDriver = await DriverService.getById(Number(searchValue));
        } else {
          fetchedDriver = await DriverService.getByName(String(searchValue));
        }

        setDriver(fetchedDriver);
        setError(null);
        console.log("driver", fetchedDriver);
      } catch (error) {
        setError("Error fetching driver");
        console.error("Error fetching driver:", error);
      }
    }
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
        <button className="rounded-md bg-red-400 p-2" onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchDriverForm;

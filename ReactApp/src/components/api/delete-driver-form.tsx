import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import axios from "axios";

export const DeleteDriverForm = () => {
  const [deleteInput, setDeleteInput] = useState("");

  const handleDeleteChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDeleteInput(value);
  };

  const handleDeleteSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const driverIdToDelete = parseInt(deleteInput);
      console.log("id to delete:", driverIdToDelete);

      if (driverIdToDelete) {
        const deleteResponse = await axios.delete(
          `http://localhost:5292/api/Drivers/${driverIdToDelete}`
        );

        console.log("Delete Response:", deleteResponse);

        if (deleteResponse.status === 204) {
          console.log("Driver deleted successfully");
        } else {
          console.log(
            "Error deleting driver. Status code:",
            deleteResponse.status
          );
        }
      }
    } catch (error) {
      console.log("Error deleting driver:", error);
    }
  };

  return (
    <form onSubmit={handleDeleteSubmit}>
      <label>
        Enter driver id to delete:
        <input
          className="bg-slate-300 rounded"
          type="number"
          name="id"
          value={deleteInput}
          onChange={handleDeleteChange}
        />
      </label>
      <input
        className="h-10 w-20 rounded-md bg-red-400"
        type="submit"
        value="Delete Driver"
      />
    </form>
  );
};

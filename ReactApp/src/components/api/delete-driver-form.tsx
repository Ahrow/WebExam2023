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
    <section className="text-white">
      <h3>Delete Driver:</h3>
      <form
        onSubmit={handleDeleteSubmit}
        className="text-white bg-slate-900 gap-2 p-2 flex flex-wrap items-center"
      >
        <label>
          ID:
          <input
            className="bg-slate-500 rounded"
            type="number"
            name="id"
            value={deleteInput}
            onChange={handleDeleteChange}
          />
        </label>
        <input
          className="p-2 rounded-md bg-red-400"
          type="submit"
          value="Delete Driver"
        />
      </form>
    </section>
  );
};

import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import DriverService from "../../services/DriverService";

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
        await DriverService.deleteById(driverIdToDelete);
      }
    } catch (error) {
      console.log("Error in handleDeleteSubmit", error);
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

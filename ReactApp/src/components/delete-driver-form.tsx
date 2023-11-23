import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { DriverContext } from "./contexts/driver-context";

export const DeleteDriverForm = () => {
  const [deleteInput, setDeleteInput] = useState<string>("");

  const context = useContext(DriverContext);

  if (!context) {
    return null;
  }

  const { deleteDriver } = context;

  const handleDeleteChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDeleteInput(value);
  };

  const handleDeleteSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteDriver(Number(deleteInput));
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
          className="p-2 rounded-md bg-red-500"
          type="submit"
          value="Delete Driver"
        />
      </form>
    </section>
  );
};

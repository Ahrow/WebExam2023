import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

export function DriverForm() {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [deleteInput, setDeleteInput] = useState("");

  const driverEndpoint = "http://localhost:5292/api/Drivers";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleDeleteChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDeleteInput(value);
  };

  const handleAddSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("data sent", inputs);

    try {
      const response = await axios.post(driverEndpoint, inputs);
      console.log(response.data);
    } catch {
      console.log("Something went wrong");
    }
  };

  const handleDeleteSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const driverIdToDelete = parseInt(deleteInput);
      console.log("id to delete:", driverIdToDelete);
      if (!Number.isNaN(driverIdToDelete)) {
        const deleteResponse = await axios.delete(
          `http://localhost:5292/api/Drivers/${driverIdToDelete}`
        );
        if (deleteResponse.status === 200) {
          console.log("Driver deleted successfully:", deleteResponse.data);
        }
      }
    } catch (error) {
      console.log("Error deleting driver:", error);
    }
  };

  return (
    <div>
      <form
        className="bg-slate-200 mt-4 h-10 gap-4 flex justify-center items-center"
        onSubmit={handleAddSubmit}
      >
        <label>
          Enter driver name:
          <input
            className="bg-slate-300 rounded"
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter driver age:
          <input
            className="bg-slate-300 rounded"
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter driver nationality:
          <input
            className="bg-slate-300 rounded"
            type="text"
            name="nationality"
            value={inputs.nationality || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter img url:
          <input
            className="bg-slate-300 rounded"
            type=""
            name="imgUrl"
            value={inputs.imgUrl || ""}
            onChange={handleChange}
          />
        </label>
        <input
          className="h-10 w-20 rounded-md bg-green-400"
          type="submit"
          value="Add Driver"
        />
      </form>
      <form
        className="bg-slate-200 mt-4 h-10 gap-4 flex justify-center items-center"
        onSubmit={handleDeleteSubmit}
      >
        <label>
          Delete driver by ID:
          <input
            className="bg-slate-300 rounded"
            type="number"
            name="deleteDriver"
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
    </div>
  );
}

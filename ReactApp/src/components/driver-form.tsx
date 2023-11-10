import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { AddDriverForm } from "./api/driver-forms";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    <AddDriverForm
      handleChange={handleChange}
      handleDeleteChange={handleDeleteChange}
      handleDeleteSubmit={handleDeleteSubmit}
      handleSubmit={handleSubmit}
      inputs={inputs}
    />
  );
}

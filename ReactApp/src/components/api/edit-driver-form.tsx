import { FormEvent, ChangeEvent, useState, useContext } from "react";
import { DriverContext } from "../contexts/driver-context";

export const EditDriverForm = () => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [driverId, setDriverId] = useState<number>(0);

  const context = useContext(DriverContext);

  if (!context) {
    return null;
  }

  const { editDriver } = context;

  const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDriverId(Number(value));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editDriver({ id: driverId, name: inputs.name });
  };

  return (
    <section>
      <h3>Edit Driver:</h3>
      <form
        className="bg-slate-900 gap-2 flex flex-wrap items-center"
        onSubmit={handleSubmit}
      >
        <label className="mb-2">
          ID:
          <input
            className="bg-slate-500 rounded p-1"
            type="number"
            name="id"
            onChange={handleIdChange}
            placeholder="age"
          />
        </label>
        <label className="mb-2 ">
          Name:
          <input
            className="bg-slate-500 rounded p-1"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="name"
          />
        </label>
        <input
          className="rounded-md bg-green-400 mb-2 p-2"
          type="submit"
          value="Edit driver"
        />
      </form>
    </section>
  );
};

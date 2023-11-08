import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

export function DriverForm() {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const driverEndpoint = "http://localhost:5292/api/Drivers";
    event.preventDefault();
    //localStorage.setItem("driverData", JSON.stringify(inputs));
    console.log("data sent", inputs);

    try {
      const response = await axios.post(driverEndpoint, inputs);
      console.log(response.data);
    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <form
      className="bg-slate-200 mt-4 h-10 gap-4 flex justify-center items-center"
      onSubmit={handleSubmit}
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
      <input className="h-10 w-20 rounded-md bg-red-400" type="submit" />
    </form>
  );
}

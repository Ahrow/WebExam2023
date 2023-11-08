import { useState, ChangeEvent, FormEvent } from "react";

export function DriverForm() {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("driverData", JSON.stringify(inputs));
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
          type="text"
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
      <input className="h-10 w-20 rounded-md bg-red-400" type="submit" />
    </form>
  );
}

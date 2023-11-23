import { ChangeEvent, FormEvent, useContext } from "react";
import { useState } from "react";
import { DriverContext } from "./contexts/driver-context";

export const AddDriverForm = () => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [image, setImage] = useState<File | null>(null);

  const context = useContext(DriverContext);

  if (!context) {
    return null;
  }

  const { addDriver } = context;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageTarget = event.target.files?.[0];
    if (imageTarget) {
      setImage(imageTarget);
      const fileName = imageTarget.name;
      setInputs((values) => ({ ...values, imgUrl: fileName }));
      console.log("Image file name" + fileName);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addDriver(inputs, image);
    } catch (error) {
      console.log("Error in handleSubmit", error);
    }
  };

  return (
    <section>
      <h3>Enter driver details:</h3>
      <form
        className="bg-slate-900 gap-2 flex flex-wrap items-center"
        onSubmit={handleSubmit}
      >
        <label className="mb-2 ">
          Name:
          <input
            className="bg-slate-500 rounded p-1"
            type="text"
            name="name"
            value={inputs?.name}
            onChange={handleChange}
            placeholder="name"
          />
        </label>
        <label className="mb-2">
          Age:
          <input
            className="bg-slate-500 rounded p-1"
            type="number"
            name="age"
            value={inputs?.age}
            onChange={handleChange}
            placeholder="age"
          />
        </label>
        <label className="mb-2">
          Nationality:
          <input
            className="bg-slate-500 rounded p-1"
            type="text"
            name="nationality"
            value={inputs?.nationality}
            onChange={handleChange}
            placeholder="nationality"
          />
        </label>
        <label className="mb-2">
          Image:
          <input
            className="bg-slate-500 rounded p-1"
            type="file"
            name="image"
            onChange={handleImageChange}
          />
        </label>
        <input
          className="rounded-md bg-purple-500 mb-2 p-2"
          type="submit"
          value="Add Driver"
        />
      </form>
    </section>
  );
};

import { ChangeEvent, FormEvent } from "react";

interface AddDriverProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputs: { [key: string]: string };
}

export const AddDriverForm = ({
  handleChange,
  handleDeleteChange,
  handleDeleteSubmit,
  handleSubmit,
  inputs,
}: AddDriverProps) => {
  return (
    <section>
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
            value={inputs?.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter driver age:
          <input
            className="bg-slate-300 rounded"
            type="number"
            name="age"
            value={inputs?.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter driver nationality:
          <input
            className="bg-slate-300 rounded"
            type="text"
            name="nationality"
            value={inputs?.nationality}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter img url:
          <input
            className="bg-slate-300 rounded"
            type=""
            name="imgUrl"
            value={inputs?.imgUrl}
            onChange={handleChange}
          />
        </label>
        <input
          className="h-10 w-20 rounded-md bg-green-400"
          type="submit"
          value="Add Driver"
        />
      </form>
      <form onSubmit={handleDeleteSubmit}>
        <label>
          Enter driver id to delete:
          <input
            className="bg-slate-300 rounded"
            type="number"
            name="id"
            value={inputs?.id}
            onChange={handleDeleteChange}
          />
        </label>
        <input
          className="h-10 w-20 rounded-md bg-red-400"
          type="submit"
          value="Delete Driver"
        />
      </form>
    </section>
  );
};

export const DeleteDriverForm = () => {};

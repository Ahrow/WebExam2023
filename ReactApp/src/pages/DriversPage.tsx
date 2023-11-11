import { AddDriverForm } from "../components/api/add-driver-form";
import { DeleteDriverForm } from "../components/api/delete-driver-form";
import { DriverList } from "../components/driver-list";

export const DriversPage = () => {
  return (
    <div>
      <AddDriverForm />
      <DeleteDriverForm />
      <DriverList />
    </div>
  );
};

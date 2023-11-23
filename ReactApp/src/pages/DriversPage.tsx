import { AddDriverForm } from "../components/add-driver-form";
import { DeleteDriverForm } from "../components/delete-driver-form";
import { EditDriverForm } from "../components/edit-driver-form";
import SearchDriverForm from "../components/search-driver-form";
import { DriverList } from "../components/driver-list";
import { FormContainer } from "../components/ui/form-container";

export const DriversPage = () => {
  return (
    <div>
      <FormContainer>
        <AddDriverForm />
        <DeleteDriverForm />
        <SearchDriverForm />
        <EditDriverForm />
      </FormContainer>
      <DriverList />
    </div>
  );
};

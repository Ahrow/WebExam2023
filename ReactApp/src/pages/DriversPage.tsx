import { AddDriverForm } from "../components/api/add-driver-form";
import { DeleteDriverForm } from "../components/api/delete-driver-form";
import { EditDriverForm } from "../components/api/edit-driver-form";
import SearchDriverForm from "../components/api/search-driver-form";
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

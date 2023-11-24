import { DriverContext } from "../contexts/driver-context";
import { useContext } from "react";
import { ToastMessage } from "./toast-message";

export const FormContainer = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(DriverContext);

  if (!context) {
    return null;
  }
  const { shouldShowToast, toastMessage } = context;

  return (
    <div className="text-white">
      {children}
      {shouldShowToast && toastMessage && (
        <ToastMessage message={toastMessage.message} type={toastMessage.type} />
      )}
    </div>
  );
};

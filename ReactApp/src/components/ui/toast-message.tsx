export interface ToastMessageProps {
  message: string;
  type: "error" | "success";
}

export const ToastMessage = ({ message, type }: ToastMessageProps) => {
  return (
    <div
      className={`${
        type === "error" ? "bg-red-500" : "bg-green-500"
      } text-white text-center py-2 px-4 rounded`}
    >
      {message}
    </div>
  );
};

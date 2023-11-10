export const CardContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2 sm:mt-10
    "
    >
      {children}
    </div>
  );
};

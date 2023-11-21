export const SelectorContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-20 text-white">
      {children}
    </div>
  );
};

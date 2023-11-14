export const SelectorContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <div className="flex flex-wrap">{children}</div>;
};

export type resultProps = {
  formula: string[];
};

export const Result: React.FC<resultProps> = ({ formula }) => {
  return (
    <div className="mx-auto  font-mono text-center text-5xl bg-white w-1/2 border-solid">{`${formula.join(
      " "
    )}`}</div>
  );
};

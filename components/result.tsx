export type resultProps = {
  formula: string[];
};

export const Result: React.FC<resultProps> = ({ formula }) => {
  return (
    <div className="mx-auto font-mono text-center text-5xl  w-1/2 border-2 rounded-md">{`${formula.join(
      " "
    )}`}</div>
  );
};

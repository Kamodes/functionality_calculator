export type resultProps = {
  formula: string[];
};

export const Result: React.FC<resultProps> = ({ formula }) => {
  return (
    <div className="mx-auto py-8 font-mono text-center text-5xl bg-stone-200 w-1/2 ">{`${formula.join(
      " "
    )}`}</div>
  );
};

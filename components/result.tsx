export type resultProps = {
  formula: string;
  ans: number;
};

export const Result: React.FC<resultProps> = ({ formula, ans }) => {
  return <div>{`${formula} = ${ans}`}</div>;
};

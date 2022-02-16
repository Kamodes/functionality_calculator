export const Answer: React.FC<{ name: string; num: number }> = ({
  name,
  num,
}) => {
  return <div>{`${name} = ${num}`}</div>;
};

import { Button } from "@mui/material";

export const Answer: React.FC<{ name: string; num: number }> = ({
  name,
  num,
}) => {
  return <Button>{`${name} = ${num}`}</Button>;
};

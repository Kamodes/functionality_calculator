import Button from "@mui/material/Button";

export const NumButton: React.FC<{ n: number }> = ({ n }) => {
  return (
    <Button className="basis-1/5 bg-sky-300 rounded-lg space-x-2 h-12">
      {n}
    </Button>
  );
};

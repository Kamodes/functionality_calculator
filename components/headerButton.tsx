import { Button } from "@mui/material";

export const HeaderButton = (props: { label: string }) => {
  return (
    <Button className="font-bold text-gray-800 mx-1 mt-10">
      {props.label}
    </Button>
  );
};

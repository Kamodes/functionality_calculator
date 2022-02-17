import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const ClearButton = () => {
  const { setAnswer, setFormula } = useContext(FormulaContext);
  const clickClearButton = () => {
    setAnswer(0);
    setFormula(["0"]);
  };
  return (
    <Button
      className=" basis-1/5 bg-sky-300 rounded-lg space-x-2 h-12"
      onClick={() => {
        clickClearButton();
      }}
    >
      AC
    </Button>
  );
};

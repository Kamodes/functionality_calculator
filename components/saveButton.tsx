import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const SaveButton = () => {
  const { formula, setFormula, answer, setAnswer, memo, setMemo } =
    useContext(FormulaContext);
  const clickSaveButton = () => {};
  return (
    <Button className=" basis-1/5 bg-sky-300 rounded-lg space-x-2 h-12">
      {"保存"}
    </Button>
  );
};

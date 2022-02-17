import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const SaveButton = () => {
  const { answer, memo, setMemo, index, setIndex, setIsSave } =
    useContext(FormulaContext);
  const clickSaveButton = () => {
    const name = String.fromCharCode(index + 65);
    setMemo([...memo, { name: name, num: answer }]);
    setIndex(index + 1);
    setIsSave(true);
  };
  return (
    <Button
      className="text-3xl font-mono basis-1/5 bg-sky-300 rounded-lg space-x-2 h-12"
      onClick={() => {
        clickSaveButton();
      }}
    >
      {"保存"}
    </Button>
  );
};

import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const SaveButton = () => {
  const {
    formula,
    setFormula,
    answer,
    setAnswer,
    memo,
    setMemo,
    index,
    setIndex,
    setIsSave,
  } = useContext(FormulaContext);
  const clickSaveButton = () => {
    const name = String.fromCharCode(index + 65);
    if (formula.length === 1) {
      setMemo([...memo, { name: name, num: Number(formula[0]) }]);
      setIndex(index + 1);
      setIsSave(true);
    } else if (formula.length === 3) {
      const [ope, num]: string[] = formula.slice(-2);
      if (ope === "+") {
        setAnswer(answer + Number(num));
        setFormula([String(answer + Number(num))]);
        setMemo([...memo, { name: name, num: answer + Number(num) }]);
      } else if (ope === "-") {
        setAnswer(answer - Number(num));
        setFormula([String(answer - Number(num))]);
        setMemo([...memo, { name: name, num: answer - Number(num) }]);
      } else if (ope === "×") {
        setAnswer(answer * Number(num));
        setFormula([String(answer * Number(num))]);
        setMemo([...memo, { name: name, num: answer * Number(num) }]);
      } else if (ope === "÷") {
        setAnswer(answer / Number(num));
        setFormula([String(answer / Number(num))]);
        setMemo([...memo, { name: name, num: answer / Number(num) }]);
      } else {
        console.log("error");
      }
      setIndex(index + 1);
      setIsSave(true);
    } else {
      setMemo([...memo, { name: name, num: answer }]);
      setIndex(index + 1);
      setIsSave(true);
    }
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

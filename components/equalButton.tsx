import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const EqualButton = () => {
  const { formula, setFormula, answer, setAnswer } = useContext(FormulaContext);
  const clickEqualButton = () => {
    if (formula.length === 1) {
      const num = formula.slice(-1)[0];
      setAnswer(Number(num));
      setFormula([String(Number(num))]);
    } else {
      const [ope, num]: string[] = formula.slice(-2);
      if (ope === "+") {
        setAnswer(answer + Number(num));
        setFormula([String(answer + Number(num))]);
      } else if (ope === "-") {
        setAnswer(answer - Number(num));
        setFormula([String(answer - Number(num))]);
      } else if (ope === "×") {
        setAnswer(answer * Number(num));
        setFormula([String(answer * Number(num))]);
      } else if (ope === "÷") {
        setAnswer(answer / Number(num));
        setFormula([String(answer / Number(num))]);
      } else {
        console.log("error");
      }
    }
  };
  return (
    <Button
      className="text-3xl basis-1/5 bg-gray-100 text-gray-600 rounded-lg space-x-2 h-12"
      onClick={() => clickEqualButton()}
    >
      {"="}
    </Button>
  );
};

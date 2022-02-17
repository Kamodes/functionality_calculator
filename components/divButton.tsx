import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const DivButton = () => {
  const { formula, setFormula, answer, setAnswer } = useContext(FormulaContext);
  const clickDivButton = () => {
    if (formula.length === 1) {
      const num = formula.slice(-1)[0];
      setAnswer(Number(num));
      setFormula([String(Number(num)), "÷"]);
    } else {
      const [ope, num]: string[] = formula.slice(-2);
      if (ope === "+") {
        setAnswer(answer + Number(num));
        setFormula([String(answer + Number(num)), "÷"]);
      } else if (ope === "-") {
        setAnswer(answer - Number(num));
        setFormula([String(answer - Number(num)), "÷"]);
      } else if (ope === "×") {
        setAnswer(answer * Number(num));
        setFormula([String(answer * Number(num)), "÷"]);
      } else if (ope === "÷") {
        setAnswer(answer / Number(num));
        setFormula([String(answer / Number(num)), "÷"]);
      } else {
        const formulaWithoutLast = formula.slice(0, -1);
        setFormula([...formulaWithoutLast, "÷"]);
      }
    }
  };
  return (
    <Button
      className="basis-1/5 bg-sky-300 rounded-lg space-x-2 h-12"
      onClick={() => {
        clickDivButton();
      }}
    >
      {"÷"}
    </Button>
  );
};

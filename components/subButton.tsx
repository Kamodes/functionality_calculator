import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const SubButton = () => {
  const { formula, setFormula, answer, setAnswer } = useContext(FormulaContext);
  const clickSubButton = () => {
    if (formula.length === 1) {
      const num = formula.slice(-1)[0];
      setAnswer(Number(num));
    } else {
      const [ope, num]: string[] = formula.slice(-2);
      if (ope === "+") {
        setAnswer(answer + Number(num));
      } else if (ope === "-") {
        setAnswer(answer - Number(num));
      } else if (ope === "×") {
        setAnswer(answer * Number(num));
      } else if (ope === "÷") {
        setAnswer(answer / Number(num));
      } else {
        console.log("error");
      }
    }

    setFormula([...formula, "-"]);
  };
  return (
    <Button
      className="basis-1/5 bg-sky-300 rounded-lg space-x-2 h-12"
      onClick={() => {
        clickSubButton();
      }}
    >
      -
    </Button>
  );
};

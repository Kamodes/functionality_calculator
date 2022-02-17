import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";
import { operatorList } from "./numButton";

export const Answer: React.FC<{ name: string; num: number }> = ({
  name,
  num,
}) => {
  const { formula, setFormula, setAnswer } = useContext(FormulaContext);
  const answerButton = () => {
    if (formula.length === 1) {
      setFormula([String(num)]);
      setAnswer(num);
    } else {
      const last = formula.slice(-1)[0];
      if (operatorList.includes(last)) {
        setFormula([...formula, String(num)]);
      } else {
        const formulaWithoutLast = formula.slice(0, -1);
        setFormula([...formulaWithoutLast, String(num)]);
      }
    }
  };
  return <Button onClick={() => answerButton()}>{`${name} = ${num}`}</Button>;
};

import Button from "@mui/material/Button";
import { useContext } from "react";
import { FormulaContext } from "../pages";

export const operatorList: string[] = ["+", "-", "÷", "×"];
export const NumButton: React.FC<{ n: number }> = ({ n }) => {
  const { formula, setFormula, setAnswer, isSave, setIsSave } =
    useContext(FormulaContext);
  const clickNumButton = () => {
    const last: string = formula.slice(-1)[0];
    if (isSave) {
      setIsSave(false);
      setFormula([String(n)]);
      setAnswer(0);
    } else {
      if (operatorList.includes(last)) {
        setFormula([...formula, String(n)]);
      } else {
        setFormula([...formula.slice(0, -1), `${Number(last) * 10 + n}`]);
      }
    }
  };
  return (
    <Button
      className="basis-1/5 bg-sky-300 rounded-lg space-x-2 h-12"
      onClick={() => {
        clickNumButton();
      }}
    >
      {n}
    </Button>
  );
};

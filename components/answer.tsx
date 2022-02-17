import { Button } from "@mui/material";
import { useContext } from "react";
import { FormulaContext } from "../pages";
import { operatorList } from "./numButton";

export const Answer: React.FC<{ name: string; num: number }> = ({
  name,
  num,
}) => {
  const { formula, setFormula, setAnswer, memo, setMemo } =
    useContext(FormulaContext);
  const clickAnswerButton = () => {
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
  const clickDeleteButton = () => {
    setMemo(memo.filter((item) => item.name !== name));
  };
  return (
    <div>
      <Button
        className="text-3xl"
        onClick={() => clickAnswerButton()}
      >{`${name} = ${num}`}</Button>
      <Button
        className="text-xl"
        onClick={() => {
          clickDeleteButton();
        }}
      >
        削除
      </Button>
    </div>
  );
};

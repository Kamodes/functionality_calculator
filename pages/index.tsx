import React, { useState } from "react";
import type { NextPage } from "next";
import { Caluculator } from "../components/calculator";
import { StoreAnswer } from "../components/storeAnswer";
import { Result } from "../components/result";

export const FormulaContext = React.createContext(
  {} as {
    formula: string[];
    setFormula: React.Dispatch<React.SetStateAction<string[]>>;
    answer: number;
    setAnswer: React.Dispatch<React.SetStateAction<number>>;
    memo: Array<{ name: string; num: number }>;
    setMemo: React.Dispatch<
      React.SetStateAction<
        {
          name: string;
          num: number;
        }[]
      >
    >;
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    isSave: boolean;
    setIsSave: React.Dispatch<React.SetStateAction<boolean>>;
  }
);
const Home: NextPage = () => {
  const [formula, setFormula] = useState<string[]>(["0"]);
  const [answer, setAnswer] = useState<number>(0);
  const [memo, setMemo] = useState<Array<{ name: string; num: number }>>([
    { name: "a", num: 123 },
  ]);
  const [index, setIndex] = useState<number>(1);
  const [isSave, setIsSave] = useState<boolean>(false);
  const value = {
    formula,
    setFormula,
    answer,
    setAnswer,
    memo,
    setMemo,
    index,
    setIndex,
    isSave,
    setIsSave,
  };
  return (
    <div>
      <div className="my-14 bg-stone-200">
        <Result formula={formula} ans={answer} />
      </div>
      <div className="flex">
        <FormulaContext.Provider value={value}>
          <div className="basis-1/2">
            <StoreAnswer memo={memo} />
          </div>
          <div className="basis-1/2">
            <Caluculator />
          </div>
        </FormulaContext.Provider>
      </div>
    </div>
  );
};

export default Home;

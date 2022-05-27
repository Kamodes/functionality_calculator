import React, { useState } from "react";
import type { NextPage } from "next";
import { Caluculator } from "../components/calculator";
import { StoreAnswer } from "../components/storeAnswer";
import { Result } from "../components/result";
import { Header } from "../components/header";
import Link from "next/link";
import { EmptyFlex1_12 } from "../components/emptyFlex1_12";

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
    <div className="bg-white">
      <div className="bg-gray-50">
        <Header />
      </div>
      <div className="mt-16">
        <Result formula={formula} />
      </div>
      <div className="flex  mt-32">
        <FormulaContext.Provider value={value}>
          <EmptyFlex1_12 />
          <div className="basis-1/3 border-4 rounded-3xl ">
            <StoreAnswer memo={memo} />
          </div>
          <EmptyFlex1_12 />
          <div className="basis-1/2 ">
            <Caluculator />
          </div>
        </FormulaContext.Provider>
      </div>
    </div>
  );
};

export default Home;

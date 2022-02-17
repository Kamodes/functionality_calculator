import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NumButton } from "../components/numButton";
import { Caluculator } from "../components/calculator";
import { StoreAnswer } from "../components/storeAnswer";
import { storeAnswerPropType } from "../components/storeAnswer";
import { Result, resultProps } from "../components/result";
import { formGroupClasses } from "@mui/material";
import { stringify } from "querystring";

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
  }
);
const Home: NextPage = () => {
  const [formula, setFormula] = useState<string[]>(["0"]);
  const [answer, setAnswer] = useState<number>(0);
  const [memo, setMemo] = useState<Array<{ name: string; num: number }>>([
    { name: "a", num: 0 },
  ]);
  const value = { formula, setFormula, answer, setAnswer, memo, setMemo };
  return (
    <div>
      <div className="my-14 bg-stone-200">
        <Result formula={formula} ans={answer} />
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <StoreAnswer memo={memo} />
        </div>
        <FormulaContext.Provider value={value}>
          <div className="basis-1/2">
            <Caluculator />
          </div>
        </FormulaContext.Provider>
      </div>
    </div>
  );
};

export default Home;

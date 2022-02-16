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

const Home: NextPage = () => {
  const initialResult: resultProps = {
    formula: "1 + 1",
    ans: 2,
  };
  const initialAnswers: storeAnswerPropType = {
    answers: [
      { name: "a", num: 1 },
      { name: "b", num: 3 },
    ],
  };
  return (
    <div>
      <div className="my-14">
        <Result formula={initialResult.formula} ans={initialResult.ans} />
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <StoreAnswer answers={initialAnswers.answers} />
        </div>
        <div className="basis-1/2">
          <Caluculator />
        </div>
      </div>
    </div>
  );
};

export default Home;

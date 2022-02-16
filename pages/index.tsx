import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NumButton } from "../components/numButton";
import { Caluculator } from "../components/calculator";
import { StoreAnswer } from "../components/storeAnswer";
import { storeAnswerPropType } from "../components/storeAnswer";

const Home: NextPage = () => {
  const initialAnswers: storeAnswerPropType = {
    answers: [
      { name: "a", num: 1 },
      { name: "b", num: 3 },
    ],
  };
  return (
    <div>
      <div className="mt-20 mb-15"></div>
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

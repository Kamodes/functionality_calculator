import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NumButton } from "../components/numButton";
import { Caluculator } from "../components/calculator";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <div className="basis-1/2"></div>
      <div className="basis-1/2">
        <Caluculator />
      </div>
    </div>
  );
};

export default Home;

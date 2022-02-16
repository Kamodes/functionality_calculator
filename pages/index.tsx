import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NumButton from "../components/numButton";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <NumButton n={1} />
        <NumButton n={2} />
        <NumButton n={3} />
      </div>
      <div>
        <NumButton n={4} />
        <NumButton n={5} />
        <NumButton n={6} />
      </div>
      <div>
        <NumButton n={7} />
        <NumButton n={8} />
        <NumButton n={9} />
      </div>
    </div>
  );
};

export default Home;

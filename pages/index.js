import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hollywood Fashion</title>
        <meta name="description" content="Ecommerce platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hollywood Fashion</h1>
    </div>
  );
}

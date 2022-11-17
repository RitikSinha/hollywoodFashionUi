import Layout from "../components/layout";
import Image from "next/image";
import Card from "../components/Card";
export default function Home() {
  const width = window.innerWidth;
  const height = window.innerHeight - 10;
  return (
    <Layout>
      <div className=" w-full">
        <Image
          src="/winters-collection-desktop.jpg"
          alt="winter-collection"
          width={width}
          height={height}
        />

        <Card />
      </div>
    </Layout>
  );
}

import Layout from "../components/layout";
import Image from "next/image";
import Card from "../components/Card";
import useDeviceSize from "../components/UseDeviceSize";
import Category from "../components/Category";
export default function Home() {
  const [width, height] = useDeviceSize();
  console.log(height, width);
  return (
    <Layout>
      <div className=" w-full">
        <Image
          src="/winters-collection-desktop.jpg"
          alt="winter-collection"
          width={width}
          height={height - 50}
        />
        <div className=" flex justify-center flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex items-center justify-center my-5">
          <a className=" bg-black px-3 py-2 rounded-sm text-white">view More</a>
        </div>
        <Image
          src="/bottoms-desktop-op.jpg"
          alt="banner"
          width={width}
          height={height - 50}
        />
        <div className="flex items-center justify-center my-5">
          <h1 className=" text-5xl font-bold">Best Seller</h1>
        </div>
        <div className=" flex justify-center flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex items-center justify-center my-5">
          <a className=" bg-black px-3 py-2 rounded-sm text-white">view More</a>
        </div>
        <div className=" flex justify-center flex-wrap bg-black py-5">
          <Category title="Mens wear" />
          <Category title="kids Wear" />
          <Category title="winter collection" />
          <Category title="Ladies Wear" />
        </div>
      </div>
    </Layout>
  );
}

import Layout from "../components/layout";
import Image from "next/image";
import Card from "../components/Card";
import useDeviceSize from "../components/UseDeviceSize";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import client from "../utills/client";
import Loading from "../components/Loading";
export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ error: err.message });
      }
    };
    fetchData();
  }, []);
  const [width, height] = useDeviceSize();
  const { products, error, loading } = state;

  console.log(products);
  return (
    <Layout>
      <div className=" w-full">
        <Image
          src="/winters-collection-desktop.jpg"
          alt="winter-collection"
          width={width}
          height={height - 50}
        />
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="toast toast-top toast-end">
            <div className="alert alert-info">
              <div>
                <span>{error}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex justify-center flex-wrap">
            {products?.map(
              ({
                name,
                description,
                slug,
                brand,
                category,
                numReviews,
                rating,
                price,
                image,
              }) => (
                <Card
                  key={slug}
                  name={name}
                  description={description}
                  brand={brand}
                  category={category}
                  numReviews={numReviews}
                  rating={rating}
                  price={price}
                  slug={slug}
                  image={image}
                />
              )
            )}
          </div>
        )}

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
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="toast toast-top toast-end">
              <div className="alert alert-info">
                <div>
                  <span>{error}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center flex-wrap">
              {products?.map(
                ({
                  name,
                  description,
                  slug,
                  brand,
                  category,
                  numReviews,
                  rating,
                  price,
                  image,
                }) => (
                  <Card
                    key={slug}
                    name={name}
                    description={description}
                    brand={brand}
                    category={category}
                    numReviews={numReviews}
                    rating={rating}
                    price={price}
                    slug={slug}
                    image={image}
                  />
                )
              )}
            </div>
          )}
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

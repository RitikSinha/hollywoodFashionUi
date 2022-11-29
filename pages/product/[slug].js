import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Collapse from "../../components/Collapse";
import Carousels from "../../components/Carousels";
import client from "../../utills/client";
import Loading from "../../components/Loading";
const Product = (props) => {
  const { slug } = props;
  const [state, setState] = useState({
    product: null,
    error: "",
    loading: true,
  });
  const { product, error, loading } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `*[_type=="product" && slug.current==$slug][0]`,
          { slug }
        );
        setState({ ...state, product, loading: false });
      } catch (e) {
        setState({ ...state, error: e.message, loading: false });
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
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
        <div className="flex p-5">
          <div className="m-5 w-1/2">
            <Carousels image={product.image} />
          </div>
          <div className="w-1/2">
            <div>
              <div className="flex  justify-between pb-5">
                <h1 className="text-3xl font-semibold">{product.name}</h1>{" "}
                <p className="font-semibold text-2xl">RS. {product.price}/-</p>
              </div>
              <p className="pb-5">{product.description}</p>
              <button className="btn mb-5">Add to Bag</button>
              <Collapse
                title="core features"
                content="composition : 100% cotton"
              />
              <Collapse title="Description" content="some content" />
              <Collapse title="Shipping & Return" content="some content" />
              <Collapse title="Care Guide" content="some content" />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}

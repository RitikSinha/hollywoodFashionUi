import React from "react";
import Layout from "../components/layout";
import Collapse from "../components/Collapse";
import Carousels from "../components/Carousels";
const Product = () => {
  return (
    <Layout>
      <div className="flex p-5">
        <div className="m-5 w-1/2">
          <Carousels />
        </div>
        <div className="w-1/2">
          <div>
            <div className="flex  justify-between pb-5">
              <h1 className="text-3xl font-semibold">no face just voice</h1>{" "}
              <p className="font-semibold text-2xl">RS. 1300/-</p>
            </div>
            <p className="pb-5">
              or Pay ₹450 now. Rest in 0% interest EMIs Credit card NOT
              required, Online approval in 2 minutes
            </p>
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
    </Layout>
  );
};

export default Product;

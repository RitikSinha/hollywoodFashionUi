import React from "react";
import Layout from "../components/layout";
import CartCard from "../components/CartCard";
const cart = () => {
  return (
    <Layout>
      <div className="flex px-5 justify-between">
        <div className="w-1/2">
          <CartCard />
          <CartCard />
        </div>
        <div className="w-1/2 px-12">
          <h1 className="text-3xl">Order Summary </h1>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                <tr>
                  <th>subtotal:</th>
                  <td>Rs. 3000</td>
                </tr>

                <tr>
                  <th>shipping:</th>
                  <td>Rs. 300</td>
                </tr>
                <tr>
                  <th>Total:</th>
                  <td>Rs. 3300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary w-1/2">Checkout</button>
        </div>
      </div>
    </Layout>
  );
};

export default cart;

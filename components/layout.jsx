import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, title, desc }) => {
  return (
    <div>
      <Head>
        <title>{title ? title : "Hollywood Fashion"}</title>
        <meta name="description" content={desc ? desc : "ecommerce platform"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

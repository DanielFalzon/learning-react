import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import { renderIntoDocument } from "react-dom/test-utils";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const url = `https://5f6cf97860cf97001641a781.mockapi.io/products?page=1&limit=10`;

  let content = null;

  let products = useAxiosGet(url)

  if (products.error) {
    content = <p>There was an error please refresh or try again later..</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;

import React from "react";
import { ProductConsumer } from "../context";

export const HomePage = () => {
  return (
    <div>
      <ProductConsumer>{value => <h1>{value}</h1>}</ProductConsumer>
    </div>
  );
};

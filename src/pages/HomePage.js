import React from "react";
import { ProductConsumer } from "../context";

export const HomePage = () => {
  return (
    <div>
      <ProductConsumer>{value => <h1>home</h1>}</ProductConsumer>
    </div>
  );
};

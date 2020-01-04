import React from "react";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <Hero title="CPUs" max="true">
        <Link to="/products">Our products</Link>
      </Hero>
    </div>
  );
};

import React from "react";
import { Hero } from "../components/Hero";
import { Featured } from "../components/HomePage/Featured";
import { Services } from "../components/HomePage/Services";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <Hero title="CPUs" max="true">
        <Link to="/products" className="main-link">
          Our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </div>
  );
};

import React from "react";
import { Hero } from "../components/Hero";
import { Contact } from "../components/ContactPage/Contact";
import contactBcg from "../images/contactBcg.jpeg";

export const ContactPage = () => {
  return (
    <div>
      <Hero img={contactBcg}></Hero>
      <Contact />
    </div>
  );
};

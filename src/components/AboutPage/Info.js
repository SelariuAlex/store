import React from "react";
import { Title } from "../Title";
import phoneImg from "../../images/defaultBcg.jpeg";

export const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={phoneImg}
              className="img-fluid img-thumbnail"
              alt="about img"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus officiis eos dignissimos! Qui quod amet consectetur
              facilis animi, nemo iste!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium molestias officia nesciunt amet aut, ab, nihil
              accusamus vel sapiente deleniti fuga, hic necessitatibus ipsam.
              Suscipit esse eius dolorem debitis consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

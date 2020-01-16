import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";

export const Product = ({ product }) => {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;

        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={product.image}
                  className="card-img-top p-5"
                  alt="product"
                  style={{ height: "320px" }}
                />
                <div className="product-icon">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const ProductWrapper = styled.div``;

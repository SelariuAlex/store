import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export const Navbar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <h3 className="logo">
                <span>Alex</span>Store
              </h3>
              <div className="nav-cart">
                <FaCartPlus
                  className="nav-icon"
                  onClick={handleCart}
                ></FaCartPlus>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 2;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -10px;
    right: -12px;
    padding: 0 5px;
    border-radius: 50%;
  }

  .logo span {
    color: var(--primaryColor);
  }
`;

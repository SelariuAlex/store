import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { CartPage } from "./pages/CartPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { DefaultPage } from "./pages/DefaultPage";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route component={DefaultPage} />
      </Switch>
    </Router>
  );
}

export default App;

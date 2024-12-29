import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";
import "./commonResource/js/bootstrap.js";

export default function App() {
  return (
    <div>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

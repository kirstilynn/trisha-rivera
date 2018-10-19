import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Repertoire from "../components/Repertoire";
import Media from "../components/Media";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    {/* <Repertoire /> */}
    <Media />
    <Resume />
    <Portfolio />
    <Footer />
  </div>
);

export default IndexPage;

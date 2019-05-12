import React, { Component } from "react";
import "./index.scss";
import Header from "../Header";
import Navbar from "../Navbar";
import Slider from "../Slider";

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="menu">
          <Navbar />
        </div>
        <div className="content">{this.props.children}</div>
        <div className="sidebar">
          <Slider />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./index.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-contaner">
          <div> </div>
          <div className="logo-design">
            <div className="logo" />
          </div>
          <div className="logo-2-container">Sarkari Result</div>
        </div>
        <style global jsx>{`
          .logo {
            background: url(../../static/download.png);
          }
        `}</style>
      </div>
    );
  }
}

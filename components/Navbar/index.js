import React, { Component } from "react";
import Link from "../Link";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import "./index.scss";

const options = ["Syllabus", "Contact us", "About us"];

const ITEM_HEIGHT = 98;

export default class Navbar extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className="navbar">
        <nav className="nav-list">
          <ul className="nav-item-list">
            <li className="nav-item">
              <Link activeClassName="active" prefetch href="/">
                <a className="nav-text">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" prefetch href="/results">
                <a className="nav-text">Result</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" prefetch href="/latest-job">
                <a className="nav-text">Latest Job</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" prefetch href="/admit-card">
                <a className="nav-text">Admit Card</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" prefetch href="/admission">
                <a className="nav-text">Admission</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" prefetch href="/answer-key">
                <a className="nav-text">Answer Key</a>
              </Link>
            </li>
            <li className="nav-item">
              <div>
                <IconButton
                  aria-label="More"
                  aria-owns={open ? "long-menu" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200
                    }
                  }}
                >
                  {options.map(option => {
                    const path = option
                      .split(" ")
                      .join("-")
                      .toLowerCase();
                    return (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={this.handleClose}
                      >
                        <Link activeClassName="active" href={path}>
                          <a>{option}</a>
                        </Link>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            </li>
            <li>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </li>
            <li>
              <Button variant="contained" color="secondary">
                Sign up
              </Button>
            </li>
          </ul>
        </nav>
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
        `}</style>
      </div>
    );
  }
}

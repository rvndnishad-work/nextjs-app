import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
        <Link prefetch href="/results">
          <a>Result</a>
        </Link>
        <Link prefetch href="/latest-job">
          <a>Latest Jobs</a>
        </Link>
        <Link prefetch href="/">
          <a />
        </Link>
        <Link prefetch href="/admit-card">
          <a>Admit Card</a>
        </Link>
        <Link prefetch href="/admission">
          <a>Admission</a>
        </Link>
        <Link prefetch href="/answer-key">
          <a>Answer Key</a>
        </Link>
        <Link prefetch href="/syllabus">
          <a>Syllabus</a>
        </Link>
        <Link prefetch href="/contact-us">
          <a>Contact Us</a>
        </Link>
        <Link prefetch href="/about-us">
          <a>About Us</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;

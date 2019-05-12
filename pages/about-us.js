import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <div>
      <Head title="About us || Sarkari Result" />
      <div className="hero">
        <h1 className="title">This is an About Page</h1>
      </div>
    </div>
  </Layout>
);

export default About;

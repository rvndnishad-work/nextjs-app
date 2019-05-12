import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";

const Admission = () => (
  <Layout>
    <div>
      <Head title="Admission" />

      <div className="hero">
        <h1 className="title">This is an Admission Page</h1>
      </div>
    </div>
  </Layout>
);

export default Admission;

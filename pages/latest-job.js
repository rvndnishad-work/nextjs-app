import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";

const LatestJob = () => (
  <Layout>
    <div>
      <Head title="Latest Job" />

      <div className="hero">
        <h1 className="title">This is an Latest Job Page</h1>
      </div>
    </div>
  </Layout>
);

export default LatestJob;

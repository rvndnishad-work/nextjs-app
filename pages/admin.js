import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";

const Admin = () => (
  <Layout>
    <div>
      <Head title="Admin Page" />

      <div className="hero">
        <h1 className="title">This is an Admin Page</h1>
      </div>
    </div>
  </Layout>
);

export default Admin;

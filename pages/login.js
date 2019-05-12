import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";

const Login = () => (
  <Layout>
    <div>
      <Head title="Login" />

      <div className="hero">
        <h1 className="title">This is an Login Page</h1>
      </div>
    </div>
  </Layout>
);

export default Login;

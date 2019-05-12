import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";

const AdmitCard = () => (
  <Layout>
    <div>
      <Head title="Admit Card" />

      <div className="hero">
        <h1 className="title">This is an Admit Card Page</h1>
      </div>
    </div>
  </Layout>
);

export default AdmitCard;

import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { Layout } from "../components/index";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />  {/* children */}
    </Layout>
  );
} //component wraped by layout , always has header above it. sending child to layout 
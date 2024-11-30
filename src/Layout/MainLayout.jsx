import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Header/>
      {children}
      <Footer />
    </>
  );
}

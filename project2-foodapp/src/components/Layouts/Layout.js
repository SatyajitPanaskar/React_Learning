import React from "react";
import Headers from "../Headers";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Headers />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;

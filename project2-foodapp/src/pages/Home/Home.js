import React from "react";
import Layout from "../../components/Layouts/Layout";
import Seaction1 from "./Seaction1";
import "../../Styles/Homestyle.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

function Home() {
  return (
    <>
      <Layout>
        {/* Home Section hero Banner */}
        <Seaction1 />
        {/* home section About*/}
        <Section2 />
        {/* home Section menu */}
        <Section3 />
        {/* Home Section promotion */}
        <Section4 />
        {/* Home section  Shop*/}
        <Section5 />
        {/*Home Section Blog */}
        <Section6 />
        {/* Section Contact */}
        <Section7 />
      </Layout>
    </>
  );
}

export default Home;

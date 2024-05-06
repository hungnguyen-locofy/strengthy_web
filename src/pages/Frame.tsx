import { FunctionComponent } from "react";

import styles from "./Frame.module.css";
import Component from "../components/Component";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import ComponentRoot from "../components/ComponentRoot";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <Component />
      <Component1 />
      <Component2 />
      <ComponentRoot />
      <Footer />
      <Header />
    </div>
  );
};

export default Frame;

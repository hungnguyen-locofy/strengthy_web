import { FunctionComponent } from "react";

import styles from "./Frame.module.css";
import TSComponent from "../components/TypeComponent";
import Component from "@/components/Component";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <TSComponent />
      <Component />
    </div>
  );
};

export default Frame;

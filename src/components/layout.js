import React from "react";
import * as styles from "./layout.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

import React from "react";

import logo from "../Assets/damogo-logo.svg";

export default function Navbar() {
  const styles = {
    navbar: {
      fontSize: 15,
      display: "flex",
      margin: "20px 80px",
      justifyContent: "space-between",
    },
    titleContainer: {
      display: "flex",
    },
    title: {
      margin: "0px 15px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.navbar}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div style={styles.titleContainer}>
        <p style={styles.title}>Beranda</p>
        <p style={styles.title}>Restoran</p>
        <p style={styles.title}>Supplier</p>
      </div>
    </div>
  );
}

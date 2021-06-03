import React from "react";

import {
  TitleDamogo,
  TitleSupplier,
  TitleAboutSupplier,
  ImageSupplier,
  ButtonSelengkapnya,
} from "../Components";

export default function Supplier() {
  const styles = {
    supplier: {
      height: "450px",
      display: "flex",
      padding: "10px 80px",
      backgroundColor: "#009673",
    },
    left: {
      textAlign: "left",
      marginTop: "80px",
    },
    title: {
      color: "#ffff",
      marginBottom: "10px",
    },
    button: {
      top: "50px",
      width: "175px",
      textAlign: "center",
      borderRadius: "100px",
      backgroundColor: "#005844",
      boxShadow: "0px 20px 30px -15px #005844",
    },
  };

  return (
    <div style={styles.supplier}>
      <div style={styles.left}>
        <div style={styles.title}>
          <TitleDamogo />
        </div>
        <TitleSupplier />
        <TitleAboutSupplier />
        <ButtonSelengkapnya />
      </div>
      <ImageSupplier />
    </div>
  );
}

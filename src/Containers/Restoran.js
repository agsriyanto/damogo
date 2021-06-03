import React from "react";

import {
  ImageRestoran,
  TitleDamogo,
  TitleRestoran,
  TitleAboutRestoran,
  ButtonPelajari,
} from "../Components";

export default function Restoran() {
  const styles = {
    restoran: {
      backgroundColor: "#00A3F4",
      height: "450px",
    },
    right: {
      left: "42%",
      textAlign: "left",
      position: "absolute",
    },
    title: {
      color: "#ffff",
      paddingTop: "80px",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.restoran}>
      <div>
        <ImageRestoran />
      </div>
      <div style={styles.right}>
        <div style={styles.title}>
          <TitleDamogo />
        </div>
        <TitleRestoran />
        <TitleAboutRestoran />
        <ButtonPelajari />
      </div>
    </div>
  );
}

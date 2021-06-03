import React from "react";

import { TitleDamogo, TitleKerjasama, ImageKerjasama } from "../Components";

export default function Kerjasama() {
  const styles = {
    kerjasama: {
      margin: "30px 80px",
      marginTop: "50px",
    },
    title: {
      color: "#00A3F4",
      margin: "10px",
    },
  };

  return (
    <div style={styles.kerjasama}>
      <div style={styles.title}>
        <TitleDamogo />
      </div>
      <TitleKerjasama />
      <ImageKerjasama />
    </div>
  );
}

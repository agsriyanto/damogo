import React from "react";

import image from "../Assets/damogo4.png";

export default function ImageSupplier() {
  const styles = {
    imageRestoran: {
      position: "relative",
    },
    ellipse: {
      top: "260px",
      left: "200px",
      height: "200px",
      width: "400px",
      position: "absolute",
      backgroundColor: "#005844",
      borderRadius: "1000px 1000px 0px 0px",
    },
    image: {
      top: "90px",
      left: "270px",
      height: "370px",
      position: "absolute",
    },
  };

  return (
    <div style={styles.imageRestoran}>
      <div style={styles.ellipse}></div>
      <img src={image} alt={image} style={styles.image} />
    </div>
  );
}

import React from "react";

import image from "../Assets/damogo3.png";

export default function ImageRestoran() {
  const styles = {
    imageRestoran: {
      position: "relative",
    },
    ellipse: {
      top: "250px",
      left: "80px",
      height: "200px",
      width: "400px",
      borderRadius: "1000px 1000px 0px 0px",
      backgroundColor: "#005179",
      position: "absolute",
    },
    image: {
      top: "80px",
      left: "150px",
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

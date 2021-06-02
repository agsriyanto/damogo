import React from "react";

import image from "../Assets/damogo2.png";

export default function ImageDemo() {
  const styles = {
    demo: {
      height: "500px",
      paddingTop: "80px",
      position: "relative",
    },
    round1: {
      width: "370px",
      height: "370px",
      borderRadius: "100%",
      position: "absolute",
      border: "2px solid #9BDDFF",
    },
    round2: {
      margin: "25px",
      width: "320px",
      height: "320px",
      borderRadius: "100%",
      position: "absolute",
      border: "2px solid #DFF4FF",
    },
    round3: {
      margin: "25px",
      width: "270px",
      height: "270px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#DFF4FF",
    },
    image: {
      top: "7%",
      left: "76px",
      height: "450px",
      position: "absolute",
      boxShadow: "0px 50px 40px -25px rgba(0, 0, 0, 0.15)",
    },
    ellipse1: {
      top: "38.5%",
      height: "10px",
      width: "10px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#00A3F4",
    },
    ellipse2: {
      top: "67%",
      left: "45px",
      height: "10px",
      width: "10px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#00A3F4",
    },
    ellipse3: {
      top: "27%",
      left: "335px",
      height: "10px",
      width: "10px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#00A3F4",
    },
    ellipse4: {
      top: "55%",
      left: "359px",
      height: "10px",
      width: "10px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#00A3F4",
    },
  };

  return (
    <div style={styles.demo}>
      <div style={styles.round1}>
        <div style={styles.round2}>
          <div style={styles.round3}></div>
        </div>
      </div>
      <img src={image} alt={image} style={styles.image} />
      <div style={styles.ellipse1}></div>
      <div style={styles.ellipse2}></div>
      <div style={styles.ellipse3}></div>
      <div style={styles.ellipse4}></div>
    </div>
  );
}

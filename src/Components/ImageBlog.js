import React from "react";

import image from "../Assets/damogo5.png";

export default function ImageBlog() {
  const styles = {
    blog: {
      alignItems: "right",
      position: "relative",
    },
    rectangle: {
      background:
        "linear-gradient(270deg, rgba(223, 244, 255, 0) 0%, #FFBB00 100%)",
      boxShadow: "inset 5px 0px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "1000px 0px 0px 1000px",
      height: "448px",
      width: "450px",
    },
    image: {
      width: "350px",
      marginTop: "11.5%",
      marginLeft: "11.5%",
      filter: "drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.1))",
    },
    ellipse1: {
      top: "6%",
      left: "49%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
    ellipse2: {
      top: "93%",
      left: "49%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
    ellipse3: {
      top: "50%",
      left: "5%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
    ellipse4: {
      top: "20%",
      left: "16%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
    ellipse5: {
      top: "80%",
      left: "18%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
    ellipse6: {
      top: "20%",
      left: "82%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
    ellipse7: {
      top: "82%",
      left: "80%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
    ellipse8: {
      top: "50%",
      left: "93%",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#ffff",
    },
  };

  return (
    <div style={styles.blog}>
      <div style={styles.rectangle}>
        <div style={styles.ellipse1}></div>
        <div style={styles.ellipse2}></div>
        <div style={styles.ellipse3}></div>
        <div style={styles.ellipse4}></div>
        <div style={styles.ellipse5}></div>
        <div style={styles.ellipse6}></div>
        <div style={styles.ellipse7}></div>
        <div style={styles.ellipse8}></div>
        <img src={image} alt={image} style={styles.image} />
      </div>
    </div>
  );
}

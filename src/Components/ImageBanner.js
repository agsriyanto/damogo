import React from "react";

import fruit from "../Assets/damogo1.png";
import icon1 from "../Assets/icon1.svg";
import icon2 from "../Assets/icon2.svg";
import icon3 from "../Assets/icon3.svg";
import icon4 from "../Assets/icon4.svg";

export default function ImageBanner() {
  const styles = {
    imageBanner: {
      height: "500px",
      paddingTop: "30px",
      marginTop: "120px",
      position: "relative",
    },
    ractangle: {
      width: "550px",
      height: "320px",
      marginTop: "70px",
      alignItems: "center",
      backgroundColor: "#DFF4FF",
      borderRadius: "100px 0px 0px 0px",
    },
    round1: {
      width: "370px",
      height: "370px",
      marginLeft: "16%",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#00A3F4",
    },
    round2: {
      margin: "25px",
      width: "320px",
      height: "320px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#FFBB00",
    },
    round3: {
      margin: "25px",
      width: "270px",
      height: "270px",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#249673",
    },
    imageFruit: {
      top: "15%",
      left: "12%",
      width: "410px",
      height: "260px",
      position: "absolute",
      filter: "drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.5))",
    },
    ellipse1: {
      top: "25%",
      left: "70px",
      width: "15px",
      height: "15px",
      filter: "blur(4px)",
      position: "absolute",
      backgroundColor: "#00A3F4",
    },
    ellipse2: {
      top: "68%",
      left: "130px",
      width: "10px",
      height: "10px",
      filter: "blur(3px)",
      position: "absolute",
      backgroundColor: "#249673",
    },
    ellipse3: {
      top: "45%",
      left: "470px",
      width: "13px",
      height: "13px",
      filter: "blur(4px)",
      position: "absolute",
      backgroundColor: "#FFBB00",
    },
    icon1: {
      top: "3.5%",
      left: "43%",
      width: "60px",
      height: "60px",
      borderRadius: "100%",
      alignItems: "center",
      position: "absolute",
      backdropFilter: "blur(1px)",
      boxShadow: "inset 0px 0px 4px #FFFFFF",
      backgroundColor: "rgba(0, 163, 244, 0.2)",
    },
    icon2: {
      top: "38%",
      left: "13%",
      width: "60px",
      height: "60px",
      borderRadius: "100%",
      alignItems: "center",
      position: "absolute",
      backdropFilter: "blur(1px)",
      boxShadow: "inset 0px 0px 4px #FFFFFF",
      backgroundColor: "rgba(0, 163, 244, 0.2)",
    },
    icon3: {
      top: "57%",
      left: "65%",
      width: "80px",
      height: "80px",
      borderRadius: "25px",
      alignItems: "center",
      position: "absolute",
      backdropFilter: "blur(1px)",
      boxShadow: "inset 0px 0px 4px #FFFFFF",
      backgroundColor: "rgba(0, 163, 244, 0.2)",
    },
    iconWA: {
      top: "75%",
      left: "85%",
      width: "45px",
      height: "45px",
      cursor: "pointer",
      borderRadius: "100%",
      position: "absolute",
      backgroundColor: "#3AE058",
    },
  };

  return (
    <div style={styles.imageBanner}>
      <div style={styles.round1}>
        <div style={styles.round2}>
          <div style={styles.round3}></div>
        </div>
      </div>
      <div style={styles.ellipse1}></div>
      <div style={styles.ellipse2}></div>
      <div style={styles.ellipse3}></div>
      <img src={fruit} alt={fruit} style={styles.imageFruit} />
      <div style={styles.iconWA}>
        <img
          src={icon4}
          alt={icon4}
          style={{ height: "22px", paddingTop: "12px" }}
        />
      </div>
      <div style={styles.icon1}>
        <img
          src={icon1}
          alt={icon1}
          style={{ height: 30, paddingTop: "13px" }}
        />
      </div>
      <div style={styles.icon2}>
        <img
          src={icon2}
          alt={icon2}
          style={{ height: 23, paddingTop: "17px" }}
        />
      </div>
      <div style={styles.icon3}>
        <img
          src={icon3}
          alt={icon3}
          style={{ height: 30, paddingTop: "24px" }}
        />
      </div>
      <div style={styles.ractangle}></div>
    </div>
  );
}

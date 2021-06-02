import React from "react";

import icon from "../Assets/icon5.svg";

export default function ButtonDemo() {
  const styles = {
    button: {
      width: "165px",
      height: "40px",
      color: "white",
      border: "none",
      fontSize: "15px",
      cursor: "pointer",
      marginTop: "22px",
      marginLeft: "165px",
      borderRadius: "100px",
      backgroundColor: "#00A3F4",
      boxShadow: "0px 20px 30px -15px rgba(0, 163, 244, 0.7)",
    },
  };

  return (
    <div style={{ alignItems: "center" }}>
      <button style={styles.button}>
        Lihat demo
        <img
          src={icon}
          alt={icon}
          style={{ height: "18px", paddingLeft: "5px" }}
        />
      </button>
    </div>
  );
}

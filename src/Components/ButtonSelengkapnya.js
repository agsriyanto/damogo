import React from "react";

export default function ButtonSelengkapnya() {
  const styles = {
    button: {
      width: "165px",
      height: "40px",
      color: "white",
      border: "none",
      fontSize: "13px",
      cursor: "pointer",
      marginTop: "20px",
      borderRadius: "100px",
      backgroundColor: "#005844",
      boxShadow: "0px 20px 30px -15px #005844",
    },
  };

  return (
    <div style={{ alignItems: "left" }}>
      <button style={styles.button}>Pelajari Selengkapnya</button>
    </div>
  );
}

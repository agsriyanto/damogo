import React from "react";

export default function ButtonBertemu() {
  const styles = {
    button: {
      width: "165px",
      height: "40px",
      color: "#00A3F4",
      fontSize: "15px",
      cursor: "pointer",
      marginLeft: "20px",
      borderRadius: "100px",
      backgroundColor: "#ffff",
      border: "solid 1px #00A3F4",
    },
  };

  return (
    <div>
      <button style={styles.button}>Bertemu tim kami</button>
    </div>
  );
}

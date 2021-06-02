import React from "react";

export default function ButtonBuatJanji() {
  const styles = {
    button: {
      width: "165px",
      height: "40px",
      color: "white",
      border: "none",
      fontSize: "15px",
      cursor: "pointer",
      borderRadius: "100px",
      backgroundColor: "#00A3F4",
      boxShadow: "0px 20px 30px -15px rgba(0, 163, 244, 0.7)",
    },
  };

  return (
    <div>
      <button style={styles.button}>Buat janji temu!</button>
    </div>
  );
}

import React from "react";

export default function TitleRestoran() {
  const styles = {
    title: {
      margin: "0px",
      color: "#ffff",
      fontSize: "27px",
      fontWeight: "bold",
    },
  };

  return (
    <div>
      <p style={styles.title}>Untuk Restoran</p>
    </div>
  );
}

import React from "react";

export default function TitleSupplier() {
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
      <p style={styles.title}>Untuk Supplier</p>
    </div>
  );
}

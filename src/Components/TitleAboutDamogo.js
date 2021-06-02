import React from "react";

export default function TitleAboutDamogo() {
  const styles = {
    title: {
      width: "500px",
      marginTop: "120px",
      marginLeft: "500px",
      textAlign: "justify",
    },
    span: {
      color: "#00A3F4",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.title}>
      <p>
        <span style={styles.span}>DamoGo</span> adalah sistem yang membantu
        proses pengadaan bahan makanan lebih mudah dan efisien!
      </p>
      <p>
        Atur semua pesanan dari supplier maupun bahan dari kamu ke franchise
        secara online.
      </p>
    </div>
  );
}

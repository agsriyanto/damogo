import React from "react";

export default function DescriptionCaraSimpan() {
  const styles = {
    title: {
      width: "500px",
      textAlign: "justify",
    },
    span: {
      color: "#FFBB00",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.title}>
      <p>
        Sudah banyak orang yang tahu jika menyimpan daging dalam freezer menjadi
        cara mudah menyimpan stok daging supaya awet dan tahan lama. Tapi
        bagaimana ya jika tidak memiliki kulkas atau freezer? Tenang! Ada kok
        caranya, <span style={styles.span}>yuk disimak!</span>
      </p>
    </div>
  );
}

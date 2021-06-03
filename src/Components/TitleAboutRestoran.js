import React from "react";

export default function TitleAboutRestoran() {
  const styles = {
    title: {
      width: "500px",
      color: "#ffff",
      marginTop: "45px",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.title}>
      <p>
        Aplikasi gratis kami adalah cara paling efisien untuk memesan dari semua
        pemasok Anda. Selesaikan pesanan lebih cepat, tidur lebih awal.
      </p>
    </div>
  );
}

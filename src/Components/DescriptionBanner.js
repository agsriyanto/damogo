import React from "react";

export default function DescriptionBanner() {
  const styles = {
    description: {
      width: 500,
      textAlign: "left",
      color: "#5A5A5A",
    },
  };

  return (
    <div style={styles.description}>
      <p>
        Selamatkan makanan lezat, makanan tidak terjual dari restaurant
        favoritmu, toko, dan pertanian agar tidak terbuang sia-sia serta
        dapatkan harga hemat hingga 90% dari harga reguler!
      </p>
    </div>
  );
}

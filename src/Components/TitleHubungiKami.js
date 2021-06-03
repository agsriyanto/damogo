import React from "react";

export default function TitleHubungiKami() {
  const styles = {
    hubungiKami: {
      fontSize: "13px",
    },
    headTitle: {
      fontWeight: "bold",
      marginTop: "50px",
    },
    title: {
      margin: "0px",
    },
    titleBold: {
      margin: "0px",
      fontWeight: "bold",
    },
    jamBuka: {
      marginTop: "15px",
    },
  };

  return (
    <div style={styles.hubungiKami}>
      <p style={styles.headTitle}>Hubungi Kami</p>
      <div>
        <p style={styles.titleBold}>Alamat</p>
        <div>
          <p style={styles.title}>Jl. Prof. Herman Yohanes No.1212,</p>
          <p style={styles.title}>
            Terban, Kec. Gondokusuman, Kota Yogyakarta,
          </p>
          <p style={styles.title}>Daerah Istimewa Yogyakarta 55223</p>
        </div>
      </div>
      <div style={styles.jamBuka}>
        <p style={styles.titleBold}>Jam buka</p>
        <div>
          <p style={styles.title}>Mon - Fri 6:00 am - 8:00 pm</p>
          <p style={styles.title}>Sat & Sun 9:30 am - 6:00 pm</p>
        </div>
      </div>
    </div>
  );
}

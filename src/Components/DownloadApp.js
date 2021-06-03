import React from "react";

import appStore from "../Assets/app-store.png";
import googlePlay from "../Assets/google-play.png";

export default function DownloadApp() {
  const styles = {
    headTitle: {
      fontSize: "13px",
      marginTop: "50px",
      fontWeight: "bold",
    },
    logo: {
      display: "flex",
      marginTop: "30px",
    },
    logos: {
      width: "150px",
      cursor: "pointer",
      marginRight: "20px",
    },
  };

  return (
    <div>
      <p style={styles.headTitle}>Download DamoGO App</p>
      <div style={styles.logo}>
        <img src={googlePlay} alt={googlePlay} style={styles.logos} />
        <img src={appStore} alt={appStore} style={styles.logos} />
      </div>
    </div>
  );
}

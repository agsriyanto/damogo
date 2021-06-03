import React from "react";

import logo from "../Assets/damogo-logo.svg";
import { TitleIkutiKami, TitleHubungiKami, DownloadApp } from "../Components";

export default function Footer() {
  const styles = {
    footer: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "left",
      margin: "60px 80px",
    },
    title: {
      width: "600px",
      display: "flex",
      justifyContent: "space-between",
    },
    right: {
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.footer}>
      <div>
        <img src={logo} alt={logo} />
        <div style={styles.title}>
          <div>
            <TitleIkutiKami />
          </div>
          <div>
            <TitleHubungiKami />
          </div>
        </div>
      </div>
      <div style={styles.right}>
        <DownloadApp />
      </div>
    </div>
  );
}

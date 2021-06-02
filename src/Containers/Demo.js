import React from "react";

import {
  TitleDamogo,
  TitleDemoAplikasi,
  ImageDemo,
  TitleAboutDamogo,
  ButtonDemo,
} from "../Components";

export default function Demo() {
  const styles = {
    title: {
      color: "#00A3F4",
      margin: "10px",
    },
    demo: {
      margin: "30px 80px",
      marginTop: "100px",
      position: "absolute",
    },
    content: {
      display: "flex",
    },
    // ellipseBlur: {
    //   backgroundColor: "#DFF4FF",
    //   height: "500px",
    //   width: "500px",
    //   position: "absolute",
    //   marginLeft: "60%",
    // },
  };

  return (
    <div style={styles.demo}>
      {/* <div style={styles.ellipseBlur}></div> */}
      <div style={styles.title}>
        <TitleDamogo />
      </div>
      <TitleDemoAplikasi />
      <div style={styles.content}>
        <ImageDemo />
        <div>
          <TitleAboutDamogo />
          <ButtonDemo />
        </div>
      </div>
    </div>
  );
}

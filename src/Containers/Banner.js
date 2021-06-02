import React from "react";

import {
  TitleBanner,
  DescriptionBanner,
  ButtonBuatJanji,
  ButtonBertemu,
  ImageBanner,
} from "../Components";

export default function Banner() {
  const styles = {
    banner: {
      justifyContent: "space-between",
      alignItems: "center",
      margin: "30px 80px",
      display: "flex",
      height: "370px",
      marginRight: 0,
    },
    bannerLeft: {
      display: "flex",
      marginTop: "35px",
    },
  };

  return (
    <div style={styles.banner}>
      <div>
        <TitleBanner />
        <DescriptionBanner />
        <div style={styles.bannerLeft}>
          <ButtonBuatJanji />
          <ButtonBertemu />
        </div>
      </div>
      <div>
        <ImageBanner />
      </div>
    </div>
  );
}

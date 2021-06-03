import React from "react";

import {
  TitleBlog,
  TitleCaraMenyimpan,
  DescriptionCaraSimpan,
  ButtonBaca,
  ImageBlog,
} from "../Components";

export default function Blog() {
  const styles = {
    blog: {
      margin: "10px 80px",
      marginRight: "0px",
      display: "flex",
      justifyContent: "space-between",
      textAlign: "left",
      alignItems: "center",
      background:
        "linear-gradient(270deg, #FFBB00 0%, rgba(223, 244, 255, 0) 100%)",
    },
  };

  return (
    <div style={styles.blog}>
      <div>
        <TitleBlog />
        <TitleCaraMenyimpan />
        <DescriptionCaraSimpan />
        <ButtonBaca />
      </div>
      <div>
        <ImageBlog />
      </div>
    </div>
  );
}

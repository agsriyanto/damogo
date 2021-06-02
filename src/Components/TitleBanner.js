import React from "react";

export default function TitleBanner() {
  const styles = {
    title: {
      fontSize: "55px",
      textAlign: "left",
      fontWeight: "bold",
      width: 500,
      margin: 0,
    },
    span: {
      color: "#249673",
    },
  };

  return (
    <div>
      <p style={styles.title}>
        Create taste, <br />
        not <span style={styles.span}>waste</span>
      </p>
    </div>
  );
}

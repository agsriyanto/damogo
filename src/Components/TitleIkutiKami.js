import React from "react";

export default function TitleIkutiKami() {
  const styles = {
    ikutiKami: {
      fontSize: "13px",
    },
    headTitle: {
      fontWeight: "bold",
      marginTop: "50px",
    },
    title: {
      margin: "0px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.ikutiKami}>
      <p style={styles.headTitle}>Ikuti Kami</p>
      <div>
        <p style={styles.title}>Terms of Use</p>
        <p style={styles.title}>Privaci</p>
        <p style={styles.title}>Careers</p>
        <p style={styles.title}>About</p>
        <p style={styles.title}>CA Supply Chains Act</p>
        <p style={styles.title}>Sustainabillity</p>
        <p style={styles.title}>Affilliates</p>
        <p style={styles.title}>Recal Info</p>
        <p style={styles.title}>Inclusion and Diversity</p>
      </div>
    </div>
  );
}

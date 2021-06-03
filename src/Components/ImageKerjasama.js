import React from "react";

import logoAlfamidi from "../Assets/Logo_Alfamidi.png";
import logoPlaza from "../Assets/Plaza_Ambarrukmo.png";
import logoPenyetan from "../Assets/Logo_Penyetan.png";
import logoHakata from "../Assets/Logo_Hakata.png";

export default function ImageKerjasama() {
  function MouseOver(event) {
    event.target.style.filter = "grayscale(100%)";
  }
  function MouseOut(event) {
    event.target.style.filter = "";
  }

  const styles = {
    image: {
      display: "flex",
      margin: "100px",
      marginTop: "50px",
      justifyContent: "space-between",
    },
    alfamidi: {
      height: "100px",
      cursor: "pointer",
    },
    plaza: {
      height: "100px",
      cursor: "pointer",
    },
    penyetan: {
      height: "100px",
      cursor: "pointer",
    },
    royal: {
      height: "100px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.image}>
      <img
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        src={logoAlfamidi}
        alt={logoAlfamidi}
        style={styles.alfamidi}
      />
      <img
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        src={logoPlaza}
        alt={logoPlaza}
        style={styles.plaza}
      />
      <img
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        src={logoPenyetan}
        alt={logoPenyetan}
        style={styles.penyetan}
      />
      <img
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        src={logoHakata}
        alt={logoHakata}
        style={styles.royal}
      />
    </div>
  );
}

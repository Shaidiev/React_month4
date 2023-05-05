import React from "react";
import Card from "../Text/Text";
import styles from "./Main.module.css";

function Func() {
  return (
    <div className={styles.mainStyle}>
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5YlREn9at-IVZ_b2C-2WkuBTytLIktNFB0YiwzSYHiXDlg2Aa7Tc6oqqaRab-EvWUKM&usqp=CAU"
        imageAlt="Example Image"
        title="Real Madrid"
        description="Lorem ipsum dolor sit amet"
        buttonText="Learn More"
      />
      <Card
        imageUrl="https://upload.wikimedia.org/wikipedia/ru/3/3d/FC_Paris_Saint-Germain_Logo.png"
        imageAlt="Example Image"
        title="PSG"
        description="Paris Saint-Germain"
        buttonText="Learn More"
      />
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5YlREn9at-IVZ_b2C-2WkuBTytLIktNFB0YiwzSYHiXDlg2Aa7Tc6oqqaRab-EvWUKM&usqp=CAU"
        imageAlt="Example Image"
        title="Real Madrid"
        description="Lorem ipsum dolor sit amet"
        buttonText="Learn More"
      />
    </div>
  );
}

export default Func;

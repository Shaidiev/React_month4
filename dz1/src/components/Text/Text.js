import React from "react";
import styles from "./Text.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <p className={styles.cardText}>{props.description}</p>
        <button className={styles.cardButton}>{props.buttonText}</button>
      </div>
    </div>
  );
}

export default Card;

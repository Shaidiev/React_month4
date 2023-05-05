import React from "react";
import styles from "./Header.module.css";

const headerElements = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <div className={styles.header}>
      {headerElements.map((element) => (
        <a href={element.link} className={styles.link}>
          {element.text}
        </a>
      ))}
    </div>
  );
};

export default Header;

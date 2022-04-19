import React from "react";
import styles from './error.module.css';

const Error = () => {
  return (
    <div className={styles.boardError}>
      <h1 className={styles.boardErrorTitle}>404</h1>
      <p className={styles.boardErrorText}>К сожалению, <br /> такой страницы не существует</p>
    </div>
  )
}

export default Error;
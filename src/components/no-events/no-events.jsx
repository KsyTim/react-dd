import React from "react";
import styles from './no-events.module.css';
import { AppRoute } from "../../const";

const NoEvents = (currPage) => {
  const { page } = currPage;
  return (
    <div className={`board__no-events ${styles.noEventsText}`}>{page === AppRoute.ARCHIVE ? 'Нет ни одного события. Пожалуйста, перейдите на главную страницу или кликните по вкладке "События"' : 'Нет ни одного события. Нажмите "Создать"'}</div>
  )
}

export default NoEvents;
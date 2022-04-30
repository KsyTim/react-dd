import React from "react";
import styles from './no-events.module.css';
import { AppRoute } from "../../const";
import { useLocation } from 'react-router-dom';

const NoEvents = () => {
  const { pathname } = useLocation();
  return (
    <div className={`board__no-events ${styles.noEventsText}`}>{pathname === AppRoute.ARCHIVE ? 'Нет ни одного события. Пожалуйста, перейдите на главную страницу или кликните по вкладке "События"' : 'Нет ни одного события. Нажмите "Создать"'}</div>
  )
}

export default NoEvents;
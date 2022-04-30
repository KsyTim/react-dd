import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { events } from "../../store";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { AppRoute } from "../../const";
import styles from './archive.module.css';

const Archive = observer(() => {
  const {archiveEvents} = events;
  const { pathname } = useLocation();
  const clearArchive = (e) => {
    e.preventDefault();
    archiveEvents.forEach(archiveEvent => events.deleteEvent(archiveEvent._id))
  }
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Board events={archiveEvents}/>
        {(pathname === AppRoute.ARCHIVE && archiveEvents.length) && 
          <button 
            className={styles['clear-archive']} 
            onClick={clearArchive}
          >
            Очистить архив
          </button>}
      </section>
    </>
  )
})

export default Archive;
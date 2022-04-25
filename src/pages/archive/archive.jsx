import React from "react";
import { useHistory } from "react-router-dom";
import Board from "../../components/board/board";
import Header from "../../components/header/header";
import { events } from "../../store";
import { observer } from "mobx-react-lite";

const Archive = observer(() => {
  const hist = useHistory();
  const path = hist.location.pathname
  const {archiveEvents} = events;

  return (
    <>
      <Header page={path} />
      <section className="main__wrapper">
        <Board page={path} events={archiveEvents}/>
      </section>
    </>
  )
})

export default Archive;
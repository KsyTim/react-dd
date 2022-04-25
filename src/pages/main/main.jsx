import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { useHistory } from "react-router-dom";
import { events } from "../../store/index";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  const hist = useHistory();
  const path = hist.location.pathname;
  const {notArchiveEvents} = events;
  return (
    <>
      <Header page={path}/>
      <section className="main__wrapper">
        <Filter page={path}/>
        <Board page={path} events={notArchiveEvents} /> 
      </section>
    </>      
  )
})

export default Main;
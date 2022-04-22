import React from "react";
import { useHistory } from "react-router-dom";
import Board from "../../components/board/board";
import Header from "../../components/header/header";

const Archive = ({events}) => {
  const hist = useHistory();
  const path = hist.location.pathname
  return (
    <>
      <Header page={path} />
      <section className="main__wrapper">
        <Board page={path} events={events}/>
      </section>
    </>
  )
}

export default Archive;